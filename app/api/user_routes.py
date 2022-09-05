from datetime import datetime
import profile
from flask import Blueprint, request
from flask_login import login_required, login_user
from app.models import User, db, Conversation
from app.forms.profile_form import ProfileForm
from app.forms.signup_form import SignUpForm
from app.s3_helpers import allowed_file, get_unique_filename, upload_file_to_s3
from .utils import validation_errors_to_error_messages
from sqlalchemy import or_
from sqlalchemy.orm import aliased

user_routes = Blueprint('users', __name__)


@user_routes.route('')
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        user = User(
            username=data['username'],
            email=data['email'],
            password=data['password'],
            header=data['header'],
            profile_pic=data['profile_pic'],
            display_name=data['display_name'],
            bio=data['bio'],
            location=data['location'],
            birthday=datetime.now(),
            joined=datetime.now()
        )

        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@user_routes.route('/edit/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    user = User.query.get(user_id)
    form = ProfileForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        if 'profile_pic' in request.files:
            profile_pic = request.files["profile_pic"]

            if not allowed_file(profile_pic.filename):
                return {"errors": "file type not permitted"}, 400

            profile_pic.filename = get_unique_filename(profile_pic.filename)

            upload = upload_file_to_s3(profile_pic)

            if "url" not in upload:
                return upload, 400

            profile_pic = upload['url']
        else:
            profile_pic = user.profile_pic

        if 'header' in request.files:
            header = request.files["header"]

            if not allowed_file(header.filename):
                return {"errors": "file type not permitted"}, 400

            header.filename = get_unique_filename(header.filename)

            upload = upload_file_to_s3(header)

            if "url" not in upload:
                return upload, 400

            header = upload['url']
        else:
            header = user.header

        user.username = data['username']
        user.email = data['email']
        user.header = header
        # user.profile_pic = data['profile_pic']
        user.profile_pic = profile_pic
        user.display_name = data['display_name']
        user.bio = data['bio']
        user.location = data['location']
        user.birthday = data['birthday']
        user.joined = datetime.now()

        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@login_required
# When using parameters, Flask allows you to specify
# the type of data you expect to receive.
@user_routes.route('/<int:id>/conversations', methods=["GET"])
def user_conversations(id):
    # To reference the same table more than once, the table
    # must be aliased
    user_alias1 = aliased(User)
    user_alias2 = aliased(User)
    # To add a filter to a join query, you must use join rather than
    # joinedload. Joinedload data is transparent and cannot be altered,
    # but join data can.
    conversations = Conversation.query.\
        join(user_alias1, Conversation.creator).\
        join(user_alias2, Conversation.participant).\
        filter(or_(Conversation.creator_id == id,
               Conversation.participant_id == id))

    return {conversation.id: conversation.to_dict(creator=conversation.creator, participant=conversation.participant) for conversation in conversations}

from datetime import datetime
from flask import Blueprint, request
from flask_login import login_required, login_user
from app.models import User, db
from app.forms.profile_form import ProfileForm
from app.forms.signup_form import SignUpForm
from .utils import validation_errors_to_error_messages

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
    print("THIS IS A PRINT IN THE PUT ROUTE----------")
    user = User.query.get(user_id)
    form = ProfileForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    print(">>>>>>>>>>>>>", data)
    print("THIS IS THE USER ->>>>>>>>>>", user)

    if form.validate_on_submit():
        print('AHHHHHHHHHHHHHH')

        user.username = data['username']
        user.email = data['email']
        user.header = data['header']
        user.profile_pic = data['profile_pic']
        user.display_name = data['display_name']
        user.bio = data['bio']
        user.location = data['location']
        user.birthday = data['birthday']
        user.joined = datetime.now()

        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

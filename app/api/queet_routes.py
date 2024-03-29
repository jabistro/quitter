from datetime import datetime
from distutils.command.upload import upload
from turtle import up
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Queet, db
from app.forms.queet_form import QueetForm
from app.s3_helpers import get_unique_filename, upload_file_to_s3
from .utils import validation_errors_to_error_messages

queet_routes = Blueprint('queets', __name__)


# Route provides all available queets
@queet_routes.route('')
def all_queets():
    queets = Queet.query.all()
    return {queet.id: queet.to_dict() for queet in queets}


# Route retrieves a single queet
@queet_routes.route('/<int:queet_id>')
@login_required
def single_queet(queet_id):
    queet = Queet.query.get(queet_id)
    if queet:
        return queet.to_dict()
    else:
        return 'Queet not found'


# Route creates a new queet for user
@queet_routes.route('/new', methods=['POST'])
@login_required
def new_queet():
    form = QueetForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if "image_url" in request.files:
            image_url = request.files["image_url"]

            image_url.filename = get_unique_filename(image_url.filename)

            upload = upload_file_to_s3(image_url)

            if "url" not in upload:

                return upload, 400

            image_url = upload["url"]

        else:
            image_url = None

        new_queet = Queet(
            user_id=current_user.to_dict()['id'],
            content=data['content'],
            image_url=image_url,
            created_at=datetime.now(),
            updated_at=datetime.now()
        )


        db.session.add(new_queet)
        db.session.commit()
        return new_queet.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Route updates a queet for user
@queet_routes.route('/edit/<int:queet_id>', methods=['PUT'])
@login_required
def update_queet(queet_id):
    queet = Queet.query.get(queet_id)
    form = QueetForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if "image_url" in request.files:
            image_url = request.files["image_url"]

            image_url.filename = get_unique_filename(image_url.filename)

            upload = upload_file_to_s3(image_url)

            if "url" not in upload:

                return upload, 400

            image_url = upload["url"]

        else:
            image_url = None

        queet.content = data['content']
        queet.image_url = image_url
        queet.created_at = datetime.now()
        queet.updated_at = datetime.now()

        db.session.commit()
        return queet.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Route deletes a queet for a user
@queet_routes.route('/<int:queet_id>', methods=['DELETE'])
@login_required
def delete_queet(queet_id):
    queet = Queet.query.get(queet_id)
    db.session.delete(queet)
    db.session.commit()
    return "queet has been deleted"

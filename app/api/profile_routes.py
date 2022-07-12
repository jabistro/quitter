# from datetime import datetime
# from flask import Blueprint, request
# from flask_login import login_required, current_user
# from app.models import Profile, db
# from app.forms.profile_form import ProfileForm
# from .utils import validation_errors_to_error_messages

# profile_routes = Blueprint('profiles', __name__)


# # Route provides all available profiles
# @profile_routes.route('')
# def all_profiles():
#     profiles = Profile.query.all()
#     return {profile.id: profile.to_dict() for profile in profiles}


# # Route retrieves a single profile
# @profile_routes.route('/<int:profile_id>')
# @login_required
# def single_profile(profile_id):
#     profile = Profile.query.get(profile_id)
#     if profile:
#         return profile.to_dict()
#     else:
#         return 'Profile not found'


# # Route creates a new profile for user
# @profile_routes.route('/new', methods=['POST'])
# @login_required
# def new_profile():
#     form = ProfileForm()
#     data = form.data
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         new_profile = Profile(
#             user_id=current_user.to_dict()['id'],
#             header=data['header'],
#             profile_pic=data['profile_pic'],
#             display_name=data['display_name'],
#             bio=data['bio'],
#             location=data['location'],
#             birthday=data['birthday'],
#             created_at=datetime.now(),
#         )

#         db.session.add(new_profile)
#         db.session.commit()
#         return new_profile.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# # Route updates a profile for user
# @profile_routes.route('/edit/<int:profile_id>', methods=['PUT'])
# @login_required
# def update_profile(profile_id):
#     profile = Profile.query.get(profile_id)
#     form = ProfileForm()
#     data = form.data
#     form['csrf_token'].data = request.cookies['csrf_token']

#     if form.validate_on_submit():
#         profile.header = data['header'],
#         profile.profile_pic = data['profile_pic'],
#         profile.display_name = data['display_name'],
#         profile.bio = data['bio'],
#         profile.location = data['location'],
#         profile.birthday = data['birthday'],
#         profile.created_at = datetime.now()

#         db.session.commit()
#         return profile.to_dict()
#     return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# # Route deletes a profile for a user
# @profile_routes.route('/<int:profile_id>', methods=['DELETE'])
# @login_required
# def delete_profile(profile_id):
#     profile = Profile.query.get(profile_id)
#     db.session.delete(profile)
#     db.session.commit()
#     return "profile has been deleted"

from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Comment, db
from app.forms.comment_form import CommentForm
from .utils import validation_errors_to_error_messages

comment_routes = Blueprint('comments', __name__)


# Route provides all available queets
@comment_routes.route('')
def all_comments():
    comments = Comment.query.all()
    return {comment.id: comment.to_dict() for comment in comments}


# Route creates a new queet for user
@comment_routes.route('/<int:queet_id>/new', methods=['POST'])
@login_required
def new_comment(queet_id):
    form = CommentForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_comment = Comment(
            user_id=current_user.to_dict()['id'],
            content=data['content'],
            queet_id=queet_id
        )

        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Route updates a queet for user
@comment_routes.route('/<int:comment_id>', methods=['PUT'])
@login_required
def update_comment(comment_id):
    comment = Comment.query.get(comment_id)
    form = CommentForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment.content = data['content']

        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Route deletes a queet for a user
@comment_routes.route('/<int:comment_id>', methods=['DELETE'])
@login_required
def delete_comment(comment_id):
    comment = Comment.query.get(comment_id)
    db.session.delete(comment)
    db.session.commit()
    return comment.to_dict()

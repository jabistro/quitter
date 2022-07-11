from datetime import datetime
from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Comment, db
from app.forms.comment_form import CommentForm
from .utils import validation_errors_to_error_messages

comment_routes = Blueprint('comments', __name__)


# Route provides all available comments
@comment_routes.route('')
def all_comments():
    comments = Comment.query.all()
    return {comment.id: comment.to_dict() for comment in comments}


# Route creates a new comment for user
@comment_routes.route('/new', methods=['POST'])
@login_required
def new_comment():
    form = CommentForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_comment = Comment(
            user_id=current_user.to_dict()['id'],
            content=data['content'],
            queet_id=request.json['queet_id'],
            created_at=datetime.now(),
            updated_at=datetime.now()
        )

        # print(new_comment)

        db.session.add(new_comment)
        db.session.commit()
        return new_comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Route updates a comment for user
@comment_routes.route('/edit/<int:comment_id>', methods=['PUT'])
@login_required
def update_comment(comment_id):
    comment = Comment.query.get(comment_id)
    form = CommentForm()
    data = form.data
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        comment.content = data['content'],
        comment.created_at = datetime.now(),
        comment.updated_at = datetime.now()

        db.session.commit()
        return comment.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# Route deletes a comment for a user
@comment_routes.route('/<int:comment_id>', methods=['DELETE'])
@login_required
def delete_comment(comment_id):
    comment = Comment.query.get(comment_id)
    db.session.delete(comment)
    db.session.commit()
    return "comment has been deleted"

from sqlalchemy import DateTime
from flask_wtf import FlaskForm
# from flask_login import current_user
from wtforms import StringField
from wtforms.validators import DataRequired, Length
# from app.models import Queet


class CommentForm(FlaskForm):
    content = StringField("Comment", validators=[DataRequired(), Length(min=1, max=280, message="Comment must be between 1 and 280.")])
    created_at = DateTime('Created At')
    updated_at = DateTime('Updated At')

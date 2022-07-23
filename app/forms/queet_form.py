from sqlalchemy import DateTime
from flask_wtf import FlaskForm
# from flask_login import current_user
from wtforms import StringField
from wtforms.validators import DataRequired, Length
# from app.models import Queet


class QueetForm(FlaskForm):
    content = StringField("Queet", validators=[Length(max=280, message="Queet must be between 1 and 280.")])
    created_at = DateTime('Created At')
    updated_at = DateTime('Updated At')

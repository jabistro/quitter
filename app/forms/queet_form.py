from flask_wtf import FlaskForm
# from flask_login import current_user
from wtforms import StringField
from wtforms.validators import DataRequired, Length
# from app.models import Queet


class QueetForm(FlaskForm):
    content = StringField("Queet", validators=[DataRequired(), Length(min=1, max=280, message="Queet must be between 1 and 280.")])

from sqlalchemy import DateTime, String
from flask_wtf import FlaskForm
# from flask_login import current_user
from wtforms import StringField
from wtforms.validators import DataRequired, Length
# from app.models import Queet


class ProfileForm(FlaskForm):
    header = StringField("Header Photo")
    profile_pic = StringField("Profile Picture")
    bio = StringField("Bio", validators=[DataRequired(), Length(min=1, max=160, message="Queet must be between 1 and 160.")])
    name = StringField("Display Name", validators=[DataRequired(), Length(min=1, max=50, message="Queet must be between 1 and 50.")])
    location = StringField("Location")
    birthday = StringField("Birthday")

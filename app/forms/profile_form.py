from sqlalchemy import DateTime
from flask_wtf import FlaskForm
# from flask_login import current_user
from wtforms import StringField
from wtforms.validators import DataRequired, Length, ValidationError
from app.models import User

def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

class ProfileForm(FlaskForm):
    username = StringField("Username", validators=[DataRequired(), Length(min=1, max=50, message="Username must be between 1 and 15."), username_exists])
    email = StringField('Email', validators=[DataRequired(), user_exists])
    header = StringField("Header Photo")
    profile_pic = StringField("Profile Picture")
    display_name = StringField("Display Name", validators=[DataRequired(), Length(min=1, max=50, message="Display name must be between 1 and 50.")])
    bio = StringField("Bio")
    location = StringField("Location")
    birthday = StringField("Birthday")
    joined = DateTime('Joined')

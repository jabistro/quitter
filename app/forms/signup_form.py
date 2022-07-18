
from flask_wtf import FlaskForm
from sqlalchemy import DateTime
from wtforms import StringField, DateField
from wtforms.validators import DataRequired, Length, ValidationError, Email
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


class SignUpForm(FlaskForm):
    display_name = StringField('Display name', validators=[DataRequired("Display name must be between 1 and 50 characters"), Length(min=1, max=50, message="Display name must be between 1 and 50.")])
    username = StringField('Username', validators=[DataRequired("Username must be between 1 and 15 characters"), Length(min=8, max=15, message="Password must be between 1 and 15 characters"), username_exists])
    email = StringField('Email', validators=[DataRequired("Email must be between 1 and 255 characters"), user_exists, Email("Enter a proper email address")])
    password = StringField('Password', validators=[DataRequired("Password must be between 8 and 25 characters"), Length(min=8, max=25, message="Password must be between 8 and 25 characters")])
    header = StringField("Header Photo")
    profile_pic = StringField("Profile Picture")
    bio = StringField("Bio")
    location = StringField("Location")
    birthday = DateField("Birthday")
    joined = DateTime('Created At')

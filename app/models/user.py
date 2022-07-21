from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    header = db.Column(db.String(), nullable=True)
    profile_pic = db.Column(db.String(), nullable=True)
    display_name = db.Column(db.String(50), nullable=False)
    bio = db.Column(db.String(160), nullable=True)
    location = db.Column(db.String(50), nullable=True)
    birthday = db.Column(db.String(50), nullable=True)
    joined = db.Column(db.DateTime)

    queets = db.relationship("Queet", back_populates="users")
    comments = db.relationship("Comment", back_populates="users")
    images = db.relationship("Image", back_populates="users")

    # followers = db.relationship(
    #     "User",
    #     secondary=follows,
    #     primaryjoin=(follows.c.follower_id == id),
    #     secondaryjoin=(follows.c.followed_id == id),
    #     backref=db.backref("following", lazy="dynamic"),
    #     lazy="dynamic"
    # )

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'header': self.header,
            'profile_pic': self.profile_pic,
            'display_name': self.display_name,
            'bio': self.bio,
            'location': self.location,
            'birthday': self.birthday,
            "joined": self.joined
        }

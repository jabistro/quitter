from datetime import datetime
from .db import db

class Queet(db.Model):
    __tablename__ = 'queets'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    content = db.Column(db.String(280), nullable=False)
    image_url = db.Column(db.String(), nullable=True)
    created_at = db.Column(db.DateTime)
    updated_at = db.Column(db.DateTime)

    # Relationships
    users = db.relationship("User", back_populates="queets")
    comments = db.relationship("Comment", back_populates="queets", cascade="all, delete")
    # images = db.relationship("Image", back_populates="queets", cascade="all, delete")


    # Grab all
    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "content": self.content,
            "image_url": self.image_url,
            # "images": [image.to_dict() for image in self.images],
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }

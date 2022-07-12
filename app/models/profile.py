# from .db import db

# class Profile(db.Model):
#     __tablename__ = 'profiles'

#     id = db.Column(db.Integer, primary_key=True)
#     user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
#     header = db.Column(db.String(), nullable=True)
#     profile_pic = db.Column(db.String(), nullable=True)
#     display_name = db.Column(db.String(50), nullable=False)
#     bio = db.Column(db.String(160), nullable=True)
#     location = db.Column(db.String(30), nullable=True)
#     birthday = db.Column(db.String(10), nullable=True)
#     created_at = db.Column(db.DateTime)

#     # Relationships
#     users = db.relationship("User", back_populates="profiles")

#     # Grab all
#     def to_dict(self):
#         return {
#             "id": self.id,
#             "userId": self.user_id,
#             "header": self.header,
#             "profile_pic": self.profile_pic,
#             "display_name": self.display_name,
#             "bio": self.bio,
#             "location": self.location,
#             "birthday": self.birthday,
#             "created_at": self.created_at
#         }

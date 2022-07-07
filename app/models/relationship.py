# from .db import db

# class Follow(db.Model):
#     __tablename__ = 'follows'

#     db.Column("follower_id", db.Integer, db.ForeignKey("users.id"))
#     db.Column("followed_id", db.Integer, db.ForeignKey("users.id"))

#     # Relationships
#     users = db.relationship("User", back_populates="comments")
#     queets = db.relationship("Queets", back_populates="comments")

#     # Grab all
#     def to_dict(self):
#         return {
#             "id": self.id,
#             "user": self.users.to_dict(),
#             "content": self.content,
#             "queet": self.queets.to_dict()
#         }

# from sqlalchemy import ForeignKey
# from .db import db

# class Message(db.Model):
#     __tablename__ = 'messages'

#     id = db.Column(db.Integer, primary_key=True)
#     sender_id = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
#     receiver_id = db.Column(db.Integer, ForeignKey("users.id"), nullable=False)
#     content = db.Column(db.String(3000), nullable=False)

#     # Relationships
#     senders = db.relationship("User", back_populates="messages")
#     receivers = db.relationship("User", back_populates="messages")

#     # Grab all
#     def to_dict(self):
#         return {
#             "id": self.id,
#             "sender": self.users.to_dict(),
#             "content": self.content,
#             "receiver": self.users.to_dict()
#         }

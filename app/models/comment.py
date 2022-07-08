from .db import db

class Comment(db.Model):
    __tablename__ = 'comments'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    content = db.Column(db.String(280), nullable=False)
    queet_id = db.Column(db.Integer, db.ForeignKey("queets.id"), nullable=False)

    # Relationships
    users = db.relationship("User", back_populates="comments")
    queets = db.relationship("Queet", back_populates="comments")

    # Grab all
    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "content": self.content,
            "queet": self.queets.to_dict()
        }

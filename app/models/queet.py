from .db import db

class Queet(db.Model):
    __tablename__ = 'queets'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    content = db.Column(db.String(280), nullable=False)

    # Relationships
    users = db.relationship("User", back_populates="queets")

    # Grab all
    def to_dict(self):
        return {
            "id": self.id,
            "user": self.users.to_dict(),
            "content": self.content
        }

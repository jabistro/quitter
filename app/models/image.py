from .db import db


class Image(db.Model):
    __tablename__ = "images"

    id = db.Column(db.Integer, primary_key=True)
    queetId = db.Column(db.Integer, db.ForeignKey("queets.id"), nullable=False)
    url = db.Column(db.String, nullable=False)

    # queets = db.relationship("Queet", back_populates="images")

    def to_dict(self):
        return {
            "url": self.url,
        }

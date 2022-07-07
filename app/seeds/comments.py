from app.models import db, Comment

def seed_comments():
    comment1 = Comment(
        user_id=2,
        queet_id=1,
        content="What are you so happy about?"
    )
    comment2 = Comment(
        user_id=2,
        queet_id=2,
        content="That's more like it."
    )
    comment3 = Comment(
        user_id=3,
        queet_id=3,
        content="Yeah, just wait and see lol."
    )
    comment4 = Comment(
        user_id=3,
        queet_id=4,
        content="Now you know lol"
    )
    comment5 = Comment(
        user_id=1,
        queet_id=5,
        content="Target, needed some picture frames."
    )
    comment6 = Comment(
        user_id=1,
        queet_id=6,
        content="I already told you... I went to Target."
    )

    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)

    db.session.commit()




def undo_comments():
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()

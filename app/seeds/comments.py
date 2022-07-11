from app.models import db, Comment

def seed_comments():
    comment1 = Comment(
        user_id=2,
        queet_id=1,
        content="What are you so happy about?",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )
    comment2 = Comment(
        user_id=2,
        queet_id=2,
        content="That's more like it.",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )
    comment3 = Comment(
        user_id=3,
        queet_id=3,
        content="Yeah, just wait and see lol.",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )
    comment4 = Comment(
        user_id=3,
        queet_id=4,
        content="Now you know lol",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )
    comment5 = Comment(
        user_id=1,
        queet_id=5,
        content="Target, needed some picture frames.",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )
    comment6 = Comment(
        user_id=1,
        queet_id=6,
        content="I already told you... I went to Target.",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
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

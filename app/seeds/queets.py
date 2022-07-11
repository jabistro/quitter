from app.models import db, Queet

def seed_queets():
    queet1 = Queet(
        user_id=1,
        content="Hello, World!",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )
    queet2 = Queet(
        user_id=1,
        content="Goodbye, World!",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )
    queet3 = Queet(
        user_id=2,
        content="This is going to be fun!",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )
    queet4 = Queet(
        user_id=2,
        content="Nevermind, I want to go home.",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )
    queet5 = Queet(
        user_id=3,
        content="Where do you go, my lovely?",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )
    queet6 = Queet(
        user_id=3,
        content="I wanna know.",
        created_at="2022-05-03 19:17:22",
        updated_at="2022-05-03 19:17:22"
    )

    db.session.add(queet1)
    db.session.add(queet2)
    db.session.add(queet3)
    db.session.add(queet4)
    db.session.add(queet5)
    db.session.add(queet6)

    db.session.commit()




def undo_queets():
    db.session.execute('TRUNCATE queets RESTART IDENTITY CASCADE;')
    db.session.commit()

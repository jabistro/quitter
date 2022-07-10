from app.models import db, Queet

def seed_queets():
    queet1 = Queet(
        user_id=1, content="Hello, World!"
    )
    queet2 = Queet(
        user_id=1, content="Goodbye, World!"
    )
    queet3 = Queet(
        user_id=2, content="This is going to be fun!"
    )
    queet4 = Queet(
        user_id=2, content="Nevermind, I want to go home."
    )
    queet5 = Queet(
        user_id=3, content="Where do you go, my lovely?"
    )
    queet6 = Queet(
        user_id=3, content="I wanna know."
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

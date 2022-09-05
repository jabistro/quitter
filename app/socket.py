from app.models import Message, db
from flask_socketio import SocketIO, emit, join_room, leave_room, send
# from flask import request
import os

# configure cors_allowed_origins
if os.environ.get('FLASK_ENV') == 'production':
    origins = [
        'http://john-allan-quitter.herokuapp.com/',
        'https://john-allan-quitter.herokuapp.com/'
    ]
else:
    origins = "*"

# initialize your socket instance
socketio = SocketIO(cors_allowed_origins=origins)


#optional callback that confirms message was received by the client
#--this might not work b/c in the docs it says callbacks are not invoked
# for broadcast messages
# def ack():
#     print("message was received!")
#Event handler for 'chat' events --must match frontend value--
#No return statement; data sent with emit or send functions
@socketio.on("chat")
def handle_chat(data):
    message = Message(
        content=data["content"],
        sender_id=data["sender"]["id"],
        conversation_id=data["conversation"]
    )
    db.session.add(message)
    db.session.commit()

    room = data['conversation']
    emit("chat", data, broadcast=True, to=room)

#Event handler for 'join' events
@socketio.on("join")
def on_join(data):
    room = data['conversation']
    join_room(room)

#Event handler for 'leave' events
@socketio.on("leave")
def on_leave(data):
    room = data['conversation']
    leave_room(room)

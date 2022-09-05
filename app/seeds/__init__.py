from flask.cli import AppGroup
from .users import seed_users, undo_users
from .queets import seed_queets, undo_queets
from .comments import seed_comments, undo_comments
from .conversations import seed_conversations, undo_conversations
from .messages import seed_messages, undo_messages

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_queets()
    seed_comments()
    seed_conversations()
    seed_messages()

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_queets()
    undo_comments()
    undo_conversations()
    undo_messages()

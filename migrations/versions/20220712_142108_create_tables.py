"""create tables

Revision ID: 02ab6e3b9238
Revises: 
Create Date: 2022-07-12 14:21:08.825964

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '02ab6e3b9238'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=40), nullable=False),
    sa.Column('email', sa.String(length=255), nullable=False),
    sa.Column('hashed_password', sa.String(length=255), nullable=False),
    sa.Column('header', sa.String(length=1000), nullable=True),
    sa.Column('profile_pic', sa.String(length=1000), nullable=True),
    sa.Column('display_name', sa.String(length=50), nullable=False),
    sa.Column('bio', sa.String(length=160), nullable=True),
    sa.Column('location', sa.String(length=50), nullable=True),
    sa.Column('birthday', sa.String(length=50), nullable=True),
    sa.Column('joined', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email'),
    sa.UniqueConstraint('username')
    )
    op.create_table('queets',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=280), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('content', sa.String(length=280), nullable=False),
    sa.Column('queet_id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=True),
    sa.Column('updated_at', sa.DateTime(), nullable=True),
    sa.ForeignKeyConstraint(['queet_id'], ['queets.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('comments')
    op.drop_table('queets')
    op.drop_table('users')
    # ### end Alembic commands ###
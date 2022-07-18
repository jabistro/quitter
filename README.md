<h1 align="center">🙅‍♂️ Quitter 🙅‍♂️</h1>

<h3 align="center">An app that provides an inclusive community for those suffering from/in recovery from addiction.</h3>

<p align="center">Quitter's core functionality includes queets and comments.
 With Quitter's smooth user experience, it is best place to share stories about one's road to recovery and listen to others.</p>


<p align="center"><a  href="https://john-allan-quitter.herokuapp.com/">Quitter Live Demo</a></p>

![test](https://user-images.githubusercontent.com/97556168/179539748-bfbc740d-abaf-4051-8482-5ed3b712446a.png)
Splash page
<br><br>

## Quitter at a Glance

Quitter is a full stack application that allows users to send queets of their own to communicate to others in the community, as well as reply to other queets from different users. Users are require to sign up for an account or log into an existing account to use any of the service.

### Getting started
1. Clone this repository
```
git clone [https://github.com/jabistro/survivr](https://github.com/jabistro/quitter.git)
```
2. Install dependencies
```
pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
```
3. Create a .env file based on the example with proper settings for your development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your .env file
5. Get into your pipenv, migrate your database, seed your database, and run your flask app
```
pipenv shell
flask db upgrade
flask seed all
flask run
```
6. Run `flask run` in folder "backend", then run `npm start` in folder "frontend"
7. Get to sharing!


### Application Architecture
Quitter is built on a React/Redux frontend and a Flask/Python backend, while using PostgresSQL as a database.

#### Techonologies Used
* [React.js](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Javascript](https://www.javascript.com/)
* [PostgresSQL](https://www.postgresql.org/)
* [Flask](https://www.fullstackpython.com/flask.html)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

### Conclusion and Next Steps
The next step for Quitter is to broaden the functionality of follows, likes, and site-wide searches.

### Contact
<a href="https://www.linkedin.com/in/john-allan-hinds-2aba11237/">Linkedin</a> | <a href="https://github.com/jabistro">Github</a> |
<a href="https://github.com/jabistro/quitter/wiki">Git Wiki for Quitter</a>

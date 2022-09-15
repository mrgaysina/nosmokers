require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { PORT, SESSION_SECRET } = process.env;

const app = express();

const { sequelize } = require('../db/models');

const signupRoute = require('./routes/signupRoute');
const loginRoute = require('./routes/loginRoute');
const profileRoute = require('./routes/profileRoute');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sessionConfig = {
  name: 'nosmokers',
  store: new FileStore(),
  secret: SESSION_SECRET || 'rita',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 30,
    httpOnly: true,
  },
};

app.use(session(sessionConfig));

app.use('/signup', signupRoute);
app.use('/login', loginRoute);
app.use('/profile', profileRoute);

app.get('/logout', (req, res) => {
  try {
    if (req.session.name) {
      req.session.destroy(() => {
        res.clearCookie('nosmokers');
        res.redirect('/login');
      });
    } else {
      res.redirect('/login');
    }
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT ?? 3100, async () => {
  try {
    await sequelize.authenticate();
    console.log('Сервер запущен');
  } catch (error) {
    console.log(error);
  }
});

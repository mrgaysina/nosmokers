const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const LogIn = require('../views/LogIn');
const { User, Trigger, Habit } = require('../../db/models');

router.get('/', (req, res) => {
  const { session } = req;
  renderTemplate(LogIn, { session }, res);
});

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  // console.log(req);
  const user = await User.findOne({ where: { email } });
  if (user) {
    const userPassCheck = await bcrypt.compare(password, user.password);
    if (userPassCheck) {
      req.session.name = user.name;
      req.session.save(() => {
        // res.json(user.name);
        res.redirect(`/profile/${user.name}`);
      });
    } else {
      res.sendStatus(400);
      // res.redirect('/login');
    }
  } else {
    res.sendStatus(405);
    // res.redirect('/signup');
  }
});

module.exports = router;

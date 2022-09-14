const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const SignUp = require('../views/SignUp');
const SignUpCont = require('../views/SignUpCont');
const { User, Trigger, Habit } = require('../../db/models');

router.get('/', (req, res) => {
  const { session } = req;
  console.log(req.session.name);
  renderTemplate(SignUp, { session }, res);
});

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  const findUser = await User.findOne({ raw: true, where: { email } });
  if (!findUser) {
    const hash = await bcrypt.hash(password, 15);
    const createUser = await User.create({ raw: true, name, email, password: hash });
    console.log(createUser);
    req.session.name = createUser.name;
    req.session.save(() => {
      res.redirect(`/signup/cont/${req.session.name}`);
    });
  } else {
    res.redirect('/login');
  }
});

router.get('/cont/:name', async (req, res) => {
  const { session } = req;
  renderTemplate(SignUpCont, { session }, res);
});

router.post('/cont/:name', async (req, res) => {
  const { kindOfSig, amount, cost, reason, quitDate } = req.body;
  console.log(kindOfSig);
  const findUser = await User.findOne({raw: true, where: { name: req.params.name } });
  console.log('findUser', findUser);
  if (findUser) {
    const userHabit = await Habit.create({ userId: findUser.id, kindOfSig, amount, cost, reason, quitDate });
    res.redirect(`/profile/${req.params.name}`)
  }
});

module.exports = router;

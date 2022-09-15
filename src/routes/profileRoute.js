const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const Profile = require('../views/Profile');
const TriggerView = require('../views/Trigger');
const { User, Trigger, Habit } = require('../../db/models');

router.get('/:name', async (req, res) => {
  const { session } = req;
  const { name } = req.params;
  if (name === session.name) {
    const habit = await Habit.findAll({ raw: true, include: [{ model: User, where: { name: session.name } }] });
    const date = habit[0].quitDate;
    const rubPerMinute = (habit[0].amount * habit[0].cost) / 7 / 24 / 60;
    const sec = 60 / rubPerMinute;
    const budg = (habit[0].amount * habit[0].cost) / 7 / 24 / 60 / 60;
    const today = new Date();
    const start = (today - date) * budg;
    const time = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    renderTemplate(Profile, {
      session, time, sec, start, habit,
    }, res);
  } else {
    res.redirect('/login');
  }
});

router.get('/your-trigger/:name', async (req, res) => {
  const { session } = req;
  const userName = await User.findOne({ where: { name: session.name } });
  if (session && userName) {
    const triggers = await Trigger.findAll({
      raw: true,
      include: [{
        model: User, where: { name: req.params.name },
      }],
    });
    console.log(triggers[0]);
    renderTemplate(TriggerView, { session, triggers }, res);
  } else {
    res.redirect('/login');
  }
});

router.put('/your-trigger/:name', async (req, res) => {
  const { trigger, help } = req.body;
  const { session } = req;
  const userName = await User.findOne({ where: { name: session.name } });
  if (userName) {
    const newHelp = await Trigger.create({raw: true, userId: userName.id, trigger, action: help });
    console.log(newHelp.dataValues);
    res.json({ isCreateSuccessfully: true, newTrigger: newHelp.dataValues.trigger, newAction: newHelp.dataValues.action });
  } else {
    res.redirect('/login');
  }
});

module.exports = router;

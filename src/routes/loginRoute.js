const express = require('express');

const router = express.Router();

const renderTemplate = require('../lib/renderTemplate');
const LogIn = require('../views/LogIn');

router.get('/', (req, res) => {
  const { session } = req;
  console.log(req.session.name);
  renderTemplate(LogIn, { session }, res);
});

module.exports = router;

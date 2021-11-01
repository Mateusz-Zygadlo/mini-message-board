const express = require('express');
const router = express.Router();
const dayjs = require('dayjs')

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: dayjs(new Date()).format('DD/MM/YYYY')
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: dayjs(new Date()).format('DD/MM/YYYY')
  }
];

router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});

router.post('/new', function(req, res, next) {
  messages.push({
    text: req.body.content,
    user: req.body.author,
    added: dayjs(new Date()).format('DD/MM/YYYY'),
  })
  res.redirect('/');
});

module.exports = router;

const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

router.post('/entries', csrfProtection, (req, res) => {
});

router.put('/entries/:id', csrfProtection, (req, res) => {
});

module.exports = router;

const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

router.get('/employees', csrfProtection, (req, res) => {
});

router.post('/employees', csrfProtection, (req, res) => {
});

router.put('/employees/:id', csrfProtection, (req, res) => {
});

router.delete('/employees/:id', csrfProtection, (req, res) => {
});

module.exports = router;

const express = require('express');
const router = express.Router();
const csrf = require('csurf');

const csrfProtection = csrf({ cookie: true });

router.get('/entries', csrfProtection, (req, res) => {
  const employeeId = req.query.employeeId;
});

module.exports = router;
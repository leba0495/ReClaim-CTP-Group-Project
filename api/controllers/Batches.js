const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;

router.get("/", (req, res) => {
    User.findAll({})
    .then(user => res.json(user));
});

module.exports = router;
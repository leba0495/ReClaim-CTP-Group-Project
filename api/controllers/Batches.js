const express = require('express');
const router = express.Router();
const db = require('../models');
const { Batch } = db;

router.get("/", (req, res) => {
    Batch.findAll({})
    .then(batch => res.json(batch));
});


module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Batch } = db;

// get all Batches
router.get("/", (req, res) => {
    Batch.findAll({
        order: [
            ['id', 'ASC'],
        ],
    })
    .then(batch => res.json(batch));
});

// create a batch 
router.post('/', (req, res) => {
    let { content } = req.body;
    // get the author's id so you can create the association between the batch being created and the use that batched it
    Batch.create({ content })
        .then()
        .then(batch => {
            res.status(201).json(batch);
        })
        .catch(err => {
            res.status(400).json(err)
        });
});


// update a batch (claimed vs unclaim)
router.put('/:id', (req, res) => {
    const { id }  = req.params;
    console.log(req.body);
    
    Batch.findByPk(id)
        .then(batch => {
            if(!batch) {
            return res.sendStatus(404);
            }
            batch.update({isClaimed: req.body.isClaimed})
        })
        .then(batch => {
            res.json(batch);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

// delete a batch (only the author of that batch can do)
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Batch.findByPk(id)
        .then(batch => {
            if(!batch) {
                return res.sendStatus(404);
            }
            batch.destroy();
            res.sendStatus(204);
        });
 
});


module.exports = router;
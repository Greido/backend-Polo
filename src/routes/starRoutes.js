const express = require('express');

const router = express.Router();

const starController = require('../controllers/starController');

//Route for get all stars
router.get('/stars',starController.allStarts);

//Route for createa a new star
router.post('/stars/new',starController.createStar);

//Route for filter a star
router.get('/stars/:id',starController.getStarById)

module.exports = router;
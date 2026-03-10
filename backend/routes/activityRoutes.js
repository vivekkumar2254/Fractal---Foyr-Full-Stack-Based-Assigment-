const express = require('express');
const router = express.Router();
const { getActivityFeed } = require('../controllers/activityController');

router.get('/feed', getActivityFeed);

module.exports = router;

const express = require('express');
const router = express.Router();
const controllerHistory = require('../controllers/history');

router.get('*', controllerHistory);
module.exports = router;

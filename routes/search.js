const express = require('express');
const router = express.Router();
const controllerSearch = require('../controllers/search');

router.get('*', controllerSearch);
module.exports = router;

'use strict';

const express = require('express');
const router = express.Router();
const newsCtrl = require('../controllers/news');

router.get('/', newsCtrl.newsApi);

module.exports = router;
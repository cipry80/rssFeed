'use strict';

const express = require('express');
const router = express.Router();
const newsCtrl = require('../controllers/news');

router.get('/news', newsCtrl.newsApi);

module.exports = router;

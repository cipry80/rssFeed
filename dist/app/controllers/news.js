'use strict';
const servicesNews = require('../services/news');

module.exports.newsApi = newsApi;

function newsApi(req, res, next) {
    servicesNews.news( (data) => {
        res.status(200).json(data);
    });
}

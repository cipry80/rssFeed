
'use strict';
const servicesNews = require('../services/news');

module.exports.newsApi = newsApi;

function newsApi(req, res, next) {
    servicesNews.news( (data) => {
        const striptags = require('striptags');
        const ellipsis = require('limit-string-length');
        let  count = {};
        var results = data.filter(function(feed) {
            let source = feed.feed.source;
            count[source] = count[source] || 0;
            count[source] ++;
            return count[source]  <= 3;
        });

        results = results.map(function(feed) {
            let title = striptags(feed.title);
            let content = striptags(feed.content);
            let shortContent = ellipsis(content, 100);
            return {
                title: title,
                content: shortContent,
                link: feed.link
            };
        });

        res.render('home',  {results: results});
    });
}

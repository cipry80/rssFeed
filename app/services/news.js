'use strict';
const feed = require("feed-read-parser");
const rss = ["http://feeds.feedburner.com/citynews-cluj",
"http://ziuadecj.realitatea.net/Feed.aspx",
"http://www.stiridecluj.ro/rss.xml",
"http://www.monitorulcj.ro/rss/",
"http://voceaclujului.ro/feed/",
"http://oradecluj.oradestiri.ro/feed-ora/",
"http://ziarulfaclia.ro/feed/",
"http://www.decluj.ro/feed/",
"http://cluju.ro/feed/"
];

module.exports.news = news;
function news(callback) {
    feed(rss, function(err, articles) {
    if (err) throw err;
    // articles is an array of article with properties described above.
    callback(articles);
});
}

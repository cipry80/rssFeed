// 'use strict';
// const FeedParser = require('feedparser');
// const request = require('request');
// module.exports.news = news;
// const urls = ["http://feeds.feedburner.com/citynews-cluj",
// "http://ziuadecj.realitatea.net/Feed.aspxhttp://ziuadecj.realitatea.net/Feed.aspx",
// "http://www.stiridecluj.ro/rss.xml",
// "http://www.monitorulcj.ro/rss/",
// "http://voceaclujului.ro/feed/",
// "http://oradecluj.oradestiri.ro/feed-ora/",
// "http://ziarulfaclia.ro/feed/",
// "http://www.decluj.ro/feed/",
// "http://cluju.ro/feed/"
// ];
//
// module.exports.news = news;
// function news(callback) {
//     const  feedparser = new FeedParser();
//
//     const request =url();
// console.log(request);
//     request.on('error', function (error) {
//         // handle any request errors
//     });
//     request.on('response', function (res) {
//         let stream = this;
//
//         if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
//
//         stream.pipe(feedparser);
//     });
//
//     feedparser.on('error', function(error) {
//         // always handle errors
//     });
//     feedparser.on('readable', function() {
//         let stream = this;
//         let item;
//
//         while (item = stream.read()) {
//             callback(item);
//         }
//     });
// }
//
// var req;
// function url() {
//   for (let i = 0; i <= urls.length - 1; i++) {
//     req = request(urls[i]);
//   }
//   return req;
// }
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

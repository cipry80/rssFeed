'use strict';

module.exports = {
    port: 3002,
    hostname: '127.0.0.1',
    baseUrl: 'http://localhost:3002',
    mongodb: {
        //uri: 'mongodb://localhost/dev_db'
    },
    app: {
        name: 'RSS Feed Cluj'
    },
    serveStatic: true,
    session: {
        type: 'mongo', // store type, default `memory`
        secret: 'someVeRyN1c3S#cr3tHer34U',
        resave: false, // save automatically to session store
        saveUninitialized: true // saved new sessions
    },
    proxy: {
        trust: true
    }
};
'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 9000 });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

// hello world
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello, world!');
    }
});

// hello query parameter
server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
        let name = request.query.name ? encodeURIComponent(request.query.name) : 'world'
        reply(`Hello, ${name}!`);
    }
});

// hello path parameter
server.route({
    method: 'GET',
    path: '/hello/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});


'use strict';

const Hapi = require('hapi');
const Joi = require('joi');

const server = new Hapi.Server();
server.connection({ port: 9000 });

server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

// hello query parameter
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        let name = request.query.name ? encodeURIComponent(request.query.name) : 'world'
        reply(`Hello, ${name}!`);
    }
});

// hello query parameter with validation
server.route({
    method: 'GET',
    path: '/hello',
    config: {
        validate: {
            query: {
                name: Joi.string().min(3).max(10).required(),
                age: Joi.number().integer().min(1).max(50)
            }
        }
    },
    handler: function (request, reply) {
        let name = encodeURIComponent(request.query.name);
        let age = request.query.age ? encodeURIComponent(request.query.age) : null;
        let yourAge = age ? `Your age of ${age} is valid.` : '';
        reply(`Hello, ${name}! ${yourAge}`);
    }
});

// hello path parameter
server.route({
    method: 'GET',
    path: '/hello/{name}',
    config: {
        validate: {
            params: {
                name: Joi.string().min(3).max(10)
            }
        }
    },
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    }
});



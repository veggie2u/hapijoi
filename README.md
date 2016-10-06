#Hapi Hapi Joi Joi

This is code for a simple web server using the node based Hapi server, and Joi, a validation library.

Note: the examples use ES6. The project was created on Node v6.2.2

##Install & Run
These commands will pull down the required libraries, and then run the node server defined in index.js.
```
npm install
node index.js
```

##Endpoints
* localhost:9000 => 'Hello World!'
* localhost:9000?name=Jim => 'Hello Jim!'
* localhost:9000/Bob => 'Hello Bob!'
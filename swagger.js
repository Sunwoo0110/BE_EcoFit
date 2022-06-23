const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });
const options = {
    swaggerDefinition: {
        info: {
            title: 'EcoFit API',
            version: '1.0.1',
            description: 'EcoFit API',
        },
        servers:[
            {
                url:'http://localhost:3000'
            },
        ],
        schemes: ['http'],
        securityDefinitions: {
            bearerAuth: {
              type: 'http',
              scheme: 'bearer',
              in: 'header',
              bearerFormat: 'JWT',
            },
          },
    },
    apis: ['./routes/index.js', './swagger/*']
};

// const options = {
//     info: {
//       title: 'My API',
//       description: 'Description',
//     },
//     host: 'localhost:3000',
//     schemes: ['http'],
//   };

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];
swaggerAutogen(outputFile, endpointsFiles, options);

const specs = swaggereJsdoc(options);

module.exports = {
    swaggerUi,
    specs
};

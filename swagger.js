const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');
const swaggerAutogen = require('swagger-autogen')({ openapi: '3.0.0' });


const options = {
    info: {
        title: 'EcoFit Rest API',
        version: '1.0.0',
        description: 'SW 중심대학 통합 해커톤 EcoFit 프로젝트 Rest API Dcoument',
    },
    servers:[
        {
            url:'http://localhost:3000'
        },
    ],
    schemes: ['http'],
  };

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/routes/index.js'];
swaggerAutogen(outputFile, endpointsFiles, options);
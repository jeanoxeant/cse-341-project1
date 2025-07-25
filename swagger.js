 const swaggerAutogen = require('swagger-autogen')();

 const doc = {
    info: {
        title: 'Contacts Api',
        description: 'Contact Api'
    },
    host: 'localhost:5000',
    schemes: ['https', 'http']
 };

 const outputFile = './swagger.json';
 const endpointsFiles = ['./routes/index.js'];

 // this will generate swagger.json
 swaggerAutogen(outputFile, endpointsFiles, doc);
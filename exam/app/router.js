'use strict';

let studentsApi = require('./Apistudents');

module.exports = (server) => {
    server.get('/students', Apistudents.getStudent);
};

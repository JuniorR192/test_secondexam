'use strict';

let students = require('./studentsDB.json');
module.exports = (() => {

    return {
        getStudent: getStudent
    };

    function getStudent(req, res, next) {
        let id = req.query.mat;

    function getStatus(student) {
        let grade = calcularGrade(student);
        if (grade < 50) {

            return 'Reprovado';

        }

        if ((grade < 60) || (grade >= 50 )) {

            return 'Final';
        }

        if(grade > 60){

        return 'Aprovado';

        }
    }

    function calcularGrade(student) {
        if (student.grades.length) {
            return student.grades.reduce((previous, current) => previous + current, 0) / student.grades.length;
        }
        return 0;
    }
    }})();
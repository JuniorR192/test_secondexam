'use strict';

let students = require('app/Apistudents.js');

(() => {

    function getStudentById(id) {
        $.ajax({
            method: 'GET',
            url: '/students?mat=' + id
        }).done(student => printStudent(student));
    }

    $('form').on('submit', event => {
        let id = $('#studentId').val();
        getStudentById(id);
        return false;
    });

    function escreverStudent(student) {
        escreverName(student.name);
        escreverEmail(student.email);
        escreverPhoto(student.photo);
        escreverStatus(student.status);
    }

    function escreverName(name) {
        $('#name').html(name);
    }

    function escreverEmail(email) {
        $('#email').html(email);
    }

    function escreverPhoto(photo) {
        $('#photo').attr('src', photo);
    }
    
    function escreverStatus(status) {
        $('#status').html(status);
    }

})();
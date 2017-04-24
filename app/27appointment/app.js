var App = angular.module('appointment', []);

App.config(require('./router'));
App.factory('appointmentservice', require('./service'));

//预约列表
App.controller('appointmentlist',require('./controllers/appointmentlist'));
App.controller('setappointment',require('./controllers/setappointment'));
App.directive('appointmentbaseinfo',require('./directives/appointmentbaseinfo'));
App.directive('appointmentscreening',require('./directives/appointmentscreening'));
App.directive('appointmentticket',require('./directives/appointmentticket'));



module.exports = App;
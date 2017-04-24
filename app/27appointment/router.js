/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

        //商家发布的可预约产品列表
        .state('app.appointmentlist',{
            url: '/appointmentlist/:id',
            controller : 'appointmentlist',
            template: require('./views/appointmentlist.html'),
            resolve:{
                findMakeAppointmentList : function(busscustomerservice){
                    return busscustomerservice.findMakeAppointmentList();
                },
                insertMakeAppointment : function(busscustomerservice){
                    return busscustomerservice.insertMakeAppointment();
                },
                updateMakeAppointment : function(busscustomerservice){
                    return busscustomerservice.updateMakeAppointment();
                },
                getMakeAppointmentById : function(busscustomerservice){
                    return busscustomerservice.getMakeAppointmentById();
                },
                delMakeAppointment : function(busscustomerservice){
                    return busscustomerservice.delMakeAppointment();
                },
                ticketlist : function(busscustomerservice){
                    return busscustomerservice.ticketlist();
                },
                salelist : function(busscustomerservice){
                    return busscustomerservice.salelist();
                },
                getDate : function(utilservice){
                	 return utilservice.getDate;
                },
                str2date : function(utilservice){
                return utilservice.str2date;
                },
                date2str : function(utilservice) {
                    return utilservice.date2str;
                }
                
            }
        })

        //设置预约
        .state('app.setappointment',{
            url: '/setappointment/:id',
            controller : 'setappointment',
            template: require('./views/setappointment.html'),
            resolve:{
                productid: function () {
					return '';
				},
				what: function () {
					return 'edit';
				},
				date2str: function (utilservice) {
					return utilservice.getDate;
				},
				str2date: function (utilservice) {
					return utilservice.str2date;
				},
				$uibModalInstance: function () {
					return undefined;
				},
				auditing: function () {
					return false;
				}
                
            }
        })


        

      


};

module.exports = router;
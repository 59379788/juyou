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
                findMakeAppointmentList : function(appointmentservice){
                    return appointmentservice.findMakeAppointmentList();
                },
                delMakeAppointment : function(appointmentservice){
                    return appointmentservice.delMakeAppointment();
                },
                ticketlist : function(appointmentservice){
                    return appointmentservice.ticketlist();
                },
                salelist : function(appointmentservice){
                    return appointmentservice.salelist();
                },
                getDate : function(utilservice){
                	 return utilservice.getDate;
                },
                str2date : function(utilservice){
                return utilservice.str2date;
                },
                date2str : function(utilservice) {
                    return utilservice.date2str;
                },
                offstate : function(appointmentservice){
                    return appointmentservice.offstate();
                },
                onstate : function(appointmentservice){
                    return appointmentservice.onstate();
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

         //预约人列表
        .state('app.customerlist',{
            url: '/customerlist/:id',
            controller : 'customerlist',
            template: require('./views/customerlist.html'),
            resolve:{
                findUserInfoList : function(appointmentservice){
                    return appointmentservice.findUserInfoList();
                }
                
            }
        })


        

      


};

module.exports = router;
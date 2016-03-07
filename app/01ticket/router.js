/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

      .state('app.ticketlist', {
        url: '/ticketlist',
        title: 'ticketlist',
        template: require('./views/list.html')
      })

      //消票
      .state('app.ticketinput', {
        url: '/ticketinput',
        title: 'ticketinput',
        controller: 'check',
        template: require('./views/input.html'),
        resolve:{
	        checkcode:  function(service){
	            return service.checkcode();
	        },
	        checkcard:  function(service){
	            return service.checkcard();
	        },
	        checkid:  function(service){
	            return service.checkid();
	        },
	        useticketbyid:  function(service){
	            return service.useticketbyid();
	        },
	        useticketbycode:  function(service){
	            return service.useticketbycode();
	        },
	        useticketbycard:  function(service){
	            return service.useticketbycard();
	        }
     	}
      })

};

module.exports = router;
/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

      .state('app.ticketlist', {
        url: '/ticketlist',
        title: 'ticketlist',
        //templateUrl: 'app/01ticket/views/list.html'
        template: require('./views/list.html')
      })

      //消票
      .state('app.ticketinput', {
        url: '/ticketinput',
        title: 'ticketinput',
        controller: 'check',
        //templateUrl: 'app/01ticket/views/input.html',
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
	        }
     	}
      })

};

module.exports = router;
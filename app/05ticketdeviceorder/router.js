/**
 * 子模块路由
 * djp
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

	.state('app.refundticket', {
        url: '/refundticket',
        title: 'refundticket',
        controller : 'refundticket',
        template: require('./views/refundticket.html')
      })

	.state('app.deviceorder', {
        url: '/deviceorder',
        title: 'deviceorder',
        controller : 'deviceorder',
        template: require('./views/deviceorder.html')
      })

	.state('app.deviceorder.selfcount', {
        url: '/selfcount/:view',
        title: 'selfcount',
        controller : 'selfcount',
        template: require('./views/selfcount.html'),
        resolve:{
        	destorytotalbytypelist : function(ticketdeviceorderservice){
        		return ticketdeviceorderservice.destorytotalbytypelist();
        	}
     	}
      })

	.state('app.deviceorder.teamcount', {
        url: '/teamcount/:view_code',
        title: 'teamcount',
        controller : 'teamcount',
        template: require('./views/teamcount.html'),
        resolve:{
        	grouptotalbytpyelist : function(ticketdeviceorderservice){
        		return ticketdeviceorderservice.grouptotalbytpyelist();
        	}
     	}
      })

	.state('app.deviceorder.teamreserve', {
        url: '/teamreserve/:view_code',
        title: 'teamreserve',
        controller : 'teamreserve',
        template: require('./views/teamreserve.html'),
        resolve:{
        	grouptotaltodaylist : function(ticketdeviceorderservice){
        		return ticketdeviceorderservice.grouptotaltodaylist();
        	},
        	grouptotaltomlist : function(ticketdeviceorderservice){
        		return ticketdeviceorderservice.grouptotaltomlist();
        	}
     	}
      })

	.state('app.deviceorder.againprint', {
        url: '/againprint',
        title: 'againprint',
        controller : 'againprint',
        template: require('./views/againprint.html'),
        resolve:{
        	receliptlist : function(ticketdeviceorderservice){
        		return ticketdeviceorderservice.receliptlist();
        	},
        	receliptinfo : function(ticketdeviceorderservice){
        		return ticketdeviceorderservice.receliptinfo();
        	},
        	receliptprint : function(ticketdeviceorderservice){
        		return ticketdeviceorderservice.receliptprint();
        	}
     	}
      })

};

module.exports = router;
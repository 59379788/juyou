/**
 * 子模块路由
 * dlq
 */

module.exports = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  //设备监控
      .state('app.devicelist', {
        url: '/devicelist',
        title: 'devicelist',
        controller: 'list',
        template: require('./views/list.html'),
        resolve:{
        	devicelist : function(deviceservice){
        		return deviceservice.devicelist();
        	},
        	typelist : function(deviceservice){
        		return deviceservice.typelist();
        	},
        	add : function(deviceservice){
        		return deviceservice.add();
        	},
        	del : function(deviceservice){
        		return deviceservice.del();
        	}
        }
        
      })


      //票种设置
      .state('app.devicetktlist', {
        url: '/devicetktlist',
        title: 'devicetktlist',
        controller: 'configurationticket',
        template: require('./views/configurationticket.html'),
        resolve:{
        	typelist : function(deviceservice){
        		return deviceservice.typelist();
        	}
        }
        
      })

};
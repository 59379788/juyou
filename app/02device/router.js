/**
 * 子模块路由
 * dlq
 */

module.exports = function($urlRouterProvider, $stateProvider){

 	$stateProvider

      .state('app.devicelist', {
        url: '/devicelist',
        title: 'devicelist',
        controller: 'list',
        template: require('./views/list.html'),
        resolve:{
        	typelist : function(deviceservice){
        		return deviceservice.typelist();
        	}
        }
        
      })

};
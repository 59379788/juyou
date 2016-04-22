/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.selling', {
        url: '/selling/:type',
        controller : 'selling',
        template: require('./views/selling.html'),
        resolve:{
            namelist : function(sellingservice){
                return sellingservice.namelist();
            },
            info : function(sellingservice){
                return sellingservice.info();
            },
            createorder : function(orderservice){
                return orderservice.createorder();
            },
            IdentityCodeValid : function(utilservice){
                return utilservice.IdentityCodeValid;
            }
        }
        
      })

      .state('app.sellinggroup', {
        url: '/sellinggroup/:type',
        controller : 'sellinggroup',
        template: require('./views/sellinggroup.html'),
        resolve:{
            grouplist : function(sellingservice){
                return sellingservice.grouplist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
        
      })


      .state('app.createsellinggroup', {
        url: '/createsellinggroup',
        controller : 'sellinggroupcreate',
        template: require('./views/sellinggroupmodel.html'),
        resolve:{
            groupsalelist : function(sellingservice){
                return sellingservice.groupsalelist;
            },
            groupsale : function(sellingservice){
                return sellingservice.groupsale();
            },
            createOrder : function(sellingservice){
                return sellingservice.createOrder();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
      })

      


};

module.exports = router;
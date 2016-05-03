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
            },
            getuserinfobymobile : function(memberservice){
                return memberservice.getuserinfobymobile();
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
            },
            update : function(sellingservice){
                return sellingservice.update();
            },
            groupdetail : function(sellingservice){
                return sellingservice.groupdetail();
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

      .state('app.editsellinggroup', {
        url: '/editsellinggroup/:code',
        controller : 'sellinggroupupdate',
        template: require('./views/sellinggroupmodel.html'),
        resolve:{
            groupsalelist : function(sellingservice){
                return sellingservice.groupsalelist;
            },
            groupone : function(sellingservice){
                return sellingservice.groupone();
            },
            update : function(sellingservice){
                return sellingservice.update();
            },
            updatedetail : function(sellingservice){
                return sellingservice.updatedetail();
            }
        }
      })

      .state('app.sellingdetail', {
        url: '/sellingdetail/:code',
        controller : 'sellingdetail',
        template: require('./views/sellingdetail.html'),
        resolve:{
            groupdetail : function(sellingservice){
                return sellingservice.groupdetail();
            }
        }
        
      })


};

module.exports = router;
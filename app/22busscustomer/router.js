var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider
       // 申请列表
 	   .state('app.skacountlist', {
         url: '/skacountlist',
         controller : 'skacountlist',
         template: require('./views/skacountlist.html'),
         resolve:{
            
          customerlist : function(busscustomerservice){
                 return busscustomerservice.customerlist();
          },
          review : function(busscustomerservice){
                 return busscustomerservice.review();
          },
          role : function(busscustomerservice){
                 return busscustomerservice.role();
          },
          create : function(busscustomerservice){
                 return busscustomerservice.create();
          },
          message : function(busscustomerservice){
                 return busscustomerservice.message();
          },
          userinfo : function(busscustomerservice){
                 return busscustomerservice.userinfo();
          },
          insertnops : function(busscustomerservice){
                 return busscustomerservice.insertnops();
          },
          failed : function(busscustomerservice){
                 return busscustomerservice.failed();
          },
          confirmauthority : function(busscustomerservice){
                 return busscustomerservice.confirmauthority();
          }
       
         }
       })


       .state('app.creataccount', {
         url: '/creataccount/:id',
         controller : 'creataccount',
         template: require('./views/creataccount.html'),
         resolve:{
          create : function(busscustomerservice){
                 return busscustomerservice.create();
          },
          message : function(busscustomerservice){
                 return busscustomerservice.message();
          },
          insertnops : function(busscustomerservice){
                 return busscustomerservice.insertnops();
          }
       
         }
       })

        .state('app.get2', {
         url: '/get2/:id',
         controller : 'get2',
         template: require('./views/get2.html'),
         resolve:{
            userinfo : function(busscustomerservice){
                 return busscustomerservice.userinfo();
          }
       
         }
       })

        // 供应商申请列表
        .state('app.supplierlist', {
         url: '/supplierlist',
         controller : 'supplierlist',
         template: require('./views/supplierlist.html'),
         resolve:{
            supplierlist : function(busscustomerservice){
                 return busscustomerservice.supplierlist();
            },
            saveconfirm : function(busscustomerservice){
                 return busscustomerservice.saveconfirm();
            }   
          
       
         }
        })

        // 供应商备注填写
        .state('app.supplyremark', {
         url: '/supplyremark',
         controller : 'supplyremark',
         template: require('./views/supplyremark.html'),
         resolve:{
            saveconfirm : function(busscustomerservice){
                 return busscustomerservice.saveconfirm();
            } 
         }
        })

       
}
module.exports = router;
var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider
       // 卡池列表
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
          }
       
         }
       })
}
module.exports = router;
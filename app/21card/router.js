

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider
       // 卡池列表
 	   .state('app.cardpool', {
         url: '/cardpoollist',
         controller : 'cardpoollist',
         template: require('./views/cardpoollist.html'),
         resolve:{
            cardpoollist : function(cardservice){
                 return cardservice.cardpoollist();
            }
         }
       })
       
       // 添加卡
       .state('app.addcard', {
         url: '/addcard/:poolcode',
         controller : 'addcard',
         template: require('./views/addcard.html'),
         resolve:{
            addcard : function(cardservice){
                 return cardservice.addcard();
             }
         }
         
       })

       // 添加卡池
       .state('app.addcardpool', {
         url: '/addcardpool',
         controller : 'addcardpool',
         template: require('./views/addcardpool.html'),
         resolve:{
            addcardpool : function(cardservice){
                 return cardservice.addcardpool();
            }
         }
       })

       // 释放卡池里面的卡
       .state('app.releasecard', {
         url: '/releasecard/:poolcode',
         controller : 'releasecard',
         template: require('./views/releasecard.html'),
         resolve:{
            releasecard : function(cardservice){
                 return cardservice.releasecard();
            }
         }
       })

       // 修改卡信息

       .state('app.resivecardinfo', {
         url: '/resivecardinfo/:poolcode',
         controller : 'resivecardinfo',
         template: require('./views/resivecardinfo.html'),
         resolve:{
            used : function(cardservice){
                 return cardservice.used();
            },
            lost : function(cardservice){
                 return cardservice.lost();
            }
         }
       })


       // 删除卡
       .state('app.deletecard', {
         url: '/deletecard',
         controller : 'deletecard',
         template: require('./views/deletecard.html'),
         resolve:{
            addcard : function(cardservice){
                 return cardservice.addcard();
            }
         }
       })
      
};

module.exports = router;
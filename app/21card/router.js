

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
         url: '/addcard',
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
         url: '/releasecard',
         controller : 'releasecard',
         template: require('./views/releasecard.html'),
         resolve:{
            releasecard : function(cardservice){
                 return cardservice.releasecard();
            }
         }
       })

       // 释放卡池


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


       //卡产品管理
       .state('app.cardproductlist', {
         url: '/cardproductlist',
         controller : 'cardproductlist',
         template: require('./views/cardproductlist.html'),
         resolve:{
            cardproductlist : function(cardservice){
                 return cardservice.cardproductlist();
            }
         }
       })


       //卡产品信息
       .state('app.cardproduct', {
         url: '/cardproduct/:code',
         controller : 'cardproduct',
         template: require('./views/cardproduct.html'),
         resolve:{
            cardproduct : function(cardservice){
                 return cardservice.cardproduct();
            },
            cardproductinfo : function(cardservice){
                 return cardservice.cardproductinfo();
            },
            dictbytypelist : function(productservice){
                return productservice.dictbytypelist;
            },
            cardresources : function(cardservice){
                return cardservice.cardresources();
            },
            cardresourcesinsert : function(cardservice){
                return cardservice.cardresourcesinsert();
            },
            cardresourcesdel : function(cardservice){
                return cardservice.cardresourcesdel();
            },
            cardpoollist : function(cardservice){
                return cardservice.cardpoollist();
            },
            cardproduct_cardpoollist : function(cardservice){
                return cardservice.cardproduct_cardpoollist();
            },
            cardproductpoolinsert : function(cardservice){
                return cardservice.cardproductpoolinsert();
            },
            cardproductpooldel : function(cardservice){
                return cardservice.cardproductpooldel();
            },
            cardproduct_ticketlist : function(cardservice){
                return cardservice.cardproduct_ticketlist();
            },
            cardproductticketinsert : function(cardservice){
                return cardservice.cardproductticketinsert();
            },
            cardproductticketdel : function(cardservice){
                return cardservice.cardproductticketdel();
            }
         }
       })
      
};

module.exports = router;
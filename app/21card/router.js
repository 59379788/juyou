

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

       // 添加卡池，修改卡池
       .state('app.addcardpool', {
         url: '/addcardpool/:poolcode',
         controller : 'addcardpool',
         template: require('./views/addcardpool.html'),
         resolve:{
            addcardpool : function(cardservice){
                 return cardservice.addcardpool();
            }
         }
       })


       // 

       // 释放卡池里面的卡(卡池详情)
       .state('app.releasecard', {
         url: '/releasecard/:poolcode',
         controller : 'releasecard',
         template: require('./views/releasecard.html'),
         resolve:{
            /*releasecard : function(cardservice){
                 return cardservice.releasecard();
            },*/
            getcardlist : function(cardservice){
                 return cardservice.getcardlist();
            },
            cardinpool : function(cardservice){
                 return cardservice.cardinpool();
            },
            listinpool : function(cardservice){
                 return cardservice.listinpool();
            },
           
            statename : function(cardservice){
                 return cardservice.statename;
            }
            
         }
       })
       // 记录发卡信息
       .state('app.issuecard', {
         url: '/issuecard/:poolcode',
         controller : 'issuecard',
         template: require('./views/issuecard.html'),
         resolve:{
            issuecard : function(cardservice){
                 return cardservice.issuecard();
            }
             
            
         }
       })

       // 释放卡
       .state('app.relief', {
         url: '/relief/:poolcode',
         controller : 'relief',
         template: require('./views/relief.html'),
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
            },
            cardnumuser : function(cardservice){
                 return cardservice.cardnumuser();
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
        


       //卡产品管理
       .state('app.cardproductlist', {
         url: '/cardproductlist',
         controller : 'cardproductlist',
         template: require('./views/cardproductlist.html'),
         resolve:{
            cardproductlist : function(cardservice){
                 return cardservice.cardproductlist();
            },
            onsale : function(cardservice){
                 return cardservice.onsale();
            },
            goodoffsale : function(cardservice){
                 return cardservice.goodoffsale();
            }
         }
       })


       // 产品下架
       .state('app.offsale', {
         url: '/offsale',
         controller : 'offsale',
         template: require('./views/offsale.html'),
         resolve:{
            goodoffsale : function(cardservice){
                 return cardservice.goodoffsale();
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




       //卡订单列表
       .state('app.cardorderlist', {
         url: '/cardorderlist',
         controller : 'cardorderlist',
         template: require('./views/cardorderlist.html'),
         resolve:{
            cardproductorderlist : function(cardservice){
                 return cardservice.cardproductorderlist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
         }
       })

       //卡订单详情
       .state('app.cardorderinfo', {
         url: '/cardorderinfo/:code',
         controller : 'cardorderinfo',
         template: require('./views/cardorderinfo.html'),
         resolve:{
            cardproductorderinfo : function(cardservice){
                 return cardservice.cardproductorderinfo();
            }
         }
       })

       //激活卡
       .state('app.activationcard', {
         url: '/activationcard',
         controller : 'activationcard',
         template: require('./views/activationcard.html'),
         resolve:{
            getUserInfoByMobile : function(cardservice){
                 return cardservice.getUserInfoByMobile();
            },
            getProductByCardNoList : function(cardservice){
                 return cardservice.getProductByCardNoList();
            },
            createProductOrderByCardNo : function(cardservice){
                 return cardservice.createProductOrderByCardNo();
            }
          }   
        })

       //卡产品管理
       .state('app.basecardlist', {
         url: '/basecardlist',
         controller : 'basecardlist',
         template: require('./views/basecardlist.html'),
         resolve:{
            cardbaselist : function(cardservice){
                 return cardservice.cardbaselist();
            }
         }
       })
       
};

module.exports = router;


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
            },
            addcard : function(cardservice){
                 return cardservice.addcard();
            },
            unusedcard : function(cardservice){
                 return cardservice.unusedcard();
            },
            releasecard : function(cardservice){
                 return cardservice.releasecard();
            },
            canrelease : function(cardservice){
                 return cardservice.canrelease();
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
            },
            unusedcard : function(cardservice){
                 return cardservice.unusedcard();
            }
         }
         
       })

       // 添加卡池
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
       // 修改卡池
       .state('app.reviseinfo', {
         url: '/reviseinfo/:poolcode/:poolname/:pooltype',
         controller : 'reviseinfo',
         template: require('./views/reviseinfo.html'),
         resolve:{
            addcardpool : function(cardservice){
                 return cardservice.addcardpool();
            }
         }
       })

       // 

       // (卡池详情)
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
            },
            targetcard : function(cardservice){
                 return cardservice.targetcard();
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
            },
            takecardlist : function(cardservice){
                 return cardservice.takecardlist();
            },

             
            
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
            },
            canrelease : function(cardservice){
                 return cardservice.canrelease();
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
         url: '/cardproduct/:code/:editstate',
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

       //卡基本信息
       .state('app.basecardlist', {
         url: '/basecardlist/',
         controller : 'basecardlist',
         template: require('./views/basecardlist.html'),
         resolve:{

            cardbaselist : function(cardservice){
                 return cardservice.cardbaselist();
            },
            cardproductlist:function(cardservice){
                 return cardservice.cardproductlist();
            },
            searchcard : function(cardservice){
                 return cardservice.searchcard();
             }
            
            
         }
       })

       //卡基本信息添加到卡池
       .state('app.addtocardpool', {
         url: '/addtocardpool',
         controller : 'addtocardpool',
         template: require('./views/addtocardpool.html'),
         resolve:{
            addcard : function(cardservice){
                 return cardservice.addcard();
             }
         }
       })

       //设置批次号 
       .state('app.batchnumber', {
         url: '/batchnumber/:mincard/:maxcard',
         controller : 'batchnumber',
         template: require('./views/batchnumber.html'),
         resolve:{
            // 释放卡（置为未发放）
            batchnumber : function(cardservice){
                 return cardservice.batchnumber();
             }
         }
       })

       // 置为未发放
       .state('app.unissued', {
         url: '/unissued',
         controller : 'unissued',
         template: require('./views/unissued.html'),
         resolve:{
            // 释放卡（置为未发放）
            releasecard : function(cardservice){
                 return cardservice.releasecard();
             }
         }
       })
        
        // 更改制作状态
        .state('app.cardcomplete', {
         url: '/cardcomplete/:cardmakebatch/:mincard/:maxcard',
         controller : 'cardcomplete',
         template: require('./views/cardcomplete.html'),
         resolve:{
            // 置为已制作
            changestatus : function(cardservice){
                 return cardservice.changestatus();
             }
         }
       })

        //根据条件查询基本卡
        .state('app.searchcard', {
         url: '/searchcard/:startcard/:endcard/:cardmakestatus/:cardbatch/:cardgivetatus',
         controller : 'searchcard',
         template: require('./views/searchcard.html'),
         resolve:{
           searchcard : function(cardservice){
                 return cardservice.searchcard();
             },
           batchnumber : function(cardservice){
                 return cardservice.batchnumber();
             },
           changestatus : function(cardservice){
                 return cardservice.changestatus();
             }

         }
       })

        //拿卡人管理
        .state('app.takecard', {
         url: '/takecard',
         controller : 'takecard',
         template: require('./views/takecard.html'),
         resolve:{
           takecardlist : function(cardservice){
                 return cardservice.takecardlist();
           },
           savetakecarduser : function(cardservice){
                 return cardservice.savetakecarduser();
           },
           deletetakecarduser : function(cardservice){
                 return cardservice.deletetakecarduser();
           },

         }
       })

        // 领卡人修改
        .state('app.changecarduser', {
         url: '/changecarduser/:id/:name/:travelagency/:mobile/:remarks',
         controller : 'changecarduser',
         template: require('./views/changecarduser.html'),
         resolve:{
           savetakecarduser : function(cardservice){
                 return cardservice.savetakecarduser();
           }

         }
       })

        // 查看卡产品信息
        .state('app.cardproductinfo', {
         url: '/cardproductinfo/:id',
         controller : 'cardproductinfo',
         template: require('./views/cardproductinfo.html'),
         resolve:{
           cardproductinfo : function(cardservice){
                 return cardservice.cardproductinfo();
           },
           cardresources : function(cardservice){
                 return cardservice.cardresources();
           },
           cardproduct_cardpoollist : function(cardservice){
                 return cardservice.cardproduct_cardpoollist();
           },
           cardproduct_ticketlist : function(cardservice){
                 return cardservice.cardproduct_ticketlist();
           }
           

           

         }
       })

};

module.exports = router;
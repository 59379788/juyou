/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.tkttype', {
        url: '/tkttype/:placeid',
        controller : 'tkttype',
        templateUrl : 'abc.html',
        template: require('./views/tkttype.html'),
        resolve:{
            viewlist : function(productservice){
                return productservice.viewlist;
            },
            tktlist : function(productservice){
                return productservice.tktlist();
            },
            tktupdate : function(productservice){
                return productservice.tktupdate();
            },
            updateTicketPeriod : function(productservice){
                return productservice.updateTicketPeriod();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            str2date : function(utilservice){
                return utilservice.str2date;
            }
        }
      })

      .state('app.tkttypecreate', {
        url: '/tkttypecreate/:placeid',
        controller : 'tkttypecreate',
        template: require('./views/tkttypemodel.html'),
        resolve:{
            viewlist : function(viewservice){
                return viewservice.slist;
            },
            tktcreate : function(productservice){
                return productservice.tktcreate();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            placeinfo : function(placeservice){
                return placeservice.info();
            },
            makeArr : function(productservice){
                return productservice.makeArr;
            },
            makeStr : function(productservice){
                return productservice.makeStr;
            },
            str2date : function(utilservice){
                return utilservice.str2date;
            }
        }
      })

      .state('app.edittkttype', {
        url: '/tkttypeedit/:id',
        controller : 'tkttypeedit',
        template: require('./views/tkttypemodel.html'),
        resolve:{
            tktinfo : function(productservice){
                return productservice.tktinfo();
            },
            tktupdate : function(productservice){
                return productservice.tktupdate();
            },
            viewlist : function(productservice){
                return productservice.viewlist;
            },
            placeinfo : function(placeservice){
                return placeservice.info();
            },
            makeArr : function(productservice){
                return productservice.makeArr;
            },
            makeStr : function(productservice){
                return productservice.makeStr;
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            str2date : function(utilservice){
                return utilservice.str2date;
            }
        }
      })

      .state('app.tkttypeattr', {
        url: '/tkttypeattr',
        controller : 'tkttypeattr',
        template: require('./views/tkttypeattr.html'),
        resolve:{
            attrlist : function(productservice){
                return productservice.attrlist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
      })

      .state('app.tkttypeattrcreate', {
        url: '/tkttypeattrcreate',
        controller : 'tkttypeattrcreate',
        template: require('./views/tkttypeattrmodel.html'),
        resolve:{
            attrcreate : function(productservice){
                return productservice.attrcreate();
            }
        }
      })

      .state('app.tkttypeattredit', {
        url: '/tkttypeattredit/:type_attr',
        controller : 'tkttypeattredit',
        template: require('./views/tkttypeattrmodel.html'),
        resolve:{
            attrinfo : function(productservice){
                return productservice.attrinfo();
            },
            attrupdate : function(productservice){
                return productservice.attrupdate();
            }
        }
      })

      .state('app.tktgoods', {
        url: '/goodslist',
        controller : 'tktgoods',
        template: require('./views/tktgoods.html'),
        resolve:{
            goodslist : function(productservice){
                return productservice.goodslist();
            },
            goodsupdate : function(productservice){
                return productservice.goodsupdate();
            },
            goodsup : function(productservice){
                return productservice.goodsup();
            },
            goodsdown : function(productservice){
                return productservice.goodsdown();
            }
        }
      })

      .state('app.creategoods', {
        url: '/goods',
        controller : 'tktgoodscreate',
        template: require('./views/tktgoodsmodel.html'),
        resolve:{
            goodscreate : function(productservice){
                return productservice.goodscreate();
            },
            viewlist : function(productservice){
                return productservice.viewlist;
            },
            attrlistsel : function(productservice){
                return productservice.attrlistsel;
            },
            typelist : function(productservice){
                return productservice.typelist();
            }
        }
      })

      .state('app.editgoods', {
        url: '/goods/:id',
        controller : 'tktgoodsupdate',
        template: require('./views/tktgoodsmodel.html'),
        resolve:{
            goodsupdate : function(productservice){
                return productservice.goodsupdate();
            },
            goodsinfo : function(productservice){
                return productservice.goodsinfo();
            },
            viewlist : function(productservice){
                return productservice.viewlist;
            },
            attrlistsel : function(productservice){
                return productservice.attrlistsel;
            },
            typelist : function(productservice){
                return productservice.typelist();
            },
            goodsdetailcreate : function(productservice){
                return productservice.goodsdetailcreate();
            },
            goodsdetaillist : function(productservice){
                return productservice.goodsdetaillist();
            },
            goodsdetaildelete : function(productservice){
                return productservice.goodsdetaildelete();
            }
        }
      })

	.state('app.tktsale', {
        url: '/salelist',
        controller : 'tktsale',
        template: require('./views/tktsale.html'),
        resolve:{
            salecreate : function(productservice){
                return productservice.salecreate();
            },
            dictbytypelist : function(productservice){
                return productservice.dictbytypelist;
            },
            salelist : function(productservice){
                return productservice.salelist();
            },
            saleupdate : function(productservice){
                return productservice.saleupdate();
            },
            saleup : function(productservice){
                return productservice.saleup();
            },
            saledown : function(productservice){
                return productservice.saledown();
            },
            viewlist : function(productservice){
                return productservice.viewlist;
            },
            saleinfo : function(productservice){
                return productservice.saleinfo();
            },
            saleupdate : function(productservice){
                return productservice.saleupdate();
            },
            goodlist : function(productservice){
                return productservice.goodlist();
            },
            saledetailcreate : function(productservice){
                return productservice.saledetailcreate();
            },
            saledetaillist : function(productservice){
                return productservice.saledetaillist();
            },
            saledetaildelete : function(productservice){
                return productservice.saledetaildelete();
            },
            //政府补贴
            salegovsubsidycreate : function(productservice){
                return productservice.salegovsubsidycreate();
            },
            salegovsubsidyupdate : function(productservice){
                return productservice.salegovsubsidyupdate();
            },
            salegovsubsidyinfo : function(productservice){
                return productservice.salegovsubsidyinfo();
            },
            //居游补贴
            salejuyousubsidycreate : function(productservice){
                return productservice.salejuyousubsidycreate();
            },
            salejuyousubsidyupdate : function(productservice){
                return productservice.salejuyousubsidyupdate();
            },
            salejuyousubsidyinfo : function(productservice){
                return productservice.salejuyousubsidyinfo();
            },
            //销售品类型查询功能模块
            salecategorylist : function(productservice){
                return productservice.salecategorylist();
            },
            dictbytypelist : function(productservice){
                return productservice.dictbytypelist;
            },
            talist : function(depositservice){
                return depositservice.talist;
            },
            sellerList : function(productservice){
                return productservice.sellerList();
            },
            tstcreate : function(productservice){
                return productservice.tstcreate();
            },
            tststart : function(productservice){
                return productservice.tststart();
            },
            tststop : function(productservice){
                return productservice.tststop();
            },

            sellerListno : function(productservice){
                return productservice.sellerListno();
            },
            tstcreateno : function(productservice){
                return productservice.tstcreateno();
            },
            tststartno : function(productservice){
                return productservice.tststartno();
            },
            tststopno : function(productservice){
                return productservice.tststopno();
            },
            saveSaleInteral : function(productservice){
                return productservice.saveSaleInteral();
            },
            findSaleFenRun : function(productservice){
                return productservice.findSaleFenRun();
            },
            saveSaleFenRun : function(productservice){
                return productservice.saveSaleFenRun();
            },
            findsaleintegrallist : function(productservice){
                return productservice.findsaleintegrallist();
            },


            //系统确认模块
            affirmcreate : function(productservice){
                return productservice.affirmcreate();
            },
            affirminfo : function(productservice){
                return productservice.affirminfo();
            },
            affirmupdate : function(productservice){
                return productservice.affirmupdate();
            },

            //短信模版列表
            smstmplist : function(productservice){
                return productservice.smstmplist();
            },

            //限时购
            flashsalecreate : function(productservice){
                return productservice.flashsalecreate();
            },
            flashsaleinfo : function(productservice){
                return productservice.flashsaleinfo();
            },
            flashsaleupdate : function(productservice){
                return productservice.flashsaleupdate();
            },

            getDate : function(utilservice){
                return utilservice.getDate;
            },
            str2date : function(utilservice){
                return utilservice.str2date;
            },
            date2str : function(utilservice){
                return utilservice.date2str;
            },

            attrlistsel : function(productservice){
               return productservice.attrlistsel;
            },
            
        }
      })

	.state('app.createsale', {
        url: '/sale',
        controller : 'tktsalecreate',
        template: require('./views/tktsalemodel.html'),
        resolve:{
            viewlist : function(productservice){
                return productservice.viewlist;
            },
            salecreate : function(productservice){
                return productservice.salecreate();
            },
            dictbytypelist : function(productservice){
                return productservice.dictbytypelist;
            },
            salelist : function(productservice){
                return productservice.salelist();
            },
            saleupdate : function(productservice){
                return productservice.saleupdate();
            },
            saleup : function(productservice){
                return productservice.saleup();
            },
            saledown : function(productservice){
                return productservice.saledown();
            },
            viewlist : function(productservice){
                return productservice.viewlist;
            },
            saleinfo : function(productservice){
                return productservice.saleinfo();
            },
            saleupdate : function(productservice){
                return productservice.saleupdate();
            },
            goodlist : function(productservice){
                return productservice.goodlist();
            },
            saledetailcreate : function(productservice){
                return productservice.saledetailcreate();
            },
            saledetaillist : function(productservice){
                return productservice.saledetaillist();
            },
            saledetaildelete : function(productservice){
                return productservice.saledetaildelete();
            },
            findsaleintegrallist : function(productservice){
                return productservice.findsaleintegrallist();
            },
            //政府补贴
            salegovsubsidycreate : function(productservice){
                return productservice.salegovsubsidycreate();
            },
            salegovsubsidyupdate : function(productservice){
                return productservice.salegovsubsidyupdate();
            },
            salegovsubsidyinfo : function(productservice){
                return productservice.salegovsubsidyinfo();
            },
            //居游补贴
            salejuyousubsidycreate : function(productservice){
                return productservice.salejuyousubsidycreate();
            },
            salejuyousubsidyupdate : function(productservice){
                return productservice.salejuyousubsidyupdate();
            },
            salejuyousubsidyinfo : function(productservice){
                return productservice.salejuyousubsidyinfo();
            },
            //销售品类型查询功能模块
            salecategorylist : function(productservice){
                return productservice.salecategorylist();
            },
            dictbytypelist : function(productservice){
                return productservice.dictbytypelist;
            },
            
            
            
            saveSaleInteral : function(productservice){
                return productservice.saveSaleInteral();
            },
            findSaleFenRun : function(productservice){
                return productservice.findSaleFenRun();
            },
            saveSaleFenRun : function(productservice){
                return productservice.saveSaleFenRun();
            },
        }
      })

	.state('app.editsale', {
        url: '/sale/:id',
        controller : 'tktsaleupdate',
        template: require('./views/tktsalemodel.html'),
        resolve:{
        	viewlist : function(productservice){
                return productservice.viewlist;
            },
        	saleinfo : function(productservice){
                return productservice.saleinfo();
            },
            saleupdate : function(productservice){
                return productservice.saleupdate();
            },
            goodlist : function(productservice){
                return productservice.goodlist();
            },
            saledetailcreate : function(productservice){
                return productservice.saledetailcreate();
            },
            saledetaillist : function(productservice){
                return productservice.saledetaillist();
            },
            saledetaildelete : function(productservice){
                return productservice.saledetaildelete();
            },
            findsaleintegrallist : function(productservice){
                return productservice.findsaleintegrallist();
            },
            //政府补贴
            salegovsubsidycreate : function(productservice){
                return productservice.salegovsubsidycreate();
            },
            salegovsubsidyupdate : function(productservice){
                return productservice.salegovsubsidyupdate();
            },
            salegovsubsidyinfo : function(productservice){
                return productservice.salegovsubsidyinfo();
            },
            //居游补贴
            salejuyousubsidycreate : function(productservice){
                return productservice.salejuyousubsidycreate();
            },
            salejuyousubsidyupdate : function(productservice){
                return productservice.salejuyousubsidyupdate();
            },
            salejuyousubsidyinfo : function(productservice){
                return productservice.salejuyousubsidyinfo();
            },
            //销售品类型查询功能模块
            salecategorylist : function(productservice){
                return productservice.salecategorylist();
            },
            dictbytypelist : function(productservice){
                return productservice.dictbytypelist;
            },
            
            
            
            saveSaleInteral : function(productservice){
                return productservice.saveSaleInteral();
            },

            attrlistsel : function(productservice){
               return productservice.attrlistsel;
            },
            findSaleFenRun :  function(productservice){
                return productservice.findSaleFenRun();
            },
            saveSaleFenRun :  function(productservice){
                return productservice.saveSaleFenRun();
            }
        }
      })



    //销售品类型管理
    .state('app.salecategory', {
        url: '/salecategory',
        controller : 'salecategory',
        template: require('./views/salecategory.html'),
        resolve:{
            salecategorylist : function(productservice){
                return productservice.salecategorylist();
            },
            salecategoryinsert : function(productservice){
                return productservice.salecategoryinsert();
            },
            salecategorydelete : function(productservice){
                return productservice.salecategorydelete();
            },
            dictbytypelist : function(productservice){
                return productservice.dictbytypelist;
            }
        }
      })

    //保险管理
    .state('app.insurance', {
        url: '/insurance',
        controller : 'insurance',
        template: require('./views/insurance.html'),
        resolve:{
            ins : function(productservice){
                return productservice.insmodel;
            },
            inslist : function(productservice){
                return productservice.queryInsurance;
            },
            createins : function(productservice){
                return productservice.createInsurance;
            },
            startins : function(productservice){
                return productservice.startInsurance;
            },
            stopins : function(productservice){
                return productservice.stopInsurance;
            }
        }
      })

    .state('app.tktskgoods', {
        url: '/skgoodslist',
        controller : 'tktskgoods',
        template: require('./views/tktskgoods.html'),
        resolve:{
            skgoodslist : function(productservice){
                return productservice.skgoodslist();
            },
            saveprice : function(productservice){
                return productservice.saveprice();
            },
            middlebusiness : function(productservice){
                return productservice.middlebusiness();
            }
        }
      })

    .state('app.awardpolicy', {
        url: '/awardpolicy/:sale_code',
        controller : 'awardpolicy',
        template: require('./views/awardpolicy.html'),
        resolve:{
            rewardprice : function(productservice){
                return productservice.rewardprice();
            },
            rewardlist : function(productservice){
                return productservice.rewardlist();
            },
            rewardlistdel : function(productservice){
                return productservice.rewardlistdel();
            }  
        }
      })

    .state('app.middlebusiness', {
        url: '/middlebusiness',
        controller : 'middlebusiness',
        template: require('./views/middlebusiness.html'),
        resolve:{
            middlebusiness : function(productservice){
                return productservice.middlebusiness();
            }  
        }
      })

    .state('app.newproduct', {
        url: '/product/new/:id',
        controller : 'newproduct',
        templateUrl : 'product.html',
        template: require('./views/product.html'),
        resolve:{
            // viewlist : function(productservice){
            //     return productservice.viewlist;
            // },
            // tktlist : function(productservice){
            //     return productservice.tktlist();
            // },
            // tktupdate : function(productservice){
            //     return productservice.tktupdate();
            // },
            date2str : function(utilservice){
                return utilservice.getDate;
            },
            str2date : function(utilservice){
                return utilservice.str2date;
            }
        }
      })
};

module.exports = router;
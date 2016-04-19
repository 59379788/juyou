/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.tkttype', {
        url: '/tkttype/:placeid',
        controller : 'tkttype',
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
        url: '/goodlist',
        controller : 'tktgoods',
        template: require('./views/tktgoods.html'),
        resolve:{
            goodslist : function(productservice){
                return productservice.goodslist();
            },
            goodsupdate : function(productservice){
                return productservice.goodsupdate();
            }
        }
      })

      .state('app.creategoods', {
        url: '/good',
        controller : 'tktgoodscreate',
        template: require('./views/tktgoodsmodel.html'),
        resolve:{
            goodscreate : function(productservice){
                return productservice.goodscreate();
            },
            goodsdetailcreate : function(productservice){
                return productservice.goodsdetailcreate();
            },
            goodsdetaillist : function(productservice){
                return productservice.goodsdetaillist();
            },
            goodsdetaildelete : function(productservice){
                return productservice.goodsdetaildelete();
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
            },
            sel_id : function(productservice){
                return productservice.sel_id();
            },
            goodsstate : function(productservice){
                return productservice.goodsstate;
            }
        }
      })

      .state('app.editgoods', {
        url: '/good/:id',
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
            },
            goodsstate : function(productservice){
                return productservice.goodsstate;
            }
        }
      })

	.state('app.tktsale', {
        url: '/salelist',
        controller : 'tktsale',
        template: require('./views/tktsale.html'),
        resolve:{
            salelist : function(productservice){
                return productservice.salelist();
            },
            saleupdate : function(productservice){
                return productservice.saleupdate();
            }
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
            sale_id : function(productservice){
                return productservice.sale_id();
            }
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
            salehalfupdate : function(productservice){
                return productservice.salehalfupdate();
            },
            salehalfinfo : function(productservice){
                return productservice.salehalfinfo();
            }
        }
      })


};

module.exports = router;
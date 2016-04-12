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
        url: '/tkttypecreate',
        controller : 'tkttypecreate',
        template: require('./views/tkttypemodel.html'),
        resolve:{
            viewlist : function(productservice){
                return productservice.viewlist;
            },
            tktcreate : function(productservice){
                return productservice.tktcreate();
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
        //controller : 'platformdeposit',
        template: require('./views/tkttypeattr.html')
        // ,
        // resolve:{
        //  insert : function(docservice){
        //      return docservice.insert();
        //  },
        //  group : function(docservice){
        //      return docservice.group();
        //  }
        // }
      })

      .state('app.tktgoods', {
        url: '/tktgoods',
        //controller : 'platformdeposit',
        template: require('./views/tktgoods.html')
        // ,
        // resolve:{
        //  insert : function(docservice){
        //      return docservice.insert();
        //  },
        //  group : function(docservice){
        //      return docservice.group();
        //  }
        // }
      })


};

module.exports = router;
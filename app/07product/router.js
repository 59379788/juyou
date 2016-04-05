/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.tkttype', {
        url: '/tkttype',
        controller : 'tkttype',
        template: require('./views/tkttype.html'),
        resolve:{
            view : function(productservice){
                return productservice.slist;
            },
            list : function(productservice){
                return productservice.list();
            }
        }
      })

      .state('app.tkttypecreate', {
        url: '/tkttypecreate',
        //controller : 'tkttypecreate',
        template: require('./views/tkttypemodel.html')
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
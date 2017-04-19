 
 /**
 * 子模块路由
 * ml
 */
var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

      //分类列表
      .state('app.categorylist', {
         url: '/categorylist',
         controller : 'categorylist',
         template: require('./views/categorylist.html'),
         resolve:{
            findCategoryList : function(ylbservice){
               return ylbservice.findCategoryList();
            },
            updateStartState : function(ylbservice){
                 return ylbservice.updateStartState();
            },
            updateDiasbleState : function(ylbservice){
               return ylbservice.updateDiasbleState();
            }
         }
      }) 

      //添加分类
      .state('app.addYlbCategory', {
         url: '/addYlbCategory/:id',
         controller : 'addYlbCategory',
         template: require('./views/addYlbCategory.html'),
         resolve:{
            saveCategory : function(ylbservice){
               return ylbservice.saveCategory();
            },
            findPidList : function(ylbservice){
                 return ylbservice.findPidList();
            },
            findDictionaryList : function(ylbservice){
               return ylbservice.findDictionaryList();
            },
            getCategory : function(ylbservice){
               return ylbservice.getCategory();
            }
         }
      })           

      //字典列表
      .state('app.dicclist', {
         url: '/dicclist',
         controller : 'dicclist',
         template: require('./views/dicclist.html'),
         resolve:{
            findDictionaryList : function(ylbservice){
               return ylbservice.findDictionaryList();
            },
            delDictionary : function(ylbservice){
                 return ylbservice.delDictionary();
            }
         }
      })      

      //添加字典
      .state('app.addYlbDicc', {
         url: '/addYlbDicc/:id',
         controller : 'addYlbDicc',
         template: require('./views/addYlbDicc.html'),
         resolve:{
            saveDictionary : function(ylbservice){
               return ylbservice.saveDictionary();
            },
            getDictionary : function(ylbservice){
                 return ylbservice.getDictionary();
            }
         }
      })      

      //文章列表
      .state('app.viewarticallist', {
         url: '/viewarticallist',
         controller : 'viewarticallist',
         template: require('./views/viewarticallist.html'),
         resolve:{
            findArticleList : function(ylbservice){
               return ylbservice.findArticleList();
            },
            StartArticleState : function(ylbservice){
                 return ylbservice.StartArticleState();
            },
            DisableArticleState : function(ylbservice){
                 return ylbservice.DisableArticleState();
            }
         }
      })   

      //添加文章
      .state('app.addViewArtical', {
         url: '/addViewArtical/:id',
         controller : 'addViewArtical',
         template: require('./views/addViewArtical.html'),
         resolve:{
            saveArticle : function(ylbservice){
               return ylbservice.saveArticle();
            },
            getArticle : function(ylbservice){
                 return ylbservice.getArticle();
            },
            findDictionaryList : function(ylbservice){
                 return ylbservice.findDictionaryList();
            }
         }
      })      

      //添加文章
      .state('app.categoryTree', {
         url: '/categoryTree/:id',
         controller : 'categoryTree',
         template: require('./views/categoryTree.html'),
         resolve:{
            // saveArticle : function(ylbservice){
            //    return ylbservice.saveArticle();
            // },
            // getArticle : function(ylbservice){
            //      return ylbservice.getArticle();
            // },
            // findPidList : function(ylbservice){
            //      return ylbservice.findPidList();
            // }
         }
      })      


}

module.exports = router;

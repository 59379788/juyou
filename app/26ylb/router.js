 
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

      //交通管理
      .state('app.trafficarticallist', {
         url: '/trafficarticallist/:id',
         controller : 'trafficarticallist',
         template: require('./views/trafficarticallist.html'),
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

      //添加交通文章
      .state('app.addTrafficArtical', {
         url: '/addTrafficArtical/:id',
         controller : 'addTrafficArtical',
         template: require('./views/addTrafficArtical.html'),
         resolve:{
            saveArticle : function(ylbservice){
               return ylbservice.saveArticle();
            },
            getArticle : function(ylbservice){
                 return ylbservice.getArticle();
            },
            findPidList : function(ylbservice){
                 return ylbservice.findPidList();
            }
         }
      })    

      //添加其他
      .state('app.otherarticallist', {
         url: '/otherarticallist/:id',
         controller : 'otherarticallist',
         template: require('./views/otherarticallist.html'),
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
       //美食
      .state('app.foodlist', {
         url: '/foodlist/:id',
         controller : 'foodlist',
         template: require('./views/foodlist.html'),
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
      //添加美食
      .state('app.addFoodArtical', {
         url: '/addFoodArtical/:id',
         controller : 'addFoodArtical',
         template: require('./views/addFoodArtical.html'),
         resolve:{
            saveArticle : function(ylbservice){
               return ylbservice.saveArticle();
            },
            getArticle : function(ylbservice){
                 return ylbservice.getArticle();
            },
            findPidList : function(ylbservice){
                 return ylbservice.findPidList();
            }
         }
      })        
      //住宿
      .state('app.accommodationlist', {
         url: '/accommodationlist/:id',
         controller : 'accommodationlist',
         template: require('./views/accommodationlist.html'),
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
      //添加住宿
      .state('app.addAccommodationArtical', {
         url: '/addAccommodationArtical/:id',
         controller : 'addAccommodationArtical',
         template: require('./views/addAccommodationArtical.html'),
         resolve:{
            saveArticle : function(ylbservice){
               return ylbservice.saveArticle();
            },
            getArticle : function(ylbservice){
                 return ylbservice.getArticle();
            },
            findPidList : function(ylbservice){
                 return ylbservice.findPidList();
            }
         }
      })           
       //休闲
      .state('app.leisurelist', {
         url: '/leisurelist/:id',
         controller : 'leisurelist',
         template: require('./views/leisurelist.html'),
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
      //添加休闲
      .state('app.addLeisureArtical', {
         url: '/addLeisureArtical/:id',
         controller : 'addLeisureArtical',
         template: require('./views/addLeisureArtical.html'),
         resolve:{
            saveArticle : function(ylbservice){
               return ylbservice.saveArticle();
            },
            getArticle : function(ylbservice){
                 return ylbservice.getArticle();
            },
            findPidList : function(ylbservice){
                 return ylbservice.findPidList();
            }
         }
      })               
       //购物
      .state('app.shoplist', {
         url: '/shoplist/:id',
         controller : 'shoplist',
         template: require('./views/shoplist.html'),
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
      //添加购物
      .state('app.addShopArtical', {
         url: '/addShopArtical/:id',
         controller : 'addShopArtical',
         template: require('./views/addShopArtical.html'),
         resolve:{
            saveArticle : function(ylbservice){
               return ylbservice.saveArticle();
            },
            getArticle : function(ylbservice){
                 return ylbservice.getArticle();
            },
            findPidList : function(ylbservice){
                 return ylbservice.findPidList();
            }
         }
      })                 
      
       //旅游
      .state('app.travellist', {
         url: '/travellist/:id',
         controller : 'travellist',
         template: require('./views/travellist.html'),
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
      //添加旅游
      .state('app.addTravelArtical', {
         url: '/addTravelArtical/:id',
         controller : 'addTravelArtical',
         template: require('./views/addTravelArtical.html'),
         resolve:{
            saveArticle : function(ylbservice){
               return ylbservice.saveArticle();
            },
            getArticle : function(ylbservice){
                 return ylbservice.getArticle();
            },
            findPidList : function(ylbservice){
                 return ylbservice.findPidList();
            }
         }
      })                      
  
  
  




}

module.exports = router;

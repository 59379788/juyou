/**
 * 子模块路由
 * ml
 */
var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

       //app首页热门景区列表
      .state('app.juyouappviewlist', {
         url: '/juyouappviewlist',
         controller : 'juyouappviewlist',
         template: require('./views/juyouappviewlist.html'),
         resolve:{
            findPlaceHotList : function(juyouglservice){
               return juyouglservice.findPlaceHotList();
            },
            savePlaceHot : function(juyouglservice){
                 return juyouglservice.savePlaceHot();
            },
            getPlaceHot : function(juyouglservice){
               return juyouglservice.getPlaceHot();
            },
            updatePlaceHot : function(juyouglservice){
               return juyouglservice.updatePlaceHot();
            },
            delPlaceHot : function(juyouglservice){
               return juyouglservice.delPlaceHot();
            },
            viewlist : function(juyouglservice){
               return juyouglservice.viewlist();
            },
            usebtn : function(juyouglservice){
               return juyouglservice.usebtn();
            }
         }
      })      

    //   //添加热门景区
    //   .state('app.addplacehot', {
    //      url: '/addplacehot',
    //      controller : 'addplacehot',
    //      template: require('./views/addplacehot.html'),
    //      resolve:{
    //         findPlaceHotList : function(juyouglservice){
    //            return juyouglservice.findPlaceHotList();
    //         },
    //         savePlaceHot : function(juyouglservice){
    //              return juyouglservice.savePlaceHot();
    //         },
    //         getPlaceHot : function(juyouglservice){
    //            return juyouglservice.getPlaceHot();
    //         },
    //         updatePlaceHot : function(juyouglservice){
    //            return juyouglservice.updatePlaceHot();
    //         },
    //         delPlaceHot : function(juyouglservice){
    //            return juyouglservice.delPlaceHot();
    //         }
    //      }
    //   })      


}

module.exports = router;
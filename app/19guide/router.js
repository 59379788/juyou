/**
 * 子模块路由
 * djp
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.shakedevicelist', {
        url: '/shakedevicelist',
        controller : 'shakedevicelist',
        template: require('./views/shakedevicelist.html'),
        resolve:{
            shakedevicelist : function(guideservice){
                return guideservice.shakedevicelist();
            },
            shakedevicedel : function(guideservice){
                return guideservice.shakedevicedel();
            }
        }
      })


      .state('app.shakedevice', {
        url: '/shakedevice/:id',
        controller : 'shakedevice',
        template: require('./views/shakedevice.html'),
        resolve:{
            shakedevice : function(guideservice){
                return guideservice.shakedevice();
            },
            shakedeviceinfo : function(guideservice){
                return guideservice.shakedeviceinfo();
            }
        }
      })

      .state('app.shakeevaluatequestionlist', {
        url: '/shakeevaluatequestionlist',
        controller : 'shakeevaluatequestionlist',
        template: require('./views/shakeevaluatequestionlist.html'),
        resolve:{
            shakeevaluatequestionlist : function(guideservice){
                return guideservice.shakeevaluatequestionlist();
            },
            shakeevaluatequestiondel : function(guideservice){
                return guideservice.shakeevaluatequestiondel();
            }
        }
      })

      .state('app.shakeevaluatequestion', {
        url: '/shakeevaluatequestion/:id',
        controller : 'shakeevaluatequestion',
        template: require('./views/shakeevaluatequestion.html'),
        resolve:{
            shakeevaluatequestion : function(guideservice){
                return guideservice.shakeevaluatequestion();
            },
            shakeevaluatequestioninfo : function(guideservice){
                return guideservice.shakeevaluatequestioninfo();
            }
        }
      })



      .state('app.shakeevaluategrouplist', {
        url: '/shakeevaluategrouplist',
        controller : 'shakeevaluategrouplist',
        template: require('./views/shakeevaluategrouplist.html'),
        resolve:{
            shakeevaluategrouplist : function(guideservice){
                return guideservice.shakeevaluatequestionlist();
            }
        }
      })


};

module.exports = router;
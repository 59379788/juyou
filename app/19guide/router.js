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
            },
            dictbytypelist : function(productservice){
                return productservice.dictbytypelist;
            },
            shakecompanyinfolist : function(guideservice){
                return guideservice.shakecompanyinfolist();
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
                return guideservice.shakeevaluategroup();
            }
           
        }
      })

      .state('app.shakeevaluatetourist', {
        url: '/shakeevaluatetourist/:code',
        controller : 'shakeevaluatetourist',
        template: require('./views/shakeevaluatetourist.html'),
        resolve:{
            shakeevaluatetourist : function(guideservice){
                return guideservice.shakeevaluatetouristlist();
            },
            shakeevaluateanswerlist : function(guideservice){
                return guideservice.shakeevaluateanswerlist();
            },
            shakeanswers : function(guideservice){
                return guideservice.shakeanswers();
            },
            shakeanswer : function(guideservice){
                return guideservice.shakeanswer();
            },
            
            shakegetquestion : function(guideservice){
                return guideservice.shakegetquestion();
            }
        }
      })

      .state('app.shakeanswers', {
        url: '/shakeanswers/:code',
        controller : 'shakeanswers',
        template: require('./views/shakeanswers.html'),
        resolve:{
            shakeanswers : function(guideservice){
                return guideservice.shakeanswers();
            },
            shakeevaluateanswerlist : function(guideservice){
                return guideservice.shakeevaluateanswerlist();
            },
            shakeevaluatecountlist : function(guideservice){
                return guideservice.shakeevaluatecountlist();
            },
            shakeanswer : function(guideservice){
                return guideservice.shakeanswer();
            },
            shakegetquestion : function(guideservice){
                return guideservice.shakegetquestion();
            }

        }
      })
};

module.exports = router;
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
            },
            getDate : function(utilservice){
                return utilservice.getDate;
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
            ,
            shakegroupinfolist : function(guideservice){
                return guideservice.shakegroupinfolist();
            }
            ,
            getDate : function(utilservice){
                return utilservice.getDate;
            }
            ,
            savedevicerecode : function(guideservice){
                return guideservice.savedevicerecode();
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

      .state('app.evaluatechart', {
        url: '/evaluatechart',
        controller : 'evaluatechart',
        template: require('./views/evaluatechart.html'),
        resolve:{
        	dictbytypelist : function(productservice){
                return productservice.dictbytypelist;
            },
            shakecompanyinfolist : function(guideservice){
                return guideservice.shakecompanyinfolist();
            },
            shakegroupinfolist : function(guideservice){
                return guideservice.shakegroupinfolist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            shakeanswer : function(guideservice){
                return guideservice.shakeanswer();
            }
        }
      })
      .state('app.evaluatechart1', {
        url: '/evaluatechart1',
        controller : 'evaluatechart1',
        template: require('./views/evaluatechart1.html'),
        resolve:{
            

        }
      })
      .state('app.evaluatechart2', {
        url: '/evaluatechart2',
        controller : 'evaluatechart2',
        template: require('./views/evaluatechart2.html'),
        resolve:{
            

        }
      })
      .state('app.evaluatechart3', {
        url: '/evaluatechart3',
        controller : 'evaluatechart3',
        template: require('./views/evaluatechart3.html'),
        resolve:{
            

        }
      })
};

module.exports = router;
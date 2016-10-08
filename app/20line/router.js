/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.linelist', {
        url: '/linelist',
        controller : 'linelist',
        template: require('./views/linelist.html'),
        resolve:{
            ps : function(lineservice){
                return lineservice.linelist();
            },
            typearray : function(lineservice){
                return lineservice.dictionaries.type;
            },
            deleteline : function(lineservice){
                return lineservice.delline();
            },
            area : function(lineservice){
                return lineservice.getArea();
            },
            fun : function(lineservice){
                return lineservice.fun;
            },
            publishTypearray : function(lineservice){
                return lineservice.publishType;
            },
            startline : function(lineservice){
                return lineservice.start();
            },
            stopline : function(lineservice){
                return lineservice.stop();
            }    
        }
        
      })

      .state('app.createline', {
        url: '/createline',
        controller : 'createline',
        template: require('./views/createline.html'),
        resolve:{
            ps : function(lineservice){
                return lineservice.create();
            },
            line : function(lineservice){
                var n = new lineservice.model();
                angular.extend(n, lineservice.fun);
                return n;
            },
            area : function(lineservice){
                return lineservice.getArea();
            },
            insurance : function(productservice){
                return productservice.getOpenInsurance;
            }    
        }
        
      })
      
      .state('app.editline', {
        url: '/editline/:lineid',
        controller : 'editline',
        template: require('./views/createline.html'),
        resolve:{
            ps : function(lineservice){
                return lineservice.linelist();
            },
            line : function(lineservice){
                return lineservice.line();
            },
            fun : function(lineservice){
                return lineservice.fun;
            },
            editline : function(lineservice){
                return lineservice.editline();
            },
            area : function(lineservice){
                return lineservice.getArea();
            },
            insurance : function(productservice){
                return productservice.getOpenInsurance;
            }
        }
        
      })

      .state('app.lineinfo', {
        url: '/lineinfo/:lineid',
        controller : 'lineinfo',
        template: require('./views/createline.html'),
        resolve:{
            ps : function(lineservice){
                return lineservice.line();
            },
            fun : function(lineservice){
                return lineservice.fun;
            },
            area : function(lineservice){
                return lineservice.getArea();
            },
            insurance : function(productservice){
                return productservice.getOpenInsurance;
            }    
        }
        
      })

      .state('app.group', {
        url: '/group/:lineid',
        controller : 'group',
        template: require('./views/group.html'),
        resolve:{
            teammodel : function(lineservice){
                return lineservice.model;
            },
            createteam : function(lineservice){
                return lineservice.createteam();
            },
            teaminfo : function(lineservice, lineservice){
                //return team.info();
                return lineservice.line();
            }    
        }
        
      })

      .state('app.grouplist', {
        url: '/grouplist/:lineid/:title',
        controller : 'grouplist',
        template: require('./views/grouplist.html'),
        resolve:{
            ps : function(lineservice){
                return lineservice.line();
            },
            list : function(lineservice){
                return lineservice.teamlist();
            },
            shangjia : function(lineservice){
                return lineservice.shangjia();
            },
            xiajia : function(lineservice){
                return lineservice.xiajia();
            },
            del : function(lineservice){
                return lineservice.del();
            },
            finish : function(lineservice){
                return lineservice.finish();
            },
            stateArray : function(lineservice){
                return lineservice.stateArray;
            }    
        }
        
      })

      .state('app.editgroup', {
        url: '/editgroup/:teamid',
        controller : 'editgroup',
        template: require('./views/editgroup.html'),
        resolve:{
            editteam : function(lineservice){
                return lineservice.edit();
            },
            info : function(lineservice){
                return lineservice.info();
            }    
        }
        
      })

};

module.exports = router;
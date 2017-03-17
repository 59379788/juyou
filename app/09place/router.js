/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

        .state('app.newStore', {
            url: '/newstore.html',
            controller : 'createplace',
            template: require('./views/place.html'),
            resolve:{
                'type' : function(){
                    return 'M';
                },
                'placeid' : function(){
                    return '';
                }
            
            }
        })



        .state('app.newView', {
            url: '/newview.html',
            controller : 'createplace',
            template: require('./views/place.html'),
            resolve:{
                'type' : function(){
                    return 'J';
                },
                'placeid' : function(){
                    return '';
                }
            }
        })


        .state('app.editview', {
            url: '/view/:placeid',
            controller : 'createplace',
            template: require('./views/place.html'),
            resolve:{
               'type' : function(){
                    return 'J';
                },
                'placeid' : function(){
                    return '';
                }
            }
          })

      


};

module.exports = router;
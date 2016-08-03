/**
 * 子模块路由
 * djp
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.userinfo', {
        url: '/userinfo',
        controller : 'userinfo',
        template: require('./user/userinfo.html'),
        resolve:{
            userinfo : function(custservice){
                return custservice.userinfo();
            },
            userinfobypapersno : function(custservice){
                return custservice.userinfobypapersno();
            },
            updateUserAuthInfo : function(custservice){
                return custservice.updateUserAuthInfo();
            },
            edituserinfo : function(custservice){
                return custservice.edituserinfo();
            },
            oneuserinfo : function(custservice){
                return custservice.oneuserinfo();
            },
            updateUserSubsidy : function(custservice){
                return custservice.updateUserSubsidy();
            }
        }
      })

      .state('app.createuserinfo', {
        url: '/createuserinfo',
        controller : 'createuserinfo',
        template: require('./user/createuserinfo.html'),
        resolve:{
            createuserinfo : function(custservice){
                return custservice.createuserinfo();
            }
        }
      })

      .state('app.cardA', {
        url: '/cardA',
        controller : 'cardA',
        template: require('./user/cardA.html'),
        resolve:{
            cardA : function(custservice){
                return custservice.cardA();
            },
            updateCardPass : function(custservice){
                return custservice.updateCardPass();
            }
        }
      })

      .state('app.cardB', {
        url: '/cardB',
        controller : 'cardB',
        template: require('./user/cardB.html'),
        resolve:{
            cardB : function(custservice){
                return custservice.cardB();
            }
        }
      })

      .state('app.infoticket', {
        url: '/infoticket',
        controller : 'infoticket',
        template: require('./user/infoticket.html'),
        resolve:{
            infoticket : function(custservice){
                return custservice.infoticket();
            },
            destoryticket : function(custservice){
                return custservice.destoryticket();
            }
        }
      })

      .state('app.redpackage', {
        url: '/redpackage',
        controller : 'redpackage',
        template: require('./user/redpackage.html'),
        resolve:{
            redpackage : function(custservice){
                return custservice.redpackage();
            }
        }
      })

      .state('app.userorderlist', {
        url: '/userorderlist',
        controller : 'userorderlist',
        template: require('./user/orderlist.html'),
        resolve:{
            orderlist : function(custservice){
                return custservice.orderlist();
            }
        }
      })

      .state('app.sendmessage', {
        url: '/sendmessage',
        controller : 'sendmessage',
        template: require('./user/sendmessage.html'),
        resolve:{
            sendmessage : function(custservice){
                return custservice.sendmessage();
            }
        }
      })

      .state('app.orderback', {
        url: '/orderbacklist',
        controller : 'orderbacklist',
        template: require('./user/orderbacklist.html'),
        resolve:{
            orderbacklist : function(custservice){
                return custservice.orderbacklist();
            },
            orderback : function(custservice){
                return custservice.orderback();
            }
        }
      })

      .state('app.carduserinfo', {
        url: '/carduserinfo',
        controller : 'carduserinfo',
        template: require('./user/carduserinfo.html'),
        resolve:{
            carduserinfo : function(custservice){
                return custservice.carduserinfo();
            }
        }
      })

      .state('app.destoryticketrecord', {
        url: '/destoryticketrecord',
        controller : 'destoryticketrecord',
        template: require('./user/destoryticketrecord.html'),
        resolve:{
            destoryticketrecord : function(custservice){
                return custservice.destoryticketrecord();
            }
        }
      })


};

module.exports = router;
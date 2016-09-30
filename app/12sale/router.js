/**
 * 子模块路由
 * dlq
 */

var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  .state('app.selling', {
        url: '/selling/:type',
        controller : 'selling',
        template: require('./views/selling.html'),
        resolve:{
            namelist : function(sellingservice){
                return sellingservice.namelist();
            },
            info : function(sellingservice){
                return sellingservice.info();
            },
            createorder : function(orderservice){
                return orderservice.createorder();
            },
            createSubsidyOrder : function(orderservice){
                return orderservice.createSubsidyOrder();
            },
            IdentityCodeValid : function(utilservice){
                return utilservice.IdentityCodeValid;
            },
            getuserinfobymobile : function(memberservice){
                return memberservice.getuserinfobymobile();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }
        }
        
      })

      .state('app.sellinggroup', {
        url: '/sellinggroup/:type',
        controller : 'sellinggroup',
        template: require('./views/sellinggroup.html'),
        resolve:{
            grouplist : function(sellingservice){
                return sellingservice.grouplist();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            update : function(sellingservice){
                return sellingservice.update();
            },
            groupdetail : function(sellingservice){
                return sellingservice.groupdetail();
            },
            backlist : function(sellingservice){
                return sellingservice.backlist();
            },
            //报名
            goodlist : function(sellingservice){
                return sellingservice.goodlist();
            },
            getattrbycode : function(sellingservice){
                return sellingservice.getattrbycode();
            },
            usersubsibyquery : function(sellingservice){
                return sellingservice.usersubsibyquery();
            },
            signup : function(sellingservice){
                return sellingservice.signup();
            },
            //报名详情
            infolist : function(sellingservice){
                return sellingservice.infolist();
            },
            cancleGroup : function(sellingservice){
                return sellingservice.cancleGroup();
            },
            delsignup : function(sellingservice){
                return sellingservice.delsignup();
            },
            //编辑
            groupsalelist : function(sellingservice){
                return sellingservice.groupsalelist;
            },
            groupone : function(sellingservice){
                return sellingservice.groupone();
            },
            updatedetail : function(sellingservice){
                return sellingservice.updatedetail();
            },
            userinfo : function(sellingservice){
                return sellingservice.userinfo;
            },
            //新建
            groupsale : function(sellingservice){
                return sellingservice.groupsale();
            },
            createOrder : function(sellingservice){
                return sellingservice.createOrder();
            },
            //出票确认
            outTicketConfirmation : function(sellingservice){
                return sellingservice.outTicketConfirmation();
            }
        }
        
      })


      .state('app.createsellinggroup', {
        url: '/createsellinggroup',
        controller : 'sellinggroupcreate',
        template: require('./views/sellinggroupmodel.html'),
        resolve:{
            groupsalelist : function(sellingservice){
                return sellingservice.groupsalelist;
            },
            groupsale : function(sellingservice){
                return sellingservice.groupsale();
            },
            createOrder : function(sellingservice){
                return sellingservice.createOrder();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            },
            userinfo : function(sellingservice){
                return sellingservice.userinfo;
            }
        }
      })

      .state('app.editsellinggroup', {
        url: '/editsellinggroup/:code',
        controller : 'sellinggroupupdate',
        template: require('./views/sellinggroupmodel.html'),
        resolve:{
            groupsalelist : function(sellingservice){
                return sellingservice.groupsalelist;
            },
            groupone : function(sellingservice){
                return sellingservice.groupone();
            },
            update : function(sellingservice){
                return sellingservice.update();
            },
            updatedetail : function(sellingservice){
                return sellingservice.updatedetail();
            },
            userinfo : function(sellingservice){
                return sellingservice.userinfo;
            }
        }
      })

      .state('app.sellingdetail', {
        url: '/sellingdetail/:code',
        controller : 'sellingdetail',
        template: require('./views/sellingdetail.html'),
        resolve:{
            groupdetail : function(sellingservice){
                return sellingservice.groupdetail();
            }
        }
        
      })

      .state('app.infosellinggroup', {
        url: '/infosellinggroup/:code',
        controller : 'sellinggroupinfo',
        template: require('./views/sellinggroupinfo.html'),
        resolve:{
        	infolist : function(sellingservice){
                return sellingservice.infolist();
            },
            cancleGroup : function(sellingservice){
                return sellingservice.cancleGroup();
            }
        }
      })

      .state('app.signupsellinggroup', {
        url: '/signupsellinggroup/:code',
        controller : 'sellinggroupsignup',
        template: require('./views/sellinggroupsignup.html'),
        resolve:{
            goodlist : function(sellingservice){
                return sellingservice.goodlist();
            },
            getattrbycode : function(sellingservice){
                return sellingservice.getattrbycode();
            },
            usersubsibyquery : function(sellingservice){
                return sellingservice.usersubsibyquery();
            },
            signup : function(sellingservice){
                return sellingservice.signup();
            }
        }
      })

      .state('app.autwintic', {
        url: '/autwintic',
        controller : 'autwintic',
        template: require('./views/autwintic.html'),
        resolve:{
            search : function(sellingservice){
                return sellingservice.search();
            },
            sale_01 : function(sellingservice){
                return sellingservice.sale_01();
            },
            insertWinterTicketOrder : function(sellingservice){
                return sellingservice.insertWinterTicketOrder();
            },
            createOrder : function(sellingservice){
                return sellingservice.createOrder();
            }
        }
      })


};

module.exports = router;
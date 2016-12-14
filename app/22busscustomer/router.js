var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider
       // 申请列表
 	   .state('app.skacountlist', {
         url: '/skacountlist',
         controller : 'skacountlist',
         template: require('./views/skacountlist.html'),
         resolve:{
            
          customerlist : function(busscustomerservice){
                 return busscustomerservice.customerlist();
          },
          review : function(busscustomerservice){
                 return busscustomerservice.review();
          },
          role : function(busscustomerservice){
                 return busscustomerservice.role();
          },
          create : function(busscustomerservice){
                 return busscustomerservice.create();
          },
          message : function(busscustomerservice){
                 return busscustomerservice.message();
          },
          userinfo : function(busscustomerservice){
                 return busscustomerservice.userinfo();
          },
          insertnops : function(busscustomerservice){
                 return busscustomerservice.insertnops();
          },
          failed : function(busscustomerservice){
                 return busscustomerservice.failed();
          },
          confirmauthority : function(busscustomerservice){
                 return busscustomerservice.confirmauthority();
          }
       
         }
       })


       .state('app.creataccount', {
         url: '/creataccount/:id',
         controller : 'creataccount',
         template: require('./views/creataccount.html'),
         resolve:{
          create : function(busscustomerservice){
                 return busscustomerservice.create();
          },
          message : function(busscustomerservice){
                 return busscustomerservice.message();
          },
          insertnops : function(busscustomerservice){
                 return busscustomerservice.insertnops();
          }
       
         }
       })

        .state('app.get2', {
         url: '/get2/:id',
         controller : 'get2',
         template: require('./views/get2.html'),
         resolve:{
            userinfo : function(busscustomerservice){
                 return busscustomerservice.userinfo();
          }
       
         }
       })

        // 供应商申请列表
        .state('app.supplierlist', {
         url: '/supplierlist',
         controller : 'supplierlist',
         template: require('./views/supplierlist.html'),
         resolve:{
            supplierlist : function(busscustomerservice){
                 return busscustomerservice.supplierlist();
            },
            saveconfirm : function(busscustomerservice){
                 return busscustomerservice.saveconfirm();
            }   
          
       
         }
        })

        // 供应商备注填写
        .state('app.supplyremark', {
         url: '/supplyremark',
         controller : 'supplyremark',
         template: require('./views/supplyremark.html'),
         resolve:{
            saveconfirm : function(busscustomerservice){
                 return busscustomerservice.saveconfirm();
            } 
         }
        })

        // 分配权限
        .state('app.assignauthority', {
         url: '/assignauthority',
         controller : 'assignauthority',
         template: require('./views/assignauthority.html'),
         resolve:{
             confirmauthority : function(busscustomerservice){
                 return busscustomerservice.confirmauthority();
             },
             hostlists : function(busscustomerservice){
                 return busscustomerservice.hostlists();
             }

         }
        })


        //一元券订单列表
        .state('app.voucherorderlist', {
         url: '/voucherorderlist',
         controller : 'voucherorderlist',
         template: require('./views/voucherorderlist.html'),
         resolve:{
	          orderlist : function(busscustomerservice){
	                 return busscustomerservice.orderlist();
	          },
	          voucherinfo : function(busscustomerservice){
	                 return busscustomerservice.voucherinfo();
	          },
	          getDate : function(utilservice){
		             return utilservice.getDate;
		      }
         }    
       })

        // 义买义卖
        .state('app.friendly', {
         url: '/friendly',
         controller : 'friendly',
         template: require('./views/friendly.html'),
         resolve:{
            

         }
        })

        // 易买易卖
        .state('app.change', {
         url: '/change',
         controller : 'change',
         template: require('./views/change.html'),
         resolve:{
            

         }
        })

        // 上架
        .state('app.onshelf', {
         url: '/onshelf',
         controller : 'onshelf',
         template: require('./views/onshelf.html'),
         resolve:{
            

         }
        })

        // 申请用户列表
        .state('app.applyuserlist', {
         url: '/applyuserlist',
         controller : 'applyuserlist',
         template: require('./views/applyuserlist.html'),
         resolve:{
            findhelplist : function(busscustomerservice){
                 return busscustomerservice.findhelplist();
            },
            updatestate : function(busscustomerservice){
                 return busscustomerservice.updatestate();
            }

         }
        })
        // 爱心行动申请
        .state('app.loveactionapply', {
         url: '/loveactionapply',
         controller : 'loveactionapply',
         template: require('./views/loveactionapply.html'),
         resolve:{
            updateactivitystateztoone : function(busscustomerservice){
                 return busscustomerservice.updateactivitystateztoone();
            },
            updateactivitystatetothree : function(busscustomerservice){
                 return busscustomerservice.updateactivitystatetothree();
            },
            saveactivity : function(busscustomerservice){
                 return busscustomerservice.saveactivity();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }

         }
        })

        // 爱心捐献申请
        .state('app.lovedonateapply', {
         url: '/lovedonateapply',
         controller : 'lovedonateapply',
         template: require('./views/lovedonateapply.html'),
         resolve:{
            findloveactivercordlist : function(busscustomerservice){
                 return busscustomerservice.findloveactivercordlist();
            },
            updateronationstate : function(busscustomerservice){
                 return busscustomerservice.updateronationstate();
            }

         }
        })

        // 添加商品到为你推荐列表
        .state('app.goodsforyou', {
         url: '/goodsforyou',
         controller : 'goodsforyou',
         template: require('./views/goodsforyou.html'),
         resolve:{
            savegood : function(busscustomerservice){
                 return busscustomerservice.savegood();
            }

         }
        })

        // 爱心活动列表
        .state('app.loveactionlist', {
         url: '/loveactionlist',
         controller : 'loveactionlist',
         template: require('./views/loveactionlist.html'),
         resolve:{
            

         }
        })

         // 易买添加商品类型
        .state('app.addgoodtype', {
         url: '/addgoodtype',
         controller : 'addgoodtype',
         template: require('./views/addgoodtype.html'),
         resolve:{
            

         }
        })



       
}
module.exports = router;
/**
 * 子模块路由
 * dlq
 */

module.exports = function($urlRouterProvider, $stateProvider){

 	$stateProvider

 	  //设备监控
      .state('app.devicelist', {
        url: '/devicelist/:placecode',
        title: 'devicelist',
        controller: 'list',
        template: require('./views/list.html'),
        resolve:{
        	devicelist : function(deviceservice){
        		return deviceservice.devicelist();
        	},
        	typelist : function(deviceservice){
        		return deviceservice.typelist();
        	},
        	add : function(deviceservice){
        		return deviceservice.add();
        	},
        	del : function(deviceservice){
        		return deviceservice.del();
        	}
        }
        
      })


      //票种设置
      .state('app.devicetktlist', {
        url: '/devicetktlist/:placecode',
        title: 'devicetktlist',
        controller: 'devicetktlist',
        template: require('./views/tktlist.html'),
        resolve:{
        	tktlist : function(deviceservice){
        		return deviceservice.tktlist();
        	}
        }
        
      })

      //配置票种
      .state('app.configurationticket', {
        url: '/configurationticket/:tktcode',
        title: 'configurationticket',
        controller: 'configurationticket',
        template: require('./views/configurationticket.html'),
        resolve:{
            typeauthinfo : function(deviceservice){
                return deviceservice.typeauthinfo();
            },
            typeauthupdate : function(deviceservice){
                return deviceservice.typeauthupdate();
            },
            viewfestivallist : function(deviceservice){
                return deviceservice.viewfestivallist();
            },
            viewfestivalcreate : function(deviceservice){
                return deviceservice.viewfestivalcreate();
            },
            viewfestivaldel : function(deviceservice){
                return deviceservice.viewfestivaldel();
            }
        }
      })

      //创建设备
      .state('app.devicetktcreate', {
        url: '/devicetkt/:placecode',
        controller: 'devicecreate',
        template: require('./views/module.html'),
        resolve:{
            create : function(deviceservice){
                return deviceservice.create();
            },
            slist : function(viewservice){
                return viewservice.slist;
            },
            devicetype : function(deviceservice){
                return deviceservice.devicetype;
            }
            // update : function(deviceservice){
            //     return deviceservice.update();
            // }
        }
        
      })

      //编辑设备
      .state('app.devicetktedit', {
        url: '/devicetktedit/:id',
        title: 'devicetktedit',
        controller: 'devicetktedit',
        template: require('./views/module.html'),
        resolve:{
        	info : function(deviceservice){
        		return deviceservice.info();
        	},
        	slist : function(viewservice){
        		return viewservice.slist;
        	},
        	devicetype : function(deviceservice){
        		return deviceservice.devicetype;
        	},
        	update : function(deviceservice){
        		return deviceservice.update();
        	},
            remove : function(deviceservice){
                return deviceservice.remove();
            }
        }
        
      })

};
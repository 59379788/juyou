module.exports = function ($resource, $state, $http, $q, FileUploader, toaster) {

	return {

		restrict: 'AE',
		template: require('../views/appointmentticket.html'),
		replace: true,
		scope: {
			'saleobj': '=',
			'funobj': '=',
			'baseinfo': '=',
			'util': '=',
		},
		link : function(scope, elements, attrs){
            console.log('piao界面的id');
            console.log(scope.saleobj.id);
            // 获取产品,票种信息
            scope.productinfo = {
                'sale_code' : '',
                'ticket_code' : ''
            }
            // 添加产品票种
            scope.tickettypeobj = {
                'makeAppointmentId' : scope.saleobj.id,
                'sale_code' : '',
                'sale_name' : '',
                'ticket_code' : '',
                'ticket_name' : ''
            };
            scope.searchform = {
                'selected' : {
                    'name' : ''
                }
            }
             scope.ticketsearchform = {
                'selected' : {
                    'name' : ''
                }
            }

            scope.tickettypelist = [];

            //页面需要的数据
            scope.page = {};

            var beforedata = {
                // 销售品列表
                'productlist' : 
                $http({
                    'method' : 'GET', 
                    'url': '/api/as/tc/sale/alllist',
                }),
                //景区列表
                'viewlist' :
                $http({
                    'method' : 'GET', 
                    'url': '/api/as/tc/placeview/jlist',
                }),
                //票种属性
                'attrlist' :
                $http({
                    'method' : 'GET', 
                    'url': '/api/as/tc/attr/list',
                }),
            };
            // 票种列表
            scope.ticketlist = function(){
                $resource('/api/as/mc/mermakeappointmentdao/findSaleInfoList', {}, {})
                .save({'makeAppointmentId' : scope.saleobj.id}, function(res){
                    //console.log('查询景区下的票种信息');
                    //console.log(res);
                    if(res.errcode !== 0)
                    {
                        toaster.error({title:"",body:res.errmsg});
                        return;
                    }
                    console.log('产品信息列表');
                    console.log(res);
                    scope.ticket_list = res.data;
                    
                });
            }
            scope.ticketlist();

            $q.all(beforedata).then(function(res){
                console.log(res);

                if(res.productlist.data.errcode === 0){
                    console.log('销售盘列表');
                    console.log(res.productlist.data.data);
                }else{
                    alert('/api/as/tc/sale/alllist' + res.viewlist.data.errmsg);
                    return ;
                }

                if(res.viewlist.data.errcode === 0){
                    console.log(res.viewlist.data);
                }else{
                    alert('/api/as/tc/placeview/jlist' + res.viewlist.data.errmsg);
                    return ;
                }

                if(res.attrlist.data.errcode === 0){
                    console.log(res.attrlist.data);
                    scope.tickettypeobj.ticket_type_attr = res.attrlist.data.data[0].ticket_attr_id;
                }else{
                    alert('/api/as/tc/attr/list' + res.attrlist.data.errmsg);
                    return ;
                }

                // gettickettypedetail();

                scope.page = {
                    'productlist' : res.productlist.data.data,
                    'viewlist' : res.viewlist.data.data,
                    'attrlist' : res.attrlist.data.data,
                    'tickettypelist' : [],
                    //'saletickettypelist' : res.saletickettypelist.data.data,
                }

            });
                
            //票种
            scope.changeview = function(searchform){
                console.log(searchform);
                var sale_code = searchform.selected.code; 
                scope.tickettypeobj.sale_name = scope.searchform.selected.name;
                scope.tickettypeobj.sale_code = scope.searchform.selected.code;  
                scope.tickettypeobj.ticket_code = scope.ticketsearchform.selected.ticket_type_code;
                scope.tickettypeobj.ticket_name = scope.ticketsearchform.selected.name;
                              
                // console.log(scope.tickettypeobj.sale_name);
                $resource('/api/as/tc/salettype/list', {}, {})
                .save({'sale_code' : sale_code}, function(res){
                    //console.log('查询景区下的票种信息');
                    //console.log(res);
                    if(res.errcode !== 0)
                    {
                        toaster.error({title:"",body:res.errmsg});
                        return;
                    }
                    console.log('票种信息');
                    console.log(res);
                    scope.page.tickettypelist = res.data;
                });
            };

            //添加票种
            scope.add = function(){

                scope.tickettypeobj.sale_name = scope.searchform.selected.name;
                scope.tickettypeobj.sale_code = scope.searchform.selected.code;  
                scope.tickettypeobj.ticket_code = scope.ticketsearchform.selected.ticket_type_code;
                scope.tickettypeobj.ticket_name = scope.ticketsearchform.selected.name;
                
                

                $resource('/api/as/mc/mermakeappointmentdao/saveSaleInfo', {}, {})
                .save(scope.tickettypeobj, function(res){
                    console.log(scope.tickettypeobj);
                    //console.log(res);
                    if(res.errcode !== 0)
                    {
                        toaster.error({title:"",body:res.errmsg});                        
                        return;
                    }
                    toaster.success({title:"",body:"操作成功"});                    
                    scope.ticketlist();
                    
                    // gettickettypedetail();
                });
            };
            scope.delete = function(id){
                var url = '/api/as/mc/mermakeappointmentdao/updateSaleDel';
				if(confirm('确定要删除吗~~~~亲~')){
					$resource(url, {}, {}).save({'id' : id}, function (res) {
						console.log({'id' : id});
						if (res.errcode != 0) {
							toaster.error({ title: "提示", body: res.errmsg });
							return;
						}
                        toaster.success({title:"",body:"删除成功"});                        
						console.log(res);
						scope.ticketlist();
						
						// toaster.success({ title: "提示", body: '操作成功' });

					});
				}
            }


		}
    };
};
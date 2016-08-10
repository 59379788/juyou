module.exports = function($scope, $state, viewlist, salecreate, dictbytypelist, FileUploader, $uibModal,
	saleinfo, saleupdate, goodlist, 
    saledetailcreate, saledetaillist, saledetaildelete, dictbytypelist, FileUploader,
    salegovsubsidycreate, salegovsubsidyupdate, salegovsubsidyinfo, salecategorylist, 
    salejuyousubsidycreate, salejuyousubsidyupdate, salejuyousubsidyinfo,
    //系统确认模块
    affirmcreate, affirminfo, affirmupdate,
    smstmplist,
    //限时购模块
    flashsalecreate, flashsaleinfo, flashsaleupdate,
    getDate, str2date, date2str
	){

	$scope.saleobj = {};
	$scope.saleobj.id = '';
	$scope.saleobj.take_effect_type = 0;

	$scope.take_effect_typearr = [
		{'name' : '次日','value' : -1},
		{'name' : '即时','value' : 0},
		{'name' : '1小时之后','value' : 1},
		{'name' : '2小时之后','value' : 2},
		{'name' : '3小时之后','value' : 3},
		{'name' : '4小时之后','value' : 4},
		{'name' : '5小时之后','value' : 5},
		{'name' : '6小时之后','value' : 6},
		{'name' : '7小时之后','value' : 7},
		{'name' : '8小时之后','value' : 8},
		{'name' : '9小时之后','value' : 9},
		{'name' : '10小时之后','value' : 10},
		{'name' : '11小时之后','value' : 11},
		{'name' : '12小时之后','value' : 12}
	];

	//初始化值
	$scope.saleobj.sms_type = '1';
	$scope.saleobj.sys_affirm_type = '0';
	$scope.saleobj.pay_type = '0';
	$scope.saleobj.stock_type = '0';
	$scope.saleobj.sale_target_type = '0';
	$scope.saleobj.state = '0';

	$scope.saleobj.market_price = 0;
	$scope.saleobj.guide_price = 0;
	$scope.saleobj.cost_price = 0;

	//库存
	$scope.saleobj.current_stock_num = 0;

	//最大购买数量
	$scope.saleobj.max_limit = 0

	var uploader1 = $scope.uploader1 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    uploader1.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    }); 
    uploader1.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.saleobj.top_pic = response.savename;
    };

    var uploader2 = $scope.uploader2 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    uploader2.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    }); 
    uploader2.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.saleobj.logo = response.savename;
    };
	

	//基本信息 景区下拉
	viewlist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        	$scope.saleobj.place_code=$scope.viewarr[0].code;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    dictbytypelist({'type' : 'sale_category'}).then(function(res) {
    	console.log(res);
        if(res.errcode === 0)
        {
        	$scope.typearr = res.data;
        	$scope.saleobj.sale_category=$scope.typearr[0].value;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    //自营
    dictbytypelist({'type' : 'ticket_sale_belong'}).then(function(res) {
    	console.log(res);
        if(res.errcode === 0)
        {
        	$scope.sale_belongarr = res.data;
        	$scope.saleobj.sale_belong=$scope.sale_belongarr[0].value;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    smstmplist.get({}, function(res){
    	console.log(res);
    	if(res.errcode === 0)
        {
        	$scope.smsarr = res.data;
        	$scope.saleobj.sms_template_id = res.data[0].sms_template_id;
        	$scope.saleobj.sms_diy = res.data[0].sms_diy;
        }
        else
        {
            alert(res.errmsg);
        }
    })

    $scope.changesms = function(obj){
    	var smsid = obj.sms_template_id;

    	if(smsid == null) 
    	{
    		obj.sms_diy = '';
    	}
    	else
    	{
    		for(var i = 0, j = $scope.smsarr.length; i < j; i++)
    		{
    			var tmp = $scope.smsarr[i];
    			if(tmp.sms_template_id == smsid)
    			{
    				obj.sms_diy = tmp.sms_diy;
    				break;
    			}
    		}
    	}
    };

    //基本信息 保存
	$scope.salego = function(){

		if($scope.saleobj.name === undefined || $scope.saleobj.name == '')
		{
			alert('销售品名称不能为空');
			return;
		}
		if($scope.saleobj.sms_type == 1
		&& ($scope.saleobj.sms_diy == undefined || $scope.saleobj.sms_diy == ''))
		{
			alert('请配置短信内容');
			return;
		}
		$scope.saleobj.market_price *= 100;
		$scope.saleobj.guide_price *= 100;
		$scope.saleobj.cost_price *= 100;
		salecreate.save($scope.saleobj, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				//$state.go('app.editsale', {'id' : res.data.uuid});
				var modalInstance = $uibModal.open({
		          template: require('../views/tktsalemodel.html'),
		          controller: 'tktsaleupdate',
		          size: 'lg',
		          resolve: {
		            id : function(){
		                return res.data.uuid;
		            },
		            what : function(){
		                return 'edit';
		            },
		            viewlist : function(){
		                return viewlist;
		            },
		            saleinfo : function(){
		                return saleinfo;
		            },
		            saleupdate : function(){
		                return saleupdate;
		            },
		            goodlist : function(){
		                return goodlist;
		            },
		            saledetailcreate : function(){
		                return saledetailcreate;
		            },
		            saledetaillist : function(){
		                return saledetaillist;
		            },
		            saledetaildelete : function(){
		                return saledetaildelete;
		            },
		            //政府补贴
		            salegovsubsidycreate : function(){
		                return salegovsubsidycreate;
		            },
		            salegovsubsidyupdate : function(){
		                return salegovsubsidyupdate;
		            },
		            salegovsubsidyinfo : function(){
		                return salegovsubsidyinfo;
		            },
		            //居游补贴
		            salejuyousubsidycreate : function(){
		                return salejuyousubsidycreate;
		            },
		            salejuyousubsidyupdate : function(){
		                return salejuyousubsidyupdate;
		            },
		            salejuyousubsidyinfo : function(){
		                return salejuyousubsidyinfo;
		            },
		            //销售品类型查询功能模块
		            salecategorylist : function(){
		                return salecategorylist;
		            },
		            dictbytypelist : function(){
		                return dictbytypelist;
		            },
		            //系统确认模块
		            affirmcreate : function(){
		                return affirmcreate;
		            },
		            affirminfo : function(){
		                return affirminfo;
		            }, 
		            affirmupdate : function(){
		                return affirmupdate;
		            },
		            smstmplist : function(){
		            	return smstmplist;
		            },
		            flashsalecreate : function(){
		                return flashsalecreate;
		            },
		            flashsaleinfo : function(){
		                return flashsaleinfo;
		            },
		            flashsaleupdate : function(){
		                return flashsaleupdate;
		            },
		            getDate : function(){
		            	return getDate;
		            },
		            str2date : function(){
		                return str2date;
		            },
		            date2str : function(){
		                return date2str;
		            }
		          }
		        });

			}
			else
			{
				alert(res.errmsg);
			}
		});
	};
	
};
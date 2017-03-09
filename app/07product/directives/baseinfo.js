module.exports = function($resource, $state, $http, $q, FileUploader){

	

	return {

		restrict : 'AE',
		template : require('../views/p_baseinfo.html'),
		replace:true,
		scope:{
			'model' : '=',
			'FileUploader' : '=',
			// 'open' : '=',
		},
		link : function(scope, elements, attrs){

			console.log(scope.model);
			console.log('FileUploader');
			console.log(FileUploader);

			scope.saleobj = {
				'name' : '',
				'market_price' : 0,
				'guide_price' : 0,
				'cost_price' : 0,
				'sale_category' : '',
				'sms_template_id' : '',
				'sms_diy' : '',
				'sms_type' : '',
				'top_pic' : '',
				'logo' : '',
				'sale_belong' : '',	//产品所属
				'sys_affirm_type' : '',	//系统确认
				'pay_type' : '', 	//支付类型
				'stock_type' : '0',	//库存类型
				'sale_target_type' : '0',	//销售目标
				'take_effect_type' : '',	//生效时间
				'max_limit' : 0,	//最大购买数量
				'order_num_limit' : 0,	//每单最大购买数量限制
				'tour_date_type' : '0',	//是否启用出游时间
				'back_type' : 0,	//是否允许退票
				'ticket_type' : 0,	//是否出票
				'user_status' : 0,	//是否实名制
				'sms_ticketcode_type' : 0,	//短信票码类型
				'bookingnotes' : '',	//团产品预订须知
				'detail' : '',	//销售品简介
			};

			console.log(scope.FileUploader);

			var uploader1 = scope.uploader1 = new scope.FileUploader({
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
		        saleobj.top_pic = response.savename;
		    };

		    var uploader2 = scope.uploader2 = new scope.FileUploader({
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
		        saleobj.logo = response.savename;
		    };

			var beforedata = {
		        //商品模板信息
		        // 'goodsTempInfo' : 
		        // $http({
		        //     'method' : 'GET', 
		        //     'url': '/api/ac/tc/goodsTemplete/info',
		        //     'params' : {'id' : id}
		        // }),
		        //渠道列表
		        'channelTempList' :
		        $http({
		            'method' : 'GET', 
		            'url': '/api/ac/tc/channelTemplete/jlist'
		        }),
		        //短信信息
		        'smsinfo' :
		        $http({
		            'method' : 'GET', 
		            'url': '/api/as/tc/salesmstemplate/list',
		        }),
		        
		    };


		    // if(goodsid != ''){
		    //     beforedata['goodsinfo'] = $http({
		    //         'method' : 'GET', 
		    //         'url': '/api/ac/tc/ticketGoods/getTicketGoodsInfo',
		    //         'params' : {
		    //             'id' : goodsid
		    //         }
		    //     });
		    // }


		    $q.all(beforedata).then(function(res){

		        // if(res.goodsTempInfo.data.errcode === 0){
		        //     console.log(res.goodsTempInfo.data);
		        // }else{
		        //     alert('/api/ac/tc/goodsTemplete/info' + res.goodsTempInfo.data.errmsg);
		        //     return ;
		        // }

		       


		    });





		    function makeimage(){
				

			}
		}

	};
};


module.exports = function($scope, $stateParams, $resource, BASEURL38985){

	var url = BASEURL38985 + '/' + $stateParams.url.split("_").join('/');

	var dlq = $resource(url, {});

	$scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 7;        //每页显示几条


	$scope.load = function(){

		var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

		dlq.save(para, function(res){

			console.log(res);

			$scope.obj = {

				'title' : [
					{
						'name' : '姓名',
						'length' : '2',
						'key' : 'name'
					},
					{
						'name' : '密码',
						'length' : '2',
						'key' : 'pass'
					},
					{
						'name' : '真实姓名',
						'length' : '4',
						'key' : 'rname'
					},
					{
						'name' : '电话',
						'length' : '4',
						'key' : 'tel'
					}
				],

				'content' : [
					{
						'name' : 'dlq',
						'pass' : '1234',
						'rname' : 'ddd',
						'tel' : '13840188285'
					},
					{
						'name' : 'dlq1',
						'pass' : '1234111',
						'rname' : 'ddd111',
						'tel' : '138401882851'
					},
					{
						'name' : 'dlq2',
						'pass' : '12342222',
						'rname' : 'ddd222',
						'tel' : '138401882852'
					}
					
				],

				'page' : {

					'maxSize' : 5,
					'bigCurrentPage' : 1,
					'itemsPerPage' : 7	

				}
			};




		});

	};
	$scope.load();
	

	
	




	// $scope.obj = {

 //        'title' : [
 //            {
 //                'name' : '商品名称',
 //                'length' : '6',
 //                'key' : 'type_name'
 //            },
 //            {
 //                'name' : '使用时间',
 //                'length' : '2',
 //                'key' : 'otime'
 //            },
 //            {
 //                'name' : '使用',
 //                'length' : '2',
 //                'key' : 'used'
 //            },
 //            {
 //                'name' : '退票',
 //                'length' : '2',
 //                'key' : 'back'
 //            }
 //        ],

 //        'content' : [
            
            
 //        ],

 //        'search' : {

 //            'view' : {
 //                'type' : 'text',
 //                'title' : '景区',
 //                'value' : ''
 //            },

 //            'haha' : {
 //                'type' : 'date',
 //                'title' : '查询时间',
 //                'value' : ''
 //            }


 //        },

 //        'page' : {

 //            'maxSize' : 5,
 //            'bigCurrentPage' : 1,
 //            'itemsPerPage' : ITEMS_PERPAGE  

 //        }
 //    };

 //    //有效区间
 //    $scope.section = {};
 //    $scope.section.start = {};
 //    $scope.section.start.date = {};

 //    $scope.section.end = {};
 //    $scope.section.end.date = {};

 //    $scope.today = function() {
 //        $scope.section.start.date = $scope.section.end.date = new Date();
 //    };
 //    $scope.today();
 //    $scope.open = function(obj) {
 //        obj.opened = true;
 //    };


 //    $scope.load = function () {
        
 //        // var para = {
 //        //     pageNo:$scope.bigCurrentPage, 
 //        //     pageSize:$scope.itemsPerPage,
 //        //     start_time : getDate($scope.section.start.date) + " 00:00:00",
 //        //     end_time : getDate($scope.section.end.date) + " 23:59:59"
 //        // };

 //        // para = angular.extend($scope.searchform, para);

 //        // console.log(para);
        
 //        destoryDetail.save({'view' : 'J0063'}, function(res){

 //            console.log(res);

 //            if(res.errcode === 0)
 //            {
 //                //$scope.objs = res.data.results;
 //                $scope.obj.content = res.data.results;
 //                $scope.bigTotalItems = res.data.totalRecord;
 //            }
 //            else
 //            {
 //                alert(res.errmsg);
 //            }

 //        });

 //    };
 //    $scope.load();


    // $scope.searchform = {};

    // //有效区间
    // $scope.section = {};
    // $scope.section.start = {};
    // $scope.section.start.date = {};

    // $scope.section.end = {};
    // $scope.section.end.date = {};

    // $scope.today = function() {
    //     $scope.section.start.date = $scope.section.end.date = new Date();
    // };
    // $scope.today();
    // $scope.open = function(obj) {
    //     obj.opened = true;
    // };

    // /* 分页
    //  * ========================================= */
    // $scope.maxSize = 5;            //最多显示多少个按钮
    // $scope.bigCurrentPage = 1;      //当前页码
    // $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    // $scope.load = function () {
        
    //     var para = {
    //         pageNo:$scope.bigCurrentPage, 
    //         pageSize:$scope.itemsPerPage,
    //         start_time : getDate($scope.section.start.date) + " 00:00:00",
    //         end_time : getDate($scope.section.end.date) + " 23:59:59"
    //     };

    //     para = angular.extend($scope.searchform, para);

    //     console.log(para);
        
    //     list.save(para, function(res){

    //         console.log(res);

    //         if(res.errcode === 0)
    //         {
    //             $scope.objs = res.data.results;
    //             $scope.bigTotalItems = res.data.totalRecord;
    //         }
    //         else
    //         {
    //             alert(res.errmsg);
    //         }

    //     });

    // };
    // $scope.load();



};

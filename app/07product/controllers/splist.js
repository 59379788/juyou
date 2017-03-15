module.exports = function($scope, $state, $resource, ITEMS_PERPAGE){

    $scope.searchform = {};

    $scope.create = function(){

        $state.go('app.newproduct');
    };

    /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.load = function () {
        
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

        para = angular.extend($scope.searchform, para);

        $resource('/api/ac/tc/ticketSaleService/getSaleList', {}, {})
        .save(para, function(res){

            console.log(res);
            if(res.errcode !== 0)
            {
                alert("数据获取失败");
                return;
            }

            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.load();


    $scope.edit = function(id){

        $state.go('app.editview', {'placeid' : id});

    };


    $scope.asort = function(id, asort){

        console.log({'place_id' : id, 'asort' : asort});
        viewupdate.save({'place_id' : id, 'asort' : asort}, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                $scope.load();
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };

    $scope.type = function(id){


        $state.go('app.tkttype', {'placeid' : id});

    };


    $scope.createtkttype = function(id){
        $state.go('app.tkttypecreate', {'placeid' : id});
    }

    $scope.device = function(code){
        $state.go('app.devicelist', {'placecode' : code});
    }




	//$scope.searchform = {};


	// $scope.create = function(){

	// 	$state.go('app.creategoods');
		
	// };

 //    $scope.load = function () {
 //        goodslist.save($scope.searchform, function(res){

 //            /* 门票存储结构
 //             * ========================================= */
 //            var tkt = new Object();
 //            var restkt = new Array();

 //            console.log(res);

 //            if(res.errcode !== 0)
 //            {
 //                alert("数据获取失败");
 //                return;
 //            }

 //            //用景区编号作为存储结构的属性，值是数组
 //            for(var i = 0, j = res.data.length; i < j; i++)
 //            {
 //                var tt = res.data[i];
 //                var v = tt.place_code;

 //                if(!tkt.hasOwnProperty(v))
 //                {
 //                    tkt[v] = new Object();
 //                    tkt[v].ticketarr = new Array();
 //                    tkt[v].viewname = tt.place_name;
 //                    tkt[v].viewcode = tt.place_code;
 //                }
 //                tkt[v].ticketarr.push(tt);
 //            }

 //            for(var key in tkt)
 //            {
 //                var o = tkt[key];
 //                restkt.push(o);
 //            }


 //            // console.log("------------");
 //            // console.log(restkt);
 //            // console.log("------------");

 //            $scope.objs = restkt;
 //            console.log($scope.objs);

 //        });

 //    };
 //    $scope.load();

 //    $scope.start = function(id) {
	// 	goodsup.get({'id' : id}, function(res){
	// 		if(res.errcode === 0){
	// 			$scope.load();
	// 		}else{
	// 			alert(res.errmsg);
	// 		}
	// 	});
	// }

	// $scope.stop = function(id) {
	// 	goodsdown.get({'id' : id}, function(res){
	// 		if(res.errcode === 0){
	// 			$scope.load();
	// 		}else{
	// 			alert(res.errmsg);
	// 		}
	// 	});
	// }


 //    $scope.edit = function(id){

 //    	$state.go('app.editgoods', {'id' : id});

 //    };


};
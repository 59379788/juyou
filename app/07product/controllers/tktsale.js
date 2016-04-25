module.exports = function($scope, $state, salelist, ITEMS_PERPAGE, saleup, saledown, saleupdate){

	$scope.searchform = {};


	$scope.create = function(){

		$state.go('app.createsale');
		
	};

    $scope.load = function () {
        salelist.save($scope.searchform, function(res){

            /* 销售品存储结构
             * ========================================= */
            var view = new Object();
            var resview = new Array();

            console.log(res);

            if(res.errcode !== 0)
            {
                alert("数据获取失败");
                return;
            }

            //用景区编号作为存储结构的属性，值是数组
            for(var i = 0, j = res.data.length; i < j; i++)
            {
                var tt = res.data[i];
                var v = tt.place_code;
                var type = tt.sale_category;

                if(!view.hasOwnProperty(v))
                {
                    view[v] = new Object();
                    view[v].salearr = new Array();
                    //view[v].type = new Object();
                    view[v].viewname = tt.place_name;
                    view[v].viewcode = tt.place_code;
                }


                // if(!view[v].type.hasOwnProperty(type))
                // {
                //     view[v].type[type] = new Object();


                // }


                //for(var j = 0 i < )

                view[v].salearr.push(tt);
            }

            for(var key in view)
            {
                var o = view[key];
                resview.push(o);
            }


            console.log("------------");
            console.log(resview);
            console.log("------------");

            $scope.objs = resview;

        });

    };
    $scope.load();

	/* 分页
     * ========================================= */
    // $scope.maxSize = 5;            //最多显示多少个按钮
    // $scope.bigCurrentPage = 1;      //当前页码
    // $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    // $scope.load = function () {
        
    //     var para = {
    //         pageNo:$scope.bigCurrentPage, 
    //         pageSize:$scope.itemsPerPage
    //     };

    //     para = angular.extend($scope.searchform, para);
        
    //     salelist.save(para, function(res){

    //      	console.log(res);

    //      	if(res.errcode !== 0)
    //      	{
    //      		alert("数据获取失败");
    //      		return;
    //      	}

    //      	$scope.objs = res.data.results;
    //         $scope.bigTotalItems = res.data.totalRecord;

    //     });

    // };
    // $scope.load();

    $scope.start = function(id) {
		saleup.get({'id' : id}, function(res){
            console.log(res);
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}

	$scope.stop = function(id) {
		saledown.get({'id' : id}, function(res){
            console.log(res);
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}


    $scope.edit = function(id){

    	$state.go('app.editsale', {'id' : id});

    };

    $scope.asort = function(id, asort){

        console.log({'id' : id, 'asort' : asort});
        saleupdate.save({'id' : id, 'asort' : asort}, function(res){

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


    $scope.info = function(id){

        $state.go('app.editsale', {'id' : id, 'type' : 'info'});
    };


};
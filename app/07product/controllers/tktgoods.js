module.exports = function($scope, $state, goodslist, goodsupdate, goodsup, goodsdown){

	$scope.searchform = {};


	$scope.create = function(){

		$state.go('app.creategoods');
		
	};

    $scope.load = function () {
        goodslist.save($scope.searchform, function(res){

            /* 门票存储结构
             * ========================================= */
            var tkt = new Object();
            var restkt = new Array();

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

                if(!tkt.hasOwnProperty(v))
                {
                    tkt[v] = new Object();
                    tkt[v].ticketarr = new Array();
                    tkt[v].viewname = tt.place_name;
                    tkt[v].viewcode = tt.place_code;
                }
                tkt[v].ticketarr.push(tt);
            }

            for(var key in tkt)
            {
                var o = tkt[key];
                restkt.push(o);
            }


            // console.log("------------");
            // console.log(restkt);
            // console.log("------------");

            $scope.objs = restkt;
            console.log($scope.objs);

        });

    };
    $scope.load();

    $scope.start = function(id) {
		goodsup.get({'id' : id}, function(res){
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}

	$scope.stop = function(id) {
		goodsdown.get({'id' : id}, function(res){
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}


    $scope.edit = function(id){

    	$state.go('app.editgoods', {'id' : id});

    };


};
module.exports = function($scope, $state, $stateParams, view, list){

	$scope.searchform = {};

    //景区id
    var placeid = $stateParams.placeid;

	view().then(function(res) {
        //console.log(res);
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
        }
        else
        {
            alert(res.data.errmsg);
        }
    });

    $scope.load = function () {

        console.log($scope.searchform);
        
        list.save($scope.searchform, function(res){

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
                    tkt[v].viewname = tt.view_name;
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

        });

    };
    $scope.load();


	$scope.create = function(){


		$state.go('app.tkttypecreate');


	};
	

};

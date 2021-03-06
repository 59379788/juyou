module.exports = function($scope, $state, $stateParams, viewlist, tktlist, tktupdate,updateTicketPeriod,
 str2date){

	$scope.searchform = {};

    //景区id
    var placeid = $stateParams.placeid;

    if(placeid === ""){

    }else{
    	$scope.searchform.place_code = placeid;
    }
    
	viewlist().then(function(res) {
        //console.log(res);
        if(res.errcode === 0)
        {
        	$scope.viewarr = res.data;
			console.log('景区数据')
			console.log(res.data);
			$scope.viewarr.unshift({name:'----全部----',code:''});
        }
        else
        {
            alert(res.data.errmsg);
        }
    });

    $scope.load = function () {
		// alert('sousuo');
        tktlist.save($scope.searchform, function(res){
			console.log($scope.searchform);

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

	// 发布新票种
	$scope.create = function(){


		$state.go('app.tkttypecreate',{'placeid' : placeid});


	};

	$scope.edit = function(id){

    	$state.go('app.edittkttype', {'id' : id , 'placeid' : placeid});

    };

	$scope.start = function(id) {
		tktupdate.get({'id' : id, 'state' : '0'}, function(res){
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}

	$scope.stop = function(id) {
		tktupdate.get({'id' : id, 'state' : '1'}, function(res){
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}

	$scope.usedstart = function(id) {
		tktupdate.get({'id' : id, 'used_state' : '0'}, function(res){
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}

	$scope.usedstop = function(id) {
		tktupdate.get({'id' : id, 'used_state' : '1'}, function(res){
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}
	$scope.updateTicket = function(code) {
		updateTicketPeriod.get({'code' : code}, function(res){
			if(res.errcode === 0){
				alert(res.data.num);
			}else{
				alert(res.errmsg);
			}
		});
	}

    $scope.auth = function(code) {
		// alert('销票权限');
        $state.go('app.configurationticket', {'tktcode' : code});
    }
	

};

module.exports = function($scope, $http, $q, $state,$stateParams, $resource,FileUploader,saveArticle,getArticle){

    var id = $stateParams.id;
    console.log(id);
    $scope.obj = {
        'type' : '2',
        'data' : ""
    };
    $scope.infoobj = {};
    if(id){
        getArticle.save({'id' : id}, function(res){
            if(res.errcode != 0){
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.obj = res.data;
            $scope.infoobj = JSON.parse($scope.obj.data);
		});
    }
    // $scope.getdiclist = function(){
    //     findDictionaryList.save({'pageSize' : '100', 'pageNo' : '1'}, function(res){
    //         if(res.errcode != 0){
    //             alert(res.errmsg);
    //             return;
    //         }
    //         console.log(res);
    //         $scope.pid_list = res.data.results;
	// 	});
    // }
    // $scope.getdiclist();
    

    

    var beforedata = {
        // 一级分类列表
        'pidList' : 
        $http({
            'method' : 'GET',
            'url' : '/api/ac/ic/categoryService/obtainCategory'
        }),
        // 分类信息
        'articalinfo' : 
        $http({
            'method' : 'GET',
            'url' : '/api/as/ic/article/getArticle',
            'params' : {'id' : id}
        }),

    };

    $q.all(beforedata).then(function(res){
        //  alert('alllll');
        console.log(res);
        if(res.articalinfo.data.errcode === 0){
            console.log('xiangqing');
            console.log(res.articalinfo.data);
            $scope.obj = res.articalinfo.data.data;
            $scope.infoobj = JSON.parse($scope.obj.data);
        } else {
            
        }

        if(res.pidList.data.errcode === 0){
            console.log('shangjiiod');
            console.log(res.pidList.data.data);
            $scope.pid_list = res.pidList.data.data;
            var pidarray = $scope.pid_list;
            for(var i = 0; i < pidarray.length; i++){
                console.log(pidarray[i]);
                    pidarray[i].title = $scope.getgang(pidarray[i].pathNum)+pidarray[i].title;
                    // console.log(pidarray[i].title);
                    console.log($scope.getgang(pidarray[i].pathNum)+pidarray[i].title);
                
            }
        } else {
            return;
        }
    });
    $scope.getgang = function(num){
        console.log(num);
        var gang = '';
        for(var i =0; i < num; i++){
            gang = gang+'-';
            
        }
        return gang;
    }

     

	$scope.save = function(){
        $scope.obj.data = JSON.stringify($scope.infoobj);  
        console.log($scope.obj);     
		saveArticle.save(($scope.obj), function(res){
            if(res.errcode != 0){
                alert(res.errmsg);
                return;
            }
            console.log(res);
            alert('操作成功');
            $state.go('app.trafficarticallist');
		});
	};

    

    $scope.change = function(pid) {
        console.log(pid);
    }
	//取消
	$scope.cancel = function () {
		$state.go('app.trafficarticallist');
	};

    // // 百度地图API功能
	// var map = new BMap.Map("allmap");    // 创建Map实例
	// map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	// map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	// map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	// map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
	
	
	// map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
	// function showInfo(e){
	// 	alert(e.point.lng + ", " + e.point.lat);
	// }
	// map.addEventListener("click", showInfo);
	
	
	// // 百度地图API功能
	// function G(id) {
	// 	return document.getElementById(id);
	// }

	

	// var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
	// 	{"input" : "suggestId"
	// 	,"location" : map
	// });

	// ac.addEventListener("onhighlight", function(e) {  //鼠标放在下拉列表上的事件
	// var str = "";
	// 	var _value = e.fromitem.value;
	// 	var value = "";
	// 	if (e.fromitem.index > -1) {
	// 		value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
	// 	}    
	// 	str = "FromItem<br />index = " + e.fromitem.index + "<br />value = " + value;
		
	// 	value = "";
	// 	if (e.toitem.index > -1) {
	// 		_value = e.toitem.value;
	// 		value = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
	// 	}    
	// 	str += "<br />ToItem<br />index = " + e.toitem.index + "<br />value = " + value;
	// 	G("searchResultPanel").innerHTML = str;
	// });

	// var myValue;
	// ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
	// var _value = e.item.value;
	// 	myValue = _value.province +  _value.city +  _value.district +  _value.street +  _value.business;
	// 	G("searchResultPanel").innerHTML ="onconfirm<br />index = " + e.item.index + "<br />myValue = " + myValue;
		
	// 	setPlace();
	// });

	// function setPlace(){
	// 	map.clearOverlays();    //清除地图上所有覆盖物
	// 	function myFun(){
	// 		var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
	// 		map.centerAndZoom(pp, 18);
	// 		map.addOverlay(new BMap.Marker(pp));    //添加标注
	// 	}
	// 	var local = new BMap.LocalSearch(map, { //智能搜索
	// 	  onSearchComplete: myFun
	// 	});
	// 	local.search(myValue);
	// }


 };







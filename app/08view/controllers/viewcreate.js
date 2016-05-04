module.exports = function($scope, $state, placecreate, viewcreate, FileUploader, city){

	$scope.placeobj = {};
	$scope.placeobj.id = '';
	$scope.placeobj.type = 'J';	//景区


	$scope.placeobjstate = 1;	//编辑状态

	$scope.viewobj = {};
	$scope.viewobjstate = 1;	//编辑状态
	$scope.viewobj.star = 5;

	//基本信息 城市下拉
	city().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.cityarr = res.data;
        	$scope.placeobj.city=$scope.cityarr[0].CODE;
        }
        else
        {
            alert(res.errmsg);
        }
    });


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
        $scope.placeobj.logo = response.savename;
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
        $scope.placeobj.img = response.savename;
    };

	
	$scope.placeedit = function(){

		$scope.placeobjstate = 1;

	};

	$scope.placego = function(){

		if($scope.placeobj.name === undefined || $scope.placeobj.name == '')
		{
			alert('名称不能为空');
			return;
		}

		console.log($scope.placeobj);

		console.log(angular.toJson($scope.placeobj,true));

		placecreate.save($scope.placeobj, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$scope.placeobj.id = res.data.uuid;
				$scope.placeobjstate = 0;
				$scope.viewobj.place_id = res.data.uuid;
				console.log($scope.viewobj);

				viewcreate.save($scope.viewobj, function(res1){

					console.log(res1);
					if(res.errcode === 0)
					{
						$state.go('app.editview', {'placeid' : res.data.uuid});
					}
					else
					{
						alert(res1.errmsg);
					}

				});
			}
			else
			{
				alert(res.errmsg);
			}
		});
	};


	$scope.viewgo = function(){

		$scope.viewobj.place_id = $scope.placeobj.id;

		console.log($scope.viewobj);

		viewcreate.save($scope.viewobj, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$state.go('app.editview', {'placeid' : res.data.uuid});
			}
			else
			{
				alert(res.errmsg);
			}

		});

	};
	
};
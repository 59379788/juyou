module.exports = function($scope, $stateParams, FileUploader, placeinfo, placeupdate, viewinfo, viewupdate){

	//场所编码
	$scope.placeid = $stateParams.placeid;

	$scope.placeobj = {};
	$scope.placeobj.type = 'J';	//景区

	$scope.placeobjstate = 0;	//展示状态

	$scope.viewobj = {};

	$scope.viewobjstate = 0;	//展示状态


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

	
	placeinfo.get({'id' : $scope.placeid}, function(res){

		console.log(res);

		if(res.errcode === 0)
		{
			$scope.placeobj = res.data;
		}

	});

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

		placeupdate.save($scope.placeobj, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$scope.placeid = res.data.uuid;
				$scope.placeobjstate = 0;
			}

		});

	};
	
};
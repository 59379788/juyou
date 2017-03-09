module.exports = function($scope, FileUploader, $uibModal, $uibModalInstance, getDate, obj, what, vouchersalecreate, businesslist, typelist){

	
	$scope.obj = obj;
	if($scope.obj == '') {
		$scope.obj = {};
	}
	
	$scope.what = what;

	$scope.obj.star = '5';
	$scope.obj.voucher_price = 100;

	//有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = obj.period;

    $scope.open = function(obj) {
        obj.opened = true;
    };

	businesslist().then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.businessarr = res.data;
        	//$scope.obj.business_code=$scope.businessarr[0].code;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    typelist({'type' : 'sale_voucher_type'}).then(function(res) {
        if(res.errcode === 0)
        {
        	$scope.typearr = res.data;
        	//$scope.obj.type=$scope.typearr[0].value;
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
        fn: function(item /*{File|FileLikeObject*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    }); 
    uploader1.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.obj.img = response.savename;
    };

    var uploader2 = $scope.uploader2 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    uploader2.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    }); 
    uploader2.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.obj.img1 = response.savename;
    };

    var uploader3 = $scope.uploader3 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    uploader3.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    }); 
    uploader3.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.obj.img2 = response.savename;
    };

    var uploader4 = $scope.uploader4 = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });
    uploader4.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    }); 
    uploader4.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.obj.img3 = response.savename;
    };

    //基本信息 保存
	$scope.go = function(){

		if($scope.obj.name === undefined || $scope.obj.name == '')
		{
			alert('销售品名称不能为空');
			return;
		}
		$scope.obj.period = getDate(new Date($scope.section.start.date));
		vouchersalecreate.save($scope.obj, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$uibModalInstance.dismiss('cancel');
			}
			else
			{
				alert(res.errmsg);
			}
		});

	};
	
};
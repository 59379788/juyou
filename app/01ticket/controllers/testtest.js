module.exports = function($scope, FileUploader,createImportExcel){

	$scope.obj = {};

	var uploader1 = $scope.uploader1 = new FileUploader({
        url: 'http://dlqt.juyouhx.com/Api/Api/ObjectToOss'
    });
    //uploader1.filters.push({
    //    name: 'imageFilter',
    //    fn: function(item /*{File|FileLikeObject*/, options) {
    //        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
    //        return '|xls|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    //    }
    //});
    uploader1.filters.push({
        name: 'customFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            return this.queue.length < 10;
        }
    });
    uploader1.onSuccessItem = function(fileItem, response, status, headers) {
    	console.log(response);
        $scope.obj.xx = response.url;
    };

    $scope.import = function(url){

    	createImportExcel.save({'url' : url}, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				alert("导入成功");
			}
			else
			{
				alert(res.errmsg);
			}

		});

    };

};
module.exports = function($scope, $stateParams, $state,$uibModal,ITEMS_PERPAGE,saveactivity,getDate,FileUploader){
    var id = $stateParams.id;
    $scope.info = {
        'id' : id,
        'activity_proposer_name' : '',
        'activity_proposer_card' : '',
        'activity_proposer_mobile' : '',
        'activity_titlle' :　'',
        'activity_main_picture' : '',
        'activity_picture' : '',
        'activity_info' : '',
        //'activity_estimate_rmb' : '',
        'active_type' : ''
    };
    var types = '';
    $scope.selection = function(type){
        types = type;
        if (type==0) {
            $scope.info.activity_estimate_rmb = '';
        } else if (type==1) {
            $scope.info.activity_estimate_num = '';
        } else if (type==2) {
            $scope.info.activity_estimate_rmb = '';
            $scope.info.activity_estimate_num = '';
        }
    };
    // 主图
    var uploader = $scope.uploader = new FileUploader({
        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    });

    uploader.filters.push({
        name: 'imageFilter',
        fn: function(item /*{File|FileLikeObject}*/, options) {
            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    });
    
    
    uploader.onSuccessItem = function(fileItem, response, status, headers) {
        $scope.info.activity_main_picture = response.savename;
    };

    // 副图
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
        $scope.info.activity_picture = response.savename;
    };
	
    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();
 
    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    

    $scope.saveactivity = function() {
        var para = {
            start_time : getDate($scope.section.start.date) + " 00:00:00",
            end_time : getDate($scope.section.end.date) + " 23:59:59"
        };
        alert(types);
        if (types==0&&$scope.info.id!==''&& $scope.info.activity_proposer_name!==''&&$scope.info.activity_proposer_card!==''&&$scope.info.activity_proposer_mobile!==''
            &&$scope.info.activity_titlle!==''&&$scope.info.activity_main_picture!==''&&$scope.info.activity_picture!==''&&$scope.info.activity_info!==''&&$scope.info.active_type!==''&&$scope.info.activity_estimate_rmb!=='') {
            $scope.info.activity_estimate_rmb = ($scope.info.activity_estimate_rmb) * 100;
            para = angular.extend($scope.info, para);
            saveactivity.save(para, function(res) {
                console.log(para);
                if (res.errcode !== 0) {
                    alert(res.errmsg);
                    return;
                }
                console.log(res);
                alert('恭喜您，活动创建成功！');
                $state.go('app.loveactionlist');
            });

        } else if (types==1&&$scope.info.id!==''&& $scope.info.activity_proposer_name!==''&&$scope.info.activity_proposer_card!==''&&$scope.info.activity_proposer_mobile!==''
            &&$scope.info.activity_titlle!==''&&$scope.info.activity_main_picture!==''&&$scope.info.activity_picture!==''&&$scope.info.activity_info!==''&&$scope.info.active_type!==''&&$scope.info.activity_estimate_num!=='') {
            para = angular.extend($scope.info, para);
            saveactivity.save(para, function(res) {
                console.log(para);
                if (res.errcode !== 0) {
                    alert(res.errmsg);
                    return;
                }
                console.log(res);
                alert('恭喜您，活动创建成功！');
                $state.go('app.loveactionlist');
            });
        } else if (types==2&&$scope.info.id!==''&& $scope.info.activity_proposer_name!==''&&$scope.info.activity_proposer_card!==''&&$scope.info.activity_proposer_mobile!==''
            &&$scope.info.activity_titlle!==''&&$scope.info.activity_main_picture!==''&&$scope.info.activity_picture!==''&&$scope.info.activity_info!==''&&$scope.info.active_type!==''&&$scope.info.activity_estimate_num!==''&&$scope.info.activity_estimate_rmb!=='') {
            $scope.info.activity_estimate_rmb = ($scope.info.activity_estimate_rmb) * 100;
            para = angular.extend($scope.info, para);
            saveactivity.save(para, function(res) {
                console.log(para);
                if (res.errcode !== 0) {
                    alert(res.errmsg);
                    return;
                }
                console.log(res);
                alert('恭喜您，活动创建成功！');
                $state.go('app.loveactionlist');
            });

        } else {
            alert('活动信息填写不完全！');
        }
       
    };

};
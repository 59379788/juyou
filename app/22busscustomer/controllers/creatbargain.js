module.exports = function($scope, $stateParams, $state,$uibModal,ITEMS_PERPAGE,getDate,FileUploader,saveActive,getActiveInfo,updateActiveInfo,str2date,date2str,toaster){
    var id = $stateParams.id;
    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.startTime = new Date();
 
    $scope.section.end = {};
    $scope.section.endTime = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };
    
    $scope.info = {
        'title' : '',
        'everyoneDayTimes' : '',
        'activeTimes' :　'',
        'img' : '',
        'description' : '',
        'startTime' : getDate($scope.section.startTime) + " 00:00:00",
        'endTime': getDate($scope.section.endTime) + " 23:59:59"
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
        $scope.info.img = response.savename;
    };
    if (id) {
        getActiveInfo.save({'id':id},function(res) {
            if (res.errcode != 0) {
                toaster.success({title:"",body : res.errmsg});
                return;
            }
            if(res.data.startTime != null){
                $scope.section.startTime = str2date(res.data.startTime);
                $scope.section.endTime = str2date(res.data.endTime);
            }else{
            }
            console.log(res);
            $scope.info = res.data;
        });
    } 
    
    $scope.save = function () {
        // 修改
        if (id) {
            var para = {
                'id' : id,
                'startTime' : date2str($scope.section.startTime) + " 00:00:00",
                'endTime' : date2str($scope.section.endTime)+ " 23:59:59",
            };
            para = angular.extend($scope.info,para);
            if ($scope.info.title!=''&&$scope.info.everyoneDayTimes!=''&&$scope.info.activeTimes!=''&&$scope.info.img!=''
                &&$scope.info.description!=''&&$scope.info.startTime!=''&&$scope.info.endTime!='') {               
                updateActiveInfo.save(para,function (res) {
                    console.log(para);
                    if (res.errcode != 0) {
                        toaster.success({title:"",body : res.errmsg});
                        return;
                    }
                    toaster.success({title:"",body : "💐你，修改成功！"});
                    $state.go('app.bargainlist');
                })
            } else {
                toaster.success({title:"",body : "💐你，请将活动数据补充完整！"});
            }     
        // 添加活动
        } else {
            var para = {
                'startTime' : date2str($scope.section.startTime) + " 00:00:00",
                'endTime' : date2str($scope.section.endTime) + " 23:59:59",
            };
            para = angular.extend($scope.info,para);
            if ($scope.info.title!=''&&$scope.info.everyoneDayTimes!=''&&$scope.info.activeTimes!=''&&$scope.info.img!=''
                &&$scope.info.description!=''&&$scope.info.startTime!=''&&$scope.info.endTime!='') {
                saveActive.save(para,function (res) {
                    console.log(para);
                    if (res.errcode != 0) {
                        toaster.success({title:"",body : res.errmsg});
                            return;
                    }
                    toaster.success({title:"",body : "💐你，修改成功！"});
                    $state.go('app.bargainlist');
                })

            } else {
                toaster.success({title:"",body : "💐你，请将活动数据补充完整！"});
            }
        
        }
        
    };    

};
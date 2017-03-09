module.exports = function($scope, $stateParams, $state, $uibModal, $uibModalInstance, ITEMS_PERPAGE,FileUploader,savePrize,getPrize,prizeId,updatePrize,salelist){  
    var id = $stateParams.id;
    $scope.salelists = [];
    $scope.info = {
        'saleId' : '',
        'oldPrice' : '',
        'targetPrice' : '',
        'allowableNumber' : '',//允许砍价人数
        'description' : '',
        'img' : '',
        'title' : '',
        'activeId' : id,
        'totalnum' : '',
        'sellnum' : '',
        'buy_tips' : ''
    }

    $scope.searchform = {
        'selected' :{
            'name' : ''
        }
    };

    $scope.getsalelist = function() {
        salelist.save($scope.searchform,function(res) {
            if (res.errcode!=0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.datas = res.data;
            var array = res.data;
            // 获得奖品详情
            if (prizeId) {
                getPrize.save({'id':prizeId,},function(res) {
                    //console.log(prizeId);
                    if (res.errcode!=0) {
                        alert(res.errmsg);
                        return;
                    }           
                    //$scope.searchform.selected.name = res.data.saleId;
                    $scope.info = res.data;
                    console.log('--------');
                    //console.log(array);
                    for (var i = 0; i < array.length ; i++) {
                        var codeStr = array[i].code;
                        //console.log(codeStr);
                        if (res.data.saleId==codeStr) {
                            $scope.searchform.selected.name = array[i].name;
                            return;
                        }
                    }
                    
                })
            } 
        });
        
    
    };

    $scope.getsalelist();

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

    
    
    

    $scope.ok = function () {
        // 编辑奖品
        if (prizeId) {
            if ($scope.info.oldPrice!=''&&$scope.info.targetPrice!=''&&$scope.info.allowableNumber!=''&&$scope.info.description!=''
                &&$scope.info.img!=''&&$scope.info.activeId!=''&&$scope.info.totalnum!=''&&$scope.info.sellnum!=''&&$scope.info.buy_tips!='') {
                var para = {
                    'id' : prizeId
                }
                $scope.info.saleId = $scope.searchform.selected.code;
                para = angular.extend($scope.info,para);
                console.log(para);
                updatePrize.save(para,function(res) {
                    if (res.errcode!=0) {
                        alert(res.errmsg);
                        return;
                    }
                    console.log(para);
                    console.log(res);
                    alert('修改成功！');
                    $uibModalInstance.close();
                });
            } else {
                alert('请将数据补充完整!');
            }           
        } else {
            // 赋值saleID
            $scope.info.saleId = $scope.searchform.selected.code;
            if ($scope.info.oldPrice!=''&&$scope.info.targetPrice!=''&&$scope.info.allowableNumber!=''&&$scope.info.description!=''
                &&$scope.info.img!=''&&$scope.info.activeId!=''&&$scope.info.totalnum!=''&&$scope.info.sellnum!=''&&$scope.info.buy_tips!='') {
                // 添加奖品
                savePrize.save($scope.info,function (res) {
                    console.log($scope.info);
                    if (res.errcode!=0) {
                        alert(res.errmsg);
                        return;
                    }
                    console.log($scope.info);
                    console.log(res);
                    alert('添加成功！');
                    $uibModalInstance.close();

                    //$state.go('app.prizelist');
                });
            } else {
                alert('请将数据补充完整!');
            }
            
        
        }
        
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};
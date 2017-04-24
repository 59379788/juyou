module.exports = function($scope, $stateParams, $state, $uibModal, $uibModalInstance, ITEMS_PERPAGE,FileUploader,savePrize,getPrize,prizeId,updatePrize,salelist,toaster){  
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
        'buy_tips' : '',
        'fictitious_participate_num' : ''
    }

    $scope.searchform = {
        'selected' :{
            'name' : ''
        }
    };
    var imgarray = [];
    var imgstr = '';
    $scope.getsalelist = function() {
        salelist.save({'sale_category' : 'S14'},function(res) {
            if (res.errcode!=0) {
                toaster.success({title: "", body:res.errmsg});
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
                        toaster.success({title: "", body:res.errmsg});
                        return;
                    }           
                    //$scope.searchform.selected.name = res.data.saleId;
                    $scope.info = res.data;
                    // imgarray = res.data.img.split(',');
                    // console.log(imgarray);
                    // $scope.info.img1 = imgarray[0];
                    // $scope.info.img2 = imgarray[1];
                    $scope.info.oldPrice = res.data.oldPrice/100;
                    $scope.info.targetPrice = res.data.targetPrice/100;
                    console.log('详情');
                    console.log(res.data.saleId);
                    //$scope.info.saleId = res.data.saleId;
                    console.log($scope.info);
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
    
    // 图片1
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
        // imgarray.splice(0,1,response.savename);
        // console.log(imgarray);
        // $scope.info.img1 = response.savename;
        // imgstr = imgarray.join(","); 
        // console.log(imgstr);
        // $scope.info.img = imgstr; 
        $scope.info.img = response.savename;


        // $scope.info.img1 = response.savename;
        // imgarray.push($scope.info.img1);
        // console.log(imgarray);
        // imgstr = imgarray.split(',');
        // console.log(imgstr);
    };

    // 图片2
    // var uploader1 = $scope.uploader1 = new FileUploader({
    //     url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    // });

    // uploader1.filters.push({
    //     name: 'imageFilter',
    //     fn: function(item /*{File|FileLikeObject}*/, options) {
    //         var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
    //         return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    //     }
    // });
    
    
    // uploader1.onSuccessItem = function(fileItem, response, status, headers) {
    //     imgarray.splice(1,1,response.savename);
    //     console.log(imgarray);
    //     $scope.info.img2 = response.savename;
    //     imgstr = imgarray.join(","); 
    //     console.log(imgstr);
    //     $scope.info.img = imgstr; 

    // };
    
    
    

    $scope.ok = function () {
        // 编辑奖品
        if (prizeId) {
            if ($scope.info.oldPrice!=''&&$scope.info.targetPrice!=''&&$scope.info.allowableNumber!=''&&$scope.info.description!=''
                &&$scope.info.img!=''&&$scope.info.activeId!=''&&$scope.info.totalnum!=''&&$scope.info.buy_tips!=''&&$scope.info.fictitious_participate_num!='') {
                var para = {
                    'id' : prizeId
                }
                $scope.info.oldPrice = $scope.info.oldPrice * 100;
                $scope.info.targetPrice = $scope.info.targetPrice * 100;
                $scope.info.saleId = $scope.searchform.selected.code;
                para = angular.extend($scope.info,para);
                console.log(para);
                updatePrize.save(para,function(res) {
                    if (res.errcode!=0) {
                        toaster.success({title: "", body:res.errmsg});
                        return;
                    }
                    console.log(para);
                    console.log(res);
                    toaster.success({title: "", body:"修改成功"});
                    $uibModalInstance.close();
                });
            } else {
                toaster.success({title: "", body:"请将数据补充完整"});
            }           
        } else {
            // 赋值saleID
            $scope.info.saleId = $scope.searchform.selected.code;
            if ($scope.info.oldPrice!=''&&$scope.info.targetPrice!=''&&$scope.info.allowableNumber!=''&&$scope.info.description!=''
                &&$scope.info.img!=''&&$scope.info.activeId!=''&&$scope.info.totalnum!=''&&$scope.info.buy_tips!=''&&$scope.info.fictitious_participate_num!='') {
                // 添加奖品
                $scope.info.oldPrice = $scope.info.oldPrice * 100;
                $scope.info.targetPrice = $scope.info.targetPrice * 100;
                savePrize.save($scope.info,function (res) {
                    console.log($scope.info);
                    if (res.errcode!=0) {
                        toaster.success({title: "", body:res.errmsg});
                        return;
                    }
                    console.log($scope.info);
                    console.log(res);
                    toaster.success({title: "", body:"添加成功"});
                    $uibModalInstance.close();

                    //$state.go('app.prizelist');
                });
            } else {
                toaster.success({title: "", body:"请将数据补充完整"});
            }
            
        
        }
        
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

};
module.exports = function($scope, $stateParams, $state, $uibModal, $uibModalInstance, ITEMS_PERPAGE,FileUploader,savePrize,getPrize){ 
    var id = $stateParams.id;
    var pr = $stateParams.prizeId;
    alert(pr);
    //alert(id);
    $scope.info = {
        'id' : id,
        'saleId' : '111',
        'oldPrice' : '',
        'targetPrice' : '',
        'allowableNumber' : '',
        'description' : '',
        'img' : '',
        'title' : '',
        'activeId' : id,
        'totalnum' : '',
        'sellnum' : ''

    }

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

    // 搜索下拉框
        // var app = angular.module('myApp', []);  
        // app.controller('myCtrl', function($scope) {  
        $scope.datas = ["key4","xyz","key3","xxxx","key2","value2","key1","value1"]; //下拉框选项  
        $scope.tempdatas = $scope.datas; //下拉框选项副本  
        $scope.hidden=true;//选择框是否隐藏  
        $scope.searchField='';//文本框数据  
        //将下拉选的数据值赋值给文本框  
        $scope.change=function(x){  
        $scope.searchField=x;  
        $scope.hidden=true;  
    }  
    //获取的数据值与下拉选逐个比较，如果包含则放在临时变量副本，并用临时变量副本替换下拉选原先的数值，如果数据为空或找不到，就用初始下拉选项副本替换  
    $scope.changeKeyValue=function(v){  
          
        var newDate=[];  //临时下拉选副本  
        //如果包含就添加  
        angular.forEach($scope.datas ,function(data,index,array){  
            if(data.indexOf(v)>=0){  
                newDate.unshift(data);  
            }  
        });  
        //用下拉选副本替换原来的数据  
        $scope.datas=newDate;  
        //下拉选展示  
        $scope.hidden=false;  
        //如果不包含或者输入的是空字符串则用初始变量副本做替换  
        if($scope.datas.length==0 || ''==v){  
            $scope.datas=$scope.tempdatas;  
        }  
        console.log($scope.datas);  
    }; 
 
    // 
    if (pr) {
        //console.log(prizeId);
        getPrize.save({'id':pr},function(res) {
            //console.log(prizeId);
            if (res.errcode!=0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
            $scope.info = res.data;
        })
    }

    $scope.ok = function () {
        alert('okkkk');
        savePrize.save($scope.info,function (res) {
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
        
        // console.log($scope.obj);
        // if ($scope.obj.off_reason !== '') { 
        //     goodoffsale.save($scope.obj, {'code' : code}, function(res){
        //     if(res.errcode === 0)
        //     {
        //         alert('下架成功');
        //         $uibModalInstance.close();
                
        //     }
        //     else
        //     {
        //       alert(res.errmsg);
        //     }
        //    });
        // } else { 
        //     alert('请填写下架原因');
        //     return;
        // }
        
        
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

};
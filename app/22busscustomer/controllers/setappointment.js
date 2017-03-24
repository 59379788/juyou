module.exports = function($scope, $stateParams, $state, getDate,str2date,date2str,$uibModal, $uibModalInstance, ITEMS_PERPAGE,
salelist,id,ticketlist,toaster,insertMakeAppointment,getMakeAppointmentById,updateMakeAppointment){  
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.startTime = new Date(); 
    $scope.section.end = {};
    $scope.section.endTime = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    $scope.searchform = {
        'selected' :{
            'name' : ''
        }
    };

    $scope.ticketsearchform = {
        'selected' :{
            'name' : ''
        }
    };

    $scope.info = {
         'title' : '',
         'sale_code' : '',
         'ticket_code' : '',
         'stock_num' : '',
         'startTime' : getDate($scope.section.startTime) + " 00:00:00",
         'endTime': getDate($scope.section.endTime) + " 23:59:59"
    }
    
    salelist.save({},function(res){
        if(res.errcode!=0){
            toaster.success({title:"",body:res.errmsg});
            return;
        }
        console.log(res);
        $scope.datas = res.data;
        var array = res.data;
    });
    
    var sale_code = '';
    var ticket_code = '';
    $scope.change = function(){
        $scope.info.sale_code = $scope.searchform.selected.code;
         sale_code = $scope.searchform.selected.code;   
         ticketlist.save({'sale_code':sale_code},function(res){
            if(res.errcode!=0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log('fhakjfha');
            console.log(res);
            $scope.ticketdatas = res.data;
        });
     
    };
    $scope.ticketChange = function(){
        $scope.info.ticket_code = $scope.ticketsearchform.selected.code;
    };
    if(id){
        alert(id);
        getMakeAppointmentById.save({'id' : id},function(res){
            if(res.errcode!=0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.info = res.data;
        })

    }

    

    
        
    
    $scope.ok = function(){
        if(id){

        }
        console.log($scope.info);
        insertMakeAppointment.save($scope.info,function(res){
            if(res.errcode!=0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res.data);
            toaster.success({title:"",body:"创建预约成功!"});
            $uibModalInstance.close();

        })
    };

    // var id = $stateParams.id;
    // $scope.salelists = [];
    // $scope.info = {
    //     'saleId' : '',
    //     'oldPrice' : '',
    //     'targetPrice' : '',
    //     'allowableNumber' : '',//允许砍价人数
    //     'description' : '',
    //     'img' : '',
    //     'title' : '',
    //     'activeId' : id,
    //     'totalnum' : '',
    //     'buy_tips' : '',
    //     'fictitious_participate_num' : ''
    // }

    // $scope.searchform = {
    //     'selected' :{
    //         'name' : ''
    //     }
    // };

    // $scope.getsalelist = function() {
    //     salelist.save($scope.searchform,function(res) {
    //         if (res.errcode!=0) {
    //             toaster.success({title: "", body:res.errmsg});
    //             return;
    //         }
    //         console.log(res);
    //         $scope.datas = res.data;
    //         var array = res.data;
    //         // 获得奖品详情
    //         if (prizeId) {
    //             getPrize.save({'id':prizeId,},function(res) {
    //                 //console.log(prizeId);
    //                 if (res.errcode!=0) {
    //                     toaster.success({title: "", body:res.errmsg});
    //                     return;
    //                 }           
    //                 //$scope.searchform.selected.name = res.data.saleId;
    //                 $scope.info = res.data;
    //                 $scope.info.oldPrice = (res.data.oldPrice);
    //                 $scope.info.targetPrice = (res.data.targetPrice);
    //                 console.log('--------');
    //                 //console.log(array);
    //                 for (var i = 0; i < array.length ; i++) {
    //                     var codeStr = array[i].code;
    //                     //console.log(codeStr);
    //                     if (res.data.saleId==codeStr) {
    //                         $scope.searchform.selected.name = array[i].name;
    //                         return;
    //                     }
    //                 }
                    
    //             })
    //         } 
    //     });
        
    
    // };

    // $scope.getsalelist();

    // // 主图
    // var uploader = $scope.uploader = new FileUploader({
    //     url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=aa&selfdir=bb'
    // });

    // uploader.filters.push({
    //     name: 'imageFilter',
    //     fn: function(item /*{File|FileLikeObject}*/, options) {
    //         var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
    //         return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
    //     }
    // });
    
    
    // uploader.onSuccessItem = function(fileItem, response, status, headers) {
    //     $scope.info.img = response.savename;
    // };

    
    
    

    // $scope.ok = function () {
    //     // 编辑奖品
    //     if (prizeId) {
    //         if ($scope.info.oldPrice!=''&&$scope.info.targetPrice!=''&&$scope.info.allowableNumber!=''&&$scope.info.description!=''
    //             &&$scope.info.img!=''&&$scope.info.activeId!=''&&$scope.info.totalnum!=''&&$scope.info.buy_tips!=''&&$scope.info.fictitious_participate_num!='') {
    //             var para = {
    //                 'id' : prizeId
    //             }
    //             $scope.info.oldPrice = $scope.info.oldPrice * 100;
    //             $scope.info.targetPrice = $scope.info.targetPrice * 100;
    //             $scope.info.saleId = $scope.searchform.selected.code;
    //             para = angular.extend($scope.info,para);
    //             console.log(para);
    //             updatePrize.save(para,function(res) {
    //                 if (res.errcode!=0) {
    //                     toaster.success({title: "", body:res.errmsg});
    //                     return;
    //                 }
    //                 console.log(para);
    //                 console.log(res);
    //                 toaster.success({title: "", body:"修改成功"});
    //                 $uibModalInstance.close();
    //             });
    //         } else {
    //             toaster.success({title: "", body:"请将数据补充完整"});
    //         }           
    //     } else {
    //         // 赋值saleID
    //         $scope.info.saleId = $scope.searchform.selected.code;
    //         if ($scope.info.oldPrice!=''&&$scope.info.targetPrice!=''&&$scope.info.allowableNumber!=''&&$scope.info.description!=''
    //             &&$scope.info.img!=''&&$scope.info.activeId!=''&&$scope.info.totalnum!=''&&$scope.info.buy_tips!=''&&$scope.info.fictitious_participate_num!='') {
    //             // 添加奖品
    //             savePrize.save($scope.info,function (res) {
    //                 console.log($scope.info);
    //                 if (res.errcode!=0) {
    //                     toaster.success({title: "", body:res.errmsg});
    //                     return;
    //                 }
    //                 console.log($scope.info);
    //                 console.log(res);
    //                 toaster.success({title: "", body:"添加成功"});
    //                 $uibModalInstance.close();

    //                 //$state.go('app.prizelist');
    //             });
    //         } else {
    //             toaster.success({title: "", body:"请将数据补充完整"});
    //         }
            
        
    //     }
        
    // };

    // $scope.cancel = function () {
    //     $uibModalInstance.dismiss('cancel');
    // };

};
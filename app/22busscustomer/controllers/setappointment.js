module.exports = function($scope, $stateParams, $state, getDate,str2date,date2str,$uibModal, $uibModalInstance, ITEMS_PERPAGE,
salelist,ticketlist,toaster,insertMakeAppointment,getMakeAppointmentById,updateMakeAppointment,id){  
    //var id = $stateParams.id;
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
         'sale_name' :'',
         'ticket_name' : '',
         'startTime' : getDate($scope.section.startTime) + " 00:00:00",
         'endTime': getDate($scope.section.endTime) + " 23:59:59"
    }
    
    // 获取销售品列表
    $scope.getsalelist = function(){
        salelist.save({},function(res){
            if(res.errcode!=0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.datas = res.data;
            var array = res.data;
        });
    };
    $scope.getsalelist();
    
    
    var sale_code = '';
    var ticket_code = '';
    $scope.change = function(){
        console.log($scope.searchform.selected.code);
        $scope.info.sale_code = $scope.searchform.selected.code;
        $scope.info.sale_name = $scope.searchform.selected.name;
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
        $scope.info.ticket_name = $scope.ticketsearchform.selected.name;
    };
     //取详情
    if(id){
        getMakeAppointmentById.save({'id' : id},function(res){
            if(res.errcode!=0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res);
            $scope.section.startTime = str2date(res.data.startTime);
            $scope.section.endTime = str2date(res.data.endTime);
            $scope.info = res.data;
            $scope.searchform.selected.name = $scope.info.sale_name;
            $scope.ticketsearchform.selected.name = $scope.info.ticket_name;
     
        });

    }

    // 添加和编辑
    $scope.ok = function(){
        if(id){
            var para = {
                'id' : id,
                'startTime' : date2str($scope.section.startTime) + " 00:00:00",
                'endTime' : date2str($scope.section.endTime)+ " 23:59:59"
            }
            para = angular.extend($scope.info,para);
            console.log(para);
            updateMakeAppointment.save(para,function(res){
                if(res.errcode!=0){
                    toaster.success({title:"",body:res.errmsg});
                    return;
                }
                console.log(res.data);
                toaster.success({title:"",body:"修改预约成功!"});
                $uibModalInstance.close();

            });
        } else {
            var para = {
                'startTime' : date2str($scope.section.startTime) + " 00:00:00",
                'endTime' : date2str($scope.section.endTime)+ " 23:59:59"
            }
            para = angular.extend($scope.info,para);
            console.log(para);
            insertMakeAppointment.save(para,function(res){
                if(res.errcode!=0){
                    toaster.success({title:"",body:res.errmsg});
                    return;
                }
                console.log(res.data);
                toaster.success({title:"",body:"创建预约成功!"});
                $uibModalInstance.close();

            });
        }
        
    };

};
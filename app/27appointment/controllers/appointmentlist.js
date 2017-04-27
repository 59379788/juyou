module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findMakeAppointmentList,delMakeAppointment,ticketlist,salelist, 
getDate,str2date,date2str,offstate,onstate,toaster){   
   /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.searchForm = {
        'sale_name' : '',
        'ticket_name' : ''
    }

    $scope.search = function(){
        var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        para = angular.extend($scope.searchForm,para);
        findMakeAppointmentList.save(para,function(res){
            if(res.errcode!=0){
                toaster.success({title:"",body:res.errmsg});
                return;
            }
            console.log(res.data);
            // $scope.objs = res.data.results;
            var array = res.data.results;
            for(var i = 0;i < array.length;i++){
                array[i].startTime = array[i].startTime.replace(/,/g,'\r\n');
                // timearr = array[i].startTime.split(",");
                console.log(array[i].startTime);
            }
            $scope.objs = array;
            console.log('数组');
            console.log(array);
            $scope.bigTotalItems = res.data.totalRecord;

        });

    };
    $scope.search();

    $scope.add = function(id){
        $state.go('app.setappointment');     
    };
    $scope.edit = function(id){
        $state.go('app.setappointment',{'id' : id});
    };
    $scope.delete = function(id){
        if(confirm('确定要删除吗?')){
            delMakeAppointment.save({'id' : id},function(res){
                if(res.errcode!=0){
                    toaster.error({title:"",body:res.errmsg});
                    return;
                }
                console.log(res.data);
                $scope.search();
                toaster.success({title:"",body:"删除成功!"});
            })
        }
        
    };
    $scope.seelist = function(){
        $state.go('app.customerlist');
    };
    $scope.off = function(id){
        offstate.save({'id' : id},function(res){
            if(res.errcode != 0){
                toaster.error({title:"",body:res.errmsg});
                return;
            }
            toaster.success({title:"",body:"下架成功!"});
            $scope.search();
            
            
        })
    }
    $scope.on = function(id){
        onstate.save({'id' : id},function(res){
            if(res.errcode != 0){
                toaster.error({title:"",body:res.errmsg});
                return;
            }
            toaster.success({title:"",body:"上架成功!"});
            $scope.search();
            
            
        })
    }


    

    


};
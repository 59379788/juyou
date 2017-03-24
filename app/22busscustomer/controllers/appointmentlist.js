module.exports = function($scope, $stateParams, $state, $uibModal,ITEMS_PERPAGE,findMakeAppointmentList, insertMakeAppointment, updateMakeAppointment,getMakeAppointmentById,delMakeAppointment,ticketlist,salelist, getDate,str2date,date2str,toaster){   
   /* 分页
     * ========================================= */
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条

    $scope.searchForm = {
        'name' : '',
        'mobile' : '',
        'title' : ''
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
            $scope.objs = res.data.results;
            $scope.bigTotalItems = res.data.totalRecord;
        })

    }
    $scope.search();

    $scope.add = function(){
        var modalInstance = $uibModal.open({
          template: require('../views/setappointment.html'),
          controller: 'setappointment',
          size: 'lg',
          resolve: {
            id : function(){
                return id;
            },
            findMakeAppointmentList : function(){
                return findMakeAppointmentList;
            },
            insertMakeAppointment : function(){
                return insertMakeAppointment;
            },
            updateMakeAppointment : function(){
                return updateMakeAppointment;
            },
            getMakeAppointmentById : function(){
                return getMakeAppointmentById;
            },
            delMakeAppointment : function(){
                return delMakeAppointment;
            },
            ticketlist : function(){
                return ticketlist;
            },
            salelist : function(){
                return salelist;
            },
            getDate : function(){
                return getDate;
            },
            str2date : function(){
                return str2date;
            },
            date2str : function(){
                return date2str;
            }

          }
        });

        modalInstance.result.then(function () {
          $scope.search();
          
        }, function () {
          //$scope.load();
        });
    };
    $scope.edit = function(id){
        var modalInstance = $uibModal.open({
          template: require('../views/setappointment.html'),
          controller: 'setappointment',
          size: 'lg',
          resolve: {
            id : function(){
                return id;
            },
            findMakeAppointmentList : function(){
                return findMakeAppointmentList;
            },
            insertMakeAppointment : function(){
                return insertMakeAppointment;
            },
            updateMakeAppointment : function(){
                return updateMakeAppointment;
            },
            getMakeAppointmentById : function(){
                return getMakeAppointmentById;
            },
            delMakeAppointment : function(){
                return delMakeAppointment;
            },
            ticketlist : function(){
                return ticketlist;
            },
            salelist : function(){
                return salelist;
            },
            getDate : function(){
                return getDate;
            },
            str2date : function(){
                return str2date;
            },
            date2str : function(){
                return date2str;
            }

          }
        });

        modalInstance.result.then(function () {
          $scope.search();
          
        }, function () {
          //$scope.load();
        });
    }
    $scope.seelist = function(){
        $state.go('app.customerlist');
    }

    

    


};
module.exports = function($scope, $stateParams, $uibModal,ITEMS_PERPAGE,saveactivity,getDate){
	
    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();
 
    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    $scope.info = {
        'activity_proposer_name' : '',
        'activity_proposer_card' : '',
        'activity_proposer_mobile' : '',
        'activity_titlle' :　'',
        'activity_main_picture' : '',
        'activity_picture' : '',
        'activity_info' : '',
        'activity_estimate_rmb' : '',
        'active_type' : ''
    };

    $scope.saveactivity = function() {
        var para = {
            start_time : getDate($scope.section.start.date) + " 00:00:00",
            end_time : getDate($scope.section.end.date) + " 23:59:59"
        };
        para = angular.extend($scope.info, para);
        saveactivity.save(para, function(res) {
            console.log(para);
            if (res.errcode !== 0) {
                alert(res.errmsg);
                return;
            }
            console.log(res);
        });
    };

};
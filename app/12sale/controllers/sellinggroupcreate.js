module.exports = function($scope, $state, $uibModal, groupsalelist, groupsale, createOrder, getDate){

	$scope.groupobj = {};
	$scope.section = {};
	$scope.section.start = {};
	$scope.section.start.date = {};
	$scope.groupobjstate = 1;


	$scope.today = function() {
		$scope.section.start.date = new Date();
	};
	$scope.today();

	$scope.open = function(obj) {
		obj.opened = true;
	};

	groupsalelist().then(function(res) {
		console.log(res);
        if(res.errcode === 0)
        {
        	$scope.salearr = res.data;
        	$scope.groupobj.sale_code = $scope.salearr[0].code;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    $scope.detail = function(){

        detailmodal($scope.groupobj.sale_code);
        
    }

    //打开模态框
    function detailmodal(code)
    {
        var modalInstance = $uibModal.open({
          template: require('../views/saledetail.html'),
          controller: 'saledetail',
          resolve: {
            code : function(){
                return code;
            },
            groupsale : function(){
                return groupsale;
            }
          }
        });
    }

    //保存
	$scope.gogo = function(){

		if($scope.groupobj.book_count === undefined || $scope.groupobj.book_count == '')
		{
			alert('出游人数不能为空');
			return;
		}

		if($scope.section.start.date === undefined || $scope.section.start.date == '')
		{
			alert('出游时间不能为空');
			return;
		}

		if($scope.groupobj.sale_code === undefined || $scope.groupobj.sale_code == '')
		{
			alert('预定团票不能为空');
			return;
		}

		if($scope.groupobj.guide_name === undefined || $scope.groupobj.guide_name == '')
		{
			alert('导游姓名不能为空');
			return;
		}

		if($scope.groupobj.guide_mobile === undefined || $scope.groupobj.guide_mobile == '')
		{
			alert('导游电话不能为空');
			return;
		}

		if($scope.groupobj.vehicle_number === undefined || $scope.groupobj.vehicle_number == '')
		{
			alert('车牌号不能为空');
			return;
		}

		$scope.groupobj.arrival_date = getDate($scope.section.start.date);
		createOrder.save($scope.groupobj, function(res){

			console.log(res);

			if(res.errcode === 0)
			{
				$state.go('app.sellinggroup');
			}
			else
			{
				alert(res.errmsg);
			}

		});
	};



};

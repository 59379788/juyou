module.exports = function($scope, dictbytypelist, salecategoryinsert, $uibModalInstance){

    $scope.obj = {};

    dictbytypelist({'type' : 'sale_category'}).then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
            $scope.typearr = res.data;
            $scope.obj.sale_category_code=$scope.typearr[0].value;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    dictbytypelist({'type' : 'ticket_sale_sub_table'}).then(function(res) {
        console.log(res);
        if(res.errcode === 0)
        {
            $scope.salesubarr = res.data;
            $scope.obj.sub_table_code=$scope.salesubarr[0].value;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    $scope.gogo = function(){

        salecategoryinsert.save($scope.obj, function(res){

            console.log(res);
            if(res.errcode === 0)
            {
                $uibModalInstance.close();
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };
   
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
	
};
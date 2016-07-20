module.exports = function($scope, corridorproductinfo, id){

    corridorproductinfo.get({'prodCode' : id}, {}, function(res){

        console.log(res);

        if(res.errcode === 0)
        {
        	$scope.obj = res.data.Product;
        }
        else
        {
            alert(res.data.errmsg);
        }


	});
    
};
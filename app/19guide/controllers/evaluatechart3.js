module.exports = function($scope, shakecompanyinfolist, questionhpllist){

  	$scope.labels = [];
  	$scope.colors = ['#45b7cd', '#ff6384', '#ff8e72', '#FF0088', '#FF0000', '#FF8800', '#FFFF00', '#77FF00'];

  	$scope.data = [];

	$scope.obj = [];
  	$scope.totalobjs = [];

  	shakecompanyinfolist.get({'binding_type' : '2'}, function(res){
        
        if(res.errcode !== 0)
        {
            alert(res.errmsg);
            return ;
        }

        $scope.companyarr = res.data;
    });

  	$scope.load = function() {

    	questionhpllist.get($scope.obj, function(res){
            //console.log(res);
	        if(res.errcode !== 0)
	        {
	            alert(res.errmsg);
	            return ;
	        }

	        $scope.totalobjs.push(res.data);

	        var r = [];
	        for(var i=0; i<res.data.list.length; i++){
	        	r.push(res.data.list[i].hpl);
	        	$scope.labels.push(res.data.list[i].question);
	        }
	        $scope.data.push(r);
	        
	    });
    	
    }
    $scope.load();

    $scope.add = function() {
    	if($scope.obj.binding_company_code == undefined) return;

    	if($scope.totalobjs.length != 1)
		{
			for(var i=0; i<=$scope.totalobjs.length-1; i++)
			{
				if($scope.totalobjs[i].jqcode == $scope.obj.binding_company_code)
				{
					alert("请不要重复追加");
					return;
				}
			}
		}
    	//console.log($scope.obj);
    	questionhpllist.get($scope.obj, function(res){
            console.log(res.data);
	        if(res.errcode !== 0)
	        {
	            alert(res.errmsg);
	            return ;
	        }

	        $scope.totalobjs.push(res.data);

	        var r = [];
	        for(var i=0; i<res.data.list.length; i++){
	        	r.push(res.data.list[i].hpl);
	        }
	        $scope.data.push(r);
	        
	    });
    }

    $scope.del = function(jqcode) {
    	for(var i=0; i<=$scope.totalobjs.length; i++)
		{
			if($scope.totalobjs[i].jqcode == jqcode)
			{
				$scope.totalobjs.splice(i, 1);
				$scope.data.splice(i, 1);
			}
		}
    }







};
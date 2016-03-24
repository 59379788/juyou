module.exports = function($scope, $stateParams, $resource, BASEURL38985){

	var url = BASEURL38985 + '/' + $stateParams.url.split("_").join('/');

	var dlq = $resource(url, {});

	$scope.maxSize = 5;             //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = 7;        //每页显示几条


	$scope.load = function(){

		var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };

		dlq.save(para, function(res){

			console.log(res);

			$scope.obj = {

				'title' : [
					{
						'name' : '姓名',
						'length' : '2',
						'key' : 'name'
					},
					{
						'name' : '密码',
						'length' : '2',
						'key' : 'pass'
					},
					{
						'name' : '真实姓名',
						'length' : '4',
						'key' : 'rname'
					},
					{
						'name' : '电话',
						'length' : '4',
						'key' : 'tel'
					}
				],

				'content' : [
					{
						'name' : 'dlq',
						'pass' : '1234',
						'rname' : 'ddd',
						'tel' : '13840188285'
					},
					{
						'name' : 'dlq1',
						'pass' : '1234111',
						'rname' : 'ddd111',
						'tel' : '138401882851'
					},
					{
						'name' : 'dlq2',
						'pass' : '12342222',
						'rname' : 'ddd222',
						'tel' : '138401882852'
					}
					
				],

				'page' : {

					'maxSize' : 5,
					'bigCurrentPage' : 1,
					'itemsPerPage' : 7	

				}
			};




		});

	};
	$scope.load();
	

	
	








};

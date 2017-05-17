module.exports = function($scope, $rootScope, toaster){

	$scope.menuobj = $rootScope.menudata;

	$scope.isCollapsed = true;

	$scope.noRule = function(){
		toaster.error({ title: "提示", body: "请配置链接地址！" });
	}


	// $scope.logo = require('../../img/logo.png');



	// var data = [
	// 	{
	// 		'sysname' : '供应商',
	// 		'menu' : [
	// 			{
	// 				'menuname' : '产品',
	// 				'menu' : [
	// 					{
	// 						'menuname' : '新建',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '上架产品列表',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '下架产品列表',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '草稿列表',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '删除列表',
	// 						'url' : '1111'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				'menuname' : '销量',
	// 				'menu' : [
	// 					{
	// 						'menuname' : '销量1',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '销量2',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '销量3',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '销量4',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '销量5',
	// 						'url' : '1111'
	// 					}
	// 				]
	// 			}
	// 		]
	// 	},
	// 	{
	// 		'sysname' : '分销商',
	// 		'menu' : [
	// 			{
	// 				'menuname' : '产品11',
	// 				'menu' : [
	// 					{
	// 						'menuname' : '新建1',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '上架产品列表2',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '下架产品列表3',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '草稿列表4',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '删除列表5',
	// 						'url' : '1111'
	// 					}
	// 				]
	// 			},
	// 			{
	// 				'menuname' : '销量6',
	// 				'menu' : [
	// 					{
	// 						'menuname' : '销量17',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '销量28',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '销量39',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '销量40',
	// 						'url' : '1111'
	// 					},
	// 					{
	// 						'menuname' : '销量51',
	// 						'url' : '1111'
	// 					}
	// 				]
	// 			}
	// 		]
	// 	}

	// ];


	// //$scope.sysname = 



	// $scope.menudata = data;
	// $scope.currentsys = data[0];
	// $scope.currentmenu = $scope.currentsys.menu[0];



	// $scope.choosesys = function(sys)
	// {
	// 	$scope.currentsys = sys;
	// 	$scope.currentmenu = $scope.currentsys.menu[0];
	// };

	// $scope.choosemenu = function(menu)
	// {
	// 	$scope.currentmenu = menu;
	// 	console.log($scope.currentmenu);
	// };



};
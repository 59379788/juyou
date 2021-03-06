module.exports = function ($) {

	var dlq = angular.element(document).ready(function () {

		$.ajax({
			url: '/api/ac/sc/menuService/menulist',
			type: "GET",
			dataType: 'json'
		}).then(function (res) {

			//按钮显示权限
			var permissions = new Array();
			//菜单
			var menudata = {};

			if (res.errcode === 0) {
				menudata = res.data;

				for (var i = 0; i < res.data.list.length; i++) {
					var tmp = res.data.list[i];
					if (angular.isArray(tmp.list)) {
						for (var j = 0; j < tmp.list.length; j++) {
							var tmp1 = tmp.list[j];
							if(tmp1.hasOwnProperty('permission') && tmp1.permission){
								var permissionArr = [];
								var permissionArr = tmp1.permission.split(',');
								for (var index = 0; index < permissionArr.length; index++) {
									var element = permissionArr[index];
									permissions.push(element)
								}
								// permissions.push(tmp1.permission)
							}
						}
					}
				}

				angular.module('juyouApp').run(['$rootScope', '$location', 'angularPermission', function ($rootScope, $location, angularPermission) {

					$rootScope.menudata = menudata;

					$rootScope.userPermissionList = permissions;

					angularPermission.setPermissions($rootScope.userPermissionList);

				}]);

				angular.bootstrap(document, ['juyouApp']);

				//  console.log(menudata);
			}
			else if (res.errcode === 1001) {
				console.log(res);

				console.log('12123123213123');
				window.location = "/manager/login";
			}
			else if (res.errcode === 1002) {
				alert('无菜单权限');
				window.location = "/manager/login";
			}
			else {
				console.log(res);
				alert(res.errmsg);
				//window.location = "/manager/login";
			}

		});
	});

};
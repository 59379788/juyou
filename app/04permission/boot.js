module.exports = function($){

	var dlq = angular.element(document).ready(function() {
    
    $.ajax({
      url: '/api/ac/sc/menuService/menulist',
      type: "GET",
      dataType: 'json'
    }).then(function(res){

      //console.log(res);

      //按钮显示权限
      var permissions = new Array();
      //菜单
      var menudata = {};

      if(res.errcode === 0)
      {
        menudata = res.data;

        for(var i = 0; i < res.data.list.length; i++)
        {
          var tmp = res.data.list[i];
          for(var j = 0; j < tmp.list.length; j++)
          {
            var tmp1 = tmp.list[j];
            if(tmp1.hasOwnProperty('permission'))
            {
              permissions.push(tmp1.permission)
            }
          }
        }

        angular.module('juyouApp').run(['$rootScope','$location','angularPermission', function($rootScope,$location,angularPermission){

          $rootScope.menudata = menudata;

          $rootScope.userPermissionList = permissions;

          angularPermission.setPermissions($rootScope.userPermissionList);

        }]);

        angular.bootstrap(document, ['juyouApp']);

      //  console.log(menudata);
      }
      else if(res.errcode === 1001)
      {
        window.location = "/manager/login";
      }
      else if(res.errcode === 1002)
      {
        alert('无菜单权限');
      }
      else
      {
        alert(res.errmsg);
        //window.location = "/manager/login";
      }

    });
  });

};
module.exports = function($){


	var dlq = angular.element(document).ready(function() {
    
    $.ajax({
      url: '/api/ac/sc/menuService/menulist',
      type: "GET",
      dataType: 'json'
    }).then(function(res){

      console.log('1111111');
      console.log(res);
      console.log('1111111');

      var data = {};

      data.permissions = new Array();

      if(res.errcode === 0)
      {
        for(var i = 0; i < res.data.list.length; i++)
        {
          var tmp = res.data.list[i];


        }
      }

      //var data = {};
        
        //data.permissions = 
        //["ticket", "device", "doc", "doc.create", "doc.edit", "permission"];
        //只能看文档
        //data.permissions = ["edit123"];

        // for (var i = 0; i < data.permissions.length; i++) {
        //   data.permissions[i] = data.permissions[i].replace(/\s/g,"");
        // };

        angular.module('juyouApp').run(['$rootScope','$location','angularPermission', function($rootScope,$location,angularPermission){

          $rootScope.userPermissionList = data.permissions;

          angularPermission.setPermissions($rootScope.userPermissionList);

        }]);

    angular.bootstrap(document, ['juyouApp']);

    });
  })

  ;






};
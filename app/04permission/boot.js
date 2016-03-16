module.exports = function(){

	var dlq = angular.element(document).ready(function() {
    
    // $.ajax({
    //   url: '/api/get_user_permission',
    //   type: "GET",
    //   dataType: 'json'
    // }).then(function(data){

      var data = {};
        
        data.permissions = 
        ["ticket", "device", "doc", "doc.create", "doc.edit", "permission"];
        //只能看文档
        //data.permissions = ["doc"];

        for (var i = 0; i < data.permissions.length; i++) {
          data.permissions[i] = data.permissions[i].replace(/\s/g,"");
        };
        angular.module('juyouApp').run(['$rootScope','$location','angularPermission', function($rootScope,$location,angularPermission){

          $rootScope.userPermissionList = data.permissions;

          angularPermission.setPermissions($rootScope.userPermissionList);

        }]);

    angular.bootstrap(document, ['juyouApp']);

    //});
  })

  ;






};
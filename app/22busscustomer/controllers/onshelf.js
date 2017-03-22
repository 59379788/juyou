module.exports = function($scope, $state, $stateParams, $uibModal,findtradelist,toaster){
  findtradelist.save({'tradde_state' : ''}, function(res){
      if (res.errcode !== 0) {
          toaster.success({title:"",body:res.errmsg});
          return;
      }
      console.log(res);
  });

};
module.exports = function($scope, $state, $stateParams, $uibModal,findtradelist){
  findtradelist.save({'tradde_state' : ''}, function(res){
      if (res.errcode !== 0) {
          alert(res.errmsg);
          return;
      }
      console.log(res);
  });

};
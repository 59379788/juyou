module.exports = function($scope, $state, list, ITEMS_PERPAGE, mechanism, 
 $uibModal, recharge, trackinfo, update, getSellerInfoByCode, transData){

  	$scope.searchform = {};

    function init(){
      //预存余额
      getSellerInfoByCode.get({}, function(res){
          //console.log(res);
          if(res.errcode === 0)
          {
              $scope.balance_price = res.data.balance_price;
          }
          else
          {
              alert(res.errmsg);
          }
      });

      list.get({}, function(res){

        console.log(res);

        if(res.errcode !== 0)
        {
          alert(res.errmsg);
          return;
        }

        $scope.objs = res.data;

      });
    }
    init();


  	$scope.create = function(){

  		$state.go('app.createdeposit');
  	};


    

    //充值
    $scope.recharge = function(obj){

        var modalInstance = $uibModal.open({
          template: require('../views/recharge.html'),
          controller: 'recharge',
          //size: 'lg',
          resolve: {
            obj : function(){
                return obj;
            },
            recharge : function(){
                return recharge;
            },
            balance : function(){
                return $scope.balance_price;
            }
          }
        });

        modalInstance.result.then(function () {
          init();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });
    }

    //明细
    $scope.trackinfo = function(obj){

        $state.go('app.trackinfo', {'seller_code' : obj.seller_code});
    }

    //编辑
    $scope.update = function(obj){

      var modalInstance = $uibModal.open({
          template: require('../views/update.html'),
          controller: 'depositupdate',
          //size: 'lg',
          resolve: {
            obj : function(){
                return obj;
            },
            update : function(){
                return update;
            }
          }
        });

        modalInstance.result.then(function () {
          init();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

      //$state.go('app.depositupdate');
    };

    
};
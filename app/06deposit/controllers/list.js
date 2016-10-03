module.exports = function($scope, $state, list, ITEMS_PERPAGE, mechanism, 
 $uibModal, recharge, trackinfo, update, getSellerInfoByCode, transData){

  	$scope.searchform = {};
    $scope.seller_name ;

    //页面内商户搜索
    $scope.searchbyname = function(){

        //不传值就所有结果都显示
        $scope.aggregate = new Array();
        if (($scope.seller_name == undefined) || ($scope.seller_name == "") ) {
          $scope.aggregate = $scope.objs;
          return;
        }

        //输入字符串的长度len
        var len = $scope.seller_name.length ;

        //遍历所有结果
        for (var i = $scope.objs.length - 1; i >= 0; i--) {

          //结果字符串长度不小于要搜索的字符串长度
          if ($scope.objs[i].seller_name.length >= len) {

            //遍历目标字符串的前len个到后len个
            for (var j = 0; $scope.objs[i].seller_name.length - j >= 0; j++) {

              //所取字符串和输入的比，相同就加到要显示的结果集中
              if($scope.objs[i].seller_name.substring(j, j + len) == $scope.seller_name) {
                $scope.aggregate.push($scope.objs[i]);

                //加到结果集中则无需继续遍历此目标字符串
                break;
              }
            }
          }
        }

        //遍历后没有符合条件的就全显示
        if ($scope.aggregate.length == 0) {
          $scope.aggregate = $scope.objs;
          alert("没有找到您输入的商户，请重新输入！")
        }
        // return;
    }


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

        $scope.aggregate = res.data;
        $scope.objs = res.data;
        console.log(11111111111111);
        console.log($scope.objs);
        console.log(2222222222222);

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

    //充值回平台
    $scope.back = function(){

      var obj = {};

      obj.seller_code = 'L0002';

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
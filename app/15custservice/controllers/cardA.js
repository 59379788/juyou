module.exports = function($scope, $uibModal, cardA, updateCardPass, saleticketinfo){

	$scope.searchform = {};
    
    $scope.load = function () {
        
        cardA.save($scope.searchform, function(res){

         	console.log(res);

         	if(res.errcode !== 0)
         	{
         		alert("数据获取失败");
         		return;
         	}

         	$scope.objs = res.data;

        });

    };

    $scope.edit = function(cardnum){

        var modalInstance = $uibModal.open({
          template: require('../user/editcardA.html'),
          controller: 'editcardA',
          size: 'xs',
          resolve: {
            cardnum : function(){
                return cardnum;
            },
            updateCardPass : function(){
                return updateCardPass;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {
            
        });

    };

    $scope.ticketinfo = function(code){

        var modalInstance = $uibModal.open({
          template: require('../user/saleticketinfo.html'),
          controller: 'saleticketinfo',
          size: 'lg',
          resolve: {
            code : function(){
                return code;
            },
            saleticketinfo : function(){
                return saleticketinfo;
            }
          }
        });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

    };

};
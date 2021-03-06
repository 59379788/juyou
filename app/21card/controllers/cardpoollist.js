module.exports = function($scope, $state, cardpoollist, $uibModal,addcard,unusedcard,addcard,
	releasecard,canrelease,ITEMS_PERPAGE,addcardpool,dictbytypelist,insertActiveCard,getcardno,$interval){

	dictbytypelist({'type' : 'user_pool_type'}).then(function(res) {
        if(res.errcode === 0)
        {
            $scope.typearr = res.data;
        }
        else
        {
            alert(res.errmsg);
        }
    });

    $scope.delete = function(){
        $state.go('app.deletecard');
    }
    // 往卡池里添加卡
    $scope.add = function(poolcode){   
      //  $state.go('app.addcard', {'poolcode':poolcode});
        var modalInstance = $uibModal.open({
          template: require('../views/addcard.html'),
          controller: 'addcard',
          //size: 'lg',
          resolve: {
            // 把卡池编号传到下一个界面
            poolcode : function(){
                return poolcode;
            },
            addcard : function(){
                return addcard;
            },
            unusedcard : function(){
                return unusedcard;
            },
            addcard : function(){
                return addcard;
            }
          }
        });

        modalInstance.result.then(function () {

          //init();
          // $scope.search();
        }, function () {
           
          //$log.info('Modal dismissed at: ' + new Date());
        });
 
    }
    // 添加卡池
    $scope.addcardpool = function(cardpool){
        var modalInstance = $uibModal.open({
          template: require('../views/addcardpool.html'),
          controller: 'addcardpool',
          size: 'xs',
          resolve: {
          	cardpool : function(){
                return cardpool;
            },
            addcardpool : function(){
                return addcardpool;
            },
            dictbytypelist : function(){
                return dictbytypelist;
            }
            
          }
        });

        modalInstance.result.then(function () {

          $scope.search();
        }, function () {
           
          //$log.info('Modal dismissed at: ' + new Date());
        });   
    }
    // 卡池详情
    $scope.release = function(poolcode) {   
        $state.go('app.releasecard', {'poolcode':poolcode});
    }
    // 释放卡
    $scope.relief = function(poolcode){
        //$state.go('app.relief', {'poolcode':poolcode});
        var modalInstance = $uibModal.open({
          template: require('../views/relief.html'),
          controller: 'relief',
          //size: 'lg',
          resolve: {
            // 把卡池编号传到下一个界面
            poolcode : function(){
                return poolcode;
            },
            releasecard : function(){
                return releasecard;
            },
            canrelease : function(){
                return canrelease;
            }
            
          }
        });

        modalInstance.result.then(function () {

          //init();
          // $scope.search();
        }, function () {
           
          //$log.info('Modal dismissed at: ' + new Date());
        });     
    }
    // 修改卡信息
    $scope.resivecardinfo = function(poolcode){
        $state.go('app.resivecardinfo', {'poolcode':poolcode});
    }
    // 修改卡池信息
    $scope.resivepoolinfo = function(poolcode, poolname,pooltype){
        $state.go('app.reviseinfo', {'poolcode':poolcode, 'poolname':poolname, 'pooltype':pooltype});
    }

    $scope.cardpoollists = [];
    $scope.searchform = {};
    
    $scope.maxSize = 5;            //最多显示多少个按钮
    $scope.bigCurrentPage = 1;      //当前页码
    $scope.itemsPerPage = ITEMS_PERPAGE;         //每页显示几条
    
    $scope.search = function(){
    	var para = {
            pageNo:$scope.bigCurrentPage, 
            pageSize:$scope.itemsPerPage
        };
        para = angular.extend($scope.searchform, para);

        cardpoollist.save(para, function(res){ 
        	console.log(para);
            if (res.errcode !== 0) {
                alert(res.errmsg);
	        } else {
		        $scope.cardpoollists = res.data.results;
		        $scope.bigTotalItems = res.data.totalRecord;
		        console.log(res.data);
	        }
        });
    };	
    $scope.search();  


    //自助激活
    /*$scope.active = function(poolcode){

    	getcardno.save({'pool_code':poolcode}, function(cardres){
            if (cardres.errcode !== 0) {
                alert(cardres.errmsg);
                return;
	        }

        	var start = parseInt(cardres.data.min);
        	var end = parseInt(cardres.data.min)+100;
        	var num = parseInt(cardres.data.max)-parseInt(cardres.data.min)+1;
        	var second = Math.floor(num/100);
        	if(num%100 != 0) second+=1;
        	$interval(function(){
        		if(end>parseInt(cardres.data.max)) {
        			end=parseInt(cardres.data.max);
        		}
        		
	    		insertActiveCard.save({'startcardno':start,'endcardno':end}, function(res){
		            if (res.errcode !== 0) {
		                alert(res.errmsg);
			        }
			        //alert("起始卡号："+start+",结束卡号："+end+" 自动激活成功");
		        });
        		start+=100;
        		end+=100;
        		
	        },1000,second);

        });

    }*/


    //自助激活
    $scope.active = function(poolcode){

    	if (confirm("您确认要自动激活吗？")) {
	    	getcardno.save({'pool_code':poolcode}, function(cardres){
	            if (cardres.errcode !== 0) {
	                alert(cardres.errmsg);
	                return;
		        }
		        for(var i=0; i<cardres.data.length; i++) {
		        	insertActiveCard.save({'startcardno':cardres.data[i].card_num,'endcardno':cardres.data[i].card_num}, function(res){
			            if (res.errcode !== 0) {
			                alert(res.errmsg);
				        }
			        });
		        }
	    		
		    	alert("激活成功");
	        });
        }

    }
};
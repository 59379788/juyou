module.exports = function($scope, $uibModal, getDate, vouchersalelist, vouchersalecreate, businesslist, typelist,typelists,toaster){

	$scope.searchform = {};

    $scope.load = function () {
        vouchersalelist.save($scope.searchform, function(res){

            /* 门票存储结构
             * ========================================= */
            var tkt = new Object();
            var restkt = new Array();

            console.log(res);

            if(res.errcode !== 0)
            {
                toaster.success({title:"",body:"数据获取失败"});
                return;
            }

            //用景区编号作为存储结构的属性，值是数组
            for(var i = 0, j = res.data.length; i < j; i++)
            {
                var tt = res.data[i];
                var v = tt.business_code;

                if(!tkt.hasOwnProperty(v))
                {
                    tkt[v] = new Object();
                    tkt[v].ticketarr = new Array();
                    tkt[v].viewname = tt.business_name;
                    tkt[v].viewcode = tt.business_code;
                }
                tkt[v].ticketarr.push(tt);
            }

            for(var key in tkt)
            {
                var o = tkt[key];
                restkt.push(o);
            }


            $scope.objs = restkt;
            console.log($scope.objs);

        });

    };
    $scope.load();

    $scope.start = function(id) {
		vouchersalecreate.get({'id' : id, 'state' : '1'}, function(res){
            console.log(res);
			if(res.errcode === 0){
				$scope.load();
			}else{
				toaster.success({title:"",body:res.errmsg});
			}
		});
	}

	$scope.stop = function(id) {
		vouchersalecreate.get({'id' : id, 'state' : '0'}, function(res){
            console.log(res);
			if(res.errcode === 0){
				$scope.load();
			}else{
				toaster.success({title:"",body:res.errmsg});
			}
		});
	}

	$scope.asort = function(id, asort){

        console.log({'id' : id, 'asort' : asort});
        vouchersalecreate.save({'id' : id, 'asort' : asort}, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                $scope.load();
            }
            else
            {
                toaster.success({title:"",body:res.errmsg});
            }

        });

    }

    $scope.create = function(){

		var modalInstance = $uibModal.open({
          template: require('../views/vouchersalecreate.html'),
          controller: 'vouchersalecreate',
          size: 'lg',
          resolve: {
          	obj : function(){
                return '';
            },
            what : function(){
                return '';
            },
            vouchersalecreate : function(){
                return vouchersalecreate;
            },
            businesslist : function(){
                return businesslist;
            },
            typelist : function(){
                return typelist;
            },
            typelists : function(){
                return typelists;
            },
            getDate : function(){
                return getDate;
            }
          }
        });

        modalInstance.result.then(function () {

        }, function () {
          $scope.load();
        });
		
	};

	$scope.info = function(obj){

        var modalInstance = $uibModal.open({
          template: require('../views/vouchersalecreate.html'),
          controller: 'vouchersalecreate',
          size: 'lg',
          resolve: {
            obj : function(){
                return obj;
            },
            what : function(){
                return 'info';
            },
            vouchersalecreate : function(){
                return vouchersalecreate;
            },
            businesslist : function(){
                return businesslist;
            },
            typelist : function(){
                return typelist;
            },
            typelists : function(){
                return typelists;
            },
            getDate : function(){
                return getDate;
            }
          }
        });

        modalInstance.result.then(function () {
          
        }, function () {
          $scope.load();
        });

    };

    $scope.edit = function(obj){

        var modalInstance = $uibModal.open({
          template: require('../views/vouchersalecreate.html'),
          controller: 'vouchersalecreate',
          size: 'lg',
          resolve: {
            obj : function(){
                return obj;
            },
            what : function(){
                return 'edit';
            },
            vouchersalecreate : function(){
                return vouchersalecreate;
            },
            businesslist : function(){
                return businesslist;
            },
            typelist : function(){
                return typelist;
            },
            typelists : function(){
                return typelists;
            },
            getDate : function(){
                return getDate;
            }
          }
        });

        modalInstance.result.then(function () {
          
        }, function () {
           $scope.load();
        });

    };


};
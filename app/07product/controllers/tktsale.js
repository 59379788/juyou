module.exports = function($scope, $state, salelist, ITEMS_PERPAGE, saleup, $window,
    saledown, saleupdate, $uibModal, viewlist, salecreate, saleinfo, saleupdate, goodlist, 
    saledetailcreate, saledetaillist, saledetaildelete, dictbytypelist, FileUploader,
    salegovsubsidycreate, salegovsubsidyupdate, salegovsubsidyinfo, salecategorylist, 
    salejuyousubsidycreate, salejuyousubsidyupdate, salejuyousubsidyinfo, talist,
    sellerList, tstcreate, tststart, tststop,
    //系统确认模块
    affirmcreate, affirminfo, affirmupdate,
    //短信模版
    smstmplist
    ){
    

	$scope.searchform = {};

	$scope.create = function(){

		var modalInstance = $uibModal.open({
          template: require('../views/tktsalemodel.html'),
          controller: 'tktsalecreate',
          size: 'lg',
          resolve: {
            salecreate : function(){
                return salecreate;
            },
            viewlist : function(){
                return viewlist;
            },
            saleinfo : function(){
                return saleinfo;
            },
            saleupdate : function(){
                return saleupdate;
            },
            goodlist : function(){
                return goodlist;
            },
            saledetailcreate : function(){
                return saledetailcreate;
            },
            saledetaillist : function(){
                return saledetaillist;
            },
            saledetaildelete : function(){
                return saledetaildelete;
            },
            //政府补贴
            salegovsubsidycreate : function(){
                return salegovsubsidycreate;
            },
            salegovsubsidyupdate : function(){
                return salegovsubsidyupdate;
            },
            salegovsubsidyinfo : function(){
                return salegovsubsidyinfo;
            },
            //居游补贴
            salejuyousubsidycreate : function(){
                return salejuyousubsidycreate;
            },
            salejuyousubsidyupdate : function(){
                return salejuyousubsidyupdate;
            },
            salejuyousubsidyinfo : function(){
                return salejuyousubsidyinfo;
            },
            //销售品类型查询功能模块
            salecategorylist : function(){
                return salecategorylist;
            },
            dictbytypelist : function(){
                return dictbytypelist;
            },
            //系统确认模块
            affirmcreate : function(){
                return affirmcreate;
            },
            affirminfo : function(){
                return affirminfo;
            }, 
            affirmupdate : function(){
                return affirmupdate;
            },
            smstmplist : function(){
                return smstmplist;
            }
          }
        });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });
		
	};

    $scope.load = function () {
        salelist.save($scope.searchform, function(res){

            /* 销售品存储结构
             * ========================================= */
            var view = new Object();
            var resview = new Array();

            var viewindex = new Array();

            console.log(res);

            if(res.errcode !== 0)
            {
                alert("数据获取失败");
                return;
            }

            //用景区编号作为存储结构的属性，值是数组
            for(var i = 0, j = res.data.length; i < j; i++)
            {
                var tt = res.data[i];
                var v = tt.place_code;
                var sale_category = tt.sale_category;
                var state = tt.state;

                //第一层
                if(!view.hasOwnProperty(v))
                {
                    view[v] = new Object();
                    view[v].viewname = tt.place_name;
                    view[v].viewcode = tt.place_code;
                    viewindex.push(v);
                }

                //第二层（state，上架，下架，草稿）
                if(!view[v].hasOwnProperty('state'))
                {
                    view[v]['state'] = new Object();
                }
                if(!view[v]['state'].hasOwnProperty(state))
                {
                    view[v]['state'][state] = new Object();
                    view[v]['state'][state].title = tt.state_name;
                    if(tt.state == 1)
                    {
                        view[v]['state'][state].active = true;
                    }
                    else
                    {
                        view[v]['state'][state].active = false;
                    }
                }

                //第三层（sale_category,旅游局补贴－app，旅游局补贴－分销)
                if(!view[v]['state'][state].hasOwnProperty('category'))
                {
                    view[v]['state'][state]['category'] = new Object();
                }
                if(!view[v]['state'][state]['category'].hasOwnProperty(sale_category))
                {
                    view[v]['state'][state]['category'][sale_category] = new Object();
                    view[v]['state'][state]['category'][sale_category].salearr = new Array();
                    view[v]['state'][state]['category'][sale_category].title = tt.sale_category_name;
                }

                view[v]['state'][state]['category'][sale_category].salearr.push(tt);
            }

            console.log(view);

            for(var key in view)
            {
                var o = view[key];
                resview.push(o);
            }


            console.log("------------");
            console.log(resview);
            console.log("------------");

            $scope.objs = resview;

        });

    };
    $scope.load();


    $scope.start = function(id) {
		saleup.get({'id' : id}, function(res){
            console.log(res);
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}

	$scope.stop = function(id) {
		saledown.get({'id' : id}, function(res){
            console.log(res);
			if(res.errcode === 0){
				$scope.load();
			}else{
				alert(res.errmsg);
			}
		});
	}


    $scope.edit = function(id){

    	//$state.go('app.editsale', {'id' : id});

        var modalInstance = $uibModal.open({
          template: require('../views/tktsalemodel.html'),
          controller: 'tktsaleupdate',
          size: 'lg',
          resolve: {
            id : function(){
                return id;
            },
            what : function(){
                return 'edit';
            },
            viewlist : function(){
                return viewlist;
            },
            saleinfo : function(){
                return saleinfo;
            },
            saleupdate : function(){
                return saleupdate;
            },
            goodlist : function(){
                return goodlist;
            },
            saledetailcreate : function(){
                return saledetailcreate;
            },
            saledetaillist : function(){
                return saledetaillist;
            },
            saledetaildelete : function(){
                return saledetaildelete;
            },
            //政府补贴
            salegovsubsidycreate : function(){
                return salegovsubsidycreate;
            },
            salegovsubsidyupdate : function(){
                return salegovsubsidyupdate;
            },
            salegovsubsidyinfo : function(){
                return salegovsubsidyinfo;
            },
            //居游补贴
            salejuyousubsidycreate : function(){
                return salejuyousubsidycreate;
            },
            salejuyousubsidyupdate : function(){
                return salejuyousubsidyupdate;
            },
            salejuyousubsidyinfo : function(){
                return salejuyousubsidyinfo;
            },
            //销售品类型查询功能模块
            salecategorylist : function(){
                return salecategorylist;
            },
            dictbytypelist : function(){
                return dictbytypelist;
            },
            //系统确认模块
            affirmcreate : function(){
                return affirmcreate;
            },
            affirminfo : function(){
                return affirminfo;
            }, 
            affirmupdate : function(){
                return affirmupdate;
            },
            smstmplist : function(){
                return smstmplist;
            }
          }
        });

        modalInstance.result.then(function () {
          //$scope.load();
        }, function () {
            $scope.load();
          //$log.info('Modal dismissed at: ' + new Date());
        });

    };

    $scope.asort = function(id, asort){

        console.log({'id' : id, 'asort' : asort});
        saleupdate.save({'id' : id, 'asort' : asort}, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
                $scope.load();
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };


    $scope.info = function(id){

        //$state.go('app.editsale', {'id' : id, 'type' : 'info'});

        var modalInstance = $uibModal.open({
          template: require('../views/tktsalemodel.html'),
          controller: 'tktsaleupdate',
          size: 'lg',
          resolve: {
            id : function(){
                return id;
            },
            what : function(){
                return 'info';
            },
            viewlist : function(){
                return viewlist;
            },
            saleinfo : function(){
                return saleinfo;
            },
            saleupdate : function(){
                return saleupdate;
            },
            goodlist : function(){
                return goodlist;
            },
            saledetailcreate : function(){
                return saledetailcreate;
            },
            saledetaillist : function(){
                return saledetaillist;
            },
            saledetaildelete : function(){
                return saledetaildelete;
            },
            //政府补贴
            salegovsubsidycreate : function(){
                return salegovsubsidycreate;
            },
            salegovsubsidyupdate : function(){
                return salegovsubsidyupdate;
            },
            salegovsubsidyinfo : function(){
                return salegovsubsidyinfo;
            },
            //居游补贴
            salejuyousubsidycreate : function(){
                return salejuyousubsidycreate;
            },
            salejuyousubsidyupdate : function(){
                return salejuyousubsidyupdate;
            },
            salejuyousubsidyinfo : function(){
                return salejuyousubsidyinfo;
            },
            //销售品类型查询功能模块
            salecategorylist : function(){
                return salecategorylist;
            },
            dictbytypelist : function(){
                return dictbytypelist;
            },
            //系统确认模块
            affirmcreate : function(){
                return affirmcreate;
            },
            affirminfo : function(){
                return affirminfo;
            }, 
            affirmupdate : function(){
                return affirmupdate;
            },
            smstmplist : function(){
                return smstmplist;
            }
          }
        });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

    };


    $scope.distribution = function(code){

        var modalInstance = $uibModal.open({
          template: require('../views/distribution.html'),
          controller: 'distribution',
          //size: 'lg',
          resolve: {
            code : function(){
                return code;
            },
            talist : function(){
                return talist;
            },
            sellerList : function(){
                return sellerList;
            },
            tstcreate : function(){
                return tstcreate;
            },
            tststart : function(){
                return tststart;
            },
            tststop : function(){
                return tststop;
            }
          }
        });

        modalInstance.result.then(function () {
          //load();
        }, function () {
          //$log.info('Modal dismissed at: ' + new Date());
        });

    };

    $scope.del = function(id){

        saleupdate.save({'id' : id, 'del_flg' : '1'}, function(res){

            console.log(res);

            if(res.errcode === 0)
            {
        		alert("删除成功");
                $scope.load();
            }
            else
            {
                alert(res.errmsg);
            }

        });

    };


};
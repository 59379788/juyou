module.exports = function($scope, $uibModal, skgoodslist, saveprice){

	$scope.searchform = {};

    $scope.load = function () {
        skgoodslist.save($scope.searchform, function(res){

            /* 门票存储结构
             * ========================================= */
            var tkt = new Object();
            var restkt = new Array();

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

                if(!tkt.hasOwnProperty(v))
                {
                    tkt[v] = new Object();
                    tkt[v].ticketarr = new Array();
                    tkt[v].viewname = tt.place_name;
                    tkt[v].viewcode = tt.place_code;
                }
                tkt[v].ticketarr.push(tt);
            }

            for(var key in tkt)
            {
                var o = tkt[key];
                restkt.push(o);
            }


            // console.log("------------");
            // console.log(restkt);
            // console.log("------------");

            $scope.objs = restkt;
            console.log($scope.objs);

        });

    };
    $scope.load();

    $scope.edit = function (obj) {
        var modalInstance = $uibModal.open({
          template: require('../views/edittktskgoods.html'),
          controller: 'edittktskgoods',
          size: 'xs',
          resolve: {
            saveprice : function(){
                return saveprice;
            },
            sale_company_price_id : function(){
                return obj.sale_company_price_id;
            },
            sale_code : function(){
                return obj.sale_code;
            },
            company_cost_price : function(){
                return obj.company_cost_price * 0.01;
            },
            cost_price : function(){
                return obj.cost_price * 0.01;
            }
          }
        });

        modalInstance.result.then(function () {
            $scope.load();
        }, function () {

        });

    };


};
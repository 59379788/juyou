// 


/**
 * 模态框
 */
module.exports = function ($scope, $state, $resource, $stateParams, $modalInstance, $http, items) {

    // $scope.product_id = $scope.$parent.$stateParams.id;

    // //数据模板
    // $scope.result = {
    //     stock_surplus: '',
    //     selectedDate: [],
    //     adult_call_price: 0,
    //     adult_sale_price: 0,
    //     children_call_price: 0,
    //     children_sale_price: 0,
    //     single_room_call_price: 0,
    //     single_room_sale_price: 0
    // }

    // $scope.product_state_name_flag = false;
    // $scope.product_state_name_flag_2 = false;
    // // $scope.close_group_flag = false;

    // //提交结果集
    // $scope.lastResult = [];

    // if (items.state == 1) {
    //     $scope.addUpdateFlag = true;
    //     $scope.product_state_name = items.product_state_name;
    //     $scope.returnday='您行程管理未设置出游天数。'
    // } else if (items.data) {
    //     $scope.days=items.returnday;
    //     console.log($scope.days);
    //     console.log('days');

    //     $scope.product_state_name_flag = items.product_state_name != '草稿';
    //     $scope.product_state_name_flag_2 = items.product_state_name != '已上架';
    //     // $scope.close_group_flag = items.data.close_group == '已封团' ? true : false;
    //     $scope.addUpdateFlag = false;
    //     $scope.oneDate = items.data.d.substring(0, 4) + '-' + items.data.d.substring(4, 6) + '-' + items.data.d.substring(6, 8);
    //     items.data.adult_ban = items.data.adult_ban == '<font color="red">禁售</font>';
    //     items.data.children_ban = items.data.children_ban == '<font color="red">禁售</font>';
    //     items.data.single_room_ban = items.data.single_room_ban == '<font color="red">禁售</font>';
    //     items.data.back_rule_type = items.data.back_rule_type == '人工退改' ? '1' : '0';
    //     items.data.stock_type = items.data.stock_type == '共有' ? '1' : '0';
    //     // items.data.close_group = items.data.close_group == '已封团' ? '1' : '0';
    //     items.data.materials_advance_reserve_day = items.data.materials_advance_reserve_day + '';
    //     items.data.materials_advance_reserve_hour = items.data.materials_advance_reserve_hour + '';
    //     items.data.materials_advance_reserve_minute = items.data.materials_advance_reserve_minute + '';
    //     items.data.selectedDate = [{ date: items.data.d }];
    //     delete items.data.product_state;
    //     delete items.data.d;
    //     delete items.data.close_group;
    //     $scope.result = items.data;
    //     $scope.result.stock = parseInt($scope.result.stock);
    //     $scope.result.stock_totals = parseInt($scope.result.stock_totals);

    //     if($scope.days){
    //          $scope.returnday= AddDays($scope.oneDate,$scope.days);
    //     }else{
    //         $scope.returnday='您行程管理未设置出游天数。';
    //     }
    // } else {
    //     $scope.days=items.returnday;
    //     items.state = 1;
    //     $scope.addUpdateFlag = false;
    //     $scope.oneDate = items.date.substring(0, 4) + '-' + items.date.substring(4, 6) + '-' + items.date.substring(6, 8);
    //     $scope.result.selectedDate.push({ date: items.date });
    //     $scope.product_state_name = items.product_state_name;

    //     if($scope.days){
    //          $scope.returnday= AddDays($scope.oneDate,$scope.days);
    //     }else{
    //         $scope.returnday='您行程管理未设置出游天数。';
    //     }
    // }

    // $scope.date = {
    //     'lable': date2str2(new Date()),
    //     'value': date2str(new Date()),
    //     'opened': true
    // }

    // $scope.dateOpen = function ($event, item) {
    //     $event.preventDefault();
    //     $event.stopPropagation();
    //     item.opened = true;
    // };

    // function date2str2(d) {
    //     if (d === undefined) {
    //         return "";
    //     }
    //     var month = (d.getMonth() + 1).toString();
    //     var day = d.getDate().toString();
    //     if (month.length == 1) month = '0' + month;
    //     if (day.length == 1) day = '0' + day;
    //     return d.getFullYear() + "-" + month + "-" + day;
    // }

    // function date2str(d) {
    //     if (d === undefined) {
    //         return "";
    //     }
    //     var month = (d.getMonth() + 1).toString();
    //     var day = d.getDate().toString();
    //     if (month.length == 1) month = '0' + month;
    //     if (day.length == 1) day = '0' + day;
    //     return d.getFullYear() + month + day;
    // }

    // $scope.toggleMode = function () {
    //     $scope.ismeridian = !$scope.ismeridian;
    // };

    // //天
    // $scope.day = [];
    // for (var index = 0; index < 51; index++) {
    //     $scope.day.push({ value: index })
    // }

    // //时
    // $scope.hour = [];
    // for (var index = 0; index < 24; index++) {
    //     $scope.hour.push({ value: index })
    // }

    // //分
    // $scope.minute = [];
    // for (var index = 0; index < 60; index++) {
    //     $scope.minute.push({ value: index })
    // }


    // //添加选择日期
    // $scope.addSelectDate = function () {
    //     if (items.state == 1) {
    //         for (var index = 0; index < items.dateArray.length; index++) {
    //             if (typeof ($scope.date.lable) == 'string' ? $scope.date.lable.replace('-', '').replace('-', '') : date2str($scope.date.lable) == items.dateArray[index]) {
    //                 alert('此日期已存在信息,不可添加!')
    //                 return;
    //             }
    //         }
    //     }
    //     var tempDate = typeof ($scope.date.lable) == 'string' ? $scope.date.lable.replace('-', '').replace('-', '') : date2str($scope.date.lable);
    //     for (var index = 0; index < $scope.result.selectedDate.length; index++) {
    //         if (tempDate == $scope.result.selectedDate[index].date) {
    //             alert('不可添加重复日期');
    //             return;
    //         }
    //     }
    //     $scope.result.selectedDate.push({ date: typeof ($scope.date.lable) == 'string' ? $scope.date.lable.replace('-', '').replace('-', '') : date2str($scope.date.lable) });
    // }

    // //删除选择日期
    // $scope.removeSelectDate = function (index) {
    //     $scope.result.selectedDate.splice(index, 1);
    // }

    // $scope.ok = function () {
    //     if (!$scope.addPriceCalendar.$valid) {
    //         alert('请填写页面内所有可输入的输入框,只能填数字');
    //         return;
    //     }
    //     if ($scope.result.selectedDate.length < 1) {
    //         alert('请添加日期');
    //         return;
    //     }
    //     if (items.state == 2 && items.data) {
    //         if (items.data.true_stock > $scope.result.stock_totals) {
    //             alert('日库存不可小于已卖出库存');
    //             return;
    //         }
    //     }
    //     var temp = angular.copy($scope.result);

    //     temp.children_ban = temp.children_ban ? '1' : '0';
    //     if (temp.children_ban == '1') {
    //         temp.children_call_price = 0;
    //         temp.children_sale_price = 0;
    //     }

    //     temp.adult_ban = temp.adult_ban ? '1' : '0';
    //     if (temp.adult_ban == '1') {
    //         temp.adult_call_price = 0;
    //         temp.adult_sale_price = 0;
    //     }

    //     temp.single_room_ban = temp.single_room_ban ? '1' : '0';
    //     if (temp.single_room_ban == '1') {
    //         temp.single_room_call_price = 0;
    //         temp.single_room_sale_price = 0;
    //     }

    //     if (temp.stock_type == '0') {
    //         temp.stock_totals = 0;
    //         temp.stock = 0;
    //     }

    //     for (var index = 0; index < temp.selectedDate.length; index++) {
    //         var temp_2 = angular.copy(temp);
    //         temp_2.tour_date = temp.selectedDate[index].date.substring(0, 4) + '-' + temp.selectedDate[index].date.substring(4, 6) +
    //             '-' + temp.selectedDate[index].date.substring(6, 8);
    //         delete temp_2.selectedDate;
    //         if ($scope.result.adult_ban == true) {
    //             $scope.result.adult_call_price = 0;
    //             $scope.result.adult_sale_price = 0;
    //         }
    //         if ($scope.result.children_ban == true) {
    //             $scope.result.children_call_price = 0;
    //             $scope.result.children_sale_price = 0;
    //         }
    //         if ($scope.result.single_room_ban == true) {
    //             $scope.result.single_room_call_price = 0;
    //             $scope.result.single_room_sale_price = 0;
    //         }
    //         if ($scope.result.stock_type != '1') {
    //             $scope.result.stock_totals = 0;
    //             $scope.result.stock = 0;
    //         }

    //         temp_2.trip_id = '';
    //         $scope.lastResult.push(temp_2);
    //     }
    //     var para = {
    //         product_id: $scope.product_id,
    //         list: $scope.lastResult
    //     }
    //     $resource('/api/ac/lc/groupDatesService/create', {}, {}).save(para, function (res) {
    //         if (res.errcode === 0) {
    //             alert('保存成功');
    //             $modalInstance.close($scope.result);
    //         } else {
    //             alert(res.errmsg);
    //             $scope.lastResult = [];
    //         }
    //     });

    // };
    // $scope.cancel = function () {
    //     $modalInstance.dismiss('cancel');
    // };

    // function AddDays(date,days){
        
    //     var nd = new Date(date);
    //         nd = nd.valueOf();
    //         nd = nd + days * 24 * 60 * 60 * 1000;
    //         nd = new Date(nd);
    //         //alert(nd.getFullYear() + "年" + (nd.getMonth() + 1) + "月" + nd.getDate() + "日");
    //         var y = nd.getFullYear();
    //         var m = nd.getMonth()+1;
    //         var d = nd.getDate()-1;
    //         if(m <= 9) m = "0"+m;
    //         if(d <= 9) d = "0"+d; 
    //         var cdate = y+"-"+m+"-"+d;
    //         console.log(cdate);
    //     return cdate;
    // }

};
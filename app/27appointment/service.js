var service = function($resource, BASEURL38985, SYS, $q, $http){
    /****** 预约 *******/ 
  // 预约列表
  var findMakeAppointmentList = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/findMakeAppointmentList';
  // 添加预约
  var insertMakeAppointment = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/insertMakeAppointment';
  // 修改预约
  var updateMakeAppointment = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/updateMakeAppointment';
  // 根据id获得详情
  var getMakeAppointmentById = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/getMakeAppointmentById';
  // 删除
  var delMakeAppointment = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/updateDel';
  // 预约人列表
  var findUserInfoList = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/findUserInfoList';
  // 票种
  var ticketlist = BASEURL38985 + '/api/as/tc/salettype/list';
  //查询销售品（全部）
  var salelist = BASEURL38985 + '/api/as/tc/sale/alllist';
  // 下架
  var offstate = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/updateState';
  // 上架
  var onstate = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/updateStartState';
  // 预约人列表
  var findUserInfoList = BASEURL38985 + '/api/as/mc/mermakeappointmentdao/findUserInfoList';

    return {
        findMakeAppointmentList : function(){
          return $resource(findMakeAppointmentList,{},{});
        },
        insertMakeAppointment : function(){
          return $resource(insertMakeAppointment,{},{});
        },
        updateMakeAppointment : function(){
          return $resource(updateMakeAppointment,{},{});
        },
        getMakeAppointmentById : function(){
          return $resource(getMakeAppointmentById,{},{});
        },
        delMakeAppointment : function(){
          return $resource(delMakeAppointment,{},{});
        },
        findUserInfoList : function(){
          return $resource(findUserInfoList,{},{});
        },
        ticketlist : function(){
          return $resource(ticketlist,{},{});
        },
        salelist : function(){
          return $resource(salelist,{},{});
        },
        offstate : function(){
          return $resource(offstate,{},{});
        },
        onstate : function(){
          return $resource(onstate,{},{});
        },
        findUserInfoList : function(){
          return $resource(findUserInfoList,{},{});
        }
    }
};
module.exports = service;
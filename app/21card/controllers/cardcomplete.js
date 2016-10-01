module.exports = function($scope, $stateParams, changestatus){
	console.log('12456');
  var cardmakebatch = $stateParams.cardmakebatch;
  console.log(cardmakebatch);
  $scope.cardinfo = { 
  	'cardstatu' : '0',
  	'cardbatch' : '',
  	'cardnum' : '',
  	'startcard' : '',
  	'endcard' : ''

  };

  $scope.change = function(){ 
  	var param = {'cardbatch' : cardmakebatch, 'cardstatu' : $scope.cardinfo.cardstatu};
  	if ($scope.cardinfo.cardstatu == '0') { 
  		param['cardnum'] = $scope.cardinfo.cardnum;
  	} else if ($scope.cardinfo.cardstatu == '1') { 
  		param['startcard'] = $scope.cardinfo.startcard;
  		param['endcard'] = $scope.cardinfo.endcard;
  	} else {
  	  alert('参数错误');
  	}
  	console.log(param);
  	changestatus.save(param, function(res){ 
      console.log(res);
      if (res.errcode !== 0) { 
          alert(res.errmsg);
      } else { 
      	alert('状态更改成功');
      }

  	});
  };
};
module.exports = function($scope, $state, $stateParams, changestatus){
	//console.log('12456');
  var cardmakebatch = $stateParams.cardmakebatch;
  var maxcard = $stateParams.maxcard;
  var mincard = $stateParams.mincard;
  console.log(cardmakebatch);
  console.log(maxcard);
  console.log(mincard);
  $scope.card = { 
  	'scard' : mincard,
  	'ecard' : maxcard,
  	'sumcard' : ''
  };
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
  		param['cardno'] = $scope.cardinfo.cardnum;
  	} else if ($scope.cardinfo.cardstatu == '1') { 
  		param['startcard'] = $scope.cardinfo.startcard;
  		param['endcard'] = $scope.cardinfo.endcard;
  	} else {
  	  alert('参数错误');
  	}
  	console.log(param);
  	if ((param.cardno >= mincard && param.cardno<=maxcard) ||(param.startcard>=mincard && param.startcard<=maxcard && param.endcard>=mincard && param.endcard<=maxcard) ) { 
  	 changestatus.save(param, function(res){ 
      console.log(res);
      if (res.errcode !== 0) { 
          alert(res.errmsg);
      } else { 
      	alert('状态更改成功');
        $state.go('app.basecardlist');
      }

  	 });
  	} else { 
  		alert('卡号不在可填卡号范围内');
  		return;
  	}
  	
  };
};
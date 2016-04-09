module.exports = function($scope, $state, mechanism){

   //var res = [{"id":"e5a6ac631df04911bb7a6b6fe7a95815","pId":"6178b98ca42a4190a4b784a739acef5f","name":"居游旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"1af3b68f992646e38b6dbd692b15eab7","pId":"e5a6ac631df04911bb7a6b6fe7a95815","name":"财务部","pIds":"0,6178b98ca42a4190a4b784a739acef5f,e5a6ac631df04911bb7a6b6fe7a95815,"}];

    var res = [
      {
        "id": "6178b98ca42a4190a4b784a739acef5f",
        "pId": "0",
        "name": "旅行社平台",
        "pIds": "0,"
      },
      {
        "id": "b0957eb4120b49a29cb906957c83cba6",
        "pId": "0",
        "name": "居游运营平台",
        "pIds": "0,"
      },
      {
        "id": "58e745354f6949f29304b40c71297038",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "财务部",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "1cfa29cd7c8041889b0fbf8db0220124",
        "pId": "0",
        "name": "沈阳华夏银行",
        "pIds": "0,"
      },
      {
        "id": "e5a6ac631df04911bb7a6b6fe7a95815",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "居游旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "1af3b68f992646e38b6dbd692b15eab7",
        "pId": "e5a6ac631df04911bb7a6b6fe7a95815",
        "name": "财务部",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,e5a6ac631df04911bb7a6b6fe7a95815,"
      },
      {
        "id": "c7b9694e9bdf4b43bab83622975f6f2a",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "沈阳青年国际旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "84df687ef5ec40ccb2f22125e0b5d2b1",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "沈阳名流旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "81839a807deb4f748b68f3cec2e6ae1c",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "辽宁康辉国际旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "cf75fbf950ac4384898f59e45c99fbeb",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "沈阳市海外国际旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "955a52c497424724806f8eebbdc040af",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "辽宁国际商务旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "1167a4417c0a491f9630e4117b3bade9",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "中国国旅（辽宁）国际旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "defc0fc5d3a24239bb91f91df2db0242",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "辽宁省中国青年旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "eff6887848dd4d5c8ed8644249190bec",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "辽宁大运通国际旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "37af9038214c48acbf68a1f819f1edd5",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "辽宁中辽国际旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "8eb3c8624be84ac2b1570769a8a7363e",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "沈阳铁道国际旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "34c55cdbd79b4c09b334abbf20823994",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "辽宁世纪国际旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "73d293220a9d4e6e9852a9f8b2c592e4",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "名游网",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "f0479739d81e4cbc8132411ec5886d3b",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "乐途",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "d6986d998f5a44d080b69e587571472b",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "卧龙谷",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "2785e6f96cdc461dac1cb3be6160be93",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "沈阳教育",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "b924dcf70ef24ef78d3d2a6d92809f95",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "沈阳金飞马",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "69162b4d484f4bdebaed95e901f15017",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "美好时光",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "ceff29021346454d992fee75a126c159",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "客运天天",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "b475f5d93d1140d68abfcdc2f8bdc24d",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "沈阳美地国际旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "05d54e679a1b4db0a2490a141c9d6a5e",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "dlq测试用旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "951cbff11988440b9b71e2b0167bb38e",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "沈阳好运旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      },
      {
        "id": "ed2befc263984309a729eec5de251cf7",
        "pId": "6178b98ca42a4190a4b784a739acef5f",
        "name": "辽宁春秋国际旅行社",
        "pIds": "0,6178b98ca42a4190a4b784a739acef5f,"
      }
    ];

    mechanism.get({}, function(res){

      console.log(res);
      if(res.errcode === 0)
      {
        
      }


    });


    var dlq = transData(res, 'id', 'pId', 'nodes');  
    $scope.data = dlq;

    function transData(a, idStr, pidStr, chindrenStr){    
        var r = [], 
            hash = {}, 
            id = idStr, 
            pid = pidStr, 
            children = chindrenStr, 
            i = 0, 
            j = 0, 
            len = a.length; 

        for(; i < len; i++){ 
            a[i]['title'] = a[i]['name'];
            hash[a[i][id]] = a[i];
        }

        for(; j < len; j++){    
            var aVal = a[j], 
                hashVP = hash[aVal[pid]];

            if(hashVP){    
                !hashVP[children] && (hashVP[children] = []);    
                hashVP[children].push(aVal);    
            }else{
                r.push(aVal);
            }
        }    
        return r;    
    }    


    $scope.getit = function(obj){

      console.log(obj.$modelValue);

      $scope.show = obj.$modelValue;

    };


    //$scope.data = [{"id":"6178b98ca42a4190a4b784a739acef5f","pId":"0","title":"旅行社平台","pIds":"0,","nodes":[{"id":"58e745354f6949f29304b40c71297038","pId":"6178b98ca42a4190a4b784a739acef5f","title":"财务部","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"e5a6ac631df04911bb7a6b6fe7a95815","pId":"6178b98ca42a4190a4b784a739acef5f","title":"居游旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,","nodes":[{"id":"1af3b68f992646e38b6dbd692b15eab7","pId":"e5a6ac631df04911bb7a6b6fe7a95815","title":"财务部","pIds":"0,6178b98ca42a4190a4b784a739acef5f,e5a6ac631df04911bb7a6b6fe7a95815,"}]},{"id":"c7b9694e9bdf4b43bab83622975f6f2a","pId":"6178b98ca42a4190a4b784a739acef5f","title":"沈阳青年国际旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"84df687ef5ec40ccb2f22125e0b5d2b1","pId":"6178b98ca42a4190a4b784a739acef5f","title":"沈阳名流旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"81839a807deb4f748b68f3cec2e6ae1c","pId":"6178b98ca42a4190a4b784a739acef5f","title":"辽宁康辉国际旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"cf75fbf950ac4384898f59e45c99fbeb","pId":"6178b98ca42a4190a4b784a739acef5f","title":"沈阳市海外国际旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"955a52c497424724806f8eebbdc040af","pId":"6178b98ca42a4190a4b784a739acef5f","title":"辽宁国际商务旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"1167a4417c0a491f9630e4117b3bade9","pId":"6178b98ca42a4190a4b784a739acef5f","title":"中国国旅（辽宁）国际旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"defc0fc5d3a24239bb91f91df2db0242","pId":"6178b98ca42a4190a4b784a739acef5f","title":"辽宁省中国青年旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"eff6887848dd4d5c8ed8644249190bec","pId":"6178b98ca42a4190a4b784a739acef5f","title":"辽宁大运通国际旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"37af9038214c48acbf68a1f819f1edd5","pId":"6178b98ca42a4190a4b784a739acef5f","title":"辽宁中辽国际旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"8eb3c8624be84ac2b1570769a8a7363e","pId":"6178b98ca42a4190a4b784a739acef5f","title":"沈阳铁道国际旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"34c55cdbd79b4c09b334abbf20823994","pId":"6178b98ca42a4190a4b784a739acef5f","title":"辽宁世纪国际旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"73d293220a9d4e6e9852a9f8b2c592e4","pId":"6178b98ca42a4190a4b784a739acef5f","title":"名游网","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"f0479739d81e4cbc8132411ec5886d3b","pId":"6178b98ca42a4190a4b784a739acef5f","title":"乐途","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"d6986d998f5a44d080b69e587571472b","pId":"6178b98ca42a4190a4b784a739acef5f","title":"卧龙谷","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"2785e6f96cdc461dac1cb3be6160be93","pId":"6178b98ca42a4190a4b784a739acef5f","title":"沈阳教育","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"b924dcf70ef24ef78d3d2a6d92809f95","pId":"6178b98ca42a4190a4b784a739acef5f","title":"沈阳金飞马","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"69162b4d484f4bdebaed95e901f15017","pId":"6178b98ca42a4190a4b784a739acef5f","title":"美好时光","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"ceff29021346454d992fee75a126c159","pId":"6178b98ca42a4190a4b784a739acef5f","title":"客运天天","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"b475f5d93d1140d68abfcdc2f8bdc24d","pId":"6178b98ca42a4190a4b784a739acef5f","title":"沈阳美地国际旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"05d54e679a1b4db0a2490a141c9d6a5e","pId":"6178b98ca42a4190a4b784a739acef5f","title":"dlq测试用旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"951cbff11988440b9b71e2b0167bb38e","pId":"6178b98ca42a4190a4b784a739acef5f","title":"沈阳好运旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"},{"id":"ed2befc263984309a729eec5de251cf7","pId":"6178b98ca42a4190a4b784a739acef5f","title":"辽宁春秋国际旅行社","pIds":"0,6178b98ca42a4190a4b784a739acef5f,"}]},{"id":"b0957eb4120b49a29cb906957c83cba6","pId":"0","title":"居游运营平台","pIds":"0,"},{"id":"1cfa29cd7c8041889b0fbf8db0220124","pId":"0","title":"沈阳华夏银行","pIds":"0,"}];
};
module.exports = function($scope, $state, mechanism){

    mechanism.query({}, function(res){

      console.log(res);

      var dlq = transData(res, 'id', 'pId', 'nodes');  
      $scope.data = dlq;

    });

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


};
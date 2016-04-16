/**
 * 子模块service
 * dlq
 */
var service = function(){

    
    return {
        getDate : function(d){
        	return d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
    	},

    	transData : function(a, idStr, pidStr, chindrenStr){    
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
       
    };

};

module.exports = service;
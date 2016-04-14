/**
 * 子模块service
 * dlq
 */
var service = function(){

    
    return {
        getDate : function(d){
        	return d.getFullYear() + "-" + (d.getMonth()+1) + "-" + d.getDate();
    	}
       
    };

};

module.exports = service;
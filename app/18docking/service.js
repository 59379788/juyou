/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

    var corridorproductlist = BASEURL38985 + "/api/ac/tc/ticketRedCorridorService/getRedCorridorProdList";

    var corridorproductinfo = BASEURL38985 + "/api/ac/tc/ticketRedCorridorService/getRedCorridorProdDetail";
    
    return {

        corridorproductlist : function(){
            return $resource(corridorproductlist, {}, {});
        },
        corridorproductinfo : function(){
            return $resource(corridorproductinfo, {}, {});
        }
       
    };

};

module.exports = service;
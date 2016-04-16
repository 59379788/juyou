/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985){

    var saleNameList = BASEURL38985 + '/api/as/tc/sale/saleNameList';

    var saleInfo = BASEURL38985 + '/api/as/tc/sale/saleInfo';

    return {
        namelist : function(){
            return $resource(saleNameList, {}, {});
        },
        info : function(){
            return $resource(saleInfo, {}, {});
        }
       
    };

};

module.exports = service;
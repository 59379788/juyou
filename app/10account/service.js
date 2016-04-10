/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, SYS){

    var list = BASEURL38985 + "/api/as/tc/placeview/list";

    //机构
    var mechanism = SYS + '/a/sys/office/treeData';
    
    return {

        mechanism : function(){
            return $resource(mechanism, {}, {isArray:true} );
        }
       
    };

};

module.exports = service;
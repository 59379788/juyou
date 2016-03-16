/**
 * 子模块service
 * dlq
 */
module.exports = function($resource, BASEURL38985){


    var typelist = BASEURL38985 + '/api/as/tc/type/adminList';


    return {

        typelist : function(){
            return $resource(typelist, {}, {});
        }
      
    };

};
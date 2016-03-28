module.exports = function($location){

    var responseInterceptor = {
        response: function(response) {
            //console.log(response)
            if(response.data.errcode === 1001)
            {
               window.location = "/manager/login";
            }
            return response;
        }
    };

    return responseInterceptor;

};
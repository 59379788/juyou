module.exports = function(BASEURL38985, $resource){

	//var permission = 'http://192.168.1.182:38985' + '/api/uc/sc/menuService/menulist';

	var permission = BASEURL38985 + '/api/ac/sc/menuService/menulist';

	

	return {

		permission : function(){
            return $resource(permission, {}, {});
        }

	}

};
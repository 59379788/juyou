/**
 * 子模块service
 * ml
 */
var service = function($resource, BASEURL38985){

    //列表
    var findPlaceHotList = BASEURL38985 + '/api/as/tc/placehot/findPlaceHotList';

    //添加
    var savePlaceHot = BASEURL38985 + '/api/as/tc/placehot/savePlaceHot';

    //通过ID查找
    var getPlaceHot = BASEURL38985 + '/api/as/tc/placehot/getPlaceHot';

    //编辑
    var updatePlaceHot = BASEURL38985 + '/api/as/tc/placehot/updatePlaceHot';

    //删除
    var delPlaceHot = BASEURL38985 + '/api/as/tc/placehot/updateDel';

    // 景区列表
    var viewlist = BASEURL38985 + '/api/as/tc/placeview/jlist';
    
    return {
        findPlaceHotList : function(){
            return $resource(findPlaceHotList, {}, {});
        },
        savePlaceHot : function(){
            return $resource(savePlaceHot, {}, {});
        },
        getPlaceHot : function(){
            return $resource(getPlaceHot, {}, {});
        },
        updatePlaceHot : function(){
            return $resource(updatePlaceHot, {}, {});
        },
        delPlaceHot : function(){
            return $resource(delPlaceHot, {}, {});
        },
        viewlist : function(){
            return $resource(viewlist, {}, {});
        }
    }
};
module.exports = service;
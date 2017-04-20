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
    // 启用
    var usebtn = BASEURL38985 + '/api/as/tc/placehot/updateNoDel';
    
    return {
         model : function(){
            return { 
                trip_info : ""
            };
        },

        triparray : [],

         //初始化信息 
         init : function(){
           var trip = this.triparray[i];
                    trip.uploader = new FileUploader({
                        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=line&selfdir=trip'
                    });
                    trip.uploader.dlq = trip;
                    trip.uploader.onSuccessItem = function(fileItem, response, status, headers) {
                        this.dlq.img = response.savename;
                    };
                    trip.uploader.filters.push({
                        name: 'imageFilter',
                        fn: function(item /*{File|FileLikeObject}*/, options) {
                            var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                        }
                    });
                    return $resource(init, {}, {});
                  },

        //绑定图片控件。
        bindimgcom : function(){
                
        },    

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
        },
        usebtn : function(){
            return $resource(usebtn, {}, {});
        }
    }
};
module.exports = service;
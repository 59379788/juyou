/**
 * 子模块service
 * DHpai
 */
var service = function($resource, BASEURL38985){
    
    // 分类列表
    var findCategoryList = '/api/as/ic/category/findCategoryList';
    // // 添加分类
     var saveCategory = '/api/ac/ic/categoryService/save';
    // 分类详情
    var getCategory = '/api/as/ic/category/getCategory';
    // 启动
    var updateStartState = '/api/as/ic/category/updateStartState';
    // 禁用
    var updateDiasbleState = '/api/as/ic/category/updateDisableState';
    // 查询所有上级id
    var findPidList = '/api/as/ic/category/findPidList';

    // 文章列表
    var findArticleList = '/api/as/ic/article/findArticleList';
    // // 添加文章
    var saveArticle = '/api/as/ic/article/save';
    // 文章详情
    var getArticle = '/api/as/ic/article/getArticle';
    // 启动文章按钮
    var StartArticleState = '/api/as/ic/article/updateStartState';
    // 禁用W文章按钮
    var DisableArticleState = '/api/as/ic/article/updateDisableState';

    // 字典列表
    var findDictionaryList = '/api/as/ic/dictionary/findDictionaryList';
    // 添加字典
    var saveDictionary = '/api/as/ic/dictionary/save';
    // 字典详情
    var getDictionary = '/api/as/ic/dictionary/getDictionary';
    // 删除字典
    var delDictionary = '/api/as/ic/dictionary/updateDel';

    
    return {
         //模型
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

        findCategoryList : function(){
            return $resource(findCategoryList, {}, {});
        },
        saveCategory : function(){
            return $resource(saveCategory, {}, {});
        },
        getCategory : function(){
            return $resource(getCategory, {}, {});
        },
        updateStartState : function(){
            return $resource(updateStartState, {}, {});
        },
        updateDiasbleState : function(){
            return $resource(updateDiasbleState, {}, {});
        },
        findPidList : function(){
            return $resource(findPidList, {}, {});
        },
        findArticleList : function(){
            return $resource(findArticleList, {}, {});
        },
        saveArticle : function(){
            return $resource(saveArticle, {}, {});
        },
        getArticle : function(){
            return $resource(getArticle, {}, {});
        },
        StartArticleState : function(){
            return $resource(StartArticleState, {}, {});
        },
        DisableArticleState : function(){
            return $resource(DisableArticleState, {}, {});
        },
        findDictionaryList : function(){
            return $resource(findDictionaryList, {}, {});
        },
        saveDictionary : function(){
            return $resource(saveDictionary, {}, {});
        },
        getDictionary : function(){
            return $resource(getDictionary, {}, {});
        },
        delDictionary : function(){
            return $resource(delDictionary, {}, {});
        }

        
    };

};

module.exports = service;
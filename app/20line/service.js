/**
 * 子模块service
 * dlq
 */
var service = function($resource, BASEURL38985, FileUploader){

	//查询线路列表
    var listapi = BASEURL38985 + "/api/as/lc/line/saPageList";
    //得到线路信息
    var lineapi = BASEURL38985 + "/api/as/lc/line/info";
    //新建一条线路
    var createapi = BASEURL38985 + "/api/ac/lc/lineService/add";
    //修改线路
    var editapi = BASEURL38985 + "/api/as/lc/line/edit";
    //删除线路
    var delapi  = BASEURL38985 + "/api/as/lc/line/del";
    //启用线路
    var startapi = BASEURL38985 + "/api/as/lc/line/onshelf";
    //停用用线路
    var stopapi = BASEURL38985 + "/api/as/lc/line/offshelf";
    //发团
    var createteamapi = BASEURL38985 + "/api/ac/lc/groupService/create";
    //查询团列表
    var teamlistapi = BASEURL38985 + "/api/as/lc/group/list";
    //上架
    var shangjiaapi = BASEURL38985 + "/api/as/lc/group/start";
    //下架
    var xiajiaapi = BASEURL38985 + "/api/as/lc/group/cancel";
    //删除
    var delapi = BASEURL38985 + "/api/as/lc/group/del";
    //封团
    var finishapi = BASEURL38985 + "/api/as/lc/group/finish";
    //编辑
    var editapi = BASEURL38985 + "/api/as/lc/group/edit";
    //查询团信息
    var infoapi = BASEURL38985 + "/api/as/lc/group/info";
    //区域
    var areaapi = BASEURL38985 + "/api/as/lc/area/list";

    var publish_type_array = ["非补贴","补贴游","公益游"];
    var state_array = ["未上线","使用","停用"];
    var state_array1 = ["等待开团","开团","封团","取消"];

	return {
        //模型
        model : function(){
            return {
                //ta : "1",           //旅行社编号
                //operator : "dlq",
                
            //----------- 基本信息[开始] ----------------------------------//
                area : "",
                pcode : "",   //供应商产品编号
                title : "",
                keyword : "",
                type : "0",             //线路类型--省内游
                publish_type : "1",     //--其他  发布类型
              //  publish_type_show : "",
                guarantee : "0",        //是否担保 --否
                stb_use : "0",          //是否同业可用--否
                days : "1",             //几天
                night : "0",            //几夜
                start_city : "沈阳",
                visa : "0",              //签证
                insurance : "0",         //保险
                img : "",
                
                insuranceprice : "0",     //保险金额
             //----------- 基本信息[结束] ----------------------------------//

	         //----------- 产品推荐[开始] ----------------------------------//   
                feature : "",
                eat_info : "",
                stay_info : "",
                travel_info : "",
                tour_info : "",
                buy_info : "",
                play_info : "",
             //----------- 产品推荐[结束] ----------------------------------//
                
             //----------- 发车信息[开始] ----------------------------------//
                
                contacts : "",
                depart : "",
                
             //----------- 发车信息[结束] ----------------------------------//
                
             //----------- 费用包含[开始] ----------------------------------//
                cost_traffic : "",
                cost_straffic : "",
                cost_stay : "",
                cost_dinner : "",
                cost_ticket : "",
                cost_guide : "",
                cost_child : "",
                cost_give : "",
                cost_other : "",
             //----------- 费用包含[结束] ----------------------------------//
                
             //----------- 费用不包含[开始] ----------------------------------//
                notinclude_straffic : "",
                notinclude_att : "",
                notinclude_srd : "",
                notinclude_ticket : "",
                notinclude_other : "",
                notinclude_supplement : "",
                notinclude_insurance : "",
             //----------- 费用不包含[结束] ----------------------------------//
                
             //----------- 特殊人群限制[开始] ----------------------------------//
                special_population_limit : "",
             //----------- 特殊人群限制[结束] ----------------------------------//
                
             //----------- 其他信息[开始] ----------------------------------//
                booking_information : "",
                note : "",
                reminder : "",
             //----------- 其他信息[结束] ----------------------------------// 
                
             //----------- 价格信息[开始] ----------------------------------//
                market_price : 0,               //成人市场价格
                market_price_child : 0,         //儿童市场价格
                platform_adult : 0,
                platform_child : 0,
                stb_child : 0,
                stb_adult : 0,
                subsidy_adult : 0,
                subsidy_child : 0,
                discount_child : 0,   //让利儿童价格
                discount_adult : 0,
                start_advance : "0",
                end_advance : "0",
             //----------- 价格信息[开始] ----------------------------------//    
                
                trip_info : ""
            };
        },
        model1 : {
          
          daysarr : [],
          person_limit : "30",
          
          market_price : "0",
          market_price_child : "0",
          platform_adult : "0",     //平台成人价格
          stb_adult : "0",          //同业成人价格
          subsidy_adult : "0",      //补贴成人价格
          discount_adult : "0",     //让利成人价格
          platform_child : "0",     //平台儿童价格
          stb_child : "0",          //同业儿童价格
          subsidy_child : "0",      //补贴儿童价格
          discount_child : "0",     //让利儿童价格
          
          start_advance : "0",  //报名开始前几个小时
          end_advance : "0",    //报名截止提前X个小时
          operator : "dlq"
          
      },
        stateArray : state_array1,
        dictionaries : {
            type : publish_type_array,
            state : state_array
        },
        linelist : function(){
            return $resource(listapi, {}, {});
        },
        line : function(){
            return $resource(lineapi, {}, {});
        },
        create : function(){
            return $resource(createapi, {}, {});
        },
        editline : function(){
            return $resource(editapi, {}, {});
        },
        delline : function(){
            return $resource(delapi, {}, {});
        },
        start : function(){
            return $resource(startapi, {}, {});
        },
        stop : function(){
            return $resource(stopapi, {}, {});
        },
        createteam : function(){
          return $resource(createteamapi, {}, {});
        },
        teamlist : function(){
          return $resource(teamlistapi, {}, {});
        },
        shangjia : function(){
          return $resource(shangjiaapi, {}, {});
        },
        xiajia : function(){
          return $resource(xiajiaapi, {}, {});
        },
        del : function(){
          return $resource(delapi, {}, {});
        },
        finish : function(){
          return $resource(finishapi, {}, {});
        },
        edit : function(){
          return $resource(editapi, {}, {});
        },
        info : function(){
          return $resource(infoapi, {}, {});
        },
        getArea : function () {
          return $resource(areaapi, {}, {});
        },
        fun :{
            daysarray : [
                {"name" : "1天", value : 1},
                {"name" : "2天", value : 2},
                {"name" : "3天", value : 3},
                {"name" : "4天", value : 4},
                {"name" : "5天", value : 5},
                {"name" : "6天", value : 6},
                {"name" : "7天", value : 7},
                {"name" : "8天", value : 8},
                {"name" : "9天", value : 9},
                {"name" : "10天", value : 10},
                {"name" : "10天以上", value : 999}
            ],
            nightsarray : [
                {"name" : "0晚", value : 0},
                {"name" : "1晚", value : 1},
                {"name" : "2晚", value : 2},
                {"name" : "3晚", value : 3},
                {"name" : "4晚", value : 4},
                {"name" : "5晚", value : 5},
                {"name" : "6晚", value : 6},
                {"name" : "7晚", value : 7},
                {"name" : "8晚", value : 8},
                {"name" : "9晚", value : 9},
                {"name" : "10晚", value : 10},
                {"name" : "10晚以上", value : 999}
            ],
            state : [
                {name : "全部", code : 9999},
                {name : "未上线", code : 0},
                {name : "使用", code : 1},
                {name : "停用", code : 2}
            ],
          publishType : [
                {name : "全部", code : 9999},
                {name : "非补贴", code : 0},
                {name : "补贴游", code : 1},
                {name : "公益游", code : 2}
            ],
            departArray : [],       //--不存数据库
            insurancearray : [],       //--不存数据库
            triparray : [],       //
            type0array : [],
            type1array : [],
            type2array : [],
            //初始化信息
            init : function(){
                this.departArray = angular.fromJson(this.depart);

                if(this.trip_info != undefined && this.trip_info != "")
                {
                    this.triparray = angular.fromJson(this.trip_info);   
                }
                for(var i = 0; i < this.triparray.length; i++)
                {
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
                }
                
                if(this.triparray.length === 0)
                {
                    this.newtrip();
                }
            },
            //制作数据
            do : function(){
                this.depart = angular.toJson(this.departArray);
                for(var i = 0; i < this.triparray.length; i++)
                {
                    delete this.triparray[i].uploader;
                }
                this.trip_info = angular.toJson(this.triparray);
            },
            //绑定图片控件。
            bindimgcom : function(){
                
            },
            //新建一条发车信息
            newDepart : function(){
                var d = {
                    start : "",
                    time : "",
                    end : "",
                    mark : ""
                };

                this.departArray.push(d);
            },
            //删除一条发车信息
            delDepart : function(index){
                this.departArray.splice(index,1);
            },
            //更新天数
            newtrip : function(){
                var trip = {
                    resume : "",
                    describe : "",
                    dinner : "",
                    stay : "",
                    img : "",
                    uploader : new FileUploader({
                        url: 'http://cl.juyouhx.com/oss.php/oss/webuploader1?topdir=line&selfdir=trip'
                    })
                };
                
                trip.uploader.onSuccessItem = function(fileItem, response, status, headers) {
                    trip.img = response.savename;
                    console.log(response);
                };
                
                trip.uploader.filters.push({
                    name: 'imageFilter',
                    fn: function(item /*{File|FileLikeObject}*/, options) {
                        var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                        return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                    }
                });
                
                this.triparray.push(trip);
            },
            deltrip : function(index){
                this.triparray.splice(index,1); 
            },
            changeinsurance : function(value){
                
                for(var i = 0; i < this.insurancearray.length; i++)
                {
                    var ins = this.insurancearray[i];
                    if(ins.id === value)
                    {
                        this.insuranceprice = ins.platformprice;
                        break;
                    }
                }
            },
            changetype : function(){
                
                this.areaarray = this["type" + this.type + "array"];
                this.area = this.areaarray[0].code;
            }
        }

	};
};

module.exports = service;
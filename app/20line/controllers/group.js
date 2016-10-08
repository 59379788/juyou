module.exports = function($stateParams, $scope, teammodel, createteam, $location, teaminfo){
    
    var lineid =  $stateParams.lineid;
    var linename =  $stateParams.linename;
    
    teaminfo.get({code : lineid}, function(res){
        
        //console.log(res);
        
        if(res.errcode === 0)
        {
            angular.extend(teammodel, res.data);
        }
        //console.log(teammodel);
        
        $scope.teammodel = teammodel;
    });
    
    
    var montharray = [31,28,31,30,31,30,31,31,30,31,30,31];
    
    var xingqiarray = ["日", "一", "二", "三", "四", "五", "六"];
    
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    
    //用来渲染视图的数组
    $scope.datearray = [];
    //星期日--星期六
    $scope.header = xingqiarray;
    
    //用来记录选择了哪些天
    var selected = {};
    
    for(var i = 0; i < 3; i++)
    {
        var dayarray = [];
        var mm = month + i;
        var yy = year;
        if(mm >= 12) 
        {
            mm -= 12;
            yy += 1;
        }

        if((mm === 1) && (yy % 4 === 0) && ((yy % 100 !== 0) || (yy % 400 === 0)))
        {
            montharray[1] = 29;
        }

    //    alert(yy + "---" + mm);
        
        var firstdate = new Date(yy, mm ,1);
        var lastdate = new Date(yy, mm, montharray[mm]);

        
        var fxingqi = firstdate.getDay();
        var lxingqi = lastdate.getDay();
        
        for(var f = 0; f < fxingqi; f++)
        {
            var dayobj = {
                isSelected : false,
                d : ""
            };
            dayarray.push(dayobj);
        }
        
        for(var j = 0; j < montharray[mm]; j++)
        {
            var dayobj = {
                isSelected : false,
                d : j+1
            };
            dayarray.push(dayobj);
        }
        
        for(var l = lxingqi; l < 6; l++)
        {
            var dayobj = {
                isSelected : false,
                d : ""
            };
            dayarray.push(dayobj);
        }
        
        var daydate = {
            year : yy,
            month : mm+1,
            dayarray : dayarray
        };
        
        $scope.datearray.push(daydate);
    }
    
    //console.log($scope.datearray);
    
    $scope.selectall = function(m){
        selectall(m, true);
    };
    
    $scope.unselectall = function(m){
        selectall(m, false);
    };
    
    function selectall(m, s)
    {
        for(var i = 0, j = m.dayarray.length; i < j; i++)
        {
            var day = m.dayarray[i];
            if(day.d !== "")
            {
                var key = m.year + "-" + m.month + "-" + day.d;
                if(s){
                    selected[key] = {};
                }
                else{
                    delete selected[key];
                }
                day.isSelected = s;
            }
        }
    }
    
    $scope.select = function(m, day, index){

        var key = m.year + "-" + m.month + "-" + day;
        
        if(selected[key] === undefined)
        {
            selected[key] = {};
            m.dayarray[index].isSelected = true;
        }
        else
        {
            delete selected[key];
            m.dayarray[index].isSelected = false;
        }
        //console.log(selected);
        //console.log($scope.datearray);
    };
    
    
    $scope.save = function(){
        
        var obj = {};
        
        obj.time_list = [];
        for(var key in selected)
        {
            obj.time_list.push(key);
        }
        
        obj.group_info = $scope.teammodel;
        obj.group_info.line = lineid;

        obj.line = lineid;
        
        console.log(obj);
        
        createteam.save(obj, function(res){
            
            console.log(res);
            if(res.errcode === 0)
            {
                alert("开团成功");
                $location.path("teamlist/" + lineid + "/" + linename);
            }
            else
            {
                alert("开团失败");
            }
            
        });
        
    };
    

    
    $scope.open1 = function($event) {
        $scope.status1.opened = true;
    }; 

    $scope.status1 = {
        opened: false
    };

    $scope.open2 = function($event) {
        $scope.status2.opened = true;
    }; 

    $scope.status2 = {
        opened: false
    };
    
 
    
  };

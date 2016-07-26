/**
 * 子模块service
 * dlq
 */
var service = function(){

    
    return {
        getDate : function(d){
        	if(d === undefined){
        		return "";
        	}
        	var month = (d.getMonth()+1).toString();
        	var day = d.getDate().toString();
        	if(month.length == 1) month = '0' + month;
        	if(day.length == 1) day = '0' + day;
        	return d.getFullYear() + "-" + month + "-" + day;
    	},

    	//计算俩日期之间天数
		DateDiff : function(sDate1,  sDate2){    //sDate1和sDate2是2006-12-18格式  
		   var  aDate,  oDate1,  oDate2,  iDays  
		   aDate  =  sDate1.split("-")  
		   oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])    //转换为12-18-2006格式  
		   aDate  =  sDate2.split("-")  
		   oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])  
		   iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)    //把相差的毫秒数转换为天数  
		   return  iDays  
		},

    	transData : function(a, idStr, pidStr, chindrenStr){    
	        var r = [], 
	            hash = {}, 
	            id = idStr, 
	            pid = pidStr, 
	            children = chindrenStr, 
	            i = 0, 
	            j = 0, 
	            len = a.length; 

	        for(; i < len; i++){ 
	            hash[a[i][id]] = a[i];
	        }

	        for(; j < len; j++){    
	            var aVal = a[j], 
	                hashVP = hash[aVal[pid]];

	            if(hashVP){    
	                !hashVP[children] && (hashVP[children] = []);    
	                hashVP[children].push(aVal);    
	            }else{
	                r.push(aVal);
	            }
	        }    
	        return r;    
	    }

	    ,


	    //校验身份证
		IdentityCodeValid : function(code){
		
			var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
	        var tip = "";
	        var pass= true;
	        
	        if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
	            tip = "身份证号格式错误";
	            pass = false;
	        }
	        
	       else if(!city[code.substr(0,2)]){
	            tip = "身份证地址编码错误";
	            pass = false;
	        }
	        else{
	            //18位身份证需要验证最后一位校验位
	            if(code.length == 18){
	                code = code.split('');
	                //∑(ai×Wi)(mod 11)
	                //加权因子
	                var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
	                //校验位
	                var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
	                var sum = 0;
	                var ai = 0;
	                var wi = 0;
	                for (var i = 0; i < 17; i++)
	                {
	                    ai = code[i];
	                    wi = factor[i];
	                    sum += ai * wi;
	                }
	                var last = parity[sum % 11];
	                if(parity[sum % 11] != code[17]){
	                    tip = "身份证校验位错误";
	                    pass =false;
	                }
	            }
	        }
	        if(!pass) alert(tip);
	        return pass;
			
		}

		,

		/*************************
		 * 计算两个日期时间段内所有日期 
		 * 
		 * @param value1 
		 *            开始日期 YYYY-MM-DD 
		 * @param value2 
		 *            结束日期 
		 * return 日期数组 
		 */  
		dataScope : function(value1, value2) {  
		    var getDate1 = function(str) {  
		        var tempDate = new Date();  
		        var list = str.split("-");  
		        tempDate.setFullYear(list[0]);  
		        tempDate.setMonth(list[1] - 1);  
		        tempDate.setDate(list[2]);  
		        return tempDate;  
		    }  
		    var date1 = getDate1(value1);  
		    var date2 = getDate1(value2);  
		    if (date1 > date2) {  
		        var tempDate = date1;  
		        date1 = date2;  
		        date2 = tempDate;  
		    }  
		    date2.setDate(date2.getDate() + 1);  
		    var dateArr = [];  
		    

		    while (!(date1.getFullYear() == date2.getFullYear()  
		            && date1.getMonth() == date2.getMonth() 
		            && date1.getDate() == date2.getDate())) {  

		         var dayStr =date1.getDate().toString();
	            if(dayStr.length ==1){  
	                dayStr="0"+dayStr;  
	            }  

	            var month = (date1.getMonth() + 1).toString();
	            if(month.length == 1) month = '0' + month;
		        dateArr.push(date1.getFullYear() + "-" + 
		        			month + "-"  
		                	+ dayStr);  
		        
		        date1.setDate(date1.getDate() + 1);  

		    }  
		    return dateArr;  
		}

		,

		str2date : function(strDate){

			if(angular.isString(strDate))
			{
				var objDate = new Date(Date.parse(strDate.replace(/-/g, "/")));

				return objDate;
			}
			else
			{
				return '错误格式';
			}
			
		}

		,

		date2str : function (objDate){

			if(angular.isDate(objDate))
			{
				var y = objDate.getFullYear();
				var m = objDate.getMonth();
				var d = objDate.getDate();

				return y + '-' + (m + 1) + '-' + d;
			}
			else
			{
				return '错误格式';
			}
		}
       
    };

};

module.exports = service;
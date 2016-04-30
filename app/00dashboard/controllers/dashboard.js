module.exports = function($scope, noticelist){

	noticelist.get({}, function(res){

        console.log(res);

        if(res.errcode === 0)
        {
            
        }
        else
        {
            alert(res.errmsg);
        }


    });


};
module.exports = function($scope, cardbaselist){


    cardbaselist.save({}, function(res){

        console.log(res);

        if(res.errcode !== 0)
        {
            alert(res.errmsg);
            return;
        }
        $scope.objs = res.data;


    });

};
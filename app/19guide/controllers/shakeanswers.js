module.exports = function($scope, $uibModalInstance, openid, shakeanswers, shakeanswer, shakegetquestion){
    

    shakegetquestion.get({'code':'PC-wangnan'}, function(res){
            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }
            $scope.objs = res.data;

        });
     shakeanswer.get({}, function(res){
            console.log(res);
            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return;
            }
            $scope.answers = res.data;

        });

     $scope.gogo = function(){
        var question_answer = [];
        for(var i=0; i<$scope.objs.length; i++){
            var map = {
                'question_id' : $scope.objs[i].question_id,
                'answer_code' : $scope.objs[i].answer_code
            }
            question_answer.push(map);
        }

        var para = {
            'openid' : '44567',
            'device_code' : 'PC-wangnan',
            'question_answer' : question_answer
        };
        console.log(para);
        shakeanswers.save(para, function(res){
            console.log(res);

            if(res.errcode === 0)
            {
                alert('提交成功');
                $uibModalInstance.close();
            }
            else
            {
                alert(res.errmsg);
            }

        });
     }

     

     /**/
};
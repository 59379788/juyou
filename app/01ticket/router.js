/**
 * 子模块路由
 * dlq
 */

var router = function ($urlRouterProvider, $stateProvider) {

    $stateProvider

        .state('app.ticketlogin', {
            url: '/ticketlogin',
            title: 'ticketlogin',
            controller: 'login',
            template: require('./views/login.html'),
            resolve: {
                login: function (ticketservice) {
                    return ticketservice.login();
                }
            }
        })

        .state('app.ticketlist', {
            url: '/ticketlist',
            title: 'ticketlist',
            template: require('./views/list.html')
        })

        .state('app.ticketinput', {
            url: '/ticketinput',
            title: 'ticketinput',
            controller: 'check',
            template: require('./views/input.html'),
            resolve: {
                checkcode: function (ticketservice) {
                    return ticketservice.checkcode();
                },
                checkcard: function (ticketservice) {
                    return ticketservice.checkcard();
                },
                checkid: function (ticketservice) {
                    return ticketservice.checkid();
                },
                checkgroupcode: function (ticketservice) {
                    return ticketservice.checkgroupcode();
                },
                useticketbyid: function (ticketservice) {
                    return ticketservice.useticketbyid();
                },
                useticketbycode: function (ticketservice) {
                    return ticketservice.useticketbycode();
                },
                useticketbycard: function (ticketservice) {
                    return ticketservice.useticketbycard();
                },
                useticketbygroupcode: function (ticketservice) {
                    return ticketservice.useticketbygroupcode();
                },
                devicenamelist: function (deviceservice) {
                    return deviceservice.devicenamelist();
                },
                list: function (viewservice) {
                    return viewservice.list();
                },
                devicelist: function (deviceservice) {
                    return deviceservice.devicelist();
                },
                $uibModalInstance: function () {
                    return undefined;
                }

            }
        })


        .state('app.testtest', {
            url: '/testtest',
            title: 'testtest',
            controller: 'testtest',
            template: require('./views/testtest.html'),
            resolve: {
                //  	login:  function(ticketservice){
                // 	return ticketservice.login();
                // }
            }
        })

};

module.exports = router;
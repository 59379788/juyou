/**
 * 子模块路由
 * dlq
 */

var router = function ($urlRouterProvider, $stateProvider) {

    $stateProvider

        .state('app.orderlist', {
            url: '/orderlist',
            controller: 'orderlist',
            template: require('./views/list.html'),
            resolve: {
                list: function (orderservice) {
                    return orderservice.list();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                },
                ticketlist: function (orderservice) {
                    return orderservice.ticketlist();
                },
                createBackOrder: function (orderservice) {
                    return orderservice.createBackOrder();
                },
                resend: function (orderservice) {
                    return orderservice.resend();
                },
                getRedCorridorOrderList: function (orderservice) {
                    return orderservice.getRedCorridorOrderList();
                },
                getRedCorridorResentMsg: function (orderservice) {
                    return orderservice.getRedCorridorResentMsg();
                },
                orderbacklist: function (orderservice) {
                    return orderservice.orderbacklist();
                },
                relay: function (orderservice) {
                    return orderservice.relay();
                },
                getRedCorridorTrSendSms: function (orderservice) {
                    return orderservice.getRedCorridorTrSendSms();
                },
                getOrderSimInfo: function (orderservice) {
                    return orderservice.getOrderSimInfo();
                },
                agencyOrderRepeatECode: function (orderservice) {
                    return orderservice.agencyOrderRepeatECode();
                },
                updateTicketEffectTime: function (orderservice) {
                    return orderservice.updateTicketEffectTime();
                },
                getroyalocOrdersState: function (orderservice) {
                    return orderservice.getroyalocOrdersState();
                },
                testCreateBackOrder: function (orderservice) {
                    return orderservice.testCreateBackOrder();
                },
                str2date: function (utilservice) {
                    return utilservice.str2date;
                }

            }

        })

        .state('app.allorderlist', {
            url: '/allorderlist',
            controller: 'allorderlist',
            template: require('./views/list.html'),
            resolve: {
                alllist: function (orderservice) {
                    return orderservice.alllist();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                }
            }

        })

        //查看订单的所有票信息
        .state('app.orderticketlist', {
            url: '/orderticketlist/:code',
            controller: 'orderticketlist',
            template: require('./views/orderticketlist.html'),
            resolve: {
                ticketlist: function (orderservice) {
                    return orderservice.ticketlist();
                },
                createBackOrder: function (orderservice) {
                    return orderservice.createBackOrder();
                },
                updateTicketEffectTime: function (orderservice) {
                    return orderservice.updateTicketEffectTime();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                },
                str2date: function (utilservice) {
                    return utilservice.str2date;
                }
                // getDate : function(utilservice){
                //     return utilservice.getDate;
                // }
            }
        })


        //查看订单的所有票信息
        .state('app.orderticketlistcode', {
            url: '/orderticketlist/:code',
            controller: 'orderticketlist',
            template: require('./views/orderticketlistcode.html'),
            resolve: {
                ticketlist: function (orderservice) {
                    return orderservice.ticketlist();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                },
                str2date: function (utilservice) {
                    return utilservice.str2date;
                }
                // getDate : function(utilservice){
                //     return utilservice.getDate;
                // }
            }

        })


        .state('app.orderbycode', {
            url: '/orderbycode',
            controller: 'orderbycode',
            template: require('./views/orderbycode.html'),
            resolve: {
                // list : function(orderservice){
                //     return orderservice.list();
                // },
                // getDate : function(utilservice){
                //     return utilservice.getDate;
                // }
            }

        })

        .state('app.grouporderlist', {
            url: '/grouporderlist',
            controller: '13grouplist',
            template: require('./views/grouplist.html'),
            resolve: {
                grouplist: function (orderservice) {
                    return orderservice.grouplist();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                },
                //报名详情
                infolist: function (sellingservice) {
                    return sellingservice.infolist();
                }
            }

        })

        .state('app.grouporderjqlist', {
            url: '/grouporderjqlist',
            controller: 'groupjqlist',
            template: require('./views/grouplist.html'),
            resolve: {
                grouporderlist: function (orderservice) {
                    return orderservice.grouporderlist();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                },
                //报名详情
                infolist: function (sellingservice) {
                    return sellingservice.infolist();
                }
            }

        })

        .state('app.allgrouporderlist', {
            url: '/grouporderalllist',
            controller: 'groupalllist',
            template: require('./views/grouplist.html'),
            resolve: {
                groupalllist: function (orderservice) {
                    return orderservice.groupalllist();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                }
            }

        })

        .state('app.supplyorderList', {
            url: '/supplyOrderList',
            controller: 'supplyOrderList',
            template: require('./views/supplyOrderList.html'),
            resolve: {
                supplyOrderList: function (orderservice) {
                    return orderservice.supplyOrderList();
                },
                ticketlist: function (orderservice) {
                    return orderservice.ticketlist();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                },
                createBackOrder: function (orderservice) {
                    return orderservice.createBackOrder();
                },
                resend: function (orderservice) {
                    return orderservice.resend();
                },
                getRedCorridorOrderList: function (orderservice) {
                    return orderservice.getRedCorridorOrderList();
                },
                getRedCorridorResentMsg: function (orderservice) {
                    return orderservice.getRedCorridorResentMsg();
                },
                orderbacklist: function (orderservice) {
                    return orderservice.orderbacklist();
                },
                relay: function (orderservice) {
                    return orderservice.relay();
                },
                getRedCorridorTrSendSms: function (orderservice) {
                    return orderservice.getRedCorridorTrSendSms();
                },
                getOrderSimInfo: function (orderservice) {
                    return orderservice.getOrderSimInfo();
                },
                agencyOrderRepeatECode: function (orderservice) {
                    return orderservice.agencyOrderRepeatECode();
                },
                updateTicketEffectTime: function (orderservice) {
                    return orderservice.updateTicketEffectTime();
                },
                getroyalocOrdersState: function (orderservice) {
                    return orderservice.getroyalocOrdersState();
                },
                str2date: function (utilservice) {
                    return utilservice.str2date;
                }
            }

        })

        .state('app.areaorderList', {
            url: '/areaOrderList',
            controller: 'areaOrderList',
            template: require('./views/areaOrderList.html'),
            resolve: {
                areaOrderList: function (orderservice) {
                    return orderservice.areaOrderList();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                },
                ticketlist: function (orderservice) {
                    return orderservice.ticketlist();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                },
                createBackOrder: function (orderservice) {
                    return orderservice.createBackOrder();
                },
                resend: function (orderservice) {
                    return orderservice.resend();
                },
                getRedCorridorOrderList: function (orderservice) {
                    return orderservice.getRedCorridorOrderList();
                },
                getRedCorridorResentMsg: function (orderservice) {
                    return orderservice.getRedCorridorResentMsg();
                },
                orderbacklist: function (orderservice) {
                    return orderservice.orderbacklist();
                },
                relay: function (orderservice) {
                    return orderservice.relay();
                },
                getRedCorridorTrSendSms: function (orderservice) {
                    return orderservice.getRedCorridorTrSendSms();
                },
                getOrderSimInfo: function (orderservice) {
                    return orderservice.getOrderSimInfo();
                },
                agencyOrderRepeatECode: function (orderservice) {
                    return orderservice.agencyOrderRepeatECode();
                },
                updateTicketEffectTime: function (orderservice) {
                    return orderservice.updateTicketEffectTime();
                },
                getroyalocOrdersState: function (orderservice) {
                    return orderservice.getroyalocOrdersState();
                },
                str2date: function (utilservice) {
                    return utilservice.str2date;
                }
            }

        })

        .state('app.marketorderList', {
            url: '/marketOrderList',
            controller: 'marketOrderList',
            template: require('./views/marketOrderList.html'),
            resolve: {
                marketOrderList: function (orderservice) {
                    return orderservice.marketOrderList();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                },
                ticketlist: function (orderservice) {
                    return orderservice.ticketlist();
                },
                getDate: function (utilservice) {
                    return utilservice.getDate;
                },
                createBackOrder: function (orderservice) {
                    return orderservice.createBackOrder();
                },
                resend: function (orderservice) {
                    return orderservice.resend();
                },
                getRedCorridorOrderList: function (orderservice) {
                    return orderservice.getRedCorridorOrderList();
                },
                getRedCorridorResentMsg: function (orderservice) {
                    return orderservice.getRedCorridorResentMsg();
                },
                orderbacklist: function (orderservice) {
                    return orderservice.orderbacklist();
                },
                relay: function (orderservice) {
                    return orderservice.relay();
                },
                getRedCorridorTrSendSms: function (orderservice) {
                    return orderservice.getRedCorridorTrSendSms();
                },
                getOrderSimInfo: function (orderservice) {
                    return orderservice.getOrderSimInfo();
                },
                agencyOrderRepeatECode: function (orderservice) {
                    return orderservice.agencyOrderRepeatECode();
                },
                updateTicketEffectTime: function (orderservice) {
                    return orderservice.updateTicketEffectTime();
                },
                getroyalocOrdersState: function (orderservice) {
                    return orderservice.getroyalocOrdersState();
                },
                str2date: function (utilservice) {
                    return utilservice.str2date;
                }
            }

        })


};

module.exports = router;
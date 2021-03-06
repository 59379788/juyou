var router = function($urlRouterProvider, $stateProvider){

 	$stateProvider
       // 申请列表
 	   .state('app.skacountlist', {
         url: '/skacountlist',
         controller : 'skacountlist',
         template: require('./views/skacountlist.html'),
         resolve:{
            
          customerlist : function(busscustomerservice){
                 return busscustomerservice.customerlist();
          },
          review : function(busscustomerservice){
                 return busscustomerservice.review();
          },
          role : function(busscustomerservice){
                 return busscustomerservice.role();
          },
          create : function(busscustomerservice){
                 return busscustomerservice.create();
          },
          message : function(busscustomerservice){
                 return busscustomerservice.message();
          },
          userinfo : function(busscustomerservice){
                 return busscustomerservice.userinfo();
          },
          insertnops : function(busscustomerservice){
                 return busscustomerservice.insertnops();
          },
          failed : function(busscustomerservice){
                 return busscustomerservice.failed();
          },
          confirmauthority : function(busscustomerservice){
                 return busscustomerservice.confirmauthority();
          }
       
         }
       })


       .state('app.creataccount', {
         url: '/creataccount/:id',
         controller : 'creataccount',
         template: require('./views/creataccount.html'),
         resolve:{
          create : function(busscustomerservice){
                 return busscustomerservice.create();
          },
          message : function(busscustomerservice){
                 return busscustomerservice.message();
          },
          insertnops : function(busscustomerservice){
                 return busscustomerservice.insertnops();
          }
       
         }
       })

        .state('app.get2', {
         url: '/get2/:id',
         controller : 'get2',
         template: require('./views/get2.html'),
         resolve:{
            userinfo : function(busscustomerservice){
                 return busscustomerservice.userinfo();
          }
       
         }
       })

        // 供应商申请列表
        .state('app.supplierlist', {
         url: '/supplierlist',
         controller : 'supplierlist',
         template: require('./views/supplierlist.html'),
         resolve:{
            supplierlist : function(busscustomerservice){
                 return busscustomerservice.supplierlist();
            },
            saveconfirm : function(busscustomerservice){
                 return busscustomerservice.saveconfirm();
            },
            typelists : function(busscustomerservice){
                 return busscustomerservice.typelists();
            }   
          
       
         }
        })

        // 供应商备注填写
        .state('app.supplyremark', {
         url: '/supplyremark',
         controller : 'supplyremark',
         template: require('./views/supplyremark.html'),
         resolve:{
            saveconfirm : function(busscustomerservice){
                 return busscustomerservice.saveconfirm();
            } 
         }
        })

        // 分配权限
        .state('app.assignauthority', {
         url: '/assignauthority',
         controller : 'assignauthority',
         template: require('./views/assignauthority.html'),
         resolve:{
             confirmauthority : function(busscustomerservice){
                 return busscustomerservice.confirmauthority();
             },
             hostlists : function(busscustomerservice){
                 return busscustomerservice.hostlists();
             },
             deleteauthority : function(busscustomerservice){
                 return busscustomerservice.deleteauthority();
             }

         }
        })

        //一元券销售品列表
        .state('app.vouchersalelist', {
         url: '/vouchersalelist',
         controller : 'vouchersalelist',
         template: require('./views/vouchersalelist.html'),
         resolve:{
	          vouchersalelist : function(busscustomerservice){
	                 return busscustomerservice.vouchersalelist();
	          },
	          vouchersalecreate : function(busscustomerservice){
	                 return busscustomerservice.vouchersalecreate();
	          },
	          businesslist : function(busscustomerservice){
	                 return busscustomerservice.businesslist;
	          },
	          typelist : function(busscustomerservice){
	                 return busscustomerservice.typelist;
	          },
              typelists : function(busscustomerservice){
	                 return busscustomerservice.typelists();
	          },
	          getDate : function(utilservice){
                	 return utilservice.getDate;
              }
         }    
        })

        //一元券订单列表
        .state('app.voucherorderlist', {
         url: '/voucherorderlist',
         controller : 'voucherorderlist',
         template: require('./views/voucherorderlist.html'),
         resolve:{
	          orderlist : function(busscustomerservice){
	                 return busscustomerservice.orderlist();
	          },
	          voucherinfo : function(busscustomerservice){
	                 return busscustomerservice.voucherinfo();
	          },
	          getDate : function(utilservice){
		             return utilservice.getDate;
		      }
         }    
        })

        //在线支付订单列表
        .state('app.usedorderlist', {
         url: '/usedorderlist/:code',
         controller : 'usedorderlist',
         template: require('./views/usedorderlist.html'),
         resolve:{
	          usedorderlist : function(busscustomerservice){
	                 return busscustomerservice.usedorderlist();
	          },
	          getDate : function(utilservice){
		             return utilservice.getDate;
		      }
         }    
        })

        // 义买义卖
        .state('app.friendly', {
         url: '/friendly',
         controller : 'friendly',
         template: require('./views/friendly.html'),
         resolve:{
            

         }
        })

        // 易买易卖
        .state('app.change', {
         url: '/change',
         controller : 'change',
         template: require('./views/change.html'),
         resolve:{
            

         }
        })

        // 宜买宜卖
        .state('app.should', {
         url: '/should',
         controller : 'should',
         template: require('./views/should.html'),
         resolve:{
            

         }
        })

        // 上架
        .state('app.onshelf', {
         url: '/onshelf',
         controller : 'onshelf',
         template: require('./views/onshelf.html'),
         resolve:{
            findtradelist : function(busscustomerservice){
                 return busscustomerservice.findtradelist();
            }

         }
        })

        // 申请用户列表
        .state('app.applyuserlist', {
         url: '/applyuserlist',
         controller : 'applyuserlist',
         template: require('./views/applyuserlist.html'),
         resolve:{
            findhelplist : function(busscustomerservice){
                 return busscustomerservice.findhelplist();
            },
            updatestate : function(busscustomerservice){
                 return busscustomerservice.updatestate();
            }

         }
        })
        // 爱心行动申请
        .state('app.loveactionapply', {
         url: '/loveactionapply/:id',
         controller : 'loveactionapply',
         template: require('./views/loveactionapply.html'),
         resolve:{
            updateactivitystateztoone : function(busscustomerservice){
                 return busscustomerservice.updateactivitystateztoone();
            },
            updateactivitystatetothree : function(busscustomerservice){
                 return busscustomerservice.updateactivitystatetothree();
            },
            saveactivity : function(busscustomerservice){
                 return busscustomerservice.saveactivity();
            },
            getDate : function(utilservice){
                return utilservice.getDate;
            }

         }
        })

        // 爱心捐献申请
        .state('app.lovedonateapply', {
         url: '/lovedonateapply',
         controller : 'lovedonateapply',
         template: require('./views/lovedonateapply.html'),
         resolve:{
            findloveactivercordlist : function(busscustomerservice){
                 return busscustomerservice.findloveactivercordlist();
            },
            updateronationstate : function(busscustomerservice){
                 return busscustomerservice.updateronationstate();
            }

         }
        })

        // 添加商品到为你推荐列表
        .state('app.goodsforyou', {
         url: '/goodsforyou',
         controller : 'goodsforyou',
         template: require('./views/goodsforyou.html'),
         resolve:{
            findgoodsforadminlist : function(busscustomerservice){
                 return busscustomerservice.findgoodsforadminlist();
            },
            savegood : function(busscustomerservice){
                 return busscustomerservice.savegood();
            },
            updatestateztoone : function(busscustomerservice){
                return busscustomerservice.updatestateztoone();
            }

         }
        })

        // 爱心活动列表
        .state('app.loveactionlist', {
         url: '/loveactionlist',
         controller : 'loveactionlist',
         template: require('./views/loveactionlist.html'),
         resolve:{
            findactivityforadminlist : function(busscustomerservice){
                 return busscustomerservice.findactivityforadminlist();
            }

         }
        })

        // 义卖列表
        .state('app.charitylist', {
         url: '/charitylist/:love_activity_id',
         controller : 'charitylist',
         template: require('./views/charitylist.html'),
         resolve:{
            findrecordforadminlist : function(busscustomerservice){
                 return busscustomerservice.findrecordforadminlist();
            },
            updateronationstate : function(busscustomerservice){
                return busscustomerservice.updateronationstate();
            }

         }
        })

        // 捐物列表
        .state('app.donatelist', {
         url: '/donatelist/:love_activity_id',
         controller : 'donatelist',
         template: require('./views/donatelist.html'),
         resolve:{
            findrecordforadminlist : function(busscustomerservice){
                 return busscustomerservice.findrecordforadminlist();
            },
            savedonate : function(busscustomerservice){
                return busscustomerservice.savedonate();
            },
            updateronationstate : function(busscustomerservice){
                return busscustomerservice.updateronationstate();
            }

         }
        })

         // 支出列表
        .state('app.expandlist', {
         url: '/expandlist/:love_activity_id',
         controller : 'expandlist',
         template: require('./views/expandlist.html'),
         resolve:{
            findinfobyidlist : function(busscustomerservice){
                 return busscustomerservice.findinfobyidlist();
            },
            saverecord : function(busscustomerservice){
                 return busscustomerservice.saverecord();
            }

         }
        })

        // 易买列表
        .state('app.changelist', {
         url: '/changelist',
         controller : 'changelist',
         template: require('./views/changelist.html'),
         resolve:{
            findgoodscantlist : function(busscustomerservice){
                 return busscustomerservice.findgoodscantlist();
            },
            updatetraddestate : function(busscustomerservice){
                 return busscustomerservice.updatetraddestate();
            }

         }
        })


         // 易买添加商品类型
        .state('app.addgoodtype', {
         url: '/addgoodtype',
         controller : 'addgoodtype',
         template: require('./views/addgoodtype.html'),
         resolve:{
            savetype : function(busscustomerservice){
                 return busscustomerservice.savetype();
            }

         }
        })

        // 说明
        .state('app.instruction', {
         url: '/instruction',
         controller : 'instruction',
         template: require('./views/instruction.html'),
         resolve:{
            findExplainList : function(busscustomerservice){
                 return busscustomerservice.findExplainList();
            },
            saveExplain : function(busscustomerservice){
                 return busscustomerservice.saveExplain();
            },
            updateExplain : function(busscustomerservice){
                 return busscustomerservice.updateExplain();
            },
            updateDel : function(busscustomerservice){
                 return busscustomerservice.updateDel();
            }

         }
        })

        // 说明列表
        .state('app.instructionlist', {
         url: '/instructionlist',
         controller : 'instructionlist',
         template: require('./views/instructionlist.html'),
         resolve:{
            findExplainList : function(busscustomerservice){
                 return busscustomerservice.findExplainList();
            },
            saveExplain : function(busscustomerservice){
                 return busscustomerservice.saveExplain();
            },
            updateExplain : function(busscustomerservice){
                 return busscustomerservice.updateExplain();
            },
            updateDelIns : function(busscustomerservice){
                 return busscustomerservice.updateDelIns();
            }

         }
        })

        // 添加说明
        .state('app.addinstruction', {
         url: '/addinstruction/:id/:title_identifier',
         controller : 'addinstruction',
         template: require('./views/addinstruction.html'),
         resolve:{
            findExplainList : function(busscustomerservice){
                 return busscustomerservice.findExplainList();
            },
            saveExplain : function(busscustomerservice){
                 return busscustomerservice.saveExplain();
            },
            updateDelIns : function(busscustomerservice){
                 return busscustomerservice.updateDelIns();
            },
            getAdminExplain : function(busscustomerservice){
                return busscustomerservice.getAdminExplain();
            },
            updateExplain : function(busscustomerservice){
                 return busscustomerservice.updateExplain();
            }

         }
        })

        // 评价列表
        .state('app.comment', {
         url: '/comment',
         controller : 'comment',
         template: require('./views/comment.html'),
         resolve:{
            findReplyList : function(busscustomerservice){
                 return busscustomerservice.findReplyList();
            }
         }
        })

        // 积分商城商品列表
        .state('app.integral', {
         url: '/integral',
         controller : 'integral',
         template: require('./views/integral.html'),
         resolve:{
            findSaleList : function(busscustomerservice){
                 return busscustomerservice.findSaleList();
            },
            updateIntegral : function(busscustomerservice){
                 return busscustomerservice.updateIntegral();
            }
         }
        })

        // 添加商品
         .state('app.addintegralgoods', {
         url: '/addintegralgoods/:id',
         controller : 'addintegralgoods',
         template: require('./views/addintegralgoods.html'),
         resolve:{
            saveIntegralGood : function(busscustomerservice){
                 return busscustomerservice.saveIntegralGood();
            },
            updateMal : function(busscustomerservice){
                 return busscustomerservice.updateMal();
            },
            getInfoBySaleCode : function(busscustomerservice){
                return busscustomerservice.getInfoBySaleCode();
            },
            salelist : function(busscustomerservice){
                     return busscustomerservice.salelist();
            }
         }
        })

         // 商客头条
         .state('app.headline', {
         url: '/headline/:id',
         controller : 'headline',
         template: require('./views/headline.html'),
         resolve:{
            headlinelist : function(busscustomerservice){
                 return busscustomerservice.headlinelist();
            },
            delheadline : function(busscustomerservice){
                 return busscustomerservice.delheadline();
            }
         }
        })

         // 添加商客头条
         .state('app.addheadline', {
         url: '/addheadline/:id',
         controller : 'addheadline',
         template: require('./views/addheadline.html'),
         resolve:{
            saveheadline : function(busscustomerservice){
                 return busscustomerservice.saveheadline();
            },
            updateNews : function(busscustomerservice) {
                return busscustomerservice.updateNews();
            },
            getContentsInfo : function(busscustomerservice) {
                return busscustomerservice.getContentsInfo();
            }
         }
        })

    
         // 轮播图列表
         .state('app.newsrollinglist', {
         url: '/newsrollinglist/:id',
         controller : 'newsrollinglist',
         template: require('./views/newsrollinglist.html'),
         resolve:{
            findNewsRollinginfolist : function(busscustomerservice){
                 return busscustomerservice.findNewsRollinginfolist();
            },
            delNewsPhoto : function(busscustomerservice){
                 return busscustomerservice.delNewsPhoto();
            }

         }
        })

         // 添加轮播图
         .state('app.addnewsrolling', {
         url: '/addnewsrolling/:id',
         controller : 'addnewsrolling',
         template: require('./views/addnewsrolling.html'),
         resolve:{
            saveNewsPhoto : function(busscustomerservice){
                 return busscustomerservice.saveNewsPhoto();
            },
            getNewsRollingInfoById : function(busscustomerservice){
                 return busscustomerservice.getNewsRollingInfoById();
            },
            updateRolling : function(busscustomerservice){
                 return busscustomerservice.updateRolling();
            }

         }
        })

         // 杀价帮活动列表
         .state('app.bargainlist', {
         url: '/bargainlist/:id',
         controller : 'bargainlist',
         template: require('./views/bargainlist.html'),
         resolve:{
            findManageActiveList : function(busscustomerservice){
                 return busscustomerservice.findManageActiveList();
            },
            getDate : function(utilservice){
                     return utilservice.getDate;
            },
            findCheckActiveList : function(busscustomerservice){
                     return busscustomerservice.findCheckActiveList();
            },
            updateActiveStart : function(busscustomerservice){
                     return busscustomerservice.updateActiveStart();
            },
            updateActiveEnd : function(busscustomerservice){
                     return busscustomerservice.updateActiveEnd();
            },
            str2date : function(utilservice){
                return utilservice.str2date;
            },
            date2str : function(utilservice) {
                return utilservice.date2str;
            }

         }
        })

         // 参与用户列表
         .state('app.bargainuser', {
         url: '/bargainuser/:id',
         controller : 'bargainuser',
         template: require('./views/bargainuser.html'),
         resolve:{
            findJoinUserList : function(busscustomerservice){
                 return busscustomerservice.findJoinUserList();
            },
            getJoinUser : function(busscustomerservice){
                 return busscustomerservice.getJoinUser();
            }


         }
        })

         // 中奖用户列表
         .state('app.winuser', {
         url: '/winuser/:id',
         controller : 'winuser',
         template: require('./views/winuser.html'),
         resolve:{
            findWinPrizeUserList : function(busscustomerservice){
                 return busscustomerservice.findWinPrizeUserList();
            },
            getWinPrizeUser : function(busscustomerservice){
                 return busscustomerservice.getWinPrizeUser();
            },
            getWinPrizeUser : function(busscustomerservice) {
                return busscustomerservice.getWinPrizeUser();
            }

         }
        })

         // 创建活动
         .state('app.creatbargain', {
         url: '/creatbargain/:id',
         controller : 'creatbargain',
         template: require('./views/creatbargain.html'),
         resolve:{
            getDate : function(utilservice){
                     return utilservice.getDate;
            },
            saveActive : function (busscustomerservice) {
                return busscustomerservice.saveActive();
            },
            getActiveInfo : function(busscustomerservice) {
                return busscustomerservice.getActiveInfo();
            },
            updateActiveInfo :function(busscustomerservice) {
                return busscustomerservice.updateActiveInfo();
            }
            ,
            str2date : function(utilservice){
                return utilservice.str2date;
            },
            date2str : function(utilservice) {
                return utilservice.date2str;
            }

         }
        })

         // 奖品列表
         .state('app.prizelist', {
         url: '/prizelist/:id',
         controller : 'prizelist',
         template: require('./views/prizelist.html'),
         resolve:{
            findPrizeList : function(busscustomerservice){
                     return busscustomerservice.findPrizeList();
            },
            savePrize : function(busscustomerservice){
                     return busscustomerservice.savePrize();
            },
            updateDel : function(busscustomerservice){
                     return busscustomerservice.updateDel();
            },
            getPrize : function(busscustomerservice) {
                return busscustomerservice.getPrize();
            },
            updatePrize : function(busscustomerservice) {
                return busscustomerservice.updatePrize();
            },
            salelist : function(busscustomerservice) {
                return busscustomerservice.salelist();
            }


         }
        })

         // 添加奖品
         .state('app.addprize', {
         url: '/addprize/:id/:prizeId',
         controller : 'addprize',
         template: require('./views/addprize.html'),
         resolve:{
            // salelist : function(busscustomerservice){
            //          return busscustomerservice.salelist;
            // }

         }
        })

        // 广告列表
         .state('app.adlist', {
         url: '/adlist/:id',
         controller : 'adlist',
         template: require('./views/adlist.html'),
         resolve:{
            findViewList : function(busscustomerservice){
                     return busscustomerservice.findViewList();
            },
            deletead : function(busscustomerservice){
                     return busscustomerservice.deletead();
            }

         }
        })
         // 添加广告
         .state('app.addad', {
         url: '/addad/:ad_id',
         controller : 'addad',
         template: require('./views/addad.html'),
         resolve:{
            saveAd : function(busscustomerservice){
                     return busscustomerservice.saveAd();
            },
            getViewInfoById : function(busscustomerservice){
                     return busscustomerservice.getViewInfoById();
            },
            updateView : function(busscustomerservice){
                     return busscustomerservice.updateView();
            }


         }
        })

         // 景区管理
         .state('app.scenic', {
         url: '/scenic/:id',
         controller : 'scenic',
         template: require('./views/scenic.html'),
         resolve:{
            // saveAd : function(busscustomerservice){
            //          return busscustomerservice.saveAd();
            // }

         }
        })

        // 热搜列表
         .state('app.hotsearch', {
         url: '/hotsearch/:id',
         controller : 'hotsearch',
         template: require('./views/hotsearch.html'),
         resolve:{
            findHotSearchList : function(busscustomerservice){
                     return busscustomerservice.findHotSearchList();
            },
            deleteHotSearch : function(busscustomerservice){
                     return busscustomerservice.deleteHotSearch();
            },
            saveHotSearch : function(busscustomerservice){
                     return busscustomerservice.saveHotSearch();
            },
            getHotSearchById : function(busscustomerservice){
                return busscustomerservice.getHotSearchById();
            },
            updateHotSearch : function(busscustomerservice){
                return busscustomerservice.updateHotSearch();
            }

         }
        })

        // 编辑热搜
         .state('app.addhotsearch', {
         url: '/addhotsearch/:id',
         controller : 'addhotsearch',
         template: require('./views/addhotsearch.html'),
         resolve:{
            
         }
        })

        //数据字典列表
        .state('app.dictionary_managed',{
            url: '/dictionary_managed',
            controller : 'dictionary_managed',
            template: require('./views/dictionary_managed.html'),
            resolve:{
                findtradetypelist : function(busscustomerservice){
                    return busscustomerservice.findtradetypelist();
                },
                deldictionary : function(busscustomerservice){
                    return busscustomerservice.deldictionary();
                },
                findTypeList : function(busscustomerservice){
                    return busscustomerservice.findTypeList();
                }
            }
        })

        //添加/修改数据字典
        .state('app.dictionaryinfo',{
            url: '/dictionaryinfo/:id',
            controller : 'dictionaryinfo',
            template: require('./views/dictionaryinfo.html'),
            resolve:{
                dictionary : function(busscustomerservice){
                    return busscustomerservice.dictionary();
                },
                getInfoById : function(busscustomerservice){
                    return busscustomerservice.getInfoById();
                },
                findTypeList : function(busscustomerservice){
                    return busscustomerservice.findTypeList();
                }
            }
        })

        //商家发布的可预约产品列表
        // .state('app.appointmentlist',{
        //     url: '/appointmentlist/:id',
        //     controller : 'appointmentlist',
        //     template: require('./views/appointmentlist.html'),
        //     resolve:{
        //         findMakeAppointmentList : function(busscustomerservice){
        //             return busscustomerservice.findMakeAppointmentList();
        //         },
        //         insertMakeAppointment : function(busscustomerservice){
        //             return busscustomerservice.insertMakeAppointment();
        //         },
        //         updateMakeAppointment : function(busscustomerservice){
        //             return busscustomerservice.updateMakeAppointment();
        //         },
        //         getMakeAppointmentById : function(busscustomerservice){
        //             return busscustomerservice.getMakeAppointmentById();
        //         },
        //         delMakeAppointment : function(busscustomerservice){
        //             return busscustomerservice.delMakeAppointment();
        //         },
        //         ticketlist : function(busscustomerservice){
        //             return busscustomerservice.ticketlist();
        //         },
        //         salelist : function(busscustomerservice){
        //             return busscustomerservice.salelist();
        //         },
        //         getDate : function(utilservice){
        //         	 return utilservice.getDate;
        //         },
        //         str2date : function(utilservice){
        //         return utilservice.str2date;
        //         },
        //         date2str : function(utilservice) {
        //             return utilservice.date2str;
        //         }
                
        //     }
        // })

        // //商家设置预约
        // .state('app.setappointment',{
        //     url: '/setappointment/:id',
        //     controller : 'setappointment',
        //     template: require('./views/setappointment.html'),
        //     resolve:{
        //         // dictionary : function(busscustomerservice){
        //         //     return busscustomerservice.dictionary();
        //         // },
        //         // getInfoById : function(busscustomerservice){
        //         //     return busscustomerservice.getInfoById();
        //         // },
        //         // findTypeList : function(busscustomerservice){
        //         //     return busscustomerservice.findTypeList();
        //         // }
        //     }
        // })

        //预约人列表
        // .state('app.customerlist',{
        //     url: '/customerlist/:id',
        //     controller : 'customerlist',
        //     template: require('./views/customerlist.html'),
        //     resolve:{
        //         findUserInfoList : function(busscustomerservice){
        //             return busscustomerservice.findUserInfoList();
        //         }
        //     }
        // })

        //添加商客账户管理
        .state('app.addskaccount',{
            url: '/addskaccount',
            controller : 'addskaccount',
            template: require('./views/addskaccount.html'),
            resolve:{
                mechanism : function(accountservice){
                return accountservice.mechanism();
                },
                create : function(accountservice){
                    return accountservice.create();
                },
                list : function(accountservice){
                    return accountservice.list();
                },
                role : function(accountservice){
                    return accountservice.role();
                },
                info : function(accountservice){
                    return accountservice.info();
                },
                createmechanism : function(accountservice){
                    return accountservice.createmechanism();
                },
                createdeposit : function(depositservice){
                    return depositservice.create();
                }
            }
        })

        .state('app.skorderbacklist', {
        url: '/skorderbacklist',
        controller : 'skorderbacklist',
        template: require('./views/skorderbacklist.html'),
        resolve:{
            orderbacklist : function(custservice){
                return custservice.orderbacklist();
            },
            orderback : function(custservice){
                return custservice.orderback();
            },
            dictbytypelist : function(productservice){
                return productservice.dictbytypelist;
            }
        }
      })

      .state('app.withdrawalslist', {
        url: '/withdrawalslist',
        controller : 'withdrawalslist',
        template: require('./views/withdrawalslist.html'),
        resolve:{
            findOrdertTXList : function(busscustomerservice){
                return busscustomerservice.findOrdertTXList();
            },
            updateTiXian : function(busscustomerservice){
                return busscustomerservice.updateTiXian();
            }
            // dictbytypelist : function(productservice){
            //     return productservice.dictbytypelist;
            // }
        }
      })
      // 资讯管理
      .state('app.informationlist', {
        url: '/informationlist',
        controller : 'informationlist',
        template: require('./views/informationlist.html'),
        resolve:{
            findInformationList : function(busscustomerservice){
                return busscustomerservice.findInformationList();
            },          
            delinformation : function(busscustomerservice){
                return busscustomerservice.delinformation();
            }
            
        }
      })

      .state('app.addinformation', {
        url: '/addinformation/:id',
        controller : 'addinformation',
        template: require('./views/addinformation.html'),
        resolve:{
            saveInformation : function(busscustomerservice){
                return busscustomerservice.saveInformation();
            },
            getInformation : function(busscustomerservice){
                return busscustomerservice.getInformation();
            },
            updateinformation : function(busscustomerservice){
                return busscustomerservice.updateinformation();
            },
            getDate : function(utilservice){
                	 return utilservice.getDate;
            },
            str2date : function(utilservice){
            return utilservice.str2date;
            },
            date2str : function(utilservice) {
                return utilservice.date2str;
            }

        }
      })

      .state('app.integralrecharge', {
        url: '/integralrecharge',
        controller : 'integralrecharge',
        template: require('./views/integralrecharge.html'),
        resolve:{
            getUserInfoList : function(busscustomerservice){
                return busscustomerservice.getUserInfoList();
            },
            saveRechargeIntegral : function(busscustomerservice){
                return busscustomerservice.saveRechargeIntegral();
            }
            
        }
      })


      //平台分配一级下发展的二级最大人数
      .state('app.maxpeople', {
        url: '/maxpeople/:id',
        controller : 'maxpeople',
        template: require('./views/maxpeople.html'),
        resolve:{
            classAList : function(busscustomerservice){
                return busscustomerservice.classAList();
            },
            saveLimit : function(busscustomerservice){
                return busscustomerservice.saveLimit();
            },
            getlimit : function(busscustomerservice){
                return busscustomerservice.getlimit();
            }
        }
      })


        
 
}
module.exports = router;
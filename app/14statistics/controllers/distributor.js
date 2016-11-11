module.exports = function($scope, orderstatisticscompanyhistorylist, getDate, talist){

    var tadata = {'00c7c35883514497ab97f5a74fac5764':{'name':'凤城市鸿运谷漂流景区','code':'J0025'},'00f0de685e7945fcb215d346697e2842':{'name':'芭比来艾鑫','code':'LA00132'},'0101437616044f4cafeb3b870b591389':{'name':'小汐','code':'LA00240'},'03fa1fa683974d029c3ab588f07225a2':{'name':'艾奇旅游网王德欣','code':'LA00152'},'0443aefa4db043718dede521b72725e4':{'name':'名流总部 安然','code':'LA00245'},'05770d26acb74a5e970fc081e1eaaad6':{'name':'冀丹丹','code':'LA00295'},'059baef037ae4ab9ba4a78900f6107a0':{'name':'秋冬套票02','code':'LA00229'},'05d54e679a1b4db0a2490a141c9d6a5e':{'name':'dlq测试用旅行社','code':'lxs020'},'0647d6d874bc4da3b3a91d608a47cf00':{'name':'李朝莹','code':'LA00239'},'074a6c1fc3c04ab487623793413bfa72':{'name':'故宫旅行社康海龙','code':'LA00101'},'08a3f9e9342e4d2f9b09ba55a587865d':{'name':'居游测试旅行社','code':'L0001'},'09032ca1b8864462b053f79947bf873f':{'name':'综合部','code':'T1'},'0995d755fcd94ec4a9274a3d2cbca806':{'name':'枫林谷刘翔','code':'LA00208'},'09effbd3d0f145b48da2ec4832599764':{'name':'海洋之旅 陈洋','code':'LA00074'},'0a14ffe29f584cfe97278346b5ad8cc7':{'name':'907','code':'LA00218'},'0a96c363e46b45a0b42ebda978212966':{'name':'沈阳晚报04','code':'LA00343'},'0b2b014164a54cbaa6abc05b14798df1':{'name':'沈阳银狐旅行社有限公司','code':'L0038'},'0b2c5a10f8be43578a18723db7b96761':{'name':'盘锦旅行社 林汉','code':'LA00052'},'0c26c48bd1f54794923f4b3828962ca0':{'name':'妈妈网影子15040200850','code':'LA00256'},'0cd168cef6354676beb4b829f5cd3b3a':{'name':'张晨','code':'LA00249'},'0d1ee099ff674c8f8171343f59e1ded0':{'name':'锦州九洲旅行社杜菁13840688799','code':'LA00196'},'0d2a6d979dc544c9bf8fc0f63aa316af':{'name':'瑞驰旅行社','code':'LA00005'},'0d754f378e9242fbaf87054405a0330d':{'name':'辽宁海内外国际旅行社张文忠15940127505','code':'LA00205'},'0e17f040d8f540d3b7d626a2a4d12845':{'name':'国宾旅行社徐建科','code':'LA00116'},'0f0718bb017846b3b3ac7ba5a628b80f':{'name':'mm','code':'LA00269'},'0f36054859154813a34873a1eebc6fbd':{'name':'丹东天隆国旅','code':'LA00180'},'0f4b76014de045158aa81b828773eea6':{'name':'乐游天下 王浩','code':'LA00029'},'0f74212accda444ab018a6856e865855':{'name':'0级测试1','code':'SK9001'},'0f9c609a01bd439a9f43ca9505eb933f':{'name':'辽宁神州','code':'LA00234'},'1':{'name':'陕西省总公司','code':'100000'},'10':{'name':'市场部','code':'200003'},'11':{'name':'技术部','code':'200004'},'1145fe24fdc447f09f20c13587e03b29':{'name':'五谷1','code':'LA00281'},'1167a4417c0a491f9630e4117b3bade9':{'name':'中国国旅（辽宁）国际旅行社','code':'lxs006'},'11a1458a41364f2c81d28d1d37c1242b':{'name':'夏宁','code':'LA00306'},'11f37eeb66ae4154bfbd0087557f74e5':{'name':'沈阳战友旅行社','code':'LA00009'},'12':{'name':'市辖区分公司','code':'201000'},'1215946ed0a0407fb103e2cc20e03543':{'name':'格林天沐温泉','code':'J0022'},'1260790bd9234d039807c0e8fb46fda9':{'name':'美联假期','code':'LA00167'},'13':{'name':'公司领导','code':'201001'},'14':{'name':'综合部','code':'201002'},'14f57bf523ca4159b00c62f54c61be91':{'name':'大连鑫程旅行社','code':'LA00200'},'15':{'name':'市场部','code':'201003'},'154f7d03aee94de5a824152d3f8dc921':{'name':'艾鑫','code':'LA00370'},'15e2e0ba193d4609880c6cf5ea9152f2':{'name':'光大爱游天下','code':'LA00082'},'16':{'name':'技术部','code':'201004'},'16cd6bbb137f4460b240db7c373822d8':{'name':'辽宁天马国际旅行社 李敏','code':'LA00022'},'17':{'name':'新城区分公司','code':'201020'},'17b701e7d59846c88cca7009053bdda6':{'name':'五谷1','code':'LA00279'},'18':{'name':'公司领导','code':'201021'},'186646b7817e442a8c514917b12b1168':{'name':'四象 张旭','code':'LA00062'},'19':{'name':'综合部','code':'201022'},'190cebbd841443e4b18d0a852c2713df':{'name':'商客-测试1','code':'LA00325'},'198d05951a0344308b4e80e03e1b302a':{'name':'铁道青年 丁颖','code':'LA00063'},'19b39900eae949ea9b6b8d21baf78b40':{'name':'北国铁岭01','code':'LA00327'},'1b61816dcd9b480e8289bee77099816d':{'name':'畅游旅行社刘晓玲','code':'LA00128'},'1bfa0ebd3fac4e7bba22e723472cb387':{'name':'易飞国际旅行社','code':'LA00151'},'1c02ce2f8801486f88bd747ff9a41c14':{'name':'乐途联盟','code':'L0009'},'1c055e921e9b47c4a353ab2687b9ff2c':{'name':'光大总部','code':'LA00067'},'1cfa29cd7c8041889b0fbf8db0220124':{'name':'沈阳华夏银行','code':'HXYHJG'},'1d14105385ea4dd9b13c8446e7fcf4e0':{'name':'票付通虚拟旅行社','code':'L0099'},'1d3aef4554eb4d55a7f60ba572e59bfa':{'name':'瑞驰旅行社','code':'LA00008'},'1d4810345faa407fb29b538f15823cbb':{'name':'莲泉湾刘元元','code':'LA00158'},'1e2419c5f9b6402d9d35069aa237f26f':{'name':'赵宇','code':'LA00317'},'1ecadb81c5ea437c8c654b54ad6a7d01':{'name':'和平国旅孙婉华','code':'LA00105'},'1f35aa4041ee48669e1f9e72d11e29e0':{'name':'国旅静','code':'LA00259'},'2':{'name':'公司领导1','code':'100001'},'20':{'name':'市场部','code':'201023'},'2010afda4f3548969978a9e7985d1a75':{'name':'和平国旅 张永生','code':'LA00020'},'206c493742d7427699baa0c0325f279a':{'name':'天津测试学校','code':'003'},'20d1e2d586b74a1f9b02687782b66970':{'name':'铁岭莲花湿地景区','code':'J0071'},'21':{'name':'技术部','code':'201024'},'22':{'name':'未央区分公司','code':'201010'},'22248231356446b7a31abf0a219e1afd':{'name':'大运通大石桥分公司任玲13704172277','code':'LA00203'},'223e24f1da0a4a0ab2161ded48c9549f':{'name':'宝石花旅行社总社','code':'LA00060'},'22bc6762a7724f2f97fa5942b441a4ed':{'name':'本溪绿洲 张贺','code':'LA00030'},'23':{'name':'公司领导','code':'201011'},'235b0e4394554933a6a4effca14855d1':{'name':'大连张晓琳15241120717','code':'LA00197'},'23645549280044349a7e89e974d05ca8':{'name':'宝','code':'LA00263'},'24':{'name':'综合部','code':'201012'},'25':{'name':'市场部','code':'201013'},'253a42b39e6a40b29e929982b6f55ce1':{'name':'瑞驰国际旅行社新民营业部','code':'LA00304'},'25689f8aaf6d4f0387278afb3fde74a2':{'name':'沈阳森林动物园','code':'J0012'},'25decc36f3934d7a93fe4590811858d3':{'name':'沈阳国旅加盟','code':'LA00017'},'25f1d40024944552819b637f025bffc8':{'name':'锦绣江山电子商务工作室','code':'LA00182'},'26':{'name':'技术部','code':'201014'},'26701ddcde904f068ef47e0d654b97f6':{'name':'907','code':'LA00219'},'2683c729a29b4a9a9489042b3cde8813':{'name':'五谷1','code':'LA00271'},'276d7ec0bcf14a91b0a34fe06cc8fc0b':{'name':'飞扬国旅吴佳倪','code':'LA00250'},'2785e6f96cdc461dac1cb3be6160be93':{'name':'沈阳教育','code':'lxs015'},'28afd02f9d90409f90a456cb11fdfea3':{'name':'电商中心','code':'LA00048'},'28b57aec952a4aed84a61f85722ffd9c':{'name':'沈阳铁道国际旅行社','code':'L0049'},'295f72613d4743d199a0e09a8673d542':{'name':'网络部崔佳佳','code':'LA00321'},'2960d38fdfba4d7a8ea291a612bdd568':{'name':'锦州九州旅行社北镇分公司','code':'LA00127'},'29df7bda5c8d440fb2897d0adc5d2935':{'name':'方浩','code':'LA00291'},'29e5eb9bc12d4432ab6d68ccf2a96040':{'name':'行政中心','code':'LA00050'},'2a7bb5b908394c269ed88e82746a6cbf':{'name':'中国国旅 郭静','code':'LA00070'},'2abb49ff51c040bbaa94527daf34e811':{'name':'辽宁大运通国际旅行社','code':'L0047'},'2b39c68cd3a04e4cb654d9fda3906236':{'name':'北国石坚','code':'LA00129'},'2bc8883dbfe84d77b8de7809a950f672':{'name':'山好旅行社','code':'L0016'},'2c4c0432ec7240618d49af861c280302':{'name':'沈阳紫烟薰衣草景区','code':'J0038'},'2d1eabb36f3f4de3a80827676ba6af52':{'name':'中旅中街店姜越','code':'LA00366'},'2e1549b8117249a58261ee7e14e97477':{'name':'金佰瀚宾馆','code':'LA00137'},'2e3bf9c73fc04c378aa3164f848f11c0':{'name':'满妃','code':'LA00322'},'2ea44857dc844a18a943a623d789be08':{'name':'沈阳名流旅行社','code':'L0004'},'2fc9b6d4bb444940bb83a36db5f9fc03':{'name':'辽宁省中国青年旅行社','code':'L0015'},'2ff522ced8114d2fa4c4398247686fe9':{'name':'导游王东18842798166','code':'LA00148'},'2ff75a5ecd894bc2840c334b7c2c183e':{'name':'综合部','code':'T2'},'3':{'name':'综合部','code':'100002'},'3120085701614bbba64eeddc00da71b2':{'name':'L9003测试1级1','code':'LA00362'},'326338706d5b4d688f7fcf9778e42812':{'name':'大连万象旅行社','code':'LA00162'},'328b7767e1f84c94a8bbce32ada01a32':{'name':'怪堡 刘仁豪','code':'LA00040'},'3315c32cf4294b7ab4a5e66cbc9d037a':{'name':'友好旅行社','code':'LA00231'},'333c428d3606457b9776c663e5a05c18':{'name':'沈阳市植物园','code':'J0011'},'3347e829ae2147c2a5ad1c11d66a7dd3':{'name':'辽宁和平国际旅行社','code':'LA00076'},'33545cd5733b492db01f7857b1d4d1a2':{'name':'五谷1','code':'LA00274'},'34abc26310d647629b900e12c881e78d':{'name':'沈阳客运天天旅行社','code':'L0032'},'34c55cdbd79b4c09b334abbf20823994':{'name':'辽宁世纪国际旅行社','code':'lxs011'},'35683d743fd7409587e52c3e0714816c':{'name':'方浩','code':'LA00347'},'356f043c39784ff1bc558a0546ae2ec3':{'name':'大连欣游国际旅行社有限公司 赵鹏程','code':'LA00193'},'358b9fd9b85a4ab895d97c6012854e7b':{'name':'聚游宝','code':'LA00061'},'35d7d825b510431b98c3209bb4296da0':{'name':'野三坡 张跃','code':'LA00033'},'362639fe0dce4e3a85db4bee6449e995':{'name':'欣姐','code':'LA00294'},'378cd71e0a9d437b9ffca80620c56ca5':{'name':'锦州风光旅行社 古塔营业部 13700069627','code':'LA00308'},'37af9038214c48acbf68a1f819f1edd5':{'name':'辽宁中辽国际旅行社','code':'lxs009'},'383e3b7aae634b7587d148db37b06dfe':{'name':'辽宁神洲国际旅行社','code':'L0005'},'3857551c63184adbb8ed0adcefd2e56a':{'name':'辽宁和平国际旅行社中华路营业部 艾鑫','code':'LA00221'},'38f1313eb1dd44479a0e7441d806d98a':{'name':'123','code':'LA00202'},'39ace7b98b814d259ea7b29bcebf45c0':{'name':'光大乐逸之旅','code':'LA00085'},'3a606ab9343c4d71ab0a7ea10e42f540':{'name':'沈阳远洋旅行社有限公司','code':'L0045'},'3b04733db70041aa90eb42045cda2446':{'name':'沈阳建业国际旅行社有限公司','code':'L0037'},'3bd238c15c2945a5b5e513ff02f35234':{'name':'新城子秦阳','code':'LA00372'},'3bfbcf7732434329a86db46e211dfeb6':{'name':'xx','code':'LA00201'},'3c255bd606fe413786191f5567af5e10':{'name':'石坚18240491166','code':'LA00206'},'3d932d487a1b4c08b771d5a9f57a9caf':{'name':'杜书言','code':'LA00371'},'3e8628bc394747e797f1b2c8d0853406':{'name':'李高扬','code':'LA00345'},'3eb566f219244ab085641edfadb8cd12':{'name':'555','code':'LA00004'},'3f907fc783ab48469db1da7494b268f2':{'name':'测试同业一','code':'LA00001'},'3fdb7fcb864042d0b3bd633bca10f8ed':{'name':'刘刚新号','code':'LA00288'},'4':{'name':'市场部','code':'100003'},'405b14f162584e398f65ee393bfb2a9b':{'name':'沈阳第一漂流门票','code':'J0045'},'41368e6685f5497697cb3e954b7e6621':{'name':'沐霖假期 张薇','code':'LA00041'},'41536a92d1b74888b201d80ed48fece0':{'name':'北陵公园','code':'J0063'},'415456531c5e4b078a1d67a1acc30a79':{'name':'盘锦东方国际旅行社姜蓉蓉18404186333','code':'LA00179'},'41aaf157b49440c187993a58009ff2d6':{'name':'沈报国旅 杨军','code':'LA00214'},'420dd99df0fa45df924b2396cc8cbbdb':{'name':'沈阳晚报01','code':'LA00337'},'42d9d088632b40f09435d0c45262704b':{'name':'名流总部-姜海峰','code':'LA00236'},'434850715b3d40e08128c3ea136c17d4':{'name':'盘锦恋夏国际旅行社田家汇美分公司','code':'LA00143'},'443f89ef6af845c19effdd6c494150c6':{'name':'客服中心','code':'LA00047'},'447091a166cb43779beac67f57def06d':{'name':'名流苏家屯程学斌15942019356','code':'LA00192'},'44b8b4b5513b4c79b269b70faf93902c':{'name':'乐享旅行票务 李惠兰','code':'LA00056'},'461906ce820e407eab8ce523df285f1a':{'name':'五谷1','code':'LA00273'},'461ad448c9d84fa1b658af3dbb37a430':{'name':'meland','code':'LA00283'},'46358cd31b8946a4a18522ed7783e0b4':{'name':'郭滢','code':'LA00112'},'46bacf347f334baa9590a7f41247071a':{'name':'聚游宝','code':'LA00037'},'47a7c5ae83a2473db1f3088647806b6d':{'name':'望天洞景区','code':'J0040'},'47d864f3ddf84a2895c7431d30dd44af':{'name':'北戴河自助游 张春文','code':'LA00032'},'48bc034b56c7447d9452629dc92ca2fd':{'name':'沈阳瑞驰旅行社','code':'L0012'},'48d6b445057f4b7abd28ab9d729e06a9':{'name':'沈阳战友旅行社有限公司','code':'L0042'},'49067b71024845589235735128305d5f':{'name':'金飞马旅行社','code':'LA00307'},'490ed3f3ae684c2193510bde34986a6e':{'name':'中旅谭芙美','code':'LA00100'},'49126152023040f7bd8a36fe2823fc8a':{'name':'辽宁康辉国际旅行社','code':'L0007'},'492c16c9885947d5ae9f5cb5a234957f':{'name':'10004','code':'LA00334'},'4a134d7e598a4a0298b3cace67c4a61a':{'name':'个人 宿伯强','code':'LA00068'},'4a42dd7e768b4daaa6f2a29cce8c40dd':{'name':'张文思','code':'LA00316'},'4aa534400bf9471eae033d1d0e118f3b':{'name':'全键基地水乐园','code':'J0072'},'4bd85ca0744340e18e742a74182f9a07':{'name':'辽宁和平国旅逍遥行','code':'LA00080'},'4c23dbe7b1ee41408e54d67ebebe48e3':{'name':'沈安国际旅行社','code':'LA00181'},'4ce08735d4fa49e995c3a533f6bca490':{'name':'10003','code':'LA00333'},'4e00d62dc5d74ae08fb47bca7193066e':{'name':'沈阳青旅加管中心','code':'LA00313'},'4ea616ce212b4581869818b343b0cbcb':{'name':'zy','code':'LA00260'},'4f4dd34bbbab48c9976b913fe5053956':{'name':'奇迹之旅齐齐','code':'LA00251'},'4fe4d6e2996447228752cc2a296d6c51':{'name':'meland','code':'LA00282'},'5':{'name':'技术部','code':'100004'},'5063045ac7444e6287c423f585deaa40':{'name':'沈阳市怪坡风景区','code':'J0033'},'523a7856c7c840b5b1b868d923d7a8bb':{'name':'沈阳虎跃旅行社','code':'L0020'},'5243f5b5f25046c68e93d14107c0bd22':{'name':'好运旅行社李娜','code':'LA00089'},'52633603c3f14a3c908a943ec17bd756':{'name':'铁岭御龙花海漂流','code':'J0044'},'52bf90bb7811417994084ea0c09270f6':{'name':'盘锦春天分社大商店','code':'LA00166'},'53243b2acbf1484796ec70e79e0a9b49':{'name':'沈阳国旅 彬彬','code':'LA00045'},'55530cfcb0f04f6c86df42636fa4961d':{'name':'五谷1','code':'LA00278'},'556f1e6be644463e85d29ba42dcd8b39':{'name':'要出发网站 曲妍','code':'LA00043'},'558362d9eb4848ed96e9096b6c94f44e':{'name':'白媛媛','code':'LA00311'},'55b8a6fedc1b4ca5a720e4e7061b4a38':{'name':'10001','code':'LA00329'},'5694f9ca93654f6d9783357ec18956e6':{'name':'票付通虚拟旅行社子账号测试2','code':'LA00154'},'570d0bf5b12a4029b34b9dd958b313cd':{'name':'lll','code':'LA00007'},'58b985f9b21a4ad5a705912523f80971':{'name':'80001','code':'LA00328'},'5915f846bb544c4b8c68c23137d7b37f':{'name':'旅游咨询','code':'LA00318'},'596a818464ab4e95ad6780ab1f67585c':{'name':'神洲二','code':'LA00013'},'59ca0cb823ba466d9d068617af48085b':{'name':'沈阳晚报02','code':'LA00338'},'5a5b5438436240c2b60f2873e873dab3':{'name':'丹东花脖山风景区','code':'J0018'},'5a5ea0534e7d4d2aad6dba3390a5e4c4':{'name':'印象假日 亭子','code':'LA00028'},'5a68eddd72c2487eb67567747b750199':{'name':'五谷1','code':'LA00276'},'5a8727fa25c64cd79d8c6075ac505182':{'name':'虎跃旅游','code':'LA00350'},'5b6a0469e82a4acebdab929fadcc59d2':{'name':'L9002的1级测试2','code':'LA00368'},'5b96be17b46c4c3ea9f92c26e19755b6':{'name':'票付通自营','code':'LA00199'},'5c140f1c571b436ba9b5aa8cb31cdfb2':{'name':'瑞驰道义分社','code':'LA00006'},'5c99ab501c154d51b44994f7ea8652be':{'name':'沈阳晚报03','code':'LA00342'},'5ccf85e932cd41d8af04117869ddacf9':{'name':'盘锦天沐温泉','code':'J0059'},'5d74bea82ae44b1e87623a29de04c491':{'name':'中国旅行社 孙彬','code':'LA00031'},'5da23e4fef764628b7bd82b38ea265a5':{'name':'test4','code':'L9998'},'5e567e30e69742a6a9d242eb9eefd6f7':{'name':'云思阳','code':'LA00247'},'5e64fc076de14356a955e37f247bcb0c':{'name':'建业卉馨假期','code':'LA00106'},'5efd577e445d442fb62c0c8eee258738':{'name':'姜云龙','code':'L0030'},'5f5936d3da4b4243b8c392598990f2b0':{'name':'亚泰城销售店 毕秋玲','code':'LA00036'},'6':{'name':'研发部','code':'100005'},'611b6b9a551d417b8610a59c326ea293':{'name':'去哪儿虚拟旅行社','code':'L8001'},'616b2535cdc543c293f07f18a7909440':{'name':'黄金假期陈昕','code':'LA00103'},'6178b98ca42a4190a4b784a739acef5f':{'name':'旅行社平台','code':'T3'},'623a7ec6f5834bf6a36b3dfaafb854a6':{'name':'天华之旅 小郭','code':'LA00220'},'6333da93b8be4308a33696ca8be5e9c9':{'name':'联动旅游王坤','code':'LA00144'},'633b8d06917b4813ad485f6247905610':{'name':'录入错误','code':'L9999'},'63d4541a7acb43149e06e9d01ec8e691':{'name':'签证中心','code':'LA00049'},'64cc23a8ca2c4c309b2c1aa2477e1845':{'name':'中旅总社（辽宁）于洁18604217291','code':'LA00302'},'64f44e8226724214a6b2771fefe4c53c':{'name':'测试一级商客','code':'LA00292'},'6550d06452cb4564b12a563a9a96e896':{'name':'玲珑居游卡','code':'LA00303'},'666793871fe44a11a06411bc6fa5c08d':{'name':'寇金','code':'LA00161'},'66f31aa8c61c44a4b2b8b7400e9d270e':{'name':'贾景强','code':'LA00252'},'6707534899fb4c96b1849148487e0e70':{'name':'L9003测试1级','code':'LA00356'},'670b1fafa4d543648ac639236e25ee3a':{'name':'要出发周边游 张鹏','code':'LA00216'},'679f48fac14a4a409645236b1ad6179f':{'name':'辽宁世纪国际旅行社','code':'lxs328'},'680fe2817d3946dd9eb0965151e94c23':{'name':'沈阳名流总部','code':'LA00233'},'69162b4d484f4bdebaed95e901f15017':{'name':'美好时光','code':'lxs017'},'69851a5f91eb4de8900235c5e7413eb2':{'name':'10006','code':'LA00336'},'69dfdf36d897449380b95a1c8ecfc54c':{'name':'抚顺金虹旅行社','code':'L0011'},'6a2b44a81867472e8c202f347482b3d7':{'name':'黄玥','code':'LA00159'},'6a88fefde7ea4fec842df40b2fc33561':{'name':'大浪淘沙','code':'LA00349'},'6a9c9fe901984065a287b26d6569d6a1':{'name':'周哥','code':'LA00268'},'6af3f29c71d84255b076acacf6b029b9':{'name':'haha2','code':'LA00364'},'6b529a67e01e48e08eeffac443f0b9fb':{'name':'居游测试景区','code':'J0010'},'6bca91d2bad04beeabcd031c2aa8a383':{'name':'满天星户外主题乐园','code':'J0055'},'6bf4dfe444cd40f589eab582beded4b8':{'name':'大连鑫程商务旅行社 唐文静','code':'LA00077'},'6c78e9f4e86147ed99fb7f12ac602cb0':{'name':'北国铁岭','code':'LA00326'},'6cb6e9a5dad14c0ab17f38fcc8c31ee5':{'name':'中旅谭芙美','code':'LA00099'},'6d65914da5e74476b935e9d10b0ce225':{'name':'沈阳故宫旅行社有限公司','code':'L0040'},'6d6a75aac2de4f49bd2e1a2d2e20dc29':{'name':'校务部','code':'0041'},'6dcc75446b5341c9a3a39e54da4d0ff7':{'name':'辽阳盛通旅行社 冯','code':'LA00207'},'6ea8f5981c5246c898d0856a95fd4f3a':{'name':'铁岭','code':'LA00296'},'7':{'name':'西安市分公司','code':'200000'},'701b236bce564c42831a3621c55490d0':{'name':'领航旅行社领航之旅','code':'LA00083'},'70edde20416746ab9a4ef7a446601b58':{'name':'北汤温泉','code':'J0093'},'71873ddcf5824f1d8656784198a3227b':{'name':'haha1','code':'LA00363'},'71a81cbd57b448bf8d36dafaf9a19e17':{'name':'盘锦红海湿地温泉乐园','code':'J0058'},'71d800505b0f4561871b5d5355f87546':{'name':'盘锦路路通旅行社','code':'LA00209'},'7284abeb2dcf40f29350d7bb615dc063':{'name':'仟睿达温泉水世界','code':'J0009'},'7351fa707a9c4b0698ce2e5a55f65531':{'name':'刘刚','code':'LA00287'},'73ae5e916f914d398aa3a80c348ce5e4':{'name':'虎石台范范','code':'LA00298'},'73d293220a9d4e6e9852a9f8b2c592e4':{'name':'名游网','code':'lxs012'},'74d9313f62d343e1ba5ec7e177ab7e41':{'name':'辽宁国际商务旅行社','code':'L0008'},'7533bb763d364a6c8ebbba747917f02d':{'name':'广大新风尚旅游','code':'LA00086'},'7545f829f8774ec490ca93baee2b8998':{'name':'王成梁','code':'LA00217'},'754ad52511194613ad9a7b659d33f4eb':{'name':'月光月','code':'LA00330'},'756c0af61f464e6bb02f589d01e4dffe':{'name':'鲅鱼圈红阳国旅 舒畅','code':'LA00064'},'77414f6bd5a04985847ed11e10deb553':{'name':'辽宁海外国旅 贺鸣','code':'LA00072'},'7767a35edb584983834d46cddb500c3d':{'name':'关门山水库','code':'J0098'},'77f1364a3b1943f0869ef5196001cc29':{'name':'建业乐程假期','code':'LA00091'},'784f9c27c81041b5974454540c87eca3':{'name':'天天张艳春','code':'LA00094'},'78651eddf41e46929e8e94f90e2962e0':{'name':'战友奇迹之旅','code':'LA00084'},'796e0a259add4618abd79ffc55f57c4f':{'name':'小么际','code':'LA00289'},'7a05608adf93426e95fa7cb7700b6e04':{'name':'居游旅行社','code':'L0002'},'7ab07772800d41fcb896f02c673dd4c4':{'name':'测试一级商客1','code':'LA00293'},'7ab33c8f7e1b47b4b402d39f8a85e68d':{'name':'东北旅游','code':'LA00189'},'7af12e6744f84c3c9ff579c97d768c3b':{'name':'周辉','code':'LA00284'},'7b3562fd5677405d9c4c30407701dfe3':{'name':'辽宁省中国青年旅行社 程静','code':'LA00170'},'7b65bc15607f4ffdb83a7f342b155dd9':{'name':'沈阳国旅北站分公司风云假期','code':'LA00102'},'7cbd586d51de46e498f4769e3e94d64d':{'name':'战友优越假期','code':'LA00087'},'7d3e381134f44af696e764d031164990':{'name':'名流同业社1','code':'T4'},'7d42d16d714f454394c1bbe3c8799db2':{'name':'旅店老板 王培培','code':'LA00373'},'7dc63b6170334cf0b44d61014f305911':{'name':'多彩疆域徐伟13998308608','code':'LA00185'},'7f13e1cd99974f6db924dec28ac05f11':{'name':'10002','code':'LA00332'},'7f95c36b3233462388a20aecfd07af05':{'name':'票务中心郭莹','code':'L0043'},'7ffb1293ff7a4e00b74113f89ad5afda':{'name':'综合部','code':'T5'},'8':{'name':'公司领导','code':'200001'},'810957ccf6834e3ebeea4d890c023534':{'name':'张巍','code':'LA00242'},'811a32e497784c1593776376c2ee90a7':{'name':'cccv','code':'LA00358'},'81839a807deb4f748b68f3cec2e6ae1c':{'name':'辽宁康辉国际旅行社','code':'lxs003'},'8243fac2c9f240ef9dcd0f21b9dee3ee':{'name':'沈阳宝石花旅行社有限公司','code':'L0018'},'82933d07ed634953bc1315c55860b57c':{'name':'沈阳国旅 光达营业部','code':'LA00131'},'831a504daa6d4beb9d6bf95af225ea95':{'name':'沈阳青旅05','code':'LA00341'},'838716eba6354b728c5759235099a01c':{'name':'默默','code':'LA00243'},'83fb751c91e84318bfa17d9444bd5a9d':{'name':'0级测试3','code':'L9003'},'8407e27582c742ce9bac02d3b57f9f35':{'name':'神洲七','code':'LA00227'},'842ffa94087a40d8b506804c5d261179':{'name':'金土地铁西郑时','code':'LA00141'},'84df687ef5ec40ccb2f22125e0b5d2b1':{'name':'沈阳名流旅行社','code':'lxs002'},'84e59f1c368c44c480d2e3c1a1b8d140':{'name':'沈阳青旅03','code':'LA00339'},'85a5b3e1872e4695bfe03691f18cfb42':{'name':'浪漫假期中兴营业部董欣','code':'LA00168'},'860183ac6ee941e3928cf2b0c25d0424':{'name':'盛京国旅夏雪','code':'LA00122'},'8642e006d541472ea20e2bd1d38ed46e':{'name':'辽宁康辉国际旅行社抚顺分店','code':'LA00164'},'87299324ba9b41a69998cbab89d66168':{'name':'票付通虚拟旅行社子账号测试1','code':'LA00153'},'873f0159c4fe4925907781be6e60884d':{'name':'辽宁和平国际旅行社','code':'LA00175'},'8800cbd4e9754754bc79d8a1854d99b5':{'name':'大地旅行社','code':'LA00297'},'89438eb26b674c11b34076bb25bedcf7':{'name':'雄狮国际旅行社（辽宁）有限公司','code':'LA00078'},'896a2937a12a4e4393a2a06e712dbc37':{'name':'haha','code':'LA00361'},'89b53afed1044265add452fe1d4928dc':{'name':'青旅沈北加盟','code':'LA00016'},'89d3d911063e493f95fb52e795724478':{'name':'辽宁盛京国旅 新宁营业部','code':'LA00055'},'89e33f45d5d14c19bad923d90aea7027':{'name':'抚顺和睦公园','code':'J0094'},'8a499b00de0b47cc8c55b56533933e2e':{'name':'国旅沈诗桐','code':'LA00111'},'8ab30a8074594e1ba78d064312d412fa':{'name':'完美假期 唐玲','code':'LA00027'},'8ac8c4ca8c544ed59478aba32e4d8037':{'name':'辽宁光大国际旅行社有限公司','code':'LA00145'},'8ae0804598014420ab19f0b826f7708b':{'name':'领航旅行社','code':'LA00163'},'8b356df3c745426d9f847134c40da139':{'name':'盛京曦洋','code':'LA00305'},'8e5363fe61874d4bb59ef3b63d0715a5':{'name':'沈阳虎跃旅行社','code':'L0019'},'8e6f5ad1c9224777981e0fad93289f55':{'name':'中国国旅-临湖街门店','code':'LA00188'},'8e7467e2232340ef8bf96e77eb023fae':{'name':'徐明阳','code':'LA00238'},'8ea08cec18a3461783e1bb629ffa2d89':{'name':'张氏帅府','code':'J0014'},'8ea4237f6b6d4d94baa0fdf573b8dc9b':{'name':'沈阳青旅','code':'LA00232'},'8eb3c8624be84ac2b1570769a8a7363e':{'name':'沈阳铁道国际旅行社','code':'lxs010'},'8ed2001048934c7591c18ba493e564a9':{'name':'沈阳故宫旅行社  郭园','code':'LA00079'},'8ed8446fb6fa4731901026cfef3c3ed8':{'name':'大洼景隆商务宾馆','code':'LA00097'},'8f673903265f4da5a8afcfaed3c6d81a':{'name':'ccca','code':'LA00354'},'9':{'name':'综合部','code':'200002'},'9041bd4b42124b31bc3fc557e510b142':{'name':'丹东天华山风景区','code':'J0016'},'9060ae83b413494f9fa14cbf4963e50e':{'name':'沈阳怪坡国际滑雪场','code':'J0108'},'90c3311ad6cf4eecb8994bdf44a0d435':{'name':'沈阳福卡斯旅行社有限责任公司','code':'L0039'},'90c45daa39b54ca98028c03df073ec3a':{'name':'东方国际旅行社孟凡华','code':'LA00073'},'91a52afeff6948dd9976e89a86f6804f':{'name':'沈阳教育旅行社','code':'L0035'},'929d2b6df7c1463eb028cc630f6f2b0e':{'name':'中旅桃梨假期','code':'LA00093'},'92b402eedf0f4c1d85d8d77be4e2a1b2':{'name':'君越水世界','code':'J0002'},'93dce6e3ba184f6785be92258f1cd13e':{'name':'五女山风景区','code':'J0039'},'945d059a05b844c1aac92f5a8f02c5b3':{'name':'测试部','code':'003002'},'94c9791962b045f99174a2de8ec5c8e8':{'name':'中国国旅-丁香街门店','code':'LA00211'},'94e82356f93348cd98421aeaf901e7ba':{'name':'名流总部-美君','code':'LA00235'},'951cbff11988440b9b71e2b0167bb38e':{'name':'沈阳好运旅行社','code':'lxs021'},'955a52c497424724806f8eebbdc040af':{'name':'辽宁国际商务旅行社','code':'lxs005'},'95a8e985f3c0404d91114080a5b43d66':{'name':'L9003测试1级','code':'LA00357'},'95f15d548dc544958e924fd56af92ca8':{'name':'故宫旅行社郭园','code':'LA00124'},'965346cb0ca5435190ca6d22b55841ee':{'name':'沈阳领航盘锦分公司 李海云','code':'LA00172'},'9744e0d9267044a7b4252e610ccdd26c':{'name':'营业中心','code':'LA00051'},'9776ce4106784395a3a4724067e8d1af':{'name':'沈阳亲自果果 电子票','code':'LA00320'},'9824ece8fe034d77a18a8ac1569ae766':{'name':'沈阳方特欢乐主题公园','code':'J0007'},'98561111f19847748890621ac8a9d6e2':{'name':'坚持','code':'LA00266'},'98af821c8c424337ad17c2488a6bc366':{'name':'沈阳金飞马旅行社','code':'L0003'},'99f26426e3ff4cd7a3d0a9d2457324ec':{'name':'沈阳好运旅行社','code':'L0036'},'9a056c7d3aca431f94f6b152f588bce2':{'name':'张雪','code':'LA00246'},'9a48769113c64080ab73cf7092f0048e':{'name':'天天优悦假期','code':'LA00088'},'9a51e7f6ba7d40bf984deaa9cba28ea6':{'name':'中云旅行社刘旭','code':'LA00125'},'9b31b300d16d4e4b8ac82da77eae3d94':{'name':'洪森假期张波','code':'LA00133'},'9ba43e017591430093a5d481644903dd':{'name':'刘薇','code':'LA00092'},'9c305c1762b54c3ab7b4e228587c359b':{'name':'杨菲','code':'LA00331'},'9d239f9cf78c4878aa5868eed934bc4f':{'name':'嘉华旅行社 孟祥坤','code':'LA00010'},'9da41a2fd96a42eba77694d8ca8150f2':{'name':'丹东黄椅山风景区','code':'J0017'},'9dc21f97a2a64fd182937bf2015b5c50':{'name':'中国国旅-保工南街门店','code':'LA00186'},'9dc38fab896441f4b9fc2cd353312a09':{'name':'赫图阿拉城','code':'J0096'},'9f2265d7544f4bd68ed8b90d1cc296be':{'name':'沈阳市青年国际旅行社','code':'L0006'},'9f434e7b805b49fb884cb7b2cd87f196':{'name':'关门山大峡谷','code':'J0097'},'9fcc57f7cded4528be48f650dda3aba7':{'name':'飞扬南环杨乔雅','code':'LA00253'},'a05a04aa7efb403682b2fade4d2659d9':{'name':'沈阳亲子  果果','code':'LA00257'},'a0d40fdd7aad4e0597896ff42da2984d':{'name':'姜云龙','code':'LA00075'},'a30bc94163cd4999bf65eece57303ea0':{'name':'旮旯假期慧慧','code':'LA00113'},'a325304cc8484abeac7044ef67f85d0f':{'name':'中旅总社','code':'LA00258'},'a3b8bc47af05473baf4865ffb7f8b700':{'name':'10005','code':'LA00335'},'a4e419013f814489b9f5703ae9c847ea':{'name':'北国金山','code':'LA00115'},'a6b46f26e536474f9efe2535eefd861c':{'name':'10007','code':'LA00351'},'a7598a02a256458ab8f5909cb02cc396':{'name':'赵敏杰','code':'LA00198'},'a79434109d7140c5b72a03698b896588':{'name':'慕妈网 甜甜','code':'LA00066'},'a7f2d04eaac34c058c021fe0de2fd3f1':{'name':'田婉','code':'LA00309'},'a7f35e8e5a164acb9e76854f3ea3582c':{'name':'大运通国际麦凯乐旅行社','code':'LA00169'},'a87a8d3082424d869fb864bd70dbb0d9':{'name':'神洲16','code':'LA00265'},'a8dd1d8200ff466493d0d4c268a26997':{'name':'王丹丹','code':'LA00248'},'a8ea39211cb441a4bd759b3bf5f86039':{'name':'沈阳名流分社马瑞','code':'LA00146'},'a9b01d783d9740069602589a6393111c':{'name':'47营业部','code':'LA00038'},'aa7def43c32043df99d05260990c7c4f':{'name':'沈阳海外国际旅行社','code':'L0048'},'ab7e9d16c83f4e97adad9ec765e5db21':{'name':'张悦15232902795','code':'LA00149'},'abf2aa31028145e888d907c6a336d793':{'name':'东方国际渤海社 杨葵','code':'LA00071'},'ac3bc4fc16f74017813a6d97729d411c':{'name':'名流出票胡春萍','code':'LA00254'},'ac6e542f29b644ffbdd006547e5b0d62':{'name':'0级测试2','code':'SK9002'},'acbfba5e710546ee9bb3f592398394bc':{'name':'L9002的1级测试1','code':'LA00367'},'ad3d1c2e6ba648518676bfe9be3ec8ac':{'name':'沈阳万鑫旅行社有限公司','code':'L0041'},'ada76ac164954e82844ea1ddfc83d40f':{'name':'刘畅','code':'LA00119'},'ae2551869ce44a299e477a973419af41':{'name':'东陵公园','code':'J0019'},'ae770335768e4aa0af8cfec02de090dc':{'name':'中国国旅（辽宁）','code':'L0017'},'afa34ed812104339a82c2cfeb71525f1':{'name':'港中旅 丽娜','code':'LA00039'},'b0957eb4120b49a29cb906957c83cba6':{'name':'居游运营平台','code':'YUNYING'},'b0f207533a32472bb97098034f8ab224':{'name':'沈阳飞达国旅','code':'LA00171'},'b115616bc21943cb84dc67aad42a3da3':{'name':'沈阳马耳山生态旅游区','code':'J0003'},'b156398d587a4f6789203cffe77d1d95':{'name':'小慕妈','code':'LA00255'},'b1b3da1dc95e47f1bca292b9dc8112d7':{'name':'大连天门山旅游风景区','code':'J0042'},'b29c9585a858409dadf8ea6ce5784be8':{'name':'票付通虚拟旅行社子账号测试4','code':'LA00156'},'b2dd200b16fd481da382a7330d5fbb00':{'name':'青旅岐山中路魏萍','code':'LA00135'},'b2fa584b820b4bfc87e3185354abd3c1':{'name':'虎跃赵霞','code':'LA00300'},'b475f5d93d1140d68abfcdc2f8bdc24d':{'name':'沈阳美地国际旅行社','code':'lxs019'},'b4b8d559b8104e5d8b4610bbc4c0d5bb':{'name':'沈阳棋盘山花果山神秘谷','code':'J0005'},'b568f55c02914e2ba43b4bbf0f6a957a':{'name':'孟玲','code':'LA00096'},'b56bd1cf1f284d7f9a2c72313bf5bf49':{'name':'盘锦畅游旅行社步行街分公司张蕾','code':'LA00194'},'b65a81b9df484414a2ffd9271d6dfbde':{'name':'花溪地温泉','code':'J0030'},'b6ecaba8641b464394e8ee8525839e5b':{'name':'文思','code':'LA00315'},'b806fbb9c5b44e6da3e080b72f22dc44':{'name':'怪堡刘','code':'LA00244'},'b839d57d0e3a41d48af5d6c8d70ad04a':{'name':'名流小芳','code':'LA00098'},'b893b2cff4004457a53ba698772fbbb1':{'name':'景区平台','code':'J0'},'b9190cdc9ec6491eb39863c01394aeff':{'name':'回望','code':'LA00301'},'b924dcf70ef24ef78d3d2a6d92809f95':{'name':'沈阳金飞马','code':'lxs016'},'b978ae673176478d9e7df0412156ed24':{'name':'旅行社慧姐','code':'LA00120'},'ba1acd936e8f4b22ae55d7e69e9d23cf':{'name':'景通天下旅行社姚波','code':'LA00142'},'ba483e0b79da4e7c955ea26b8c9a52a1':{'name':'名流道义分社 何龙','code':'LA00035'},'bab859857ed545d8be97db17dd219ea3':{'name':'百姓假期 惠南','code':'LA00026'},'babd6853494540f29cd493bad2d7bff2':{'name':'沈阳虎园','code':'J0020'},'baf896c175c1408294e21c73a5adc3a0':{'name':'沈阳百信达旅行社有限公司','code':'L0046'},'bb3cf740ed94416f9f411a617b2c3536':{'name':'户外宿伯强','code':'LA00126'},'bbda0d99f16a4653a163b4842f99b712':{'name':'沈阳美好时光旅行社','code':'L0033'},'bc47ab5eb71040ca979f5c3c78947c76':{'name':'营业部1','code':'LA00139'},'bcfe9fabfb9d43c8a4010a3e0b62bce1':{'name':'jjj','code':'LA00003'},'bd567656f4c04f54a8b70e40c7593471':{'name':'郝丹','code':'L0031'},'bde040bf15844e91825dba6f0fcbe800':{'name':'宝石花刘云','code':'LA00108'},'be0835263f764cc6b57c7eade767455f':{'name':'徐子航13998117925','code':'LA00213'},'be22ff23ce2e4f5587838845d710c07e':{'name':'杨莹','code':'LA00095'},'beb64059bfe54b3c97b240dce28f74a0':{'name':'商客总账号','code':'L9001'},'bf98bfb84f3747e6abd39d43b46d7b02':{'name':'火车头旅行社','code':'L0013'},'c0c27830c58a4ea497653662248961cd':{'name':'盘锦圣昊旅行社有限公司梁梅','code':'LA00190'},'c180e9aa1c20476b8586d9200c734956':{'name':'中国国旅佟娇','code':'LA00114'},'c1ce5e431bdd4f0697a8862f21ba2a86':{'name':'asd','code':'LA00355'},'c2064706672c4d0ab5d68b3b2ad4ea24':{'name':'北国旅行社徐消寒','code':'LA00044'},'c25c1f14c312403ba10a15a1421ddb6b':{'name':'北国国旅张佺','code':'LA00123'},'c2b5f16b5f40421ca98fd0db12035bae':{'name':'沈阳财宫生态旅游区','code':'J0004'},'c38076f8a0cd48b5a7e8857defe27656':{'name':'秋冬套票－姜云龙','code':'L0050'},'c3b102f3c05a4f6892475b4866dfb36b':{'name':'L9003测试1级2','code':'LA00365'},'c569bb10bc6540829e31d221ab4feca6':{'name':'名流福之旅','code':'LA00090'},'c5d1f61811594b3ab2741e7a56e83af7':{'name':'秋冬套票01','code':'LA00228'},'c5e883ce2a1d4be38406d3975c933ab4':{'name':'怪堡 刘仁豪','code':'LA00034'},'c6665af20ee946c6af2cd3d1c40fb1f8':{'name':'辽宁北国国旅 郭展伟 13386861237','code':'LA00319'},'c6fdb00d8218463d9ce31dc26ba90a0f':{'name':'沈阳国旅刘丽华','code':'LA00110'},'c798acdbbeb54fd8a2c05401bf04be30':{'name':'大宅门汤泉洗浴','code':'J0129'},'c79d2b8a168e4471863db033793cbea9':{'name':'清cuo','code':'Zzzzz'},'c7ad1aa9794e4d72ae697daeda118715':{'name':'北国票务','code':'L0094'},'c7b9694e9bdf4b43bab83622975f6f2a':{'name':'沈阳青年国际旅行社','code':'lxs001'},'c8bc2fbd84d44ec8bfe94238b6080cfd':{'name':'盘锦翔宇总社','code':'LA00138'},'c8cc5f37092b440788f25cf7aac4bf16':{'name':'盘锦翔宇旅行社 徐莹','code':'LA00065'},'c901ed3a6fd14da28c4648f02a6d9d6e':{'name':'北国旅行社 郭展伟','code':'LA00023'},'ca20b0e661e04510949e69855cc09274':{'name':'五谷','code':'LA00267'},'cadd3f66a3654b9ea8d89f8423870b86':{'name':'盘锦长客旅行社 张艳杰','code':'LA00183'},'cbf3244557a74209817bba7359acab0b':{'name':'阜新天地行旅行社 黄志如','code':'LA00054'},'cc6b5023da5c4013922eb0e9232e4e6b':{'name':'神洲三','code':'LA00014'},'cce17a2d54774f64b5834a92a87996fc':{'name':'测试旅行社','code':'LA00310'},'ccf91d5321804652ba984a457288d9e6':{'name':'自在旅行社','code':'LA00195'},'cd1ae95d8c274d388ceb80a716c5775b':{'name':'东方国际久柏埠旅行社','code':'LA00069'},'cd22a72879904aa4a1386591f960e14c':{'name':'111','code':'LA00042'},'ce91f7de1531442e83320202be4e9ff9':{'name':'沈阳故宫','code':'J0013'},'ceff29021346454d992fee75a126c159':{'name':'客运天天','code':'lxs018'},'cf75fbf950ac4384898f59e45c99fbeb':{'name':'沈阳市海外国际旅行社','code':'lxs004'},'cfad5ae233ef4802af43c0ed45f3c64e':{'name':'华洋国旅何非凡-13504915937','code':'LA00174'},'cfb5a614fbc449fd8053ec177b79ef89':{'name':'印象假日亭子','code':'LA00147'},'cfc458eefc3141e7b0a526bf008bf363':{'name':'国旅昆山路营业部郜博','code':'LA00104'},'d005fdb22b3146779dc0ad039b830da5':{'name':'丽娜','code':'LA00290'},'d085c400d2b24d2896918947530606e6':{'name':'辽宁世纪国际旅行社','code':'L0010'},'d12ca9c59a6c442e995bcff2a78c3917':{'name':'沈阳国旅旅行社兴华街门市部刘振华','code':'LA00136'},'d1af9bb8c1cc43c287e30c163192350f':{'name':'名流电子票-小汐','code':'LA00324'},'d3244f6ca14c4b4992ca60a7561503db':{'name':'太美旅行社 邵琪','code':'LA00024'},'d46bf181dc7b4719953877cabf5636b1':{'name':'辽宁海内外国际旅行社','code':'LA00261'},'d493606a83a94ed192682fbcbbb90b31':{'name':'飞扬南环&mdash;杨乔雅','code':'LA00160'},'d52ee3f5632e46d7802323b1f09a7b1a':{'name':'嘉华','code':'LA00299'},'d5829cdfa5e64cce8cc486a56b8aeb43':{'name':'xxx','code':'LA00352'},'d680a314c5ec4f5f8aa95e6baa92c6ab':{'name':'神洲五','code':'LA00015'},'d6986d998f5a44d080b69e587571472b':{'name':'卧龙谷','code':'lxs014'},'d6bc0e179d924c13ba820a4c954b2da5':{'name':'123','code':'T6'},'d741eb306abb4fc2973e3d54b8b43942':{'name':'神洲六','code':'LA00223'},'d8f6c21bf29643cab6e7ccc048452ccd':{'name':'沈阳青旅04','code':'LA00340'},'d9704304899348518cbe1c6fb5c2e24c':{'name':'xxh','code':'LA00262'},'da7b996344364d91bc2da4bad1df31a7':{'name':'沈阳国旅太原街子兮','code':'LA00134'},'daac3450bc034d358d7136900bb01195':{'name':'马天野','code':'LA00348'},'dc414804e9264e54ac7da44ec6f2987c':{'name':'dlq','code':'LA00359'},'dc9118e9cf1949abbcbbe817bc645992':{'name':'大连驷拓科技吕哥15698860355','code':'LA00178'},'dd0d1cc977d645de8bdd0cfa7f8a0cb6':{'name':'辽宁自由行 孙方志','code':'LA00011'},'ddd2009dafec468f9d768feecbf60aca':{'name':'教育旅行社','code':'LA00046'},'de727fe373084791b4f16889b9d17850':{'name':'五谷1','code':'LA00270'},'de8eaf96f1ed471b8a60f147a8946f9e':{'name':'神洲九九','code':'LA00225'},'dee8ed91093c4d0fa1c3259f2399a7a8':{'name':'北陵公园','code':'J0008'},'defc0fc5d3a24239bb91f91df2db0242':{'name':'辽宁省中国青年旅行社','code':'lxs007'},'df2b077367504f0f9a39f41d4b2277ee':{'name':'中国国旅 龚安','code':'LA00018'},'df2e46a8235d424fbe7e465ebccdc868':{'name':'盘锦春天社启运之旅营业部  赵瀚琳','code':'LA00176'},'df7eb4518e594e00850544301cd640d8':{'name':'套票-朱彦霏','code':'LA00369'},'df83be93fad14b538441de7007a30ea0':{'name':'测试出票','code':'LA00204'},'dfac4a7267eb424789505e4eea690b67':{'name':'辽宁省海外旅行社兴工街门市部','code':'LA00173'},'dfb2abef5e3b459a9379968d624af4e4':{'name':'神洲16','code':'LA00264'},'e0dd037a4fd74e599352bbf03ae788c3':{'name':'春风国旅苏家屯店','code':'LA00140'},'e12f748b9e5a4dd6b7fc9f4bf5d96549':{'name':'沈阳国际旅行社','code':'LA00165'},'e1d5a933795444e2900045ade15788de':{'name':'白总','code':'L0051'},'e20a7ef237204bdbb3fd6414f1c45b07':{'name':'盛京驿站','code':'J0049'},'e2d96e99d6894c45814e7d5e283973ff':{'name':'Alex吕','code':'LA00323'},'e30dfc5cdad64b6aabcb4487773f60d0':{'name':'五谷1','code':'LA00272'},'e31da1fb762e4d5b8b6d5c0cc40bbf58':{'name':'兴隆台爱度时尚宾馆','code':'LA00150'},'e32e0420b67e4a75947d983151be5f1f':{'name':'驴妈妈','code':'L0095'},'e3f3a33fc525427cafaef65018dc239b':{'name':'花果山神秘谷','code':'J0021'},'e5a6ac631df04911bb7a6b6fe7a95815':{'name':'居游旅行社','code':'lxs000'},'e6bc862240bf42b6ba371a3e39d8cf7a':{'name':'国旅鹿春燕','code':'LA00107'},'e6e3f8a92f9e4f32a5a581bdb5aac69f':{'name':'鹤缘国际旅行社兴隆台分社','code':'LA00117'},'e78731fb65ff4730826cbd4b8c024b72':{'name':'新民新联旅行社','code':'LA00057'},'e8323a6640874d54b861f2c2d494e7c3':{'name':'银狐旅行社 张旭','code':'LA00021'},'e885aa02fecd49f1ad841f330458b4e6':{'name':'阜新天地行旅行社 黄志知','code':'LA00053'},'e91f31f06c65497f8b28dc21f9443910':{'name':'沈阳神舟旅行社～徐莹13898802187','code':'LA00215'},'e943437b53d44e69a5874dc690a337fd':{'name':'宝石花旅行社铁西分社','code':'LA00059'},'e9c2c330e0fb4f56a9ac45dc73f11477':{'name':'杨兰','code':'LA00285'},'e9f4435bc8cd44a7819c4e291945e118':{'name':'张涵','code':'LA00346'},'ea704ec0df6d46c38ebf6fe46000380a':{'name':'和平国旅黄平','code':'LA00121'},'ead4b415a6534cfda125b8d1ca727234':{'name':'翔宇分社辛艳霞','code':'LA00184'},'eae923fce71d4ce5b3bc10dacb71dac8':{'name':'测试同业二','code':'LA00002'},'ec16fe9a7f4e4c1f8932e7f36e08c5b8':{'name':'远洋莹莹','code':'LA00118'},'ec7fe1fb69b04c7ea9954d24fab2a523':{'name':'沈阳晚报05','code':'LA00344'},'ed2befc263984309a729eec5de251cf7':{'name':'辽宁春秋国际旅行社','code':'lxs022'},'ed4e196ebd224395b2bf0ed4792ae21e':{'name':'绿中海办事处佰意假期','code':'LA00081'},'ed55f175a1d345b8be13b5d88e8f2c86':{'name':'本溪水洞','code':'J0015'},'ed8525c3884a4d86824312915151507b':{'name':'居游测试旅行社','code':'SL0099'},'ededc704ec8d4a258a557e9fad806a12':{'name':'票付通虚拟旅行社子账号测试3','code':'LA00155'},'eeee389a956c4cd1a737a1bab6e24e09':{'name':'万博书','code':'LA00177'},'ef6d5dd2811a42e3a9e20240eaeb481c':{'name':'神洲一','code':'LA00012'},'eff6887848dd4d5c8ed8644249190bec':{'name':'辽宁大运通国际旅行社','code':'lxs008'},'f0479739d81e4cbc8132411ec5886d3b':{'name':'乐途','code':'lxs013'},'f11bd9bc3e6d47bba21e26160e84f727':{'name':'领航范范','code':'LA00312'},'f1bae76639e9426597b78255ecb0c9da':{'name':'杨柳','code':'LA00241'},'f2133f49605b45aaa801049fcbc3940f':{'name':'五谷1','code':'LA00280'},'f2869aca15d64337bf7e8d44f80aa991':{'name':'辽宁光大国际旅行社','code':'LA00187'},'f3677242c41846c9851cc00a895824c4':{'name':'妈妈网 马秀敏','code':'LA00210'},'f3aac67a7052458fbb2498aece6d2341':{'name':'北戴河自助游','code':'LA00191'},'f3beea940c48482d9a80c63aac97d723':{'name':'清永陵','code':'J0095'},'f470f1681ab94ccf8af9188ee31e7b73':{'name':'辽宁祥景国旅 王宁','code':'LA00212'},'f47c2e1860ff42bab9db49fbe1257ced':{'name':'神洲九','code':'LA00224'},'f47fa181d27547e1a2c1dcd0dfcd0c76':{'name':'票付通虚拟旅行社子账号测试5','code':'LA00157'},'f4eebcbb00f444f3813f1c64c9e1f8fe':{'name':'桃李','code':'LA00237'},'f52fe69e327f4fd8ba7c070114519a2c':{'name':'商客','code':'S0001'},'f58ed61ac13d4560ae0511476eb8b8af':{'name':'五谷1','code':'LA00277'},'f64b5a08421141fc86e80e08fa6ee458':{'name':'西捷明达旅游','code':'LA00222'},'f6656e299f20480a9ede4d4017cce69e':{'name':'五谷1','code':'LA00275'},'f8a147c7501f4902b7dce3f27c4bf4b1':{'name':'乐嘟嘟妈妈网 13840133221','code':'LA00230'},'f913730143934c8ca2f8e0e62ad9ee2e':{'name':'万爽','code':'LA00314'},'f941250f66f9454783d9e514b99a8b6e':{'name':'0级测试2','code':'L9002'},'f9624fa1007540a1977bfc62ce3f9558':{'name':'中辽国旅李艳君','code':'LA00109'},'fa2fb12788264b03924c743938166cc8':{'name':'名流总部 贾景强','code':'LA00130'},'fadcd8b66d3c48de8171a6bfd75bf0d0':{'name':'沈阳国际旅行社锦兴营业部 刘鹏','code':'LA00374'},'fc6d75a592a74ed49db28efbc4b2c804':{'name':'黑山平安旅行社 董迪','code':'LA00058'},'fccb9d7e8a4b47cbb5735fabdf93dc11':{'name':'李鑫','code':'LA00286'},'fd07c8ad60d944988c01b4cf21596463':{'name':'神洲七','code':'LA00226'},'fd92ef3db52443b28ccfaa3097ddb298':{'name':'辽宁中青旅 程学斌','code':'LA00025'},'ff1ab456db4e4229b3b5c7b1af418f1f':{'name':'沈阳卧龙谷风景区','code':'J0001'},'ff4aff90a1a443568df9885cb83f17b8':{'name':'dlq2','code':'LA00360'},'ffa19091bc304e1c99c3061ba0727133':{'name':'ccc','code':'LA00353'},'ffff114b2cda44c0b3ef901a937caf44':{'name':'锦州青青之旅 杜婧','code':'LA00019'}};

    $scope.searchform = {};

    //有效区间
    $scope.section = {};
    $scope.section.start = {};
    $scope.section.start.date = new Date();

    $scope.section.end = {};
    $scope.section.end.date = new Date();

    $scope.open = function(obj) {
        obj.opened = true;
    };

    $scope.companys = [];

   
    $scope.load = function(){
        var para = {
            start_time : getDate($scope.section.start.date),
            end_time : getDate($scope.section.end.date)
        }

        para = angular.extend($scope.searchform, para);

        console.log(para);

        orderstatisticscompanyhistorylist.get(para, function(res){

            console.log(res);

            if(res.errcode !== 0)
            {
                alert(res.errmsg);
                return ;
            }

            // talist().then(function(res1) {
            //     console.log(res1);
            //     if(res1.errcode === 0)
            //     {
            //       $scope.taarr = res1.data;
            //     }
            //     else
            //     {
            //         alert(res1.errmsg);
            //     }
            // });

            //$scope.objs = res.data;

            var objs = {};
            //分组：旅行社编号－销售品编号－价格－
            for(var i = 0; i < res.data.length; i++)
            {
                var tmp = res.data[i];
                var company_code = tmp.company_code;
                var sale_code = tmp.sale_code;
                var unit_price = tmp.unit_price;
                var company_name = tmp.company_name;

                var id = tmp.company_id;
                var parentsid = tmp.company_id_parents;
                var parentid = tmp.company_id_parent;


                if(!objs.hasOwnProperty(company_code))
                {
                    var o = objs[company_code] = {};
                    o['saleobjs'] = {};
                    o['id'] = id;
                    o['parentsid'] = parentsid;
                    o['parentid'] = parentid;
                    o['company_name'] = company_name;
                    o['saleobjs'][sale_code] = {};
                    o['saleobjs'][sale_code]['prices'] = {};
                    o['saleobjs'][sale_code]['prices'][unit_price] = tmp;
                }
                else
                {
                    var o = objs[company_code]['saleobjs'];
                    if(!o.hasOwnProperty(sale_code))
                    {
                        o[sale_code] = {};
                        o[sale_code]['prices'] = {};
                        o[sale_code]['prices'][unit_price] = tmp;
                    }
                    else
                    {
                        if(!o[sale_code]['prices'].hasOwnProperty(unit_price))
                        {
                            o[sale_code]['prices'][unit_price] = tmp;
                        }
                        else
                        {
                            o[sale_code]['prices'][unit_price]['back'] += tmp.back;
                            o[sale_code]['prices'][unit_price]['buy'] += tmp.buy;
                            o[sale_code]['prices'][unit_price]['total_back'] += tmp.total_back;
                            o[sale_code]['prices'][unit_price]['total_buy'] += tmp.total_buy;
                            o[sale_code]['prices'][unit_price]['used'] += tmp.used;
                        }
                    }
                }
            }

            console.log(objs);

            

            //把子分享商加到一级分销商里
            var res = {};
            angular.forEach(objs, function (value, key) {

                var company_id_parents = value.parentsid;
                var id = value.id;
                if(!(company_id_parents === undefined || company_id_parents == ''))
                {
                    var tmparr = company_id_parents.split(',');

                    var len = tmparr.length;
                    var ta0 = '';   //0级社
                    var ta1 = '';   //1级社
                    
                    if(len === 3)//一级社: 0,xxx,    xxx是顶级社
                    {
                        ta0 = tmparr[1];
                        if(!res.hasOwnProperty(ta0))
                        {
                            res[ta0] = {};
                        }
                        res[ta0][id] = {
                            'info' : value,
                            'company' : []
                        };

                    }
                    //子级社：(二级)0,xxx,yyy,  or (三级)0,xxx,yyy,zzz,
                    else if(len > 3) 
                    {
                        ta0 = tmparr[1];
                        ta1 = tmparr[2];

                        if(res[ta0] !== undefined)
                        {
                            if(!res[ta0].hasOwnProperty(ta1))
                            {
                                res[ta0][ta1] = {
                                    'info' : {
                                        'id' : ta1,
                                        'company_name' : tadata[ta1].name
                                    },
                                    'company' : []
                                };
                            }

                            res[ta0][ta1]['company'].push(value);
                        }
                    }
                    // else   //len < 3 //0级社
                    // {

                    // }

                    

                    // for(var j = 0; j < len; j++)
                    // {
                    //     var tmpj = tmparr[j];
                    //     console.log(tmpj);
                    //     if(tmpj == 0 || tmpj == '') continue;
                    //     if(!pointer.hasOwnProperty(tmpj))
                    //     {
                    //         pointer[tmpj] = {};
                    //         pointer[tmpj]['company'] = [];
                    //     }
                    //     pointer = pointer[tmpj];
                    // }
                    // if(pointer['company'] !== undefined){
                    //     pointer['company'].push(value);
                    // }
                }
            });
            console.log('6666666666677788');
            console.log(res);
            console.log('66666666666');


            //var companys = [];
            //key：顶级社
            //value : 所有一级社对象
            angular.forEach(res, function (value, key) {

                //$scope.companys = value;

                angular.forEach(value, function (tainfo, taid) {

                    //taid,一级社id
                    //tainfo.info : 一级社信息
                    //tainfo.company : 一级社的子社信息（数组）

                    for(var i = 0; i < tainfo.company.length; i++)
                    {
                        merge(tainfo.info, tainfo.company[i]);
                    }
                    



                    // if(taid != 'company')
                    // {
                    //     console.log(taid);

                    //     var flag = true;//卖票子社标记
                    //     //遍历已经卖票的一级社
                    //     for(var i = 0; i < $scope.companys.length; i++)
                    //     {
                    //         //一级社
                    //         var c = $scope.companys[i];
                    //         //一级社id
                    //         var id = c.id;

                    //         //将已经卖票的一级社子社追加到一级社里
                    //         if(id == taid)
                    //         {
                    //             c['sub'] = {};
                    //             c['sub'] = tainfo;
                    //             flag = false;
                    //             break;
                    //         }
                    //     }

                    //     if(flag)
                    //     {
                    //         var obj = {
                    //             'id' : taid,
                    //             'company_name' : tadata[taid],
                    //             'sub' : tainfo,
                    //             'saleobjs' : {}
                    //         };
                    //         $scope.companys.push(obj);
                    //         flag = true;
                    //     }
                    // }
                    
                });

                // for(var i = 0; i < $scope.companys.length; i++)
                // {
                //     //一级社
                //     var c = $scope.companys[i];
                //     //一级社id
                //     var id = c.id;
                //     //一级社子社卖票了
                //     if(value.hasOwnProperty(id))
                //     {
                //         c['sub'] = {};
                //         c['sub'] = value[id];
                //     }
                //     //一级社没卖票
                //     else
                //     {

                //     }
                // }

            });
            console.log(res);


            return;



            for(var i = 0; i < $scope.companys.length; i++)
            {
                var company = $scope.companys[i];
                if(company.sub === undefined) continue;

                for(var j = 0; j < company.sub.company.length; j++)
                {
                    var sub = company.sub.company[j];
                    merge(company, sub);
                }

            }
            console.log($scope.companys);
            

            for(var i = 0; i < $scope.companys.length; i++)
            {
                var c = $scope.companys[i];
                c.salearr = [];
                angular.forEach(c['saleobjs'], function (saleinfo, salecode) {

                    c.salearr.push(saleinfo);

                    saleinfo.pricesarr = [];

                    angular.forEach(saleinfo['prices'], function (priceinfo, price) {

                        saleinfo.pricesarr.push(priceinfo);

                    });

                });

            }

            console.log($scope.companys);

            //$scope.companys = companys;
            // return ;


            // var objs = {};
            // for(var i = 0; i < res.data.length; i++)
            // {
            //     var tmp = res.data[i];
            //     var company_code = tmp.company_code
            //     var company_id_parents = tmp.company_id_parents;
            //     if(company_id_parents === undefined || company_id_parents == '') continue;

            //     //console.log(company_code_parent + '---' + company_code);

            //     var pointer = objs;
            //     var tmparr = company_id_parents.split(',');
            //     //console.log(tmparr);
            //     for(var j = 0; j < tmparr.length; j++)
            //     {
            //         var tmpj = tmparr[j]
            //         if(tmpj == 0 || tmpj == '') continue;
            //         if(!pointer.hasOwnProperty(tmpj))
            //         {
            //             pointer[tmpj] = {};
            //             pointer[tmpj]['company'] = [];
            //         }
            //         pointer = pointer[tmpj];
            //     }
            //     pointer['company'].push(tmp);
            // }
            // console.log(objs);



        });
    }
    $scope.load();



    //将子分销商的销售情况合并到一级分销。obj1父节点，obj2子节点。
    function merge(obj1, obj2){

        var res = true;

        //obj2的父节点id不是obj1的id
        // if(obj1.id !== obj2.parentid)
        // {
        //     return false;
        // }

        //salecode:销售品编号，saleinfo:销售情况
        angular.forEach(obj2['saleobjs'], function (saleinfo, salecode) {
            //查询一级分销是否卖过该子分销的销售品
            //salecode,hasOwnProperty
            //var saleobj = obj1['saleobjs'][salecode];
            //一级分销没卖过的销售品
            if(obj1['saleobjs'].hasOwnProperty(salecode))
            {
                obj1['saleobjs'][salecode] = {};
                obj1['saleobjs'][salecode] = saleinfo;
                console.log(obj1['saleobjs'][salecode]);
            }
            //一级分销也卖过的销售品
            else
            {
                var saleobj = obj1['saleobjs'][salecode];
                //saleobj 父节点。
                angular.forEach(saleobj['prices'], function (priceinfo, price) {

                    //父节点没卖过这个价格
                    //var pprice = saleobj['prices'][price];
                    if(saleobj['prices'].hasOwnProperty(price))
                    {
                        saleobj['prices'][price] = {};
                        saleobj['prices'][price] = priceinfo;
                    }
                    //父节点也卖过这个价格
                    else
                    {
                        var pprice = saleobj['prices'][price];
                        // o[sale_code]['prices'][unit_price]['back'] += tmp.back;
                        // o[sale_code]['prices'][unit_price]['buy'] += tmp.buy;
                        // o[sale_code]['prices'][unit_price]['total_back'] += tmp.total_back;
                        // o[sale_code]['prices'][unit_price]['total_buy'] += tmp.total_buy;
                        // o[sale_code]['prices'][unit_price]['used'] += tmp.used;
                        pprice.back += priceinfo.back;
                        pprice.buy += priceinfo.buy;
                        pprice.total_back += priceinfo.total_back;
                        pprice.total_buy += priceinfo.total_buy;
                        pprice.used += priceinfo.used;
                    }

                });
            }

        });

        return res;
    }


    //
    function change(obj){

        

    }
};
/**
 * 子模块路由
 * dlq
 */

var router = function ($urlRouterProvider, $stateProvider) {

	$stateProvider

		.state('app.table', {
			url: '/table/:url',
			controller: 'cccc',
			template: require('./index.html')
		})

		.state('app.testProductList', {
			url: '/testProductList/:url',
			controller: 'testProductList',
			template: require('./testProductList.html'),
			resolve: {
				getDate: function (utilservice) {
					return utilservice.getDate;
				},
				str2date: function (utilservice) {
					return utilservice.str2date;
				}
			}
		})
};

module.exports = router;
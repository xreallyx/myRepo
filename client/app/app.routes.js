angular.module('roberto')
.config(function($stateProvider, $urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode(true);

	$stateProvider

	.state('aboutme',{
		url:'/',
		templateUrl:'app/aboutme/aboutme.template.html',
		controller: 'AboutmeCtrl'
	})

/*	.state('portfolio',{
		url:'/portfolio',
		templateUrl:'app/portfolio/portfolio.template.html'
	}) */
	.state('contacts',{
		url:'/contacts',
		templateUrl:'app/contacts/contacts.template.html',
		controller: 'ContactsCtrl',
		resolve:{
			cirleRun: function($timeout){
				return $timeout(function(){
					console.log("i'm in the resolve");
				},1500)
			}
		},
		onEnter: function(cirleRun){
			console.log("i'm in the on enter");
		/*	$modal.open({
				templateUrl: 'app/progress/progress.template.html',
			}).result.finally(function(){
				$state.go('contacts'); 
			});*/

		},
	})
});
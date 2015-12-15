angular.module('roberto')
.config(function($stateProvider, $urlRouterProvider,$locationProvider){
	$urlRouterProvider.otherwise('/');

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
			cirleRun: function($timeout, $state){
				return $timeout(function(){
					console.log("i'm in the resolve");
				},1500)
			}
		},
		onEnter: function(cirleRun){
			console.log("i'm in the on enter");

		},
	})
});
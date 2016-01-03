angular.module('roberto')
 .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
   
   $urlRouterProvider.otherwise('/');
   
   $locationProvider.html5Mode(true);
   
   $stateProvider
   .state('home', {
       url: '/',
       templateUrl: 'app/home/home.template.html',
       controller: 'HomeCtrl',

   })
   .state('list',{
       url:'/list',
       templateUrl:'app/list/list.template.html',
       // controller: 'ListCtrl',
   })
   
});
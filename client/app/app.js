angular.module('roberto', [
  'ngResource',
  'ngMaterial',
  'ui.router',
  'ngAnimate',
  
])
.config(function($mdThemingProvider){
	$mdThemingProvider.theme('default')
	.primaryPalette('blue')
	.accentPalette('cyan')
	.warnPalette('red')
	.backgroundPalette('grey');
	
})
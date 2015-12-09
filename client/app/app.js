angular.module('roberto', [
  'ngResource',
  'ngMaterial',
  'ui.router',
  'ngAnimate'
])
.config(function($mdThemingProvider){
	$mdThemingProvider.theme('default')
	.primaryPalette('deep-orange')
	.accentPalette('cyan')
	.warnPalette('red')
	.backgroundPalette('grey');
	
});
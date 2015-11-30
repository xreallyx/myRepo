angular.module('roberto').directive('directiveAboutme', function(){
	return {
		restrict: 'C',			
		link: function(scope, elem, attrs){
        	elem.css('background-color', 'white'),
      		elem.css('border-radius', '20px 0 20px 0'),
      		elem.css('text-aling', 'justify'),
      		elem.css('padding', '15px')
      	}
	};
})
'use strict';
//demoGreet in html break into demo-greet
app.directive('demoGreet',function($parse){
	// return function LinkFn(scope,Element,attrs){
		// //Element.text("Hello World"); simply print a attribute as hello World
	// }
	//compile link function					
	return{
		restrict:'ACE',
		//for using as a private function make scope true
		scope:true,
		compile: function(cElement,attrs)
		{
			console.log('compileFn(',cElement,attrs,')');
			cElement.addClass("compile")
			return function LinkFn(scope,Element,attrs)
			{
				console.log('LinkFn(',cElement,attrs,')');
				Element.text("Hello World"); //simply print a attribute as hello World
				scope.leak="###";
			}
		}
	}
});


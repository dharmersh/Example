//every script having load function event
window.onload= function(){
	
	//find out the root element 
	var $rootElement= angular.element(window.document);
	var modules=[
		'ng',
		'myApp',
		function($provide){	//using this function we are find out where the root element is.
			$provide.value('$rootElement',$rootElement);
		}
	];
	
	// the root injector
	var $injector=angular.injector(modules);
	
	//only one injector for an application.
	//$compile traversing the DOM element. and look for the directive and execute the complier function.
	var $compile=$injector.get('$compile');
	
	//collection of the all link function
	var compositeLinkFn=$compile($rootElement);
	var $rootScope=$injector.get('$rootScope');
	compositeLinkFn($rootScope);
	$rootScope.$apply();
}
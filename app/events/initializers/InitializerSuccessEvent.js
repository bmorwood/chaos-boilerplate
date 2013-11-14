(function(){
	
	var InitializerSuccessEvent = function($initializerName) {
		this.initializerName = $initializerName;
		this.type = InitializerSuccessEvent.SUCCESS;
	};
	
	InitializerSuccessEvent.SUCCESS = "ns.initializersuccessevent:success";
	
	var p = InitializerSuccessEvent.prototype = new Chaos.AbstractEvent();
	p.constructor = InitializerSuccessEvent;
	
	p.initializerName;

	p.toString = function (){
		return "[InitializerSuccessEvent]";
	};
	
    Chaos.InitializerSuccessEvent = InitializerSuccessEvent;
}());
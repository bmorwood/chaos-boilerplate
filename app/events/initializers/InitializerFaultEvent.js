(function(){
	
	var InitializerFaultEvent = function($initializerName) {
		this.initializerName = $initializerName;
		this.type = InitializerFaultEvent.FAULT;
	};
	
	InitializerFaultEvent.FAULT = "ns.initializerfaultevent:fault";
	
	var p = InitializerFaultEvent.prototype = new Chaos.AbstractEvent();
	p.constructor = InitializerFaultEvent;
	
	p.initializerName;

	p.toString = function (){
		return "[InitializerFaultEvent]";
	};
	
    Chaos.InitializerFaultEvent = InitializerFaultEvent;
}());
(function(){
	
	var InitializationCompleteEvent = function() {
		this.type = InitializationCompleteEvent.COMPLETE;
	};
	
	InitializationCompleteEvent.COMPLETE = "ns.initializationcompleteevent:complete";
	
	var p = InitializationCompleteEvent.prototype = new Chaos.AbstractEvent();
	p.constructor = InitializationCompleteEvent;

	p.toString = function (){
		return "[InitializationCompleteEvent]";
	};
	
    Chaos.InitializationCompleteEvent = InitializationCompleteEvent;
}());
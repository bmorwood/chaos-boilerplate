(function(){
	
	var SystemDownEvent = function($instruction) {
		this.instruction = $instruction;
		this.type = SystemDownEvent.SYSTEM_DOWN;
	};
	
	SystemDownEvent.SYSTEM_DOWN = "system_down";

	var p = SystemDownEvent.prototype = new Chaos.AbstractEvent();
	p.constructor = SystemDownEvent;
	
	p.instruction;

	p.toString = function (){
		return "[SystemDownEvent]";
	};
	
Chaos.SystemDownEvent = SystemDownEvent;
}());
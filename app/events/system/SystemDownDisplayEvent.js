(function(){
	
	var SystemDownDisplayEvent = function($type) {
		this.type = $type;
	};
	
	SystemDownDisplayEvent.SHOW = "ns.system.down.display.event.show";
	SystemDownDisplayEvent.HIDE = "ns.system.down.display.event.hide";

	var p = SystemDownDisplayEvent.prototype = new Chaos.AbstractEvent();
	p.constructor = SystemDownDisplayEvent;

	p.toString = function (){
		return "[SystemDownDisplayEvent]";
	};
	
    Chaos.SystemDownDisplayEvent = SystemDownDisplayEvent;
}());
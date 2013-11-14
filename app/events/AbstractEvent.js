(function(){
	
	var AbstractEvent = function($type) { 
		this.type = $type;
	};
	
	var p = AbstractEvent.prototype;
	
	p.type;
	p.target;
	
	p.dispatch = function () {
        Chaos.EventDispatcher.getInstance().dispatchEvent(this);
	};
	
	p.toString = function (){
		return "[AbstractEvent]";
	};

    Chaos.AbstractEvent = AbstractEvent;
}());
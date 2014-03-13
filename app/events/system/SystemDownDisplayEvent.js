(function(){
<<<<<<< HEAD
    /**
     * service of SystemDownDisplayEvent.
     *
     * @class SystemDownDisplayEvent
     * @constructor
     * @param {Event} $type event type.
     * @namespace chaos.events.system
     * @extends chaos.AbstractEvent
     */
	var SystemDownDisplayEvent = function($type) {
		this.type = $type;
	};
    /**
     * Fired when system down screen should show.
     *
     * @event SHOW
     * @type {String}
     **/
	SystemDownDisplayEvent.SHOW = 'chaos.systemdowndisplayevent::show';
    /**
     * Fired when system down screen should hide.
     *
     * @event HIDE
     * @type {String}
     **/
	SystemDownDisplayEvent.HIDE = 'chaos.systemdowndisplayevent::hide';

	var p = SystemDownDisplayEvent.prototype = new chaos.AbstractEvent();
	p.constructor = SystemDownDisplayEvent;

	p.toString = function (){
		return 'SystemDownDisplayEvent';
	};
	
    chaos.SystemDownDisplayEvent = SystemDownDisplayEvent;
=======
	
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
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
(function(){
    /**
     * service of SystemDownEvent.
     *
     *  __example__
     *  __SHOW__
     *  ```
     *  new chaos.SystemDownEvent(chaos.SystemDownDisplayEvent.SHOW).dispatch();
     *  ```
     *  __HIDE__
     *  ```
     *  new chaos.SystemDownEvent(chaos.SystemDownDisplayEvent.HIDE).dispatch();
     *  ```
     *
     * @class SystemDownEvent
     * @constructor
     * @param {Event} $instruction when action to preform.
     * @namespace chaos.events.system
     * @extends chaos.AbstractEvent
     * @uses chaos.events.system.SystemDownDisplayEvent
     */
	var SystemDownEvent = function($instruction) {
		this.instruction = $instruction;
		this.type = SystemDownEvent.SYSTEM_DOWN;
	};
    /**
     * Fired when an sample event occurs...
     *
     * @event SYSTEM_DOWN
     * @type {String}
     **/
	SystemDownEvent.SYSTEM_DOWN = 'chaos.systemdownevent::system.down';

	var p = SystemDownEvent.prototype = new chaos.AbstractEvent();
	p.constructor = SystemDownEvent;
	
	p.instruction;

	p.toString = function (){
		return 'SystemDownEvent';
	};
	
chaos.SystemDownEvent = SystemDownEvent;
}());
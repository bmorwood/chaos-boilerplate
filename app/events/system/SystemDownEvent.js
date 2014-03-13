(function(){
<<<<<<< HEAD
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
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var SystemDownEvent = function($instruction) {
		this.instruction = $instruction;
		this.type = SystemDownEvent.SYSTEM_DOWN;
	};
<<<<<<< HEAD
    /**
     * Fired when an sample event occurs...
     *
     * @event SYSTEM_DOWN
     * @type {String}
     **/
	SystemDownEvent.SYSTEM_DOWN = 'chaos.systemdownevent::system.down';

	var p = SystemDownEvent.prototype = new chaos.AbstractEvent();
=======
	
	SystemDownEvent.SYSTEM_DOWN = "system_down";

	var p = SystemDownEvent.prototype = new Chaos.AbstractEvent();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	p.constructor = SystemDownEvent;
	
	p.instruction;

	p.toString = function (){
<<<<<<< HEAD
		return 'SystemDownEvent';
	};
	
chaos.SystemDownEvent = SystemDownEvent;
=======
		return "[SystemDownEvent]";
	};
	
Chaos.SystemDownEvent = SystemDownEvent;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
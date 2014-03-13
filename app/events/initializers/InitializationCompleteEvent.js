(function(){
    /**
     * event of InitializationCompleteEvent.
     *
     * @class InitializationCompleteEvent
     * @constructor
     * @namespace chaos.events.initializers
     * @extends chaos.AbstractEvent
     */
	var InitializationCompleteEvent = function() {
		this.type = InitializationCompleteEvent.COMPLETE;
	};

    /**
     * Fired when initializer is completed without an errors.
     *
     * @event COMPLETE
     * @type {String}
     **/
	InitializationCompleteEvent.COMPLETE = "chaos.initializationcompleteevent::complete";
	
	var p = InitializationCompleteEvent.prototype = new chaos.AbstractEvent();
	p.constructor = InitializationCompleteEvent;

	p.toString = function (){
		return "InitializationCompleteEvent";
	};
	
    chaos.InitializationCompleteEvent = InitializationCompleteEvent;
}());
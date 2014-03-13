(function(){
    /**
     * event of InitializerFaultEvent.
     *
     * @class InitializerFaultEvent
     * @constructor
     * @param {String} $initializerName initializer name.
     * @namespace chaos.events.initializers
     * @extends chaos.AbstractEvent
     */
	var InitializerFaultEvent = function($initializerName) {
		this.initializerName = $initializerName;
		this.type = InitializerFaultEvent.FAULT;
	};

    /**
     * Fired when a initializer has encountered an error.
     *
     * @event FAULT
     * @type {String}
     **/
	InitializerFaultEvent.FAULT = "chaos.initializerfaultevent::fault";
	
	var p = InitializerFaultEvent.prototype = new chaos.AbstractEvent();
	p.constructor = InitializerFaultEvent;
	
	p.initializerName;

	p.toString = function (){
		return "InitializerFaultEvent";
	};
	
    chaos.InitializerFaultEvent = InitializerFaultEvent;
}());
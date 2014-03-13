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

	var p = InitializerFaultEvent.prototype = new Chaos.Core.Event({
        name: 'InitializerFaultEvent',
        type: InitializerFaultEvent.FAULT,
        initializerName: InitializerFaultEvent.initializerName
    });
	p.constructor = InitializerFaultEvent;

    chaos.InitializerFaultEvent = InitializerFaultEvent;
}());

(function(){
<<<<<<< HEAD
    /**
     * event of InitializerFaultEvent.
     *
     * @class InitializerFaultEvent
     * @constructor
     * @param {String} $initializerName initializer name.
     * @namespace chaos.events.initializers
     * @extends chaos.AbstractEvent
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var InitializerFaultEvent = function($initializerName) {
		this.initializerName = $initializerName;
		this.type = InitializerFaultEvent.FAULT;
	};
<<<<<<< HEAD

    /**
     * Fired when a initializer has encountered an error.
     *
     * @event FAULT
     * @type {String}
     **/
	InitializerFaultEvent.FAULT = "chaos.initializerfaultevent::fault";
	
	var p = InitializerFaultEvent.prototype = new chaos.AbstractEvent();
=======
	
	InitializerFaultEvent.FAULT = "ns.initializerfaultevent:fault";
	
	var p = InitializerFaultEvent.prototype = new Chaos.AbstractEvent();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	p.constructor = InitializerFaultEvent;
	
	p.initializerName;

	p.toString = function (){
<<<<<<< HEAD
		return "InitializerFaultEvent";
	};
	
    chaos.InitializerFaultEvent = InitializerFaultEvent;
=======
		return "[InitializerFaultEvent]";
	};
	
    Chaos.InitializerFaultEvent = InitializerFaultEvent;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
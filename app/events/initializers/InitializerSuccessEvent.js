(function(){
<<<<<<< HEAD
    /**
     * event of InitializerSuccessEvent.
     *
     * @class InitializerSuccessEvent
     * @constructor
     * @param {String} $initializerName initializer name.
     * @namespace chaos.events.initializers
     * @extends chaos.AbstractEvent
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var InitializerSuccessEvent = function($initializerName) {
		this.initializerName = $initializerName;
		this.type = InitializerSuccessEvent.SUCCESS;
	};
<<<<<<< HEAD

    /**
     * Fired when a initializer is completed without errors.
     *
     * @event SUCCESS
     * @type {String}
     **/
	InitializerSuccessEvent.SUCCESS = 'chaos.initializersuccessevent::success';
	
	var p = InitializerSuccessEvent.prototype = new chaos.AbstractEvent();
=======
	
	InitializerSuccessEvent.SUCCESS = "ns.initializersuccessevent:success";
	
	var p = InitializerSuccessEvent.prototype = new Chaos.AbstractEvent();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	p.constructor = InitializerSuccessEvent;
	
	p.initializerName;

	p.toString = function (){
<<<<<<< HEAD
		return 'InitializerSuccessEvent';
	};
	
    chaos.InitializerSuccessEvent = InitializerSuccessEvent;
=======
		return "[InitializerSuccessEvent]";
	};
	
    Chaos.InitializerSuccessEvent = InitializerSuccessEvent;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
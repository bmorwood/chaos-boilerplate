(function(){
    /**
     * event of InitializerSuccessEvent.
     *
     * @class InitializerSuccessEvent
     * @constructor
     * @param {String} $initializerName initializer name.
     * @namespace chaos.events.initializers
     * @extends chaos.AbstractEvent
     */
	var InitializerSuccessEvent = function($initializerName) {
		this.initializerName = $initializerName;
		this.type = InitializerSuccessEvent.SUCCESS;
	};

    /**
     * Fired when a initializer is completed without errors.
     *
     * @event SUCCESS
     * @type {String}
     **/
	InitializerSuccessEvent.SUCCESS = 'chaos.initializersuccessevent::success';

	var p = InitializerSuccessEvent.prototype = new Chaos.Core.Event({
        name: 'InitializerSuccessEvent',
        type: InitializerSuccessEvent.SUCCESS,
        initializerName: InitializerSuccessEvent.initializerName
    });
	p.constructor = InitializerSuccessEvent;
    chaos.InitializerSuccessEvent = InitializerSuccessEvent;
}());

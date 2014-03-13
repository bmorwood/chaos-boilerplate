(function(){
<<<<<<< HEAD
    /**
     * events for application config.
     *
     * @class AppConfigEvent
     * @constructor
     * @namespace chaos.events.app
     * @extends chaos.AbstractEvent
     */
=======

>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var AppConfigEvent = function($type) {
		this.type = $type;
	};

<<<<<<< HEAD
    /**
     * Fired when app configuration is ready.
     *
     * @event CONFIG_READY
     * @type {String}
     **/
	AppConfigEvent.CONFIG_READY = 'chaos.appconfigevent::config.ready';
    /**
     * Fired when configuration has experienced an error.
     *
     * @event CONFIG_ERROR
     * @type {String}
     **/
	AppConfigEvent.CONFIG_ERROR = 'chaos.appconfigevent::config.error';
    /**
     * Fired when when the file is loaded.
     *
     * @event CONFIG_LOAD
     * @type {String}
     **/
	AppConfigEvent.CONFIG_LOAD = 'chaos.appconfigevent::config.load';

	var p = AppConfigEvent.prototype = new chaos.AbstractEvent();
	p.constructor = AppConfigEvent;

	p.toString = function (){
		return 'AppConfigEvent';
	};

    chaos.AppConfigEvent = AppConfigEvent;
=======
	AppConfigEvent.CONFIG_READY = 'ns.appconfigevent:config.ready';
	AppConfigEvent.CONFIG_ERROR = 'ns.appconfigevent:config.error';
	AppConfigEvent.CONFIG_LOAD = 'ns.appconfigevent:config.load';

	var p = AppConfigEvent.prototype = new Chaos.AbstractEvent();
	p.constructor = AppConfigEvent;

	p.toString = function (){
		return '[AppConfigEvent]';
	};

    Chaos.AppConfigEvent = AppConfigEvent;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
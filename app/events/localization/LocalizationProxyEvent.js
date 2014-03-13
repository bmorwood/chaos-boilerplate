(function(){
<<<<<<< HEAD
    /**
     * singleton of LocalizationProxyEvent.
     *
     * @class LocalizationProxyEvent
     * @constructor
     * @param {Event} $type event type.
     * @param {Object} $params additional params to pass along to the listener.
     * @namespace chaos.events.localization
     * @extends chaos.AbstractEvent
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var LocalizationProxyEvent = function($type, $params) {
		this.params = $params || null;
		this.type = $type;
	};

<<<<<<< HEAD
    /**
     * Fired when localized content is loaded.
     *
     * @event LOAD_LOCALIZATION_CONTENT
     * @type {String}
     **/
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT = 'chaos.localizationproxyevent::load_localization_content';
    /**
     * Fired when localized content is loaded successfully.
     *
     * @event LOAD_LOCALIZATION_CONTENT_SUCCESS
     * @type {String}
     **/
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS = 'chaos.localizationproxyevent::load_localization_content_success';
    /**
     * Fired when localized content is loaded with errors.
     *
     * @event LOAD_LOCALIZATION_CONTENT_FAULT
     * @type {String}
     **/
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT = 'chaos.localizationproxyevent::load_localization_content_fault';
    /**
     * Fired when localized content is loaded and ready for population.
     *
     * @event REPOPULATED
     * @type {String}
     **/
    LocalizationProxyEvent.REPOPULATED = 'chaos.localizationproxyevent::repopulated';
    /**
     * Fired when localized content is loaded and ready.
     *
     * @event LOCALIZATION_CONTENT_READY
     * @type {String}
     **/
	LocalizationProxyEvent.LOCALIZATION_CONTENT_READY = 'chaos.localizationproxyevent::localization_content_ready';
	
	var p = LocalizationProxyEvent.prototype = new chaos.AbstractEvent();
	p.constructor = LocalizationProxyEvent;

	p.toString = function (){
		return 'LocalizationProxyEvent';
	};
	
chaos.LocalizationProxyEvent = LocalizationProxyEvent;
=======
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT = "load_localization_content";
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS = "load_localization_content_success";
	LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT = "load_localization_content_fault";

    LocalizationProxyEvent.REPOPULATED

	LocalizationProxyEvent.LOCALIZATION_CONTENT_READY = "localization_content_ready";
	
	var p = LocalizationProxyEvent.prototype = new Chaos.AbstractEvent();
	p.constructor = LocalizationProxyEvent;

	p.toString = function (){
		return "[LocalizationProxyEvent]";
	};
	
Chaos.LocalizationProxyEvent = LocalizationProxyEvent;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
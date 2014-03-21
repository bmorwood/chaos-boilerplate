(function(){
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
	var LocalizationProxyEvent = function($type, $params) {
		this.params = $params || null;
		this.type = $type;
	};

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

	var p = LocalizationProxyEvent.prototype = new Chaos.Core.Event({
        name: 'LocalizationProxyEvent',
        type: LocalizationProxyEvent.type,
        params: LocalizationProxyEvent.params
    });
	p.constructor = LocalizationProxyEvent;

    Chaos.NS.LocalizationProxyEvent = LocalizationProxyEvent;
}());

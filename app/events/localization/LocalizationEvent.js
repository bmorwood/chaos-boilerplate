(function(){
    /**
     * event of LocalizationEvent.
     *
     * @class LocalizationEvent
     * @constructor
     * @param {Event} $type event type.
     * @param {Object} $params additional params to pass along to the listener.
     * @namespace chaos.events.localization
     * @extends chaos.AbstractEvent
     */
    var LocalizationEvent = function($type, $params) {
        this.params = $params || null;
        this.type = $type;
    };

    /**
     * Fired when the locale is changed and new localized copy has been repopulated.
     *
     * @event REPOPULATED
     * @type {String}
     **/
    LocalizationEvent.REPOPULATED = "chaos.localizationevent::repopulated";
    /**
     * Fired when the localized content is ready.
     *
     * @event LOCALIZATION_CONTENT_READY
     * @type {String}
     **/
    LocalizationEvent.LOCALIZATION_CONTENT_READY = "chaos.localizationevent::localization.contentcready";

    var p = LocalizationEvent.prototype = new Chaos.Core.Event({
        name: 'LocalizationEvent',
        params: LocalizationEvent.params,
        type: LocalizationEvent.type
    });

    LocalizationEvent.constructor = p;
    Chaos.NS.LocalizationEvent = LocalizationEvent;
}());

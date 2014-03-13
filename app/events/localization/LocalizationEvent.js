(function(){
<<<<<<< HEAD
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
=======

>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
    var LocalizationEvent = function($type, $params) {
        this.params = $params || null;
        this.type = $type;
    };

<<<<<<< HEAD
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

    var p = LocalizationEvent.prototype = new chaos.AbstractEvent();
    p.constructor = LocalizationEvent;

    p.toString = function (){
        return 'LocalizationEvent';
    };

    chaos.LocalizationEvent = LocalizationEvent;
=======
    LocalizationEvent.REPOPULATED = "ns.localizationevent:repopulated";
    LocalizationEvent.LOCALIZATION_CONTENT_READY = "ns.localizationevent:localization.contentcready";

    var p = LocalizationEvent.prototype = new Chaos.AbstractEvent();
    p.constructor = LocalizationEvent;

    p.toString = function (){
        return "[LocalizationEvent]";
    };

    Chaos.LocalizationEvent = LocalizationEvent;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
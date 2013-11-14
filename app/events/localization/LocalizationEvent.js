(function(){

    var LocalizationEvent = function($type, $params) {
        this.params = $params || null;
        this.type = $type;
    };

    LocalizationEvent.REPOPULATED = "ns.localizationevent:repopulated";
    LocalizationEvent.LOCALIZATION_CONTENT_READY = "ns.localizationevent:localization.contentcready";

    var p = LocalizationEvent.prototype = new Chaos.AbstractEvent();
    p.constructor = LocalizationEvent;

    p.toString = function (){
        return "[LocalizationEvent]";
    };

    Chaos.LocalizationEvent = LocalizationEvent;
}());
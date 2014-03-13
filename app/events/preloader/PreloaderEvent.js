(function(){
    /**
     * event of PreloaderEvent.
     *
     * @class PreloaderEvent
     * @constructor
     * @param {Event} $type event type.
     * @param {Number} $percentage the current percentage that the pre-loader should display.
     * @namespace chaos.events.preloader
     * @extends chaos.AbstractEvent
     */
	var PreloaderEvent = function($type, $percentage) {
            this.type = $type;
            this.percentage = $percentage;
	};

    PreloaderEvent.COMPLETE = 'chaos.preloaderevent::complete';
    PreloaderEvent.STEP = 'chaos.preloaderevent::step';

    var p = PreloaderEvent.prototype = new Chaos.Core.Event({
        name: 'PreloaderEvent'
    });

    p.constructor = PreloaderEvent;
    chaos.PreloaderEvent = PreloaderEvent;
}());

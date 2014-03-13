(function(){
<<<<<<< HEAD
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
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var PreloaderEvent = function($type, $percentage) {
		this.percentage = $percentage;
		this.type = $type;
	};
<<<<<<< HEAD
    /**
     * Fired when the pre-loader is completed and has reached 100%.
     *
     * @event COMPLETE
     * @type {String}
     **/
	PreloaderEvent.COMPLETE = 'chaos.preloaderevent::complete';
    /**
     * Fired when the pre-loader percentage has changed.
     *
     * @event STEP
     * @type {String}
     **/
	PreloaderEvent.STEP = 'chaos.preloaderevent::step';

	var p = PreloaderEvent.prototype = new chaos.AbstractEvent();
	p.constructor = PreloaderEvent;
    /**
    * percentage is used to holder the current percentage of the pre-loader.
    *
    * @property percentage
    * @type {Number}
    * @default null
    */
	p.percentage;

	p.toString = function (){
		return 'PreloaderEvent';
	};
	
    chaos.PreloaderEvent = PreloaderEvent;
=======
	
	PreloaderEvent.COMPLETE = "ns.preloaderevent:complete";
	PreloaderEvent.STEP = "ns.preloaderevent:step";

	var p = PreloaderEvent.prototype = new Chaos.AbstractEvent();
	p.constructor = PreloaderEvent;
	
	p.percentage;

	p.toString = function (){
		return "[PreloaderEvent]";
	};
	
    Chaos.PreloaderEvent = PreloaderEvent;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
(function(){
    /**
     * service of SystemDownDisplayEvent.
     *
     * @class SystemDownDisplayEvent
     * @constructor
     * @param {Event} $type event type.
     * @namespace chaos.events.system
     * @extends chaos.AbstractEvent
     */
	var SystemDownDisplayEvent = function($type) {
		this.type = $type;
	};
    /**
     * Fired when system down screen should show.
     *
     * @event SHOW
     * @type {String}
     **/
	SystemDownDisplayEvent.SHOW = 'chaos.systemdowndisplayevent::show';
    /**
     * Fired when system down screen should hide.
     *
     * @event HIDE
     * @type {String}
     **/
	SystemDownDisplayEvent.HIDE = 'chaos.systemdowndisplayevent::hide';

	var p = SystemDownDisplayEvent.prototype = new Chaos.Core.Event({
        name: 'SystemDownDisplayEvent',
        type: SystemDownDisplayEvent.type
    });
	p.constructor = SystemDownDisplayEvent;

    Chaos.NS.SystemDownDisplayEvent = SystemDownDisplayEvent;
}());

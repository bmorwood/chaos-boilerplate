(function(){
<<<<<<< HEAD
    /**
     * AbstractEvent is used as the base class for other events to extend from.
     *
     * @class AbstractEvent
     * @constructor
     * @param {Event} $type type is the event.
     * @namespace chaos.events
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var AbstractEvent = function($type) { 
		this.type = $type;
	};
	
	var p = AbstractEvent.prototype;
<<<<<<< HEAD
    /**
     * holds the event assigned to this instance.
     *
     * @property type
     * @type {String}
     * @default null
     */
	p.type;
    /**
     * used to reference the target that this event is assigned to.
     *
     * @property target
     * @type {Object}
     * @default null
     */
	p.target;

    /**
     * dispatch the event.
     *
     * @method dispatch
     */
	p.dispatch = function () {
        chaos.EventDispatcher.getInstance().dispatchEvent(this);
	};
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return '[AbstractEvent]';
	};

    chaos.AbstractEvent = AbstractEvent;
=======
	
	p.type;
	p.target;
	
	p.dispatch = function () {
        Chaos.EventDispatcher.getInstance().dispatchEvent(this);
	};
	
	p.toString = function (){
		return "[AbstractEvent]";
	};

    Chaos.AbstractEvent = AbstractEvent;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
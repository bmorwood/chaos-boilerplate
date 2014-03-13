(function(){
<<<<<<< HEAD
    /**
     * The class dispatches events so listeners can react accordingly.
     *
     * @class EventDispatcher
     * @constructor
     * @param {Object} $target assign a object to the event.
     * @namespace chaos.events
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var EventDispatcher = function($target) {
		this.target = $target;
		this.events = [];
	};

	EventDispatcher.instance = null;

	EventDispatcher.getInstance = function (){
		if(EventDispatcher.instance===null){
			EventDispatcher.instance = new EventDispatcher();
		}	
		return EventDispatcher.instance;
	};
	
	var p = EventDispatcher.prototype;
<<<<<<< HEAD
    /**
     * used to reference the target that this event is assigned to.
     *
     * @property target
     * @type {Object}
     * @default null
     */
	p.target;
    /**
     * contains all the events and listeners.
     *
     * @property events
     * @type {Array}
     * @default null
     */
	p.events;
    /**
     * initialize is used to run code after the class is instantiated.
     * NOTE: you can delete this method and add your code right in the constructor.
     * @method initialize
     */
	p.initialize = function ($target){ 
		this.events = [];
	};

    /**
     * used to find the event(s) and associated listener(s) calls their assigned methods.
     *  __example__
     *  ```
     *  new chaos.LocalizationEvent(chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY).dispatch();
     *  ```
     * @method dispatchEvent
     * @param {Event} $event is the event that is used to call the listeners assigned methods.
     * @return {Boolean} returns 'true' a listener was found and called and 'false' if no listeners were found.
     */
	p.dispatchEvent = function ( $event ) 
	{
        $event.target = (this.target ? this.target : $event.target);

        var eventListeners = this.events[$event.type];
        if(eventListeners){
            for (var i = eventListeners.length - 1; i >= 0; i--){
                eventListeners[i].listener.call(eventListeners[i].context, $event);
            }

            return true;
        }

        return false;
	};

    //alias
    p.emit = p.dispatchEvent;
    /**
     * Find the event(s) and associated listener(s) and calls their assigned methods.
     *  __example__
     *  ```
     *  chaos.EventDispatcher.getInstance().addEventListener(chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this);
     *  ```
     * @method addEventListener
     * @param {Event} $type is the event that is used to call the listeners assigned methods.
     * @param {Method} $listener is the method to call when the an event is dispatched.
     * @param {Object} $context holds the class reference that is used to call the method and keep it in the relevant context of the class.
     */
=======
	
	p.target;
	p.events;
	
	p.initialize = function ($target){ 
		this.events = [];
	};
	
	p.dispatchEvent = function ( $event ) 
	{
		if(this.target !== null || this.target !== undefined)
			$event.target = this.target;
		
		var eventListeners = this.events[$event.type];
		if(!eventListeners) return false;
		
		for (var i = eventListeners.length - 1; i >= 0; i--){
			
			if(eventListeners[i] != null){
				//Chaos.logger.log(this, eventListeners[i], $event );
				eventListeners[i].listener.call(eventListeners[i].context, $event);
			}
		};
		
		return true;
	};
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	p.addEventListener = function( $type, $listener, $context) 
	{
		
		if($context === undefined) {debugger}
		if($listener === undefined) {debugger}
		if($type === undefined) {debugger}

<<<<<<< HEAD
        if(this.hasEventListener($type, $listener, $context)) chaos.logger.log('hasEventListener ' + $type);
		
		if(!this.events[$type]){
            this.events[$type] = [{listener: $listener, context: $context}];
=======
        if(this.hasEventListener($type, $listener, $context)) Chaos.logger.log('hasEventListener ' + $type);
		
		if(!this.events[$type]){
			this.events[$type] = [];
            this.events[$type].push({listener: $listener, context: $context});
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
		}else{
			this.events[$type].push({listener: $listener, context: $context});
		}
	};
<<<<<<< HEAD

	//alias
    p.on = p.addEventListener;

	 /**
     * Remove an event listener.
     *  __example__
     *  ```
     *  chaos.EventDispatcher.getInstance().removeEventListener(chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this);
     *  ```
     * @method removeEventListener
     * @param {Event} $type is the event that is used to call the listeners assigned methods.
     * @param {Method} $listener is the method to call when the an event is dispatched.
     * @param {Object} $context holds the class reference that is used to call the method and keep it in the relevant context of the class.
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	p.removeEventListener = function( $type, $listener, $context ) 
	{

        if($context === undefined) {debugger}
        if($listener === undefined) {debugger}
        if($type === undefined) {debugger}
		
		var eventListeners = this.events[$type];

		if(!eventListeners) return false;
		for (var i = eventListeners.length - 1; i >= 0; i--){
			if(eventListeners[i].listener === $listener && eventListeners[i].context ===  $context){
                eventListeners[i] = null;
				delete eventListeners[i];
                eventListeners.splice(i, 1);
			}
		}

		if(this.events[$type].length <= 0){
			this.events[$type] = null;
			delete this.events[$type];
		}
	};
<<<<<<< HEAD
    /**
     * Check to see if there are any event listeners for event, method and context.
     *  __example__
     *  ```
     *  chaos.EventDispatcher.getInstance().hasEventListener(chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this);
     *  ```
     * @method hasEventListener
     * @param {Event} $type is the event that is used to call the listeners assigned methods.
     * @param {Method} $listener is the method to call when the an event is dispatched.
     * @param {Object} $context holds the class reference that is used to call the method and keep it in the relevant context of the class.
     * @return {Boolean} 'true' if event listener is assigned already.'false' if no event listener was found.
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	p.hasEventListener = function ($type, $listener, $context){
		
		if($context === undefined) {debugger}
		
		var listeners = this.events[$type];
		if(!listeners) return false;
		
        for (var i = listeners.length - 1; i >= 0; i--){
		    if(listeners[i].listener === $listener && listeners[i].context === $context) return true;
        }
		
		return false;
	};
<<<<<<< HEAD
    /**
     * Check to see if there are any event listeners for event, method and context.
     *  __example__
     *  ```
     *  chaos.EventDispatcher.getInstance().getListenersForEvent(chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY);
     *  ```
     * @method getListenersForEvent
     * @param {Event} $event is the event that is used to call the listeners assigned methods.
     * @return {Array} returns an 'Array' of classes that are assigned to an 'Event'.
     */
	p.getListenersForEvent = function($event){
        return _.pluck(this.events[$event], 'context');
    };

	/**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function () {
		return 'EventDispatcher';
	};

    chaos.EventDispatcher = EventDispatcher;
=======

    Chaos.EventDispatcher = EventDispatcher;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
(function(){
<<<<<<< HEAD
    /**
     * AbstractInitializer is used as the base class for other events to extend from.
     *
     * @class AbstractInitializer
     * @constructor
     * @namespace chaos.initializers
     */
	var AbstractInitializer = function() {};
	
	var p = AbstractInitializer.prototype;
    /**
    * name of the initializer.
    *
    * @property name
    * @type {String}
    * @default null
    */
	p.name;
    /**
     * Called when the initializer is finished and is successful.
     *
     * @property successEventName
     * @type {Event}
     * @default null
     */
	p.successEventName;
    /**
     *  Called when the initializer is finished and has failed.
     *
     * @property faultEventName
     * @type {Event}
     * @default null
     */
=======
	
	var AbstractInitializer = function() {};
	
	var p = AbstractInitializer.prototype;
	
	p.name;
	p.successEventName;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	p.faultEventName;
	
	p.$initialize = function ($name, $successEventName, $faultEventName){
		this.name = $name;

<<<<<<< HEAD
		this.successEventName = $successEventName||'';
		this.faultEventName = $faultEventName||'';
		
		if (this.successEventName != '')
            chaos.EventDispatcher.getInstance().addEventListener(this.successEventName, this.success, this);
			
		if (this.faultEventName != '')
            chaos.EventDispatcher.getInstance().addEventListener(this.faultEventName, this.fault, this);
	};
    /**
    * $execute is used to execute code that needs to complete before the application is ready to use. NOTE: execute is called by the orchesterator {{#crossLink "chaos.orchestrators.InitializationSequenceOrchestrator"}}{{/crossLink}}.
    *
    * @method $execute
    * @final
    */
	p.$execute = function (){
		if (this.successEventName === '' && this.faultEventName === ''){
			chaos.logger.info('Initializer: ' + this.name + ' executed.');
			new chaos.InitializerSuccessEvent(this.name).dispatch();
		}	
	};
    /**
    * execute is used as a method placeholder to be overwriting when extended by another class / prototype, to call the super 'execute' use $execute.
    *
    * @method execute
    */
	p.execute = function (){
		this.$execute();
	};
    /**
    * $success is used to tell the orchesterator that it can continue to the next initializer in the sequence. $success should be called when the initializer is complete.
    *
    * @method $success
    * @final
    */
	p.$success = function($event){
		this.removeCompletionListeners();
        chaos.logger.info('Initializer: ' + this.name + ' succeeded.');
		new chaos.InitializerSuccessEvent(this.name).dispatch();
	};
    /**
    * success is used as a method placeholder to be overwriting when extended by another class / prototype, to call the super 'success' use $success.
    *
    * @method success
    */
	p.success = function($event) {
		this.$success($event);
	};
    /**
    * $fault is used to tell the orchesterator that the initialize failed. $fault should be called when the initializer has failed. the {{#crossLink "chaos.orchestrators.InitializationSequenceOrchestrator"}}{{/crossLink}} will fire the event {{#crossLink "chaos.events.system.SystemDownDisplayEvent:SHOW"}}{{/crossLink}}.
    *
    * @method $fault
    * @final
    */
	p.$fault = function($event) {
		this.removeCompletionListeners();
        chaos.logger.error('Initializer: ' + this.name + ' failed.');
		new chaos.InitializerFaultEvent(this.name).dispatch();
	};
    /**
    * fault is used as a method placeholder to be overwriting when extended by another class / prototype, to call the super 'fault' use $fault.
    *
    * @method fault
    */
	p.fault = function($event) {
		this.$fault($event);
	};
    /**
    * reset is used when reinitializing the aplication.
    *
    * @method $reset
    */
	p.$reset = function(){

		if (!_.isEmpty(this.successEventName) && !chaos.EventDispatcher.getInstance().hasEventListener(this.successEventName, this.success, this))   {
            chaos.EventDispatcher.getInstance().addEventListener(this.successEventName, this.success, this);
        }

		if (!_.isEmpty(this.faultEventName) && !chaos.EventDispatcher.getInstance().hasEventListener(this.faultEventName, this.fault, this)) {
            chaos.EventDispatcher.getInstance().addEventListener(this.faultEventName, this.fault, this);
        }
	};
    /**
    * reset is used when reinitializing the aplication.
    *
    * @method reset
    */
	p.reset = function (){
		this.$reset();
	};
    /**
    * remove listeners after the initialization of the initializer so its not listeneing for changes in other initializers.
    *
    * @method removeCompletionListeners
    */
	p.removeCompletionListeners = function() {
        chaos.EventDispatcher.getInstance().removeEventListener(this.successEventName, this.success, this);
        chaos.EventDispatcher.getInstance().removeEventListener(this.faultEventName, this.fault, this);
	};

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'AbstractInitializer';
	};

    chaos.AbstractInitializer = AbstractInitializer;
=======
		this.successEventName = $successEventName||"";
		this.faultEventName = $faultEventName||"";
		
		if (this.successEventName != "")
            Chaos.EventDispatcher.getInstance().addEventListener(this.successEventName, this.success, this);
			
		if (this.faultEventName != "")
            Chaos.EventDispatcher.getInstance().addEventListener(this.faultEventName, this.fault, this);
	};
	
	p.$execute = function (){
		if (this.successEventName === "" && this.faultEventName === ""){
			Chaos.logger.info("Initializer: " + this.name + " executed.");
			new Chaos.InitializerSuccessEvent(this.name).dispatch();
		}	
	};
	
	p.execute = function (){
		this.$execute();
	};
	
	p.$success = function($event){
		this.removeCompletionListeners();
        Chaos.logger.info("Initializer: " + this.name + " succeeded.");
		new Chaos.InitializerSuccessEvent(this.name).dispatch();
	};
	
	p.success = function($event) {
		this.$success($event);
	};
	
	p.$fault = function($event) {
		this.removeCompletionListeners();
        Chaos.logger.error("Initializer: " + this.name + " failed.");
		new Chaos.InitializerFaultEvent(this.name).dispatch();
	};
	
	p.fault = function($event) {
		this.$fault($event);
	};
	
	p.$reset = function(){

		if (!_.isEmpty(this.successEventName) && !Chaos.EventDispatcher.getInstance().hasEventListener(this.successEventName, this.success, this))   {
            Chaos.EventDispatcher.getInstance().addEventListener(this.successEventName, this.success, this);
        }

		if (!_.isEmpty(this.faultEventName) && !Chaos.EventDispatcher.getInstance().hasEventListener(this.faultEventName, this.fault, this)) {
            Chaos.EventDispatcher.getInstance().addEventListener(this.faultEventName, this.fault, this);
        }
	};
	
	p.reset = function (){
		this.$reset();
	};
	
	p.removeCompletionListeners = function() {
        Chaos.EventDispatcher.getInstance().removeEventListener(this.successEventName, this.success, this);
        Chaos.EventDispatcher.getInstance().removeEventListener(this.faultEventName, this.fault, this);
	};
	

	p.toString = function (){
		return "[AbstractInitializer]";
	};

    Chaos.AbstractInitializer = AbstractInitializer;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
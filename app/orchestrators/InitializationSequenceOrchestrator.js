(function(){
<<<<<<< HEAD
    /**
     * this orchestrator is used to initial the application, it is responsible to load all the initials that are required to start the application.
     *
     * @class InitializationSequenceOrchestrator
     * @constructor
     * @namespace chaos.orchestrators
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var InitializationSequenceOrchestrator = function() {
		if (InitializationSequenceOrchestrator.instance===null) {
			InitializationSequenceOrchestrator.instance = this;
			this.initialize();
		}else{
<<<<<<< HEAD
			chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};
    /**
    * instance is used to holder the singleton class for reference.
    *
    * @property instance
    * @type {Object}
    * @default null
    */
	InitializationSequenceOrchestrator.instance = null;
    /**
    * getInstance returns the only instance of this class. It will also create an istance of the class if it has not been instantiated yet.
    *
    * @method getInstance
    */
=======
			Chaos.logger.error("You should not call the constructor for " + this.toString() + " directly.  It is a singleton, so you should use getInstance()");
		}
	};

	InitializationSequenceOrchestrator.instance = null;

>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	InitializationSequenceOrchestrator.getInstance = function (){
		
		if(InitializationSequenceOrchestrator.instance===null){
			InitializationSequenceOrchestrator.instance = new InitializationSequenceOrchestrator();
		}
			
		return InitializationSequenceOrchestrator.instance;
	};
	
	var p = InitializationSequenceOrchestrator.prototype;
<<<<<<< HEAD
    /**
    * set to true when the orchestrator is finished.
    *
    * @property initializationComplete
    * @type {Boolean}
    * @default false
    */
	p.initializationComplete = false
    /**
    * used to queue the master sequence.
    *
    * @property initializationComplete
    * @type {Array}
    * @default []
    */
	p.queue = [];
    /**
    * used to store the master sequence of all initializers needed to run teh application.
    *
    * @property MASTER_SEQUENCE
    * @type {Array}
    * @default []
    */
    p.MASTER_SEQUENCE = [];
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
	p.initialize = function (){
        var APP_CONFIG = new chaos.AppConfigurationInitializer();
        var LOCALIZATION = new chaos.LocalizationInitializer();
=======
	
	p.initializationComplete = false
	p.queue = [];
	p.MASTER_SEQUENCE = [];

	p.initialize = function (){
        var APP_CONFIG = new Chaos.AppConfigurationInitializer();
        var LOCALIZATION = new Chaos.LocalizationInitializer();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079

        this.MASTER_SEQUENCE.push(APP_CONFIG);
        this.MASTER_SEQUENCE.push(LOCALIZATION);
	};
<<<<<<< HEAD
    /**
    * starts the orchestrator.
    * @method run
    */
	p.run = function () {

        chaos.EventDispatcher.getInstance().addEventListener(chaos.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
        chaos.EventDispatcher.getInstance().addEventListener(chaos.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);

		chaos.logger.info('beginning initialization...');
		this.queue = _.clone(this.MASTER_SEQUENCE).reverse(); //reverse because we're going to use pop() method later
		this.next();
	};
    /**
    * called when a initilaizer is finished and the next initializer is set to run.
    * @method next
    */
=======
	
	p.run = function () {

        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);

		Chaos.logger.info("beginning initialization...");
		this.queue = _.clone(this.MASTER_SEQUENCE).reverse(); //reverse because we're going to use pop() method later
		this.next();
	};
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	p.next = function (){
		
		if (this.queue.length > 0) {
			var pctComplete = (this.MASTER_SEQUENCE.length-this.queue.length)/this.MASTER_SEQUENCE.length;
<<<<<<< HEAD
			new chaos.PreloaderEvent(chaos.PreloaderEvent.STEP, pctComplete).dispatch();
			
			var nextItem = this.queue.pop();
			chaos.logger.info('Executing initializer: ' + nextItem.toString());
=======
			new Chaos.PreloaderEvent(Chaos.PreloaderEvent.STEP, pctComplete).dispatch();
			
			var nextItem = this.queue.pop();
			Chaos.logger.info("Executing initializer: " + nextItem.toString());
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
			nextItem.execute();
		}else{			
			if (!this.initializationComplete) {
				this.initializationComplete = true;
<<<<<<< HEAD
                chaos.EventDispatcher.getInstance().removeEventListener(chaos.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
                chaos.EventDispatcher.getInstance().removeEventListener(chaos.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);
				new chaos.PreloaderEvent(chaos.PreloaderEvent.STEP, 1).dispatch();
				new chaos.InitializationCompleteEvent().dispatch();
			    new chaos.AbstractEvent(chaos.Controller.NOTIFY_APPLICATION_ACTIVATED).dispatch();
				new chaos.PreloaderEvent(chaos.PreloaderEvent.COMPLETE).dispatch();
=======
                Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
                Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);
				new Chaos.PreloaderEvent(Chaos.PreloaderEvent.STEP, 1).dispatch();
				new Chaos.InitializationCompleteEvent().dispatch();
			    new Chaos.AbstractEvent(Chaos.Controller.NOTIFY_APPLICATION_ACTIVATED).dispatch();
				new Chaos.PreloaderEvent(Chaos.PreloaderEvent.COMPLETE).dispatch();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079

			}
		}
	};
<<<<<<< HEAD
    /**
    * called when a initilaizer is finished without errors.
    * @method handleInitializerSuccess
    */
	p.handleInitializerSuccess = function ($event){
		this.next();
	};
    /**
    * called when a initilaizer is finished with errors.
    * @method handleInitializerFault
    */
	p.handleInitializerFault = function($event){
		new chaos.SystemDownEvent(chaos.SystemDownDisplayEvent.SHOW).dispatch();
	};
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'InitializationSequenceOrchestrator';
	};
	
    chaos.InitializationSequenceOrchestrator = InitializationSequenceOrchestrator;
=======
	
	p.handleInitializerSuccess = function ($event){
		this.next();
	};
	
	p.handleInitializerFault = function($event){
		new Chaos.SystemDownEvent(Chaos.SystemDownDisplayEvent.SHOW).dispatch();
	};

	p.toString = function (){
		return "[InitializationSequenceOrchestrator]";
	};
	
    Chaos.InitializationSequenceOrchestrator = InitializationSequenceOrchestrator;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
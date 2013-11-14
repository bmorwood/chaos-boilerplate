(function(){
	
	var InitializationSequenceOrchestrator = function() {
		if (InitializationSequenceOrchestrator.instance===null) {
			InitializationSequenceOrchestrator.instance = this;
			this.initialize();
		}else{
			Chaos.logger.error("You should not call the constructor for " + this.toString() + " directly.  It is a singleton, so you should use getInstance()");
		}
	};

	InitializationSequenceOrchestrator.instance = null;

	InitializationSequenceOrchestrator.getInstance = function (){
		
		if(InitializationSequenceOrchestrator.instance===null){
			InitializationSequenceOrchestrator.instance = new InitializationSequenceOrchestrator();
		}
			
		return InitializationSequenceOrchestrator.instance;
	};
	
	var p = InitializationSequenceOrchestrator.prototype;
	
	p.initializationComplete = false
	p.queue = [];
	p.MASTER_SEQUENCE = [];

	p.initialize = function (){
        var APP_CONFIG = new Chaos.AppConfigurationInitializer();
        var LOCALIZATION = new Chaos.LocalizationInitializer();

        this.MASTER_SEQUENCE.push(APP_CONFIG);
        this.MASTER_SEQUENCE.push(LOCALIZATION);
	};
	
	p.run = function () {

        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);

		Chaos.logger.info("beginning initialization...");
		this.queue = _.clone(this.MASTER_SEQUENCE).reverse(); //reverse because we're going to use pop() method later
		this.next();
	};
	
	p.next = function (){
		
		if (this.queue.length > 0) {
			var pctComplete = (this.MASTER_SEQUENCE.length-this.queue.length)/this.MASTER_SEQUENCE.length;
			new Chaos.PreloaderEvent(Chaos.PreloaderEvent.STEP, pctComplete).dispatch();
			
			var nextItem = this.queue.pop();
			Chaos.logger.info("Executing initializer: " + nextItem.toString());
			nextItem.execute();
		}else{			
			if (!this.initializationComplete) {
				this.initializationComplete = true;
                Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
                Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);
				new Chaos.PreloaderEvent(Chaos.PreloaderEvent.STEP, 1).dispatch();
				new Chaos.InitializationCompleteEvent().dispatch();
			    new Chaos.AbstractEvent(Chaos.Controller.NOTIFY_APPLICATION_ACTIVATED).dispatch();
				new Chaos.PreloaderEvent(Chaos.PreloaderEvent.COMPLETE).dispatch();

			}
		}
	};
	
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
}());
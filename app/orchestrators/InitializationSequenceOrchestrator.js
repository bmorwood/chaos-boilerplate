(function(){
    /**
     * this orchestrator is used to initial the application, it is responsible to load all the initials that are required to start the application.
     *
     * @class InitializationSequenceOrchestrator
     * @constructor
     * @namespace chaos.orchestrators
     */
	var InitializationSequenceOrchestrator = Chaos.Singleton.extend({
        name: 'InitializationSequenceOrchestrator',
        initializationComplete: false,
        queue: [],
        MASTER_SEQUENCE: [],
        initialize: function (){
            var APP_CONFIG = new Chaos.NS.AppConfigurationInitializer();
            var LOCALIZATION = new Chaos.NS.LocalizationInitializer();

            this.MASTER_SEQUENCE.push(APP_CONFIG);
            this.MASTER_SEQUENCE.push(LOCALIZATION);
        },
        run: function() {
            Chaos.EventDispatcher.getInstance().addEventListener(Chaos.NS.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
            Chaos.EventDispatcher.getInstance().addEventListener(Chaos.NS.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);

            Chaos.NS.logger.info('beginning initialization...');
            this.queue = _.clone(this.MASTER_SEQUENCE).reverse(); //reverse because we're going to use pop() method later
            this.next();
        },
        next: function (){
            if (this.queue.length > 0) {
                var pctComplete = (this.MASTER_SEQUENCE.length-this.queue.length)/this.MASTER_SEQUENCE.length;
                new Chaos.NS.PreloaderEvent({ type: Chaos.NS.PreloaderEvent.STEP, percentage: pctComplete }).dispatch();

                var nextItem = this.queue.pop();
                Chaos.NS.logger.info('Executing initializer: ' + nextItem.toString());
                nextItem.execute();
            }else{
                if (!this.initializationComplete) {
                    this.initializationComplete = true;
                    Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.NS.InitializerSuccessEvent.SUCCESS, this.handleInitializerSuccess, this);
                    Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.NS.InitializerFaultEvent.FAULT, this.handleInitializerFault, this);
                    new Chaos.NS.PreloaderEvent({ type: Chaos.NS.PreloaderEvent.STEP, percentage: 1 }).dispatch();
                    new Chaos.NS.InitializationCompleteEvent().dispatch();
                    new Chaos.Event(Chaos.Controller.NOTIFY_APPLICATION_ACTIVATED).dispatch();
                    new Chaos.NS.PreloaderEvent({ type: Chaos.NS.PreloaderEvent.COMPLETE }).dispatch();
                }
            }
        },
        handleInitializerSuccess : function() {
            this.next();
        },
        handleInitializerFault: function () {
            new Chaos.NS.SystemDownEvent(Chaos.NS.SystemDownDisplayEvent.SHOW).dispatch();
        }
    });

    Chaos.NS.InitializationSequenceOrchestrator = InitializationSequenceOrchestrator;
}());

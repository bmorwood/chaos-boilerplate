(function(){
	
	var AbstractController = function() { 
		this.initialize();
	};
	
	var p = AbstractController.prototype;
	
	AbstractController.commands = [];
	AbstractController.enabled = true;

	p.addCommand = function ($eventName, $command){
        Chaos.EventDispatcher.getInstance().addEventListener($eventName, AbstractController.handleEvent, this);
		AbstractController.commands[$eventName] = $command;
	};
	
	p.removeCommand = function ($eventName, $command){
		AbstractController.commands[$eventName] = null;
		delete AbstractController.commands[$eventName];
	};
	
	p.$initialize = function (){ };
	p.initialize = function (){ this.$initialize() };
	
	AbstractController.handleEvent = function ($event) {
		
		if (AbstractController.enabled) {
			var classRef = AbstractController.commands[$event.type];

			if(!classRef){
                Chaos.logger.warn('command class not found for event type', $event.type);
			} else {
				var commandClass = new classRef();
				commandClass.execute($event);
			}
		}
	};

	p.toString = function (){
		return '[AbstractController]';
	};

    Chaos.AbstractController = AbstractController;
}());
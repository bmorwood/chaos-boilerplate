(function(){
	
	var SystemDownCommand = function() {
		this.initialize();
	};
	
	var p = SystemDownCommand.prototype;
	
	p.initialize = function (){};
	
	p.execute = function($event){

		if($event.instruction == Chaos.SystemDownDisplayEvent.SHOW)
			new Chaos.SystemDownDisplayEvent(Chaos.SystemDownDisplayEvent.SHOW).dispatch();
		if($event.instruction == Chaos.SystemDownDisplayEvent.HIDE)
			new Chaos.SystemDownDisplayEvent(Chaos.SystemDownDisplayEvent.HIDE).dispatch();
	}

	p.toString = function (){
		return '[SystemDownCommand]';
	};
	
    Chaos.SystemDownCommand = SystemDownCommand;
}());
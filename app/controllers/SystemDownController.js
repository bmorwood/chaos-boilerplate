(function(){
	
	var SystemDownController = function() {
		
		if (SystemDownController.instance===null) {
			SystemDownController.instance = this;
			this.initialize();
		}else{
			Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	SystemDownController.instance = null;

	SystemDownController.getInstance = function (){
		if(SystemDownController.instance===null){
			SystemDownController.instance = new SystemDownController();
		}	
		return SystemDownController.instance;
	};

    var p = SystemDownController.prototype = new Chaos.AbstractController();
	p.constructor = SystemDownController;
	
	p.initialize = function (){
		this.addCommand(Chaos.SystemDownEvent.SYSTEM_DOWN, Chaos.SystemDownCommand); //reacts to changes
	};
	
	p.toString = function (){
		return '[SystemDownController]';
	};

    Chaos.SystemDownController = SystemDownController;
}());
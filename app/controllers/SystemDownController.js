(function(){
<<<<<<< HEAD
    /**
     * SystemDownController controller is used to listen for system errors and report to commands.
     *
     * @class SystemDownController
     * @constructor
     * @namespace chaos.controllers
     * @extends chaos.controllers.AbstractController
     * @uses chaos.SystemDownEvent
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var SystemDownController = function() {
		
		if (SystemDownController.instance===null) {
			SystemDownController.instance = this;
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
	SystemDownController.instance = null;
    /**
    * getInstance returns the only instance of this class. It will also create an istance of the class if it has not been instantiated yet.
    *
    * @method getInstance
    */
=======
			Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	SystemDownController.instance = null;

>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	SystemDownController.getInstance = function (){
		if(SystemDownController.instance===null){
			SystemDownController.instance = new SystemDownController();
		}	
		return SystemDownController.instance;
	};

<<<<<<< HEAD
    var p = SystemDownController.prototype = new chaos.AbstractController();
	p.constructor = SystemDownController;
	
	p.initialize = function (){
		this.addCommand(chaos.SystemDownEvent.SYSTEM_DOWN, chaos.SystemDownCommand);
	};

	p.toString = function (){
		return 'SystemDownController';
	};

    chaos.SystemDownController = SystemDownController;
=======
    var p = SystemDownController.prototype = new Chaos.AbstractController();
	p.constructor = SystemDownController;
	
	p.initialize = function (){
		this.addCommand(Chaos.SystemDownEvent.SYSTEM_DOWN, Chaos.SystemDownCommand); //reacts to changes
	};
	
	p.toString = function (){
		return '[SystemDownController]';
	};

    Chaos.SystemDownController = SystemDownController;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
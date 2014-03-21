(function(){
    /**
     * SystemDownController controller is used to listen for system errors and report to commands.
     *
     * @class SystemDownController
     * @constructor
     * @namespace chaos.controllers
     * @extends chaos.controllers.AbstractController
     * @uses chaos.SystemDownEvent
     */
	var SystemDownController = function() {
		
		if (SystemDownController.instance===null) {
			SystemDownController.instance = this;
			this.initialize();
		}else{
            Chaos.NS.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
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
	SystemDownController.getInstance = function (){
		if(SystemDownController.instance===null){
			SystemDownController.instance = new SystemDownController();
		}	
		return SystemDownController.instance;
	};

    var p = SystemDownController.prototype = new Chaos.NS.AbstractController();
	p.constructor = SystemDownController;
	
	p.initialize = function (){
		this.addCommand(Chaos.NS.SystemDownEvent.SYSTEM_DOWN, Chaos.NS.SystemDownCommand);
	};

	p.toString = function (){
		return 'SystemDownController';
	};

    Chaos.NS.SystemDownController = SystemDownController;
}());
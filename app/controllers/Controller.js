(function(){
    /**
     * controller of Controller.
     *
     * @class Controller
     * @constructor
     * @namespace chaos.controllers
     * @extends chaos.controllers.AbstractController
     */
	var Controller = function() {
		if (Controller.instance===null) {
			Controller.instance = this;
			this.initialize();
		}else{
			chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

    /**
    * instance is the class, this is used for singleton classes.
    *
    * @property instance
    * @type {Object}
    * @default null
    */
	Controller.instance = null;

    /**
    * getInstance is called to get the single instance of this class.
    *
    * @method getInstance
    */
	Controller.getInstance = function (){
		if(Controller.instance===null){
			Controller.instance = new Controller();
		}	
		return Controller.instance;
	};
	
	var p = Controller.prototype = new chaos.AbstractController();
	p.constructor = Controller;
	
	p.initialize = function (){ };

	p.toString = function (){
		return 'Controller';
	};

    chaos.Controller = Controller;
}());
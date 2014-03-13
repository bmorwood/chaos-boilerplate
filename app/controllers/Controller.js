(function(){
<<<<<<< HEAD
    /**
     * controller of Controller.
     *
     * @class Controller
     * @constructor
     * @namespace chaos.controllers
     * @extends chaos.controllers.AbstractController
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var Controller = function() {
		if (Controller.instance===null) {
			Controller.instance = this;
			this.initialize();
		}else{
<<<<<<< HEAD
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
=======
			Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	Controller.instance = null;

>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	Controller.getInstance = function (){
		if(Controller.instance===null){
			Controller.instance = new Controller();
		}	
		return Controller.instance;
	};
	
<<<<<<< HEAD
	var p = Controller.prototype = new chaos.AbstractController();
	p.constructor = Controller;
	
	p.initialize = function (){ };

	p.toString = function (){
		return 'Controller';
	};

    chaos.Controller = Controller;
=======
	Controller.SWF_ADDRESS_CHANGE_EVENT = 'swf_address_change_event';	
	Controller.NOTIFY_SWF_LOADER_LOADED = 'notify_swf_loader_loaded';
	Controller.NOTIFY_APPLICATION_ACTIVATED = 'notify_application_activated';
	Controller.NOTIFY_IMG_LOADER_LOADED = 'notify_img_loader_loaded';
	Controller.NOTIFY_SUCCESSFUL_LOGIN = 'notify_successful_login';
	
	var p = Controller.prototype = new Chaos.AbstractController();
	p.constructor = Controller;
	
	p.initialize = function (){ 
		//this.addCommand(UPDATE_SWF_ADDRESS_EVENT, UpdateSwfAddressCommand); //reacts to changes 
	};
	
	p.toString = function (){
		return '[Controller]';
	};

    Chaos.Controller = Controller;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
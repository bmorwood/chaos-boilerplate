(function(){
	
	var Controller = function() {
		if (Controller.instance===null) {
			Controller.instance = this;
			this.initialize();
		}else{
			Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	Controller.instance = null;

	Controller.getInstance = function (){
		if(Controller.instance===null){
			Controller.instance = new Controller();
		}	
		return Controller.instance;
	};
	
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
}());
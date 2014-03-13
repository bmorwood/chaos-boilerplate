(function(){
    /**
     * SystemDownCommand command is used to monitor system errors that require the UI display for the user.
     *
     * @class SystemDownCommand
     * @constructor
     * @uses chaos.events.system.SystemDownDisplayEvent
     * @namespace chaos.commands.system
     */
	var SystemDownCommand = function() {
		this.initialize();
	};
	
	var p = SystemDownCommand.prototype;
    /**
     * initialize is used to run code after the class is instantiated.
     * NOTE: you can delete this method and add your code right in the constructor.
     * @method initialize
     */
	p.initialize = function (){};
    /**
     * execute is used to run code when a specific event is fired, the controllers are setup to map a command to a event. NOTE: execute is called by {{#crossLink "chaos.controllers.SystemDownController"}}{{/crossLink}}.
     *
     * @method execute
     * @final
     */
	p.execute = function($event){

		if($event.instruction == chaos.SystemDownDisplayEvent.SHOW)
			new chaos.SystemDownDisplayEvent(chaos.SystemDownDisplayEvent.SHOW).dispatch();
		if($event.instruction == chaos.SystemDownDisplayEvent.HIDE)
			new chaos.SystemDownDisplayEvent(chaos.SystemDownDisplayEvent.HIDE).dispatch();
	}
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'SystemDownCommand';
	};
	
    chaos.SystemDownCommand = SystemDownCommand;
}());
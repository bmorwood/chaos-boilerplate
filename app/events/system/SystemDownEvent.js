(function(){


	var SystemDownEvent = function($instruction) {
		this.instruction = $instruction;
		this.type = SystemDownEvent.SYSTEM_DOWN;
	};

    SystemDownEvent.SYSTEM_DOWN = 'chaos.systemdownevent::system.down';

	var p = SystemDownEvent.prototype = new Chaos.Core.Event({
        name: 'SystemDownEvent',
        instruction: SystemDownEvent.instruction,
        type: SystemDownEvent.SYSTEM_DOWN
    });
	p.constructor = SystemDownEvent;


    chaos.SystemDownEvent = SystemDownEvent;
}());

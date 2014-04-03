(function(){

	var SystemDownCommand = Chaos.Class.extend({
        name: 'SystemDownCommand',
        execute: function () {
            if($event.instruction == Chaos.NS.SystemDownDisplayEvent.SHOW)
                new Chaos.NS.SystemDownDisplayEvent(Chaos.NS.SystemDownDisplayEvent.SHOW).dispatch();
            if($event.instruction == Chaos.NS.SystemDownDisplayEvent.HIDE)
                new Chaos.NS.SystemDownDisplayEvent(Chaos.NS.SystemDownDisplayEvent.HIDE).dispatch();
        }
    });

    Chaos.NS.SystemDownCommand = SystemDownCommand;
}());
(function(){
	var SystemDownController = Chaos.Controller.extend({
        name: 'SystemDownController',
        init: function() {
            this.addCommand(Chaos.NS.SystemDownEvent.SYSTEM_DOWN, Chaos.NS.SystemDownCommand);
        }
    });

    Chaos.NS.SystemDownController = SystemDownController;
}());
(function(){
	
	var AbstractInitializer = function() {};
	
	var p = AbstractInitializer.prototype;
	
	p.name;
	p.successEventName;
	p.faultEventName;
	
	p.$initialize = function ($name, $successEventName, $faultEventName){
		this.name = $name;

		this.successEventName = $successEventName||"";
		this.faultEventName = $faultEventName||"";
		
		if (this.successEventName != "")
            Chaos.EventDispatcher.getInstance().addEventListener(this.successEventName, this.success, this);
			
		if (this.faultEventName != "")
            Chaos.EventDispatcher.getInstance().addEventListener(this.faultEventName, this.fault, this);
	};
	
	p.$execute = function (){
		if (this.successEventName === "" && this.faultEventName === ""){
			Chaos.logger.info("Initializer: " + this.name + " executed.");
			new Chaos.InitializerSuccessEvent(this.name).dispatch();
		}	
	};
	
	p.execute = function (){
		this.$execute();
	};
	
	p.$success = function($event){
		this.removeCompletionListeners();
        Chaos.logger.info("Initializer: " + this.name + " succeeded.");
		new Chaos.InitializerSuccessEvent(this.name).dispatch();
	};
	
	p.success = function($event) {
		this.$success($event);
	};
	
	p.$fault = function($event) {
		this.removeCompletionListeners();
        Chaos.logger.error("Initializer: " + this.name + " failed.");
		new Chaos.InitializerFaultEvent(this.name).dispatch();
	};
	
	p.fault = function($event) {
		this.$fault($event);
	};
	
	p.$reset = function(){

		if (!_.isEmpty(this.successEventName) && !Chaos.EventDispatcher.getInstance().hasEventListener(this.successEventName, this.success, this))   {
            Chaos.EventDispatcher.getInstance().addEventListener(this.successEventName, this.success, this);
        }

		if (!_.isEmpty(this.faultEventName) && !Chaos.EventDispatcher.getInstance().hasEventListener(this.faultEventName, this.fault, this)) {
            Chaos.EventDispatcher.getInstance().addEventListener(this.faultEventName, this.fault, this);
        }
	};
	
	p.reset = function (){
		this.$reset();
	};
	
	p.removeCompletionListeners = function() {
        Chaos.EventDispatcher.getInstance().removeEventListener(this.successEventName, this.success, this);
        Chaos.EventDispatcher.getInstance().removeEventListener(this.faultEventName, this.fault, this);
	};
	

	p.toString = function (){
		return "[AbstractInitializer]";
	};

    Chaos.AbstractInitializer = AbstractInitializer;
}());
(function(){
	
	var LocalizationInitializer = function() {
		this.initialize();
	};

	var p = LocalizationInitializer.prototype = new Chaos.AbstractInitializer();
	p.constructor = LocalizationInitializer;
	
	p.localizationProxy;
	
	p.initialize = function (){
		this.$initialize('LOCALIZATION_INITIALIZER',
			Chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS,
			Chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT
			);
		this.localizationProxy = Chaos.LocalizationProxy.getInstance();
	};
	
	p.execute = function (){
		this.$execute();
		this.localizationProxy.loadLocalizedContent();
	};
	
	p.success = function ($event){

		if(Chaos.LocalizationUtility.initialized)
			LocalizationUtility.initInstance(this.localizationProxy.localizedContent);
		else
			Chaos.LocalizationUtility.repopulate(this.localizationProxy.localizedContent);

		Chaos.LC.initialize();
		this.$success($event);
	};

	p.toString = function (){
		return '[LocalizationInitializer]';
	};
	
Chaos.LocalizationInitializer = LocalizationInitializer;
}());
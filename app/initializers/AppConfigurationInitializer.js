(function(){
	
	var AppConfigurationInitializer = function() {
		this.initialize();
	};

	var p = AppConfigurationInitializer.prototype = new Chaos.AbstractInitializer();
	p.constructor = AppConfigurationInitializer;
	
	p.initialize = function (){		
		this.$initialize(
			'APP_CONFIG_INITIALIZER',
            Chaos.AppConfigEvent.CONFIG_READY,
            Chaos.AppConfigEvent.CONFIG_ERROR
			);
	};
	
	p.execute = function (){
		this.$execute();
        //AppConfigurationInitializer.execute.apply(this, arguments)
		//Chaos.AppConfig.getInstance().loadProperties();

        Chaos.AppProperties.getInstance().init();
	};

	p.toString = function (){
		return '[AppConfigurationInitializer]';
	};
	
    Chaos.AppConfigurationInitializer = AppConfigurationInitializer;
}());
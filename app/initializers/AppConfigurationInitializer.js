(function(){
    /**
     * initialize the configuration of teh application.
     *
     * @class AppConfigurationInitializer
     * @constructor
     * @namespace chaos.initializers
     * @extends chaos.initializers.AbstractInitializer
     * @uses chaos.app.AppProperties
     */
	var AppConfigurationInitializer = function() {
		this.initialize();
	};

	var p = AppConfigurationInitializer.prototype = new Chaos.NS.AbstractInitializer();
	p.constructor = AppConfigurationInitializer;
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
	p.initialize = function (){		
		this.$initialize(
			'APP_CONFIG_INITIALIZER',
            Chaos.NS.AppConfigEvent.CONFIG_READY,
            Chaos.NS.AppConfigEvent.CONFIG_ERROR
			);
	};
	
	p.execute = function (){
		this.$execute();

        Chaos.NS.AppProperties.getInstance().init();
	};

	p.toString = function (){
		return 'AppConfigurationInitializer';
	};

    Chaos.NS.AppConfigurationInitializer = AppConfigurationInitializer;
}());
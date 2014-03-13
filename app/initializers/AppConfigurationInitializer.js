(function(){
<<<<<<< HEAD
    /**
     * initialize the configuration of teh application.
     *
     * @class AppConfigurationInitializer
     * @constructor
     * @namespace chaos.initializers
     * @extends chaos.initializers.AbstractInitializer
     * @uses chaos.app.AppProperties
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var AppConfigurationInitializer = function() {
		this.initialize();
	};

<<<<<<< HEAD
	var p = AppConfigurationInitializer.prototype = new chaos.AbstractInitializer();
	p.constructor = AppConfigurationInitializer;
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
	p.initialize = function (){		
		this.$initialize(
			'APP_CONFIG_INITIALIZER',
            chaos.AppConfigEvent.CONFIG_READY,
            chaos.AppConfigEvent.CONFIG_ERROR
=======
	var p = AppConfigurationInitializer.prototype = new Chaos.AbstractInitializer();
	p.constructor = AppConfigurationInitializer;
	
	p.initialize = function (){		
		this.$initialize(
			'APP_CONFIG_INITIALIZER',
            Chaos.AppConfigEvent.CONFIG_READY,
            Chaos.AppConfigEvent.CONFIG_ERROR
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
			);
	};
	
	p.execute = function (){
		this.$execute();
<<<<<<< HEAD

        chaos.AppProperties.getInstance().init();
	};

	p.toString = function (){
		return 'AppConfigurationInitializer';
	};
	
    chaos.AppConfigurationInitializer = AppConfigurationInitializer;
=======
        //AppConfigurationInitializer.execute.apply(this, arguments)
		//Chaos.AppConfig.getInstance().loadProperties();

        Chaos.AppProperties.getInstance().init();
	};

	p.toString = function (){
		return '[AppConfigurationInitializer]';
	};
	
    Chaos.AppConfigurationInitializer = AppConfigurationInitializer;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
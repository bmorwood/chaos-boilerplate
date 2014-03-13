(function(){
<<<<<<< HEAD
    /**
     * initialize the localized copy for the application.
     *
     * @class LocalizationInitializer
     * @constructor
     * @namespace chaos.initializers
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var LocalizationInitializer = function() {
		this.initialize();
	};

<<<<<<< HEAD
	var p = LocalizationInitializer.prototype = new chaos.AbstractInitializer();
	p.constructor = LocalizationInitializer;
	
	p.localizationProxy;
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
	p.initialize = function (){
		this.$initialize('LOCALIZATION_INITIALIZER',
			chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS,
			chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT
			);
		this.localizationProxy = chaos.LocalizationProxy.getInstance();
=======
	var p = LocalizationInitializer.prototype = new Chaos.AbstractInitializer();
	p.constructor = LocalizationInitializer;
	
	p.localizationProxy;
	
	p.initialize = function (){
		this.$initialize('LOCALIZATION_INITIALIZER',
			Chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS,
			Chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT
			);
		this.localizationProxy = Chaos.LocalizationProxy.getInstance();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	};
	
	p.execute = function (){
		this.$execute();
<<<<<<< HEAD
		this.$success();
		//this.localizationProxy.loadLocalizedContent();
	};
	
	p.success = function ($event){
        //chaos.LC.initialize();
        this.$success($event);
	};

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'LocalizationInitializer';
	};
	
chaos.LocalizationInitializer = LocalizationInitializer;
=======
		this.localizationProxy.loadLocalizedContent();
	};
	
	p.success = function ($event){
        Chaos.LC.initialize();
        this.$success($event);
	};

	p.toString = function (){
		return '[LocalizationInitializer]';
	};
	
Chaos.LocalizationInitializer = LocalizationInitializer;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
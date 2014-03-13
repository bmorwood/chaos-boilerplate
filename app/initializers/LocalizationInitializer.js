(function(){
    /**
     * initialize the localized copy for the application.
     *
     * @class LocalizationInitializer
     * @constructor
     * @namespace chaos.initializers
     */
	var LocalizationInitializer = function() {
		this.initialize();
	};

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
	};
	
	p.execute = function (){
		this.$execute();
		this.localizationProxy.loadLocalizedContent();
	};
	
	p.success = function ($event){
        chaos.LC.initialize();
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
}());
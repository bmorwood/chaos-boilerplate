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

	var p = LocalizationInitializer.prototype = new Chaos.NS.AbstractInitializer();
	p.constructor = LocalizationInitializer;
	
	p.localizationProxy;
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
	p.initialize = function (){
		this.$initialize('LOCALIZATION_INITIALIZER',
            Chaos.NS.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS,
            Chaos.NS.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT
			);
		this.localizationProxy = Chaos.NS.LocalizationProxy.getInstance();
	};
	
	p.execute = function (){
		this.$execute();
		this.localizationProxy.loadLocalizedContent();
	};
	
	p.success = function ($event){
        Chaos.NS.LC.initialize();
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

    Chaos.NS.LocalizationInitializer = LocalizationInitializer;
}());
(function(){
<<<<<<< HEAD
    /**
     * class of LocalizationProx uses i18N.
     *
     * @class LocalizationProxy
     * @constructor
     * @namespace chaos.proxies
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var LocalizationProxy = function() {
		if (LocalizationProxy.instance===null) {
			LocalizationProxy.instance = this;
			this.initialize();
		}else{
<<<<<<< HEAD
			chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
=======
			Chaos.logger.error("You should not call the constructor for " + this.toString() + " directly.  It is a singleton, so you should use getInstance()");
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
		}
	};

	LocalizationProxy.instance = null;

	LocalizationProxy.getInstance = function (){
		
		if(LocalizationProxy.instance===null){
			LocalizationProxy.instance = new LocalizationProxy();
		}
			
		return LocalizationProxy.instance;
	};
<<<<<<< HEAD
    /**
    system down button copy

    @property DEFAULT_LOCALE_CODE
    @type String
    @default 'en_us'
    @static
    **/
	LocalizationProxy.DEFAULT_LOCALE_CODE = 'en_us';
=======
	
	LocalizationProxy.DEFAULT_LOCALE_CODE = "en_us";
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	
	var p = LocalizationProxy.prototype;

    p.localeData;
    p.options;
<<<<<<< HEAD
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
	p.initialize = function (){
        this.appSettings = chaos.AppSettings.getInstance();
=======
	
	p.initialize = function (){
        this.appSettings = Chaos.AppSettings.getInstance();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079

        this.options = {
        lng: LocalizationProxy.DEFAULT_LOCALE_CODE ,
        lowerCaseLng:true,
        resGetPath: 'locales/__lng__/__ns__.json'
        };
	};
	
	p.loadLocalizedContent = function ($locale){

        var localeCode;

        if($locale)
            localeCode = $locale;
        else
<<<<<<< HEAD
            localeCode = chaos.AppProperties.getInstance().locale || LocalizationProxy.DEFAULT_LOCALE_CODE;
=======
            localeCode = Chaos.AppProperties.getInstance().locale || LocalizationProxy.DEFAULT_LOCALE_CODE;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079

        this.options.lng = localeCode;

        var scope = this;

        i18n.init(this.options, function($data) {
            scope.handleLoadLocalizedContentSuccess($data)
        });
	};

    p.loadLocalizedContentSystemDown = function ($locale){

        var localeCode;

        if($locale)
            localeCode = $locale;
        else
<<<<<<< HEAD
            localeCode = chaos.AppProperties.getInstance().locale || LocalizationProxy.DEFAULT_LOCALE_CODE;
=======
            localeCode = Chaos.AppProperties.getInstance().locale || LocalizationProxy.DEFAULT_LOCALE_CODE;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079

        this.options.lng = localeCode;

        var scope = this;

        i18n.init(this.options, function($data) {
            scope.handleLoadLocalizedContentSuccess($data)
        });

    };
	
	p.handleLoadLocalizedContentSuccess = function($data){

		this.localeData = $data;

<<<<<<< HEAD
		new chaos.LocalizationProxyEvent(chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS).dispatch();
	};

	p.handleLoadLocalizedContentFault = function($event){
		new chaos.LocalizationProxyEvent(chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT).dispatch();
	};
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return '[LocalizationProxy]';
	};
	
chaos.LocalizationProxy = LocalizationProxy;
=======
		new Chaos.LocalizationProxyEvent(Chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS).dispatch();
	};

	p.handleLoadLocalizedContentFault = function($event){
		new Chaos.LocalizationProxyEvent(Chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT).dispatch();
	};

	p.toString = function (){
		return "[LocalizationProxy]";
	};
	
Chaos.LocalizationProxy = LocalizationProxy;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
(function(){
	
	var LocalizationProxy = function() {
		if (LocalizationProxy.instance===null) {
			LocalizationProxy.instance = this;
			this.initialize();
		}else{
			Chaos.logger.error("You should not call the constructor for " + this.toString() + " directly.  It is a singleton, so you should use getInstance()");
		}
	};

	LocalizationProxy.instance = null;

	LocalizationProxy.getInstance = function (){
		
		if(LocalizationProxy.instance===null){
			LocalizationProxy.instance = new LocalizationProxy();
		}
			
		return LocalizationProxy.instance;
	};
	
	LocalizationProxy.DEFAULT_LOCALE_CODE = "en_us";
	
	var p = LocalizationProxy.prototype;

    p.localeData;
    p.options;
	
	p.initialize = function (){
        this.appSettings = Chaos.AppSettings.getInstance();

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
            localeCode = Chaos.AppProperties.getInstance().locale || LocalizationProxy.DEFAULT_LOCALE_CODE;

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
            localeCode = Chaos.AppProperties.getInstance().locale || LocalizationProxy.DEFAULT_LOCALE_CODE;

        this.options.lng = localeCode;

        var scope = this;

        i18n.init(this.options, function($data) {
            scope.handleLoadLocalizedContentSuccess($data)
        });

    };
	
	p.handleLoadLocalizedContentSuccess = function($data){

		this.localeData = $data;

		new Chaos.LocalizationProxyEvent(Chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS).dispatch();
	};

	p.handleLoadLocalizedContentFault = function($event){
		new Chaos.LocalizationProxyEvent(Chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT).dispatch();
	};

	p.toString = function (){
		return "[LocalizationProxy]";
	};
	
Chaos.LocalizationProxy = LocalizationProxy;
}());
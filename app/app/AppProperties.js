(function(){
	
	var AppProperties = function() {
		if (AppProperties.instance===null) {
			AppProperties.instance = this;
			this.initialize();
		}else{
            Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	AppProperties.instance = null;

	AppProperties.getInstance = function (){
		
		if(AppProperties.instance===null){
			AppProperties.instance = new AppProperties();
		}
			
		return AppProperties.instance;
	};
	
	var p = AppProperties.prototype;

    p.serviceBaseURL;
    p.locale = 'en_US';
	
	p.initialize = function (){};

    p.init = function(){
        this.serviceBaseURL =  Chaos.ServiceLocator.getInstance().getServiceBaseUrl();
        new Chaos.AppConfigEvent(Chaos.AppConfigEvent.CONFIG_READY).dispatch();
    };

	p.toString = function (){
		return '[AppProperties]';
	};

    Chaos.AppProperties = AppProperties;
}());
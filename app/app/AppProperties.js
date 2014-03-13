(function(){
<<<<<<< HEAD
    /**
     * App Properties is used to hold application specific properties.
     *
     * @class AppProperties
     * @constructor
     * @namespace chaos.app
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var AppProperties = function() {
		if (AppProperties.instance===null) {
			AppProperties.instance = this;
			this.initialize();
		}else{
<<<<<<< HEAD
            chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

    /**
    * instance is used to holder the singleton class for reference.
    *
    * @property instance
    * @type {Object}
    * @default null
    */
	AppProperties.instance = null;

    /**
    * getInstance returns the only instance of this class. It will also create an istance of the class if it has not been instantiated yet.
    *
    * @method getInstance
    */
	AppProperties.getInstance = function (){
		
		if(AppProperties.instance === null){
=======
            Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	AppProperties.instance = null;

	AppProperties.getInstance = function (){
		
		if(AppProperties.instance===null){
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
			AppProperties.instance = new AppProperties();
		}
			
		return AppProperties.instance;
	};
	
	var p = AppProperties.prototype;

<<<<<<< HEAD
    /**
    * used to hold the value of base URLs. The parameter is set by the location service.
    *
    * @property serviceBaseURL
    * @type {String}
    * @default ''
    */
    p.serviceBaseURL = '';

    /**
    * Locale is used to store the current locale. It will default to en-US.
    *
    * @property locale
    * @type {String}
    * @default 'en-us'
    */
    p.locale = 'en-us';
    /**
    * initialize is used to run code after the class is instantiated.
    * NOTE: you can delete this method and add your code right in the constructor.
    * @method initialize
    */
	p.initialize = function (){};

    /**
    * init is called by the app initializer
    *
    * @method init
    */
    p.init = function(){
        this.serviceBaseURL =  chaos.ServiceLocator.getInstance().getServiceBaseUrl();
        new chaos.AppConfigEvent(chaos.AppConfigEvent.CONFIG_READY).dispatch();
    };

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'AppProperties';
	};

    chaos.AppProperties = AppProperties;
=======
    p.serviceBaseURL;
    p.locale = 'en-us';
	
	p.initialize = function (){};

    p.init = function(){
        this.serviceBaseURL =  Chaos.ServiceLocator.getInstance().getServiceBaseUrl();
        new Chaos.AppConfigEvent(Chaos.AppConfigEvent.CONFIG_READY).dispatch();
    };

	p.toString = function (){
		return '[AppProperties]';
	};

    Chaos.AppProperties = AppProperties;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
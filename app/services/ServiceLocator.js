(function(){
    /**
     * class of ServiceLocator.
     *
     * @class ServiceLocator
     * @constructor
     * @namespace chaos.services
     */
	var ServiceLocator = function() {
		if (ServiceLocator.instance===null) {
			ServiceLocator.instance = this;
			this.initialize();
		}else{
            Chaos.NS.logger.error("You should not call the constructor for " + this.toString() + " directly.  It is a singleton, so you should use getInstance()");
		}
	};

	ServiceLocator.instance = null;

	ServiceLocator.getInstance = function (){
		
		if(ServiceLocator.instance===null){
			ServiceLocator.instance = new ServiceLocator();
		}
			
		return ServiceLocator.instance;
	};
	
	var p = ServiceLocator.prototype;
	
	p.serviceDictionary = [];
    p.serviceBaseUrl;
	
	p.initialize = function (){

		/** 
		 * Define host to service mappings here. If the host is contained in this dictionary, then the mapping
		 * will be defined as the base URL for the NS service.
		**/

		this.serviceDictionary['localhost'] = 'http://127.0.0.1:9001/';

	};
	
	p.getServiceBaseUrl = function (){

		var protocol = this.extractProtocol();
		var hostWithPort = this.extractHostWithPort();
		var serviceBaseUrl;

        Chaos.NS.logger.info('Service Locator sees host with port: ' + hostWithPort);
		
		if (this.serviceDictionary[hostWithPort]) {
			// Return appropriate mapping URL from dictionary.
			serviceBaseUrl = this.serviceDictionary[hostWithPort];
		} else {
			// Return default if nothing else matched.
			serviceBaseUrl = this.serviceDictionary['localhost'];
		}

        Chaos.NS.logger.info('NS Service Locator resolved service URL to: ' + serviceBaseUrl);
		
		return this.serviceBaseUrl = serviceBaseUrl;
	};
	
	p.extractProtocol = function () {
		return $.address.baseURL().split('//')[0].toString();
	};
	
	p.extractHostWithPort = function() {
		var base = $.address.baseURL();

        Chaos.NS.logger.info('NS Service Locator sees base URL: ' + base);

		if (base && base != '')
			return base.split('//')[1].toString().split('')[0].toString();
	};

    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'ServiceLocator';
	};

    Chaos.NS.ServiceLocator = ServiceLocator;
}());
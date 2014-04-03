(function(){
	this.ServiceLocator = Chaos.Service.extend({
        name: 'ServiceLocator',
        serviceDictionary: [],
        serviceBaseUrl: null,
        init: function() {
            this.serviceDictionary['localhost'] = 'http://127.0.0.1:9001/';
        },
        getServiceBaseUrl: function() {
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

            this.logger.info('NS Service Locator resolved service URL to: ' + serviceBaseUrl)

            return this.serviceBaseUrl = serviceBaseUrl;
        },
        extractProtocol: function() {
            return $.address.baseURL().split('//')[0].toString();
        },
        extractHostWithPort: function() {
            var base = $.address.baseURL();

            this.app.logger.info('NS Service Locator sees base URL: ' + base);

            if (base && base != '')
                return base.split('//')[1].toString().split('')[0].toString();
        }

    });
}());

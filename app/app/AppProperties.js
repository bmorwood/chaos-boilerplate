(function(){
	var AppProperties = Chaos.Singleton.extend({
       name: 'AppProperties',
       serviceBaseURL: '',
       locale: 'en-us',
       init: function() {
           this.serviceBaseURL =  Chaos.NS.ServiceLocator.getInstance().getServiceBaseUrl();
           new Chaos.nameSpace.AppConfigEvent({type:Chaos.NS.AppConfigEvent.CONFIG_READY}).dispatch();
       }
    });

    Chaos.nameSpace.AppProperties = AppProperties;
}());
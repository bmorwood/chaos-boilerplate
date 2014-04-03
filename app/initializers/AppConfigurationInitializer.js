(function(){
	var AppConfigurationInitializer = Chaos.Initializer.extend({
        name: 'AppConfigurationInitializer',
        init: function () {
            this._super('APP_CONFIG_INITIALIZER',
                Chaos.NS.AppConfigEvent.CONFIG_READY,
                Chaos.NS.AppConfigEvent.CONFIG_ERROR
            );
        },
        execute: function () {
            this._super();
            Chaos.NS.AppProperties.getInstance().init();
        }
    });

    Chaos.NS.AppConfigurationInitializer = AppConfigurationInitializer;
}());
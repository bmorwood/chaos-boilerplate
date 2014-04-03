(function(){
	var LocalizationInitializer = Chaos.Initializer.extend({
        name: 'LocalizationInitializer',
        localizationProxy: null,
        init: function () {
            this._super('LOCALIZATION_INITIALIZER',
                Chaos.NS.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS,
                Chaos.NS.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT
            );
            this.localizationProxy = Chaos.NS.LocalizationProxy.getInstance();
        },
        execute: function () {
            this.localizationProxy.loadLocalizedContent();
        },
        success: function ($event) {
            Chaos.NS.LocalizedContent.initialize();
            this._super($event);
        }
    });

    Chaos.NS.LocalizationInitializer = LocalizationInitializer;
}());
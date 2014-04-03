(function(){
    var LocalizationProxy = Chaos.Singleton.extend({
        name: 'LocalizationProxy',
        DEFAULT_LOCALE_CODE: 'en_us',
        localeData: null,
        init: function () {
            this.appSettings = Chaos.NS.AppSettings.getInstance();
        },
        loadLocalizedContent: function() {
            var localeCode;

            if($locale)
                localeCode = $locale;
            else
                localeCode = Chaos.NS.AppProperties.getInstance().locale || LocalizationProxy.DEFAULT_LOCALE_CODE;

            //var url = 'locales/' + localeCode + '.json';
            var url = 'locales/en-us.json';

            var self = this;

            $.get(url, function ($data) {

                if(typeof $data === 'string')
                    $data = JSON.parse($data);

                self.handleLoadLocalizedContentSuccess($data);
            }).error(function ($data) {
                self.handleLoadLocalizedContentFault($data);
            });
        },
        handleLoadLocalizedContentSuccess: function() {
            this.localeData = $data;

            new Chaos.NS.LocalizationProxyEvent({type:Chaos.NS.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS}).dispatch();
        },
        handleLoadLocalizedContentFault: function() {
            new Chaos.NS.LocalizationProxyEvent({type: Chaos.NS.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_FAULT}).dispatch();
        }
    });

    Chaos.NS.LocalizationProxy = LocalizationProxy;
}());

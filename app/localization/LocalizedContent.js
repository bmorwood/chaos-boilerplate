(function(){
    /**
    * class of AppSettings.
    *
    * @class LC
    * @constructor
    * @namespace chaos.localization
    */
    var LocalizedContent = Chaos.Singleton.extend({
        name: 'LocalizedContent',
        init: function () {
            var locales = Chaos.NS.LocalizationProxy.getInstance().localeData;

            //todo: create method to retreive key value pairs and return search key if no value is found, add this to the Localization Utilities Class.
            this.SYSTEM_DOWN_H1 = 		locales['system-down']['h1'];
            this.SYSTEM_DOWN_H2 = 		locales['system-down']['h2'];
            this.SYSTEM_DOWN_BUTTON = 	locales['system-down']['button'];

            this.WELCOME_MESSAGE = locales.core['welcome-message'];

            new Chaos.NS.LocalizationProxyEvent({type: Chaos.NS.LocalizationEvent.LOCALIZATION_CONTENT_READY}).dispatch();
        }
    });

    /**
     system down copy

     @property SYSTEM_DOWN_H1
     @type String
     @default undefined
     @static
     **/
    LocalizedContent.SYSTEM_DOWN_H1;
    /**
     system down copy

     @property SYSTEM_DOWN_H2
     @type String
     @default undefined
     @static
     **/
    LocalizedContent.SYSTEM_DOWN_H2;
    /**
     system down button copy

     @property SYSTEM_DOWN_BUTTON
     @type String
     @default undefined
     @static
     **/
    LocalizedContent.SYSTEM_DOWN_BUTTON;
    /**
     main page welcome message

     @property WELCOME_MESSAGE
     @type String
     @default undefined
     @static
     **/
    LocalizedContent.WELCOME_MESSAGE;

    Chaos.NS.LC = Chaos.NS.LocalizedContent = LocalizedContent;
}());
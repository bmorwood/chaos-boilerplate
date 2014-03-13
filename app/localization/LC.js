(function(){
<<<<<<< HEAD
    /**
    * class of AppSettings.
    *
    * @class LC
    * @constructor
    * @namespace chaos.localization
    */
    var LC = function() {

    };
    /**
     system down copy

     @property SYSTEM_DOWN_H1
     @type String
     @default undefined
     @static
     **/
    LC.SYSTEM_DOWN_H1;
    /**
     system down copy

     @property SYSTEM_DOWN_H2
     @type String
     @default undefined
     @static
     **/
    LC.SYSTEM_DOWN_H2;
    /**
     system down button copy

     @property SYSTEM_DOWN_BUTTON
     @type String
     @default undefined
     @static
     **/
    LC.SYSTEM_DOWN_BUTTON;
    /**
     main page welcome message

     @property WELCOME_MESSAGE
     @type String
     @default undefined
     @static
     **/
    LC.WELCOME_MESSAGE;

    var p = LC.prototype;

    LC.initialize = function (){

        var locales = chaos.LocalizationProxy.getInstance().localeData;
=======
	
	var LC = function() {

	};

	LC.SYSTEM_DOWN_H1;
	LC.SYSTEM_DOWN_H2;
    LC.SYSTEM_DOWN_BUTTON;
    LC.WELCOME_MESSAGE;

	var p = LC.prototype;

	LC.initialize = function (){

        var locales = Chaos.LocalizationProxy.getInstance().localeData;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079

        this.SYSTEM_DOWN_H1 = 		locales("system-down.h1");
        this.SYSTEM_DOWN_H2 = 		locales("system-down.h2");
        this.SYSTEM_DOWN_BUTTON = 	locales("system-down.button");

        this.WELCOME_MESSAGE = locales("core.welcome-message");

<<<<<<< HEAD
        new chaos.LocalizationProxyEvent(chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY).dispatch();
    };
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
    p.toString = function (){
        return 'LC';
    };

    chaos.LC = LC;
=======
        new Chaos.LocalizationProxyEvent(Chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY).dispatch();
	};

	p.toString = function (){
		return '[LC]';
	};
	
    Chaos.LC = LC;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
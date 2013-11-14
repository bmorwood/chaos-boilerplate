(function(){
	
	var LC = function() {

	};

	LC.SYSTEM_DOWN_H1;
	LC.SYSTEM_DOWN_H2;
    LC.SYSTEM_DOWN_BUTTON;
    LC.WELCOME_MESSAGE;

	var p = LC.prototype;

	LC.initialize = function (){

        var locale = Chaos.AppProperties.getInstance().locale;

		this.SYSTEM_DOWN_H1 = 		Chaos.LocalizationUtility.getContent(locale, 'hd1');
		this.SYSTEM_DOWN_H2 = 		Chaos.LocalizationUtility.getContent(locale, 'hd2');
        this.SYSTEM_DOWN_BUTTON = 		Chaos.LocalizationUtility.getContent(locale, 'button');

        this.WELCOME_MESSAGE = 		Chaos.LocalizationUtility.getContent('core', 'welcome_message');

        new Chaos.LocalizationProxyEvent(Chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY).dispatch();
	};

	p.toString = function (){
		return '[LC]';
	};
	
    Chaos.LC = LC;
}());
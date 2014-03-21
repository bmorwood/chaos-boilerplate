(function(){
    /**
     * class of SystemDownViewModel.
     *
     * @class SystemDownViewModel
     * @constructor
     * @namespace chaos.viewmodels.ui
     * @extends chaos.viewmodels.AbstractViewModel
     */
	var SystemDownViewModel = function() {
		if (SystemDownViewModel.instance===null) {
			SystemDownViewModel.instance = this;
		}else{
            Chaos.NS.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	SystemDownViewModel.instance = null;

	SystemDownViewModel.getInstance = function (){
		if(SystemDownViewModel.instance === null){
			SystemDownViewModel.instance = new SystemDownViewModel();
		}	
		return SystemDownViewModel.instance;
	};
	
	var p = SystemDownViewModel.prototype = new Chaos.NS.AbstractViewModel();
    p.constructor = SystemDownViewModel;
	
	p.h1Txt;
	p.h2Txt;
	p.buttonTxt;

	p.id = 'chaos-system-down-view';

	p.initialize = function (){

        Chaos.NS.EventDispatcher.getInstance().addEventListener(Chaos.NS.SystemDownDisplayEvent.SHOW, this.handleShowSystemDown, this );
        Chaos.NS.EventDispatcher.getInstance().addEventListener(Chaos.NS.SystemDownDisplayEvent.HIDE, this.handleHideSystemDown, this );
		
		this.h1Txt = ko.observable();
		this.h2Txt = ko.observable();
		this.buttonTxt = ko.observable();
	};
	
	p.handleShowSystemDown = function($event){

        Chaos.NS.EventDispatcher.getInstance().addEventListener(Chaos.NS.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS, this.handleDataSuccess, this );
        Chaos.NS.LocalizationProxy.getInstance().loadLocalizedContentSystemDown();
	};
	
	p.handleDataSuccess = function($data){
        Chaos.NS.EventDispatcher.getInstance().removeEventListener(Chaos.NS.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS, this.handleDataSuccess, this );
        Chaos.NS.EventDispatcher.getInstance().addEventListener(Chaos.NS.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.contentReady, this);
        Chaos.NS.LC.initialize();
	};

    p.contentReady = function(){

        Chaos.NS.EventDispatcher.getInstance().removeEventListener(Chaos.NS.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.contentReady, this);

        if(Chaos.NS.LC.SYSTEM_DOWN_H1 !== ''){
            this.h1Txt(Chaos.NS.LC.SYSTEM_DOWN_H1);
            this.h2Txt(Chaos.NS.LC.SYSTEM_DOWN_H2);
            this.buttonTxt(Chaos.NS.LC.SYSTEM_DOWN_BUTTON);
        }else{
            h1 = 'the project is in the shop for a scheduled maintenance. We\'ll be back in no time.';
            h2 = 'Check out our other services.';
            button = 'Go main website page';
        }

        $('#chaos-system-down-view').show();
    };
	
	p.handleHideSystemDown = function($event){
		$('#chaos-system-down-view').hide();
	};
	
	p.handleClick = function (){
		alert('go somewhere')
	};

	p.render = function($src){
		var elm = Chaos.NS.templates['SystemDown.html']();
		$src.append(elm);
		this.initialize();
		ko.applyBindings(this, $('#' + this.id)[0]);
	};
	
	p.dispose = function (){
		$('#' + this.id).remove();
	};

	p.toString = function (){
		return 'SystemDownViewModel';
	};

    Chaos.NS.SystemDownViewModel = SystemDownViewModel;
}());
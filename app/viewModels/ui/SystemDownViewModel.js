(function(){
<<<<<<< HEAD
    /**
     * class of SystemDownViewModel.
     *
     * @class SystemDownViewModel
     * @constructor
     * @namespace chaos.viewmodels.ui
     * @extends chaos.viewmodels.AbstractViewModel
     */
=======
	
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var SystemDownViewModel = function() {
		if (SystemDownViewModel.instance===null) {
			SystemDownViewModel.instance = this;
		}else{
<<<<<<< HEAD
            chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
=======
            Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
		}
	};

	SystemDownViewModel.instance = null;

	SystemDownViewModel.getInstance = function (){
		if(SystemDownViewModel.instance === null){
			SystemDownViewModel.instance = new SystemDownViewModel();
		}	
		return SystemDownViewModel.instance;
	};
	
<<<<<<< HEAD
	var p = SystemDownViewModel.prototype = new chaos.AbstractViewModel();
    p.constructor = SystemDownViewModel;
=======
	var p = SystemDownViewModel.prototype;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	
	p.h1Txt;
	p.h2Txt;
	p.buttonTxt;
<<<<<<< HEAD

	p.id = 'chaos-system-down-view';

	p.initialize = function (){

        chaos.EventDispatcher.getInstance().addEventListener(chaos.SystemDownDisplayEvent.SHOW, this.handleShowSystemDown, this );
        chaos.EventDispatcher.getInstance().addEventListener(chaos.SystemDownDisplayEvent.HIDE, this.handleHideSystemDown, this );
=======
	
	p.id = 'chaos-system-down-view';
	
	p.initialize = function (){

        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.SystemDownDisplayEvent.SHOW, this.handleShowSystemDown, this );
        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.SystemDownDisplayEvent.HIDE, this.handleHideSystemDown, this );
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
		
		this.h1Txt = ko.observable();
		this.h2Txt = ko.observable();
		this.buttonTxt = ko.observable();
	};
	
	p.handleShowSystemDown = function($event){

<<<<<<< HEAD
        chaos.EventDispatcher.getInstance().addEventListener(chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS, this.handleDataSuccess, this );
        chaos.LocalizationProxy.getInstance().loadLocalizedContentSystemDown();
	};
	
	p.handleDataSuccess = function($data){
        chaos.EventDispatcher.getInstance().removeEventListener(chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS, this.handleDataSuccess, this );
        chaos.EventDispatcher.getInstance().addEventListener(chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.contentReady, this);
        chaos.LC.initialize();
=======
        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS, this.handleDataSuccess, this );
        Chaos.LocalizationProxy.getInstance().loadLocalizedContentSystemDown();
	};
	
	p.handleDataSuccess = function($data){
        Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS, this.handleDataSuccess, this );
        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.contentReady, this);
        Chaos.LC.initialize();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	};

    p.contentReady = function(){

<<<<<<< HEAD
    chaos.EventDispatcher.getInstance().removeEventListener(chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.contentReady, this);

        if(chaos.LC.SYSTEM_DOWN_H1 !== ''){
            this.h1Txt(chaos.LC.SYSTEM_DOWN_H1);
            this.h2Txt(chaos.LC.SYSTEM_DOWN_H2);
            this.buttonTxt(chaos.LC.SYSTEM_DOWN_BUTTON);
=======
    Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.contentReady, this);

        if(Chaos.LC.SYSTEM_DOWN_H1 !== ''){
            this.h1Txt(Chaos.LC.SYSTEM_DOWN_H1);
            this.h2Txt(Chaos.LC.SYSTEM_DOWN_H2);
            this.buttonTxt(Chaos.LC.SYSTEM_DOWN_BUTTON);
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
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
<<<<<<< HEAD

	p.render = function($src){
		var elm = chaos.templates['SystemDown.html']();
=======
	
	p.render = function($src){
		var elm = Chaos.templates['SystemDown.html']();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
		$src.append(elm);
		this.initialize();
		ko.applyBindings(this, $('#' + this.id)[0]);
	};
	
	p.dispose = function (){
		$('#' + this.id).remove();
	};
<<<<<<< HEAD

	p.toString = function (){
		return 'SystemDownViewModel';
	};

    chaos.SystemDownViewModel = SystemDownViewModel;
=======
	
	p.toString = function (){
		return '[SystemDownViewModel]';
	};

    Chaos.SystemDownViewModel = SystemDownViewModel;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
(function(){
	
	var SystemDownViewModel = function() {
		if (SystemDownViewModel.instance===null) {
			SystemDownViewModel.instance = this;
		}else{
            Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	SystemDownViewModel.instance = null;

	SystemDownViewModel.getInstance = function (){
		if(SystemDownViewModel.instance === null){
			SystemDownViewModel.instance = new SystemDownViewModel();
		}	
		return SystemDownViewModel.instance;
	};
	
	var p = SystemDownViewModel.prototype;
	
	p.h1Txt;
	p.h2Txt;
	p.buttonTxt;
	
	p.id = 'chaos-system-down-view';
	
	p.initialize = function (){

        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.SystemDownDisplayEvent.SHOW, this.handleShowSystemDown, this );
        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.SystemDownDisplayEvent.HIDE, this.handleHideSystemDown, this );
		
		this.h1Txt = ko.observable();
		this.h2Txt = ko.observable();
		this.buttonTxt = ko.observable();
	};
	
	p.handleShowSystemDown = function($event){
		
		var url = 'localized-copy/maintenance.json';

		var scope = this;
		
		$.get(url, function($data){
			scope.handleDataSuccess($data);
		});
	};
	
	p.handleDataSuccess = function($data){
		var locale = Chaos.AppProperties.getInstance().locale.toUpperCase();

        if(typeof $data === 'string')
            $data = JSON.parse( $data )

        var result = $data;

        var sections = [];

        for (var i = result.length - 1; i >= 0; i--){
            sections.push(Chaos.LocalizedSection.deserialize(result[i]));
        }

        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.LocalizationEvent.REPOPULATED, this.contentReady, this);
        Chaos.LocalizationUtility.repopulate(sections);
	};

    p.contentReady = function(){

        Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.LocalizationEvent.REPOPULATED, this.contentReady, this);
        Chaos.LC.initialize();

        if(Chaos.LC.SYSTEM_DOWN_H1 !== ''){
            this.h1Txt(Chaos.LC.SYSTEM_DOWN_H1);
            this.h2Txt(Chaos.LC.SYSTEM_DOWN_H2);
            this.buttonTxt(Chaos.LC.SYSTEM_DOWN_BUTTON);
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
		var elm = Chaos.templates['SystemDown.html']();
		$src.append(elm);
		this.initialize();
		ko.applyBindings(this, $('#' + this.id)[0]);
	};
	
	p.dispose = function (){
		$('#' + this.id).remove();
	};
	
	p.toString = function (){
		return '[SystemDownViewModel]';
	};

    Chaos.SystemDownViewModel = SystemDownViewModel;
}());
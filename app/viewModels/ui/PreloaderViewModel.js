(function(){
    /**
     * class of PreloaderViewModel.
     *
     * @class PreloaderViewModel
     * @constructor
     * @namespace chaos.viewmodels.ui
     * @extends chaos.viewmodels.AbstractViewModel
     */
	var PreloaderViewModel = function() {
		if (PreloaderViewModel.instance===null) {
			PreloaderViewModel.instance = this;
		}else{
            chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
		}
	};

	PreloaderViewModel.instance = null;

	PreloaderViewModel.getInstance = function (){
		if(PreloaderViewModel.instance === null){
			PreloaderViewModel.instance = new PreloaderViewModel();
		}
		return PreloaderViewModel.instance;
	};

	var p = PreloaderViewModel.prototype = new Chaos.NS.AbstractViewModel();
    p.constructor = PreloaderViewModel;

	p.id = 'chaos-preloader-container';

	p.initialize = function (){ };

	p.update = function ($percent){
        TweenMax.killTweensOf($('#chaos-preloader-bar'));
        TweenMax.to($('#chaos-preloader-bar'), 1, {width: ($percent * 100) + '%'});
	};

	p.handleProgress = function($event){
		this.update($event.percentage);
	};

	p.handlePreloadComplete = function(){
		this.hide();
	};

	p.render = function($src){
		this.elm = Chaos.NS.templates['Preloader.html']();
		$src.append(this.elm);
		ko.applyBindings(this, $('#' + this.id)[0]);
        this.addedToStage();
	};

    p.addedToStage = function(){

        Chaos.NS.EventDispatcher.getInstance().addEventListener(Chaos.NS.PreloaderEvent.COMPLETE, this.handlePreloadComplete, this);
        Chaos.NS.EventDispatcher.getInstance().addEventListener(Chaos.NS.PreloaderEvent.STEP, this.handleProgress, this);

        this.reset();
    };

	p.dispose = function (){
		$('#' + this.id).remove();
	};

	p.hide = function (){

		TweenMax.to($('#chaos-preloader-container')[0], 1, {opacity: 0, delay:1, onComplete: function (){
			$('#chaos-preloader-container').hide();
		}});
	};

	p.show = function (){

		this.reset();

		$('#chaos-preloader-container').css({'background-color' : 'rgba(0,0,0,0.8)'});
		$('#chaos-preloader-container').show();

		TweenMax.to($('#chaos-preloader-container')[0], 0.5, {opacity: 1});
	};

	p.reset = function(){
		this.currentPercent = 0;
        $('#chaos-preloader-bar').css({width: '0%'});
	};
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'PreloaderViewModel';
	};

    Chaos.NS.PreloaderViewModel = PreloaderViewModel;
}());
(function(){
<<<<<<< HEAD
    /**
     * class of PreloaderViewModel.
     *
     * @class PreloaderViewModel
     * @constructor
     * @namespace chaos.viewmodels.ui
     * @extends chaos.viewmodels.AbstractViewModel
     */
=======

>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
	var PreloaderViewModel = function() {
		if (PreloaderViewModel.instance===null) {
			PreloaderViewModel.instance = this;
		}else{
<<<<<<< HEAD
            chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
=======
            Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
		}
	};

	PreloaderViewModel.instance = null;

	PreloaderViewModel.getInstance = function (){
		if(PreloaderViewModel.instance === null){
			PreloaderViewModel.instance = new PreloaderViewModel();
		}
		return PreloaderViewModel.instance;
	};

<<<<<<< HEAD
	var p = PreloaderViewModel.prototype = new chaos.AbstractViewModel();
    p.constructor = PreloaderViewModel;
=======
	var p = PreloaderViewModel.prototype;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079

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
<<<<<<< HEAD
		this.elm = chaos.templates['Preloader.html']();
=======
		this.elm = Chaos.templates['Preloader.html']();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
		$src.append(this.elm);
		ko.applyBindings(this, $('#' + this.id)[0]);
        this.addedToStage();
	};

    p.addedToStage = function(){

<<<<<<< HEAD
    chaos.EventDispatcher.getInstance().addEventListener(chaos.PreloaderEvent.COMPLETE, this.handlePreloadComplete, this);
    chaos.EventDispatcher.getInstance().addEventListener(chaos.PreloaderEvent.STEP, this.handleProgress, this);
=======
    Chaos.EventDispatcher.getInstance().addEventListener(Chaos.PreloaderEvent.COMPLETE, this.handlePreloadComplete, this);
    Chaos.EventDispatcher.getInstance().addEventListener(Chaos.PreloaderEvent.STEP, this.handleProgress, this);
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079

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
<<<<<<< HEAD
    /**
    * toString returns the class name.
    *
    * @method toString
    * @return {String} Class name.
    */
	p.toString = function (){
		return 'PreloaderViewModel';
	};

    chaos.PreloaderViewModel = PreloaderViewModel;
=======

	p.toString = function (){
		return '[PreloaderViewModel]';
	};

    Chaos.PreloaderViewModel = PreloaderViewModel;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
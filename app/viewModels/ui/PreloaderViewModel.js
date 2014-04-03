(function(){
    var PreloaderViewModel = Chaos.Presenter.extend({
        name: 'PreloaderViewModel',
        id: 'chaos-preloader-container',
        template: 'Preloader.html',
        model: {
            msg: 'hello world'
        },
        init: function () {
            this.msg = ko.observable();
            Chaos.EventDispatcher.getInstance().addEventListener(Chaos.NS.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this );
        },
        update: function () {
            TweenMax.killTweensOf($('#chaos-preloader-bar'));
            TweenMax.to($('#chaos-preloader-bar'), 1, {width: ($percent * 100) + '%'});
        },
        handleProgress: function () {
            this.update($event.percentage);
        },
        handlePreloadComplete: function () {
            this.hide();
        },
        hide: function () {
            TweenMax.to($('#chaos-preloader-container')[0], 1, {opacity: 0, delay:1, onComplete: function (){
                $('#chaos-preloader-container').hide();
            }});
        },
        show: function() {
            this.reset();

            $('#chaos-preloader-container').css({'background-color' : 'rgba(0,0,0,0.8)'});
            $('#chaos-preloader-container').show();

            TweenMax.to($('#chaos-preloader-container')[0], 0.5, {opacity: 1});
        },
        reset: function () {
            this.currentPercent = 0;
            $('#chaos-preloader-bar').css({width: '0%'});
        },
        updateCopy: function () {
            this.msg(Chaos.NS.LC.WELCOME_MESSAGE);
        },
        addedToStage: function() {
            Chaos.EventDispatcher.getInstance().addEventListener(Chaos.NS.PreloaderEvent.COMPLETE, this.handlePreloadComplete, this);
            Chaos.EventDispatcher.getInstance().addEventListener(Chaos.NS.PreloaderEvent.STEP, this.handleProgress, this);

            this.reset();
        },
        dispose: function () {
            $('#' + this.id).remove();
        }
    });

    Chaos.NS.PreloaderViewModel = PreloaderViewModel;
}());
(function(){

    var SystemDownViewModel = Chaos.Presenter.extend({
        name: 'SystemDownViewModel',
        h1Txt:'',
        h2Txt:'',
        buttonTxt:'',
        id: 'chaos-system-down-view',

        init: function() {
            Chaos.EventDispatcher.getInstance().addEventListener(Chaos.NS.SystemDownDisplayEvent.SHOW, this.handleShowSystemDown, this );
            Chaos.EventDispatcher.getInstance().addEventListener(Chaos.NS.SystemDownDisplayEvent.HIDE, this.handleHideSystemDown, this );

            this.h1Txt = ko.observable();
            this.h2Txt = ko.observable();
            this.buttonTxt = ko.observable();
        },

        handleShowSystemDown: function ($event) {
            Chaos.EventDispatcher.getInstance().addEventListener(Chaos.NS.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS, this.handleDataSuccess, this );
            Chaos.NS.LocalizationProxy.getInstance().loadLocalizedContentSystemDown();
        },

        handleDataSucess: function ($event) {
            Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.NS.LocalizationProxyEvent.LOAD_LOCALIZATION_CONTENT_SUCCESS, this.handleDataSuccess, this );
            Chaos.EventDispatcher.getInstance().addEventListener(Chaos.NS.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.contentReady, this);
            Chaos.NS.LC.initialize();
        },

        contentReady: function () {
            Chaos.EventDispatcher.getInstance().removeEventListener(Chaos.NS.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.contentReady, this);

            if(Chaos.NS.LC.SYSTEM_DOWN_H1 !== ''){
                this.h1Txt(Chaos.NS.LC.SYSTEM_DOWN_H1);
                this.h2Txt(Chaos.NS.LC.SYSTEM_DOWN_H2);
                this.buttonTxt(Chaos.NS.LC.SYSTEM_DOWN_BUTTON);
            }else{
                this.h1('the project is in the shop for a scheduled maintenance. We\'ll be back in no time.');
                this.h2('Check out our other services.');
                this.button('Go main website page');
            }

            $('#chaos-system-down-view').show();
        },

        handleHideSystemDown: function ($event) {
            $('#chaos-system-down-view').hide();
        },

        handleClick: function() {
            alert('go somewhere')
        },

        dispose: function () {
            $('#' + this.id).remove();
        }
    });

    Chaos.NS.SystemDownViewModel = SystemDownViewModel;
}());
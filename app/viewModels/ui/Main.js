(function(){

    var Main = Chaos.Presenter.extend({
        name: 'Main',
        id: 'chaos-main',
        template: 'Main.html',
        model: {
            msg: 'hello world'
        },
        init: function () {
            this.msg = ko.observable();
            Chaos.EventDispatcher.addEventListener(Chaos.NS.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this );
        },
        updateCopy: function () {
            this.msg(Chaos.NS.LC.WELCOME_MESSAGE);
        },
        addedToStage: function() {
            this.updateCopy();
        },
        dispose: function () {
            $('#' + this.id).remove();
        }
    });

    Chaos.NS.Main = Main;
}());

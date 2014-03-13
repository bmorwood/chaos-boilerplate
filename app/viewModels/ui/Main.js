(function(){

    // var Main = Chaos.Presenter.create({
    //     name: 'Main',
    //     id: 'chaos-main',
    //     template: 'Main.html',
    //     model: {
    //         msg: 'hello world'
    //     }
    // });
    //
    // return;

    var Main = function() {
        if (Main.instance===null) {
            Main.instance = this;
            this.initialize();
        }else{
            Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
        }
    };

    Main.instance = null;

    Main.getInstance = function (){
        if(Main.instance === null){
            Main.instance = new Main();
        }
        return Main.instance;
    };

    var p = Main.prototype;

    p.id = 'chaos-main';
    p.msg;

    p.initialize = function (){

        this.msg = ko.observable();

        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this )
    };

    p.render = function($src){
        var elm = Chaos.templates['Main.html']();
        $src.append(elm);
        ko.applyBindings(this, $('#' + this.id)[0]);
        this.addedToStage();
    };

    p.addedToStage = function(){
        this.updateCopy();
    };

    p.updateCopy = function(){
        this.msg(Chaos.LC.WELCOME_MESSAGE);
    };

    p.dispose = function (){
        $('#' + this.id).remove();
    };

    p.toString = function (){
        return '[Main]';
    };

    Chaos.Main = Main;
}());

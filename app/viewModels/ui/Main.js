(function(){

    var Main = new Chaos.Core.Presenter({
        name: 'Main',
        id: 'chaos-main',
        template: 'Main.html',
        model: {
            msg: 'hello world'
        }
    });

    return;

    /**
     * class of Main.
     *
     * @class Main
     * @constructor
     * @namespace chaos.viewmodels.ui
     * @extends chaos.viewmodels.AbstractViewModel
     */
    var Main = function() {
        if (Main.instance===null) {
            Main.instance = this;
            this.initialize();
        }else{
            chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
        }
    };

    Main.instance = null;

    Main.getInstance = function (){
        if(Main.instance === null){
            Main.instance = new Main();
        }
        return Main.instance;
    };

    var p = Main.prototype = new chaos.AbstractViewModel();
    p.constructor = Main;

    p.id = 'chaos-main';
    p.msg;

    p.initialize = function (){

        this.msg = ko.observable();

        chaos.EventDispatcher.getInstance().addEventListener(chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this );
    };

    p.render = function($src){
        var elm = chaos.templates['Main.html']();
        $src.append(elm);
        ko.applyBindings(this, $('#' + this.id)[0]);
        this.addedToStage();
    };

    p.addedToStage = function(){
        this.updateCopy();
    };

    p.updateCopy = function(){
        this.msg(chaos.LC.WELCOME_MESSAGE);
    };

    p.dispose = function (){
        $('#' + this.id).remove();
    };

    p.toString = function (){
        return 'Main';
    };


    chaos.Main = Main;
}());

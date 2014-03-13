(function(){
<<<<<<< HEAD
    /**
     * class of Main.
     *
     * @class Main
     * @constructor
     * @namespace chaos.viewmodels.ui
     * @extends chaos.viewmodels.AbstractViewModel
     */
=======

>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
    var Main = function() {
        if (Main.instance===null) {
            Main.instance = this;
            this.initialize();
        }else{
<<<<<<< HEAD
            chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
=======
            Chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly.  It is a singleton, so you should use getInstance()');
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
        }
    };

    Main.instance = null;

    Main.getInstance = function (){
        if(Main.instance === null){
            Main.instance = new Main();
        }
        return Main.instance;
    };

<<<<<<< HEAD
    var p = Main.prototype = new chaos.AbstractViewModel();
    p.constructor = Main;
=======
    var p = Main.prototype;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079

    p.id = 'chaos-main';
    p.msg;

    p.initialize = function (){

        this.msg = ko.observable();

<<<<<<< HEAD
        chaos.EventDispatcher.getInstance().addEventListener(chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this );
    };

    p.render = function($src){
        var elm = chaos.templates['Main.html']();
=======
        Chaos.EventDispatcher.getInstance().addEventListener(Chaos.LocalizationEvent.LOCALIZATION_CONTENT_READY, this.updateCopy, this )
    };

    p.render = function($src){
        var elm = Chaos.templates['Main.html']();
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
        $src.append(elm);
        ko.applyBindings(this, $('#' + this.id)[0]);
        this.addedToStage();
    };

    p.addedToStage = function(){
        this.updateCopy();
    };

    p.updateCopy = function(){
<<<<<<< HEAD
        this.msg(chaos.LC.WELCOME_MESSAGE);
=======
        this.msg(Chaos.LC.WELCOME_MESSAGE);
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
    };

    p.dispose = function (){
        $('#' + this.id).remove();
    };

    p.toString = function (){
<<<<<<< HEAD
        return 'Main';
    };

    chaos.Main = Main;
=======
        return '[Main]';
    };

    Chaos.Main = Main;
>>>>>>> e025f1cca61dc288972a92b7fb76be57d9d9e079
}());
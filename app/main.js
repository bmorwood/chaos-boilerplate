(function($window){
    /**
     * A utility that brokers HTTP requests...
     *
     * @class chaos
     * @constructor
     * @namespace chaos
     **/

    Chaos.setNameSpace('chaos');

    var chaos = function($params){

        /**
        * initialize the application.
        *
        * @attribute $params
        * @type Object
        * @default {width: 0, height: 0, container: '<div/>'}
        **/
        var appSettings = Chaos.NS.AppSettings.getInstance();
        appSettings.width = $params.width || appSettings.width;
        appSettings.height = $params.height || appSettings.height;
        appSettings.rootContainer = $params.container || $('<div></div>',{id:'chaos-main-container'});

        appSettings.rootContainer.css({
            width: appSettings.width,
            height: appSettings.height,
            position:'relative',
            overflow:'hidden'
        });


        if(!$params.container)
            $(document.body).append(appSettings.rootContainer);

        Chaos.NS.EventDispatcher = Chaos.Core.EventDispatcher;
        Chaos.NS.ModelBinder = Chaos.Core.KOModelBinder;

        //add controllers
        Chaos.NS.SystemDownController.getInstance();

        //var main = new chaos.Main();
        Chaos.NS.Main.render(appSettings.rootContainer);

        //main.render(appSettings.rootContainer);

        var preloader = new Chaos.NS.PreloaderViewModel();
        preloader.render(appSettings.rootContainer);

        var systemDown = new Chaos.NS.SystemDownViewModel();
        systemDown.render(appSettings.rootContainer);

    };

    Chaos.NS.logger = {
        log: function (){
            if(typeof console == 'object')
                console.log(arguments[0]);
        },
        info: function(){
            if(typeof console == 'object')
                console.info(arguments[0]);
        },
        warn: function(){
            if(typeof console == 'object')
                console.warn(arguments[0]);
        },
        error: function(){
            if(typeof console == 'object')
                console.error(arguments[0]);
        }
    };

    var p = chaos.prototype;

    p.init = function (){
        Chaos.NS.InitializationSequenceOrchestrator.getInstance().run();
    };

    $window.chaos = chaos;


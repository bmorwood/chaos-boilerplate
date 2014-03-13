(function($window){
    /**
     * A utility that brokers HTTP requests...
     *
     * @class chaos
     * @constructor
     * @namespace chaos
     **/
    var chaos = function($params){
        /**
        * initialize the application.
        *
        * @attribute $params
        * @type Object
        * @default {width: 0, height: 0, container: '<div/>'}
        **/
        var appSettings = chaos.AppSettings.getInstance();
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

        //add controllers
        chaos.SystemDownController.getInstance();

        var main = new chaos.Main();
        main.render(appSettings.rootContainer);

        var preloader = new chaos.PreloaderViewModel();
        preloader.render(appSettings.rootContainer);

        var systemDown = new chaos.SystemDownViewModel();
        systemDown.render(appSettings.rootContainer);

    };

    chaos.logger = {
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
        chaos.InitializationSequenceOrchestrator.getInstance().run();
    };

    $window.chaos = chaos;
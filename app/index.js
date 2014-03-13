(function($window){

    var Chaos = function($params){

        var appSettings = Chaos.AppSettings.getInstance();
        appSettings.width = $params.width || appSettings.width;
        appSettings.height = $params.height || appSettings.height;
        appSettings.rootContainer = $params.container || $('<div></div>', {
            id:'ns-main-container',
            width: appSettings.width,
            height: appSettings.height,
            css:{position:'relative'}
        });

        if(!$params.container)
            $(document.body).append(appSettings.rootContainer);

        Chaos.ModelBinder = Chaos.KOModelBinder;

        //add controllers
        Chaos.SystemDownController.getInstance();

        var main = new Chaos.Main();
        //Chaos.Main.render(appSettings.rootContainer);
        main.render(appSettings.rootContainer);

        var preloader = new Chaos.PreloaderViewModel();
        preloader.render(appSettings.rootContainer);

        var systemDown = new Chaos.SystemDownViewModel();
        systemDown.render(appSettings.rootContainer);

    };

    Chaos.logger = {
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

    var p = Chaos.prototype;

    p.init = function (){
        Chaos.InitializationSequenceOrchestrator.getInstance().run();
    };

    $window.Chaos = Chaos;

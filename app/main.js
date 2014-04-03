(function($window){

    Chaos.setNameSpace('chaos');

    var chaos = Chaos.App.extend({
        name: 'chaos',
        init: function($params) {
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

            chaos.EventDispatcher = Chaos.EventDispatcher;
            chaos.ModelBinder = Chaos.KOModelBinder;

            //add controllers

            new Chaos.NS.SystemDownController();

            //var main = new chaos.Main();
            Chaos.NS.Main.render(appSettings.rootContainer);

            //main.render(appSettings.rootContainer);

            var preloader = new Chaos.NS.PreloaderViewModel();
            preloader.render(appSettings.rootContainer);

            var systemDown = new Chaos.NS.SystemDownViewModel();
            systemDown.render(appSettings.rootContainer);
        },
        start: function() {
            //TODO: fix this to be more inline with the app start init call
            Chaos.NS.InitializationSequenceOrchestrator.getInstance().run();
        }
    });

    $window.chaos = chaos;


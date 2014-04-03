(function(){
    var AppSettings = Chaos.Singleton.extend({
        name: 'AppSettings',
        width: 0,
        height: 0,
        rootContainer: 0
    });

    Chaos.NS.AppSettings = AppSettings;
}());
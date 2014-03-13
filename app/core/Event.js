(function(){
    'use strict';

    var Event = function(args){
        args = args || {};

        _.extend(this, args);
    };

    Event.register = function(args){
        args = args || {};

        //TODO validate name exists - it's mandatory

        chaos[args.name] = function(args){
            args = args || {};

            _.extend(this, args);
        };

        if(args.events){
            for(var name in args.events){
                if(args.events[name] === true){
                    chaos[args.name][name] = 'chaos.' + args.name.toLowerCase() + '::' + name;
                }
            }
        }

        var p = chaos[args.name].prototype;
        p.type = '';
        p.target = null;
        p.initialize = function(){};

        p.dispatch = function(){
            chaos.EventDispatcher.dispatchEvent(this);
        };

        p.toString = function(){
            return this.name;
        };

        return chaos[args.name];
    };

    var p = Event.prototype;

    p.type = '';
    p.target = null;

    p.initialize = function(){};

    p.dispatch = function () {
        chaos.EventDispatcher.dispatchEvent(this);
    };

    p.toString = function(){
        return this.name;
    };

    Chaos.Core.Event = Event;
}());

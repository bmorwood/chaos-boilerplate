(function(){
    'use strict';

    var Event = function(args){
        args = args || {};

        _.extend(this, args);
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

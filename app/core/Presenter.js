(function(){
    'use strict';

    var Presenter = function(args){
        args = args || {};
        args.model = args.model || {};
        _.extend(this, args);

        var p = Presenter.prototype = Chaos.Core.BaseClass.create(args);
        p.id = '';
        p.container = '';
        p.modelBound = false;

        p.rendered = function(){};
        p.initialize = function(){};

        p.setModel = function(model){
            if(this.modelBound){
                chaos.ModelBinder.update(model, this.model);
            }else{
                this.model = chaos.ModelBinder.bind(model);
                this.modelBound = true;
            }
        };

        p.render = function(src){
            if(!this.modelBound)this.setModel(this.model);

            this.elm = chaos.templates[this.template]();
            src.append(this.elm);

            this.container = $('#' + this.id);
            chaos.ModelBinder.render(this, this.container[0]);
            this.rendered();
        };

        chaos[args.name] = p;

        return p;
    };

    Chaos.Core.Presenter = Presenter;
}());

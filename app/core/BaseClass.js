(function(){
    'use strict';
     var BaseClass = function(args){
         args = args || {};
         _.extend(this, args);
     };

     BaseClass.create = function(args){
         var Base = function(){
             if(Base.instance === null){
                 Base.instance = this;
                 this.initialize();
             }else{
                 chaos.logger.error('You should not call the constructor for ' + this.toString() + ' directly. It is a singleton, so you should use `getInstance()`.');
             }
         };

         Base.instance = null;

         Base.getInstance = function(){
             if(Base.instance === null){
                 Base.instance = new Base();
             }

             return Base.instance;
         };

         var p = Base.prototype = new Chaos.Core.BaseClass(args);
         p.constructor = Base;
         chaos[args.name] = Base; //for namespace template

         return p;
     };

     Chaos.Core.BaseClass = BaseClass;
}());

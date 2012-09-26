/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-24
 * Time: 下午8:24
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var base = require('ModuleBase');
    var Class = require('cellula').Class;
    var m1 = require('#./m1');
    var m2 = require('#./m2');

    m1.registerInterface('load', m2);

    m2.registerInterface('changeName', m1);

    var myModule = new Class('myModule',{
        init : function(){
            this._super();
            console.log('im child 3!');
        }

    }).inherits(base);

    return new myModule;
    //return new base({someProp : 'someProp'});
});

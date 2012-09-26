/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-25
 * Time: 下午8:29
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var cellula = require('cellula'),
        Class = cellula.Class,
        util = cellula._util;

    var MessageCenter = new Class('MessageCenter',{
        init : function(){},
        deliver : function(msg){
            console.log(msg);
            if(util.isObject(msg) && util.has(msg,'code') && util.has(msg,'body')) this.trigger(msg.code, msg.body);
        },
        subscribe : function(o){
            if(util.isObject(o) && !util.isEmpty(o._apiMap)) util.each(o._apiMap, function(v, i){ this.on(i, o[v], o); }, this);
        }
    });

    return new MessageCenter;
});
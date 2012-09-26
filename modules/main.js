/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-25
 * Time: 下午7:46
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var mc = require('#./message'),
        Class = require('cellula').Class,
        $ = require('$');

    return function(body){
        var modules = [];
        $(".module", $(body)).each(function(i, v){
            seajs.use('~/' + $(v).attr('module'), function(m){
                modules.push(m);
                mc.subscribe(m);
            });
        });
    };

});

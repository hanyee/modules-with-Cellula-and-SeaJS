/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-25
 * Time: 下午7:46
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var mc = require('#./message'),
        util = require('cellula')._util,
        $ = require('$');

    return function (body) {
        var modules = ['~/order','~/detail','~/channel'];
        //var modules = ['~/order','~/detail','~/channel','~/channelA','~/channelB','~/channelC','~/channelD'];
        var modulesInstance = [];

        seajs.use(modules, function () {
            util.each(util.slice.call(arguments), function (m) {
                console.log(m);
                modulesInstance.push(m);
                mc.subscribe(m);
            });

            setTimeout(function(){
                modulesInstance[0].load();
            }, 1000)
        });
    };

});

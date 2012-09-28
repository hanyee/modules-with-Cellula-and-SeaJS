/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-25
 * Time: 下午7:46
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var mc = require('#./message'),
        base = require('ModuleBase'),
        cellula = require('cellula'),
        util = cellula._util,
        Class = cellula.Class,
        $ = require('$');
    /*
    var Main = new Class('Main', {
        key:'J_main',
        init:function () {
            //this._bindAll('refreshAmt');
            this._super();
        },
        _apiMap:{},
        loadModules : function (modules) {

        }
    }).inherits(base);

    return new Main;
    */

    return function (body) {
        console.log('here')
        var modules = ['~/order'];
        var modulesInstance = [];

        seajs.use(modules, function () {
            util.each(util.slice.call(arguments), function (m) {
                console.log(m);
                modulesInstance.push(m);
                mc.subscribe(m);
            });
        });
    };

/*
        $(".module", $(body)).each(function(i, v){
            seajs.use('~/' + $(v).attr('module'), function(m){
                console.log(m);
                modules.push(m);
                mc.subscribe(m);
            });
        });
        */

});

/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-28
 * Time: 下午5:46
 * To change this template use File | Settings | File Templates.
 */

define(function (require, exports, module) {
    var base = require('ModuleBase'),
        Class = require('cellula').Class,
        Tab = require('#./tab'),
        $ = require('$');

    var Channel = new Class('Channel', {
        key:'J_channel',
        init:function () {
            //this._bindAll('showDetail');
            this._super();
        },
        _apiMap:{
            'channel.Channel.show':'show'
        },
        show:function (flag) {
            this.load();
            var node = $(this.getRoot());
            if (flag) node.removeClass('fn-hide');
            else node.addClass('fn-hide');
        },
        registerEvents:function () {
            var t = this.getNode('channelTriggers'),
                i = this.getNode('channelItems');
            if (t && i) {
                console.log('init')
                var tab = new Tab(t, i, {triggerEvent:"onclick"}).setFocus(0);
            }
        }

    }).inherits(base);

    return new Channel;
});

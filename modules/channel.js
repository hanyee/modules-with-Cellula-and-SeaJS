/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-28
 * Time: 下午5:46
 * To change this template use File | Settings | File Templates.
 */

define(function (require, exports, module) {
    var base = require('ModuleBase'),
        cellula = require('cellula'),
        Tab = require('#./tab'),
        $ = require('$');

    var a = require('#./channelA'),
        b = require('#./channelB'),
        c = require('#./channelC'),
        d = require('#./channelD');

    var cl = new cellula.Collection({type : base});
    cl.push(a);
    cl.push(b);
    cl.push(c);
    cl.push(d);

    var Channel = new cellula.Class('Channel', {
        key:'J_channel',
        collection:cl,
        _apiMap:{
            'channel.Channel.show':'show'
        },
        show:function (flag) {
            this.load();
            var node = $(this.getRoot());
            if (flag) node.removeClass('fn-hide');
            else node.addClass('fn-hide');
        },
        changeChannel:function(e){
            if(e) this.collection.get($(e.currentTarget).attr('target')).load();
        },
        registerEvents:function () {
            this._bindAll('changeChannel');
            var t = this.getNode('J_channelTriggers'),
                i = this.getNode('J_channelItems');
            if (t && i) var tab = new Tab(t, i, {triggerEvent:"onclick"}).setFocus(0);
            $('#J_channelTriggers').find('a').click(this.changeChannel);
        }
    }).inherits(base);

    return new Channel;
});

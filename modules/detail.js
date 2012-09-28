/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-27
 * Time: 下午3:05
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var base = require('ModuleBase'),
        Class = require('cellula').Class,
        $ = require('$');

    var Detail = new Class('Detail',{
        key : 'J_detail',
        _apiMap : {
            'detail.Detail.show' : 'show'
        },
        show:function(flag){
            this.load();
            console.log('show')
            var node = $(this.getRoot());
            if(flag) node.removeClass('fn-hide');
            else node.addClass('fn-hide');
        },
        showChannel:function(e){
            e.preventDefault();
            var node = $(e.currentTarget),
                flag = false;
            if(node.html() == '显示支付渠道') flag = true, node.html('关闭支付渠道');
            else node.html('显示支付渠道');

            this.deliver({code : 'channel.Channel.show', body : flag});
        },
        registerEvents : function(){
            this._bindAll('showChannel');
            $('#J_showChannel').click(this.showChannel);
            //$('#J_loadM2').click(this.load);
        }

    }).inherits(base);

    return new Detail;
});

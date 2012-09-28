/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-27
 * Time: 下午2:20
 * To change this template use File | Settings | File Templates.
 */

define(function (require, exports, module) {
    var base = require('ModuleBase'),
        Class = require('cellula').Class,
        $ = require('$');

    var Order = new Class('Order', {
        key:'J_order',
        init:function () {
            this._bindAll('showDetail');
            this._super();
            //this.load();
        },
        refreshAmt:function (e) {
            e.preventDefault();
            $('#J_tip').html('正在刷新金额...').show();
            var p = (Math.random() * 300).toFixed(2);
            setTimeout(function () {
                $('#J_tip').html('(当前价格已更新为 ' + p + ' 元！)');
                setTimeout(function () {
                    $('#J_tip').hide();
                    $('#J_price').html(p);
                }, 1000);
            }, 1000);
        },
        showDetail : function(e){
            e.preventDefault();
            var node = $('#J_detailShort'),
                flag = node.hasClass('fn-hide');
            if(flag) node.removeClass('fn-hide');
            else node.addClass('fn-hide');

            this.deliver({code : 'detail.Detail.show', body : !flag});
        },
        registerEvents:function () {
            $('#J_refreshAmt').click(this.refreshAmt);
            $('#J_showDetail').click(this.showDetail);
        }

    }).inherits(base);

    return new Order;
});

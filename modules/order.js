/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-27
 * Time: 下午2:20
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var base = require('ModuleBase'),
        Class = require('cellula').Class,
        $ = require('$');

    var Order = new Class('Order',{
        key : 'J_order',
        init : function(){
            //this._bindAll('refreshAmt');
            this._super();
            this.load();
        },
        _apiMap : {
            //'m1.Module1.changeName' : 'changeName'
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
        isLoaded : function(){
            return $(this.rootNode).html().trim() !== '';
        },
        load : function(){
            console.log('do load');

            var loaded = this.isLoaded(),
                config = {},
                configNode = this.getNode('#J_'+'order'+'Config');  //$('#J_'+'order'+'Config');
console.log(configNode.val);
            if(configNode.val()){ //sync

            } else { //async
                config.type = /(async)/.test(configNode.val()) ? 'async' : 'sync';

                // async load dom

                config.url = configNode.val().split(':')[1];
                console.log(config);
                /*
                 $.ajax({
                 url:'order.html?t=' + new Date().getTime(),
                 data:'a',
                 type:'get',
                 timeout:2000,
                 dataType:'text',
                 success:function (r) {
                 console.log($(r));
                 }
                 });
                 */
            }



        },
        _loaded : function(){

        },
        registerEvents : function(){
            // J_text
            // J_response
            $('#J_refreshAmt').click(this.refreshAmt);
            $('#J_loadM2').click(this.load);
            // J_loadM2
        }

    }).inherits(base);

    return new Order;
});

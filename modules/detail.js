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
        init : function(){
            //this._bindAll('refreshAmt');
            this._super();
        },
        _apiMap : {
            //'m1.Module1.changeName' : 'changeName'
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

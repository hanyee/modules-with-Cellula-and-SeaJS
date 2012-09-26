/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-24
 * Time: 下午8:24
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var base = require('ModuleBase'),
        Class = require('cellula').Class,
        $ = require('$');

    var myModule = new Class('Module2', {
        init:function () {
            this._bindAll('response');
            this._super();
        },
        response : function () {
            //this.applyInterface('changeName', 'you r not m1 !');
            this.deliver({code : 'm1.Module1.changeName', body : 'you r not m1 !'});
        },
        load : function (data) {
            // analyse whether module is loaded

            // if not load the module
            var mh = $('#J_mContainer').html();
            $('#J_mContainer').html('');
            $('#J_Modules').append($(mh));
            $('#J_m2Text').html($('#J_m2Text').html() + ' -- recieved data is ' + data);

            this.registerEvents();
        },
        _apiMap:{
            'm2.Module2.load' : 'load'
        },
        registerEvents:function () {
            // J_text
            // J_response
            $('#J_m2Response').click(this.response);
            // J_loadM2
        }

    }).inherits(base);

    return new myModule;
});

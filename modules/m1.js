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

    var myModule = new Class('Module1',{
        init : function(){
            this._bindAll('response','load');
            this._super();
        },
        response : function(e){
            console.log(this);
            $(e.target).html('responsed by '+ this.__cid__ + ' @ ' + new Date().toTimeString());
        },
        changeName : function(data){
            console.log(data);
            $('#J_text').html(data);
        },
        load : function(){
            //this.applyInterface('load', this.__cid__);
            this.deliver({code : 'm2.Module2.load', body : this.__cid__});
        },
        _apiMap : {
            'm1.Module1.changeName' : 'changeName'
        },
        registerEvents : function(){
            // J_text
            // J_response
            $('#J_response').click(this.response);
            $('#J_loadM2').click(this.load);
            // J_loadM2
        }

    }).inherits(base);

    return new myModule;
});

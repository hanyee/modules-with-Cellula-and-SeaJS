/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-24
 * Time: 下午5:30
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){
    var cellula = require('cellula');
    var mc = require('#./message');
    var ModuleBase = new cellula.Class('ModuleBase',{
        init : function(){
            this._super();
            this.registerInterface('deliver', mc);
            this.registerEvents();
        },
        _apiMap : {},
        deliver : function(){
            this.applyInterface.apply(this, ['deliver'].concat(cellula._util.slice.call(arguments)));
        },
        load : function(){

        }

    }).inherits(cellula.Cell);

    return ModuleBase;
});

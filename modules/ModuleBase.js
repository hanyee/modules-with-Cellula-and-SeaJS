/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-24
 * Time: 下午5:30
 * To change this template use File | Settings | File Templates.
 */

define(function (require, exports, module) {
    var cellula = require('cellula'),
        mc = require('#./message'),
        $ = require('$');
    var ModuleBase = new cellula.Class('ModuleBase', {
        init:function () {
            this._super();
            this.registerInterface('deliver', mc);
            this.registerEvents();
        },
        _apiMap:{},
        deliver:function () {
            this.applyInterface.apply(this, ['deliver'].concat(cellula._util.slice.call(arguments)));
        },
        _isLoaded:function () {
            return $(this.getRoot()).html().trim() !== '';
        },
        _loaded:function (resp) {
            if (resp) {
                $(this.getRoot()).append($(resp));
                this.registerEvents();
            }
        },
        load:function () {
            var loaded = this._isLoaded();
            console.log(loaded);

            if (!loaded) { // async load
                var that = this,
                    mode = $(this.getRoot()).attr('mode');

                $.ajax({
                    url:mode.split(':')[1] + '?t=' + new Date().getTime(),
                    timeout:2000,
                    dataType:'text',
                    context:this,
                    success:this._loaded
                });
            }
        }

    }).inherits(cellula.Cell);

    return ModuleBase;
});

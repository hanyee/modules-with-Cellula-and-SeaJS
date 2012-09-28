/**
 * Created with JetBrains WebStorm.
 * User: hanyee
 * Date: 12-9-28
 * Time: 下午5:33
 * To change this template use File | Settings | File Templates.
 */

define(function(require, exports, module){

    var $ = require("$");

    function Tab(a, b, c){
        this.focus = null;
        this.currentIndex = 0;
        this.config = c || {};
        this.activeTriggerClass = this.config.activeTriggerClass || "current";
        this.activeViewClass = this.config.activeViewClass || "current";
        this.triggerEvent = this.config.triggerEvent || "onmouseover";
        this.items = this.getItems(a, this.config.ITag || "LI");
        this.contents = this.getItems(b, this.config.CTag || "DIV");
        this.onSwitch = this.config.onSwitch || function(){};
        this.alpha = this.config.alpha || false;
        this.preventDefaultEvent(a);
        this.create();
    };
    Tab.prototype = {
        $: function(a, b){
            a = typeof(a) == "string" ? document.getElementById(a) : a;
            return b ? a.getElementsByTagName(b) : a;
        },
        preventDefaultEvent : function(a){
            var _links = this.$(a, "A");
            for(var i=0, len = _links.length;i<len;i++){
                _links[i].onclick = function(e){
                    var evt = e || window.event;
                    if(evt.preventDefault){
                        evt.preventDefault();
                    } else {
                        evt.returnValue = false;
                    }
                };
            }
        },
        getItems: function(a, b){
            var p = this.$(a), contents = [];
            for (var i = 0, len = p.childNodes.length; i < len; i++) {
                var cNode = p.childNodes[i];
                if (cNode.nodeType == 1 && cNode.tagName.toLowerCase() == b.toLowerCase()) {
                    contents.push(cNode);
                }
            }
            return contents;
        },
        create: function(){
            var _this = this;
            for (var i = 0, len = this.items.length; i < len; i++) {
                this.items[i].bc = this.contents[i];
                this.items[i].index = i;
                this.items[i][this.triggerEvent] = function(){
                    _this.setFocus(this.index);
                };
            }
            this.setFocus(0);
        },
        hasClass: function(o, c_name){
            return !c_name || (' ' + o.className + ' ').indexOf(' ' + c_name + ' ') != -1;
        },
        addClass: function(o, c_name){
            if (!this.hasClass(o, c_name)) {
                var nc = o.className.replace(/^\s+|\s+$/g, "").split(" ");
                nc.push(c_name);
                o.className = nc.join(" ");
            }
        },
        removeClass: function(o, c_name){
            var classNames = o.className.split(" ");
            for (var i = 0, len = classNames.length; i < len; i++) {
                if (classNames[i] == c_name) {
                    classNames.splice(i, 1);
                }
            }
            o.className = classNames.join(" ");
        },
        show: function(o, state){
            var _this = this;
            if (state == "none") {
                this.removeClass(o, this.activeTriggerClass);
                this.removeClass(o.bc, this.activeViewClass);
                if(this.alpha){
                    o.bc.style.display = "none";
                }
            }else {
                this.addClass(o, this.activeTriggerClass);
                if(this.alpha){
                    $(o.bc).fadeIn("normal", function(){
                        _this.addClass(o.bc, _this.activeViewClass);
                    });
                } else {
                    this.addClass(o.bc, this.activeViewClass);
                }
            }
        },
        lastIndex: function(){
            return this.items.length - 1;
        },
        setFocus: function(index){
            this.currentIndex = (index < 0 ? (this.items.length - 1) : index) % this.items.length;
            var current_item = this.items[this.currentIndex];
            if (this.focus && current_item !== this.focus) {
                this.show(this.focus, "none");
            }
            this.focus = current_item;
            this.show(this.focus);
            if (this.onSwitch) {
                this.onSwitch.call(this);
            }
        }
    }

    return Tab;
});

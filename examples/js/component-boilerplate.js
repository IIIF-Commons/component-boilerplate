// component-boilerplate v1.0.7 https://github.com/iiif-commons/component-boilerplate#readme
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.componentBoilerplate = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var IIIFComponents;
(function (IIIFComponents) {
    var ExampleComponent = /** @class */ (function (_super) {
        __extends(ExampleComponent, _super);
        function ExampleComponent(options) {
            var _this = _super.call(this, options) || this;
            _this._init();
            _this._resize();
            return _this;
        }
        ExampleComponent.prototype.message = function () {
            this.fire(ExampleComponent.Events.MESSAGE, this._getMessage());
        };
        ExampleComponent.prototype._init = function () {
            var success = _super.prototype._init.call(this);
            if (!success) {
                console.error("Component failed to initialise");
            }
            this._$element.append(this._getMessage());
            return success;
        };
        ExampleComponent.prototype._getMessage = function () {
            return this.options.data.greeting + " " + this.options.data.salutation;
        };
        ExampleComponent.prototype.data = function () {
            return {
                greeting: "Hello",
                salutation: "World"
            };
        };
        ExampleComponent.prototype._resize = function () {
        };
        return ExampleComponent;
    }(_Components.BaseComponent));
    IIIFComponents.ExampleComponent = ExampleComponent;
})(IIIFComponents || (IIIFComponents = {}));
(function (IIIFComponents) {
    var ExampleComponent;
    (function (ExampleComponent) {
        var Events = /** @class */ (function () {
            function Events() {
            }
            Events.MESSAGE = 'message';
            return Events;
        }());
        ExampleComponent.Events = Events;
    })(ExampleComponent = IIIFComponents.ExampleComponent || (IIIFComponents.ExampleComponent = {}));
})(IIIFComponents || (IIIFComponents = {}));
(function (g) {
    if (!g.IIIFComponents) {
        g.IIIFComponents = IIIFComponents;
    }
    else {
        g.IIIFComponents.ExampleComponent = IIIFComponents.ExampleComponent;
    }
})(global);


}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});
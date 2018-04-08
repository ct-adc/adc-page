(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ct-adc-page"] = factory();
	else
		root["ct-adc-page"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(2),
  /* template */
  __webpack_require__(3),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/rubyisapm/teamshare/adc-packages/page/src/component/main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-27c0c078", Component.options)
  } else {
    hotAPI.reload("data-v-27c0c078", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});


var listArr = function listArr(page, totle, len) {
    var arr = [];
    var i = void 0;
    var flag = true;
    var cs = parseInt(len / 2);

    if (flag && totle <= len) {
        for (i = 1; i <= totle; i++) {
            arr.push(i);
        }
        flag = false;
    }
    if (flag && page <= len - cs) {
        for (i = 1; i <= len; i++) {
            arr.push(i);
        }
        flag = false;
    }
    if (flag && page + cs >= totle) {
        for (i = totle - len + 1; i <= totle; i++) {
            arr.push(i);
        }
        flag = false;
    }
    if (flag) {
        for (i = page - cs; i <= page + cs; i++) {
            arr.push(i);
        }
    }
    return arr;
};

exports.default = {
    name: 'page',
    props: {
        currPage: {
            type: Number,
            default: 1
        },
        pageLen: {
            type: Number,
            default: 10
        },
        totalNum: {
            type: Number,
            default: 10000
        },
        form: {
            type: Boolean,
            default: false
        },
        spage: {
            type: Number,
            default: 5
        },
        topPage: {
            type: Number,
            default: 1
        },
        afterPage: {
            type: Number,
            default: 1
        }
    },
    data: function data() {
        return {
            jumpTo: this.currPage
        };
    },

    computed: {
        pageNum: function pageNum() {
            return parseInt(Math.ceil(this.totalNum / this.pageLen));
        },
        visible: function visible() {
            return this.pageNum > 0;
        },
        previousStatus: function previousStatus() {
            var num = parseInt(this.currPage);

            return num <= 1 ? 'disabled' : '';
        },
        pageList: function pageList() {
            var pageNum = this.pageNum;
            var spage = this.spage;
            var num = parseInt(this.currPage);
            var arr = listArr(num, pageNum, spage);
            var len = arr.length;
            var firstStep = [];
            var thirdStep = [];
            var showPage = void 0;

            if (arr[0] > 1) {
                showPage = arr[0] <= this.topPage ? arr[0] - 1 : this.topPage;

                for (var i = 1; i <= showPage; i++) {
                    firstStep.push(i);
                }
            }
            var firstDot = arr[0] > this.topPage + 1;
            var secondStep = arr;
            var secondDot = arr[len - 1] < pageNum - this.afterPage;

            if (arr[len - 1] < pageNum) {
                showPage = arr[len - 1] >= pageNum - this.afterPage ? pageNum - arr[len - 1] : this.afterPage;

                for (var _i = pageNum - showPage + 1; _i <= pageNum; _i++) {
                    thirdStep.push(_i);
                }
            }
            return {
                firstStep: firstStep,
                firstDot: firstDot,
                secondStep: secondStep,
                secondDot: secondDot,
                thirdStep: thirdStep
            };
        },
        nextStatus: function nextStatus() {
            var num = parseInt(this.currPage);
            var pageNum = this.pageNum;

            return num >= pageNum ? 'disabled' : '';
        }
    },
    methods: {
        jump: function jump() {
            var inputNum = parseInt(this.jumpTo);

            if (/^\d+$/.test(inputNum + '')) {
                if (inputNum > this.pageNum) {
                    inputNum = this.pageNum;
                }
                this.$emit('change-page', inputNum);
            } else {
                this.$emit('change-page', this.currPage);
            }
        },
        previous: function previous() {
            if (this.currPage > 1) {
                this.jumpTo = this.currPage - 1;
                this.$emit('change-page', this.currPage - 1);
            }
        },
        next: function next() {
            if (this.currPage < this.pageNum) {
                this.jumpTo = this.currPage + 1;
                this.$emit('change-page', this.currPage + 1);
            }
        },
        setPage: function setPage(page) {
            page = parseInt(page);
            if (page > this.pageNum) {
                page = this.pageNum;
            }
            if (page < 1) {
                page = 1;
            }
            this.jumpTo = page;
            this.$emit('change-page', page);
        }
    },
    watch: {
        jumpTo: function jumpTo(newVal) {
            this.jumpTo = (newVal + '').replace(/(^0|\D)/g, '');
        },
        currPage: function currPage(newVal) {
            newVal = parseInt(newVal);
            if (newVal > this.pageNum) {
                newVal = this.pageNum;
            }
            if (newVal < 1) {
                newVal = 1;
            }
            this.jumpTo = newVal;
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', [(_vm.form) ? _c('div', {
    staticClass: "form-group pull-left mt5"
  }, [_vm._v("\n        共"), _c('strong', [_vm._v(_vm._s(_vm.totalNum))]), _vm._v("条记录，\n        第"), _c('strong', [_vm._v(_vm._s(_vm.currPage))]), _vm._v("/"), _c('strong', [_vm._v(_vm._s(_vm.pageNum))]), _vm._v("页\n    ")]) : _vm._e(), _vm._v(" "), _c('div', {
    class: {
      'pull-right': _vm.form
    }
  }, [_c('ul', {
    staticClass: "pagination pagination-sm"
  }, [_c('li', {
    staticClass: "previous",
    class: _vm.previousStatus,
    on: {
      "click": _vm.previous
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("«")])]), _vm._v(" "), _vm._l((_vm.pageList.firstStep), function(i) {
    return [_c('li', {
      on: {
        "click": function($event) {
          _vm.setPage(i)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:;"
      }
    }, [_vm._v(_vm._s(i))])])]
  }), _vm._v(" "), (_vm.pageList.firstDot) ? _c('li', {
    staticClass: "disabled"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("...")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.pageList.secondStep), function(i) {
    return [(i === _vm.currPage) ? _c('li', {
      staticClass: "active",
      on: {
        "click": function($event) {
          _vm.setPage(i)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:;"
      }
    }, [_vm._v(_vm._s(i))])]) : _c('li', {
      on: {
        "click": function($event) {
          _vm.setPage(i)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:;"
      }
    }, [_vm._v(_vm._s(i))])])]
  }), _vm._v(" "), (_vm.pageList.secondDot) ? _c('li', {
    staticClass: "disabled"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("...")])]) : _vm._e(), _vm._v(" "), _vm._l((_vm.pageList.thirdStep), function(i) {
    return [_c('li', {
      on: {
        "click": function($event) {
          _vm.setPage(i)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:;"
      }
    }, [_vm._v(_vm._s(i))])])]
  }), _vm._v(" "), _c('li', {
    staticClass: "next",
    class: _vm.nextStatus,
    on: {
      "click": _vm.next
    }
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_vm._v("»")])])], 2), _vm._v(" "), (_vm.form) ? _c('span', {
    staticClass: "form-inline ml10"
  }, [_vm._v("\n            到第 "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.jumpTo),
      expression: "jumpTo"
    }],
    staticClass: "form-control input-sm",
    staticStyle: {
      "width": "60px"
    },
    attrs: {
      "type": "number",
      "min": "1"
    },
    domProps: {
      "value": (_vm.jumpTo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.jumpTo = $event.target.value
      }
    }
  }), _vm._v(" 页\n            "), _c('button', {
    staticClass: "btn btn-sm btn-primary",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.jump
    }
  }, [_vm._v("确定")])]) : _vm._e()])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-27c0c078", module.exports)
  }
}

/***/ })
/******/ ]);
});
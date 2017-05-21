(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ct-adc-page"] = factory();
	else
		root["ct-adc-page"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = {}

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(2)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/rubyisapm/teamshare/adc-packages/page/src/page.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5ae8702", __vue_options__)
  } else {
    hotAPI.reload("data-v-a5ae8702", __vue_options__)
  }
})()}
if (__vue_options__.functional) {console.error("[vue-loader] page.vue: functional components are not supported and should be defined in plain js files using render functions.")}

module.exports = __vue_exports__


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });


function listArr(page, totle, len) {
    var arr = [],
        cs,
        i,
        flag = true;
    cs = parseInt(len / 2);
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
}

/* harmony default export */ __webpack_exports__["default"] = {
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
            var pageNum = this.pageNum,
                spage = this.spage,
                num = parseInt(this.currPage),
                arr = listArr(num, pageNum, spage),
                len = arr.length,
                firstStep = [],
                firstDot,
                secondStep,
                secondDot,
                thirdStep = [],
                showPage;
            if (arr[0] > 1) {
                showPage = arr[0] <= this.topPage ? arr[0] - 1 : this.topPage;
                for (i = 1; i <= showPage; i++) {
                    firstStep.push(i);
                }
            }

            firstDot = arr[0] > this.topPage + 1;

            secondStep = arr;

            secondDot = arr[len - 1] < pageNum - this.afterPage;

            if (arr[len - 1] < pageNum) {
                showPage = arr[len - 1] >= pageNum - this.afterPage ? pageNum - arr[len - 1] : this.afterPage;
                for (var i = pageNum - showPage + 1; i <= pageNum; i++) {
                    thirdStep.push(i);
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
            var num = parseInt(this.currPage),
                pageNum = this.pageNum;
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
        getPage: function getPage(page) {
            this.jumpTo = page;
            this.$emit('change-page', page);
        }
    },
    watch: {
        jumpTo: function jumpTo(newVal) {
            this.jumpTo = (newVal + '').replace(/(^0|\D)/g, '');
        },
        currPage: function currPage(newVal) {
            var originVal = newVal;
            newVal = parseInt(newVal);
            if (newVal > this.pageNum) {
                newVal = this.pageNum;
            }
            if (originVal !== newVal) {
                this.$emit('change-page', newVal);
            }
            this.jumpTo = newVal;
        }
    }

};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', [(_vm.form) ? _c('div', {
    staticClass: "form-group",
    staticStyle: {
      "float": "left"
    }
  }, [_vm._v("\n        共"), _c('strong', [_vm._v(_vm._s(_vm.totalNum))]), _vm._v("条记录，\n        第"), _c('strong', [_vm._v(_vm._s(_vm.currPage))]), _vm._v("/"), _c('strong', [_vm._v(_vm._s(_vm.pageNum))]), _vm._v("页\n    ")]) : _vm._e(), _vm._v(" "), _c('div', {
    style: (_vm.form ? {
      float: 'right'
    } : {})
  }, [_c('ul', {
    staticClass: "pagination"
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
          _vm.getPage(i)
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
          _vm.getPage(i)
        }
      }
    }, [_c('a', {
      attrs: {
        "href": "javascript:;"
      }
    }, [_vm._v(_vm._s(i))])]) : _c('li', {
      on: {
        "click": function($event) {
          _vm.getPage(i)
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
          _vm.getPage(i)
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
  }, [_vm._v("»")])])], 2), _vm._v(" "), (_vm.form) ? _c('div', {
    staticClass: "d-pages-form form-inline ml10",
    staticStyle: {
      "display": "inline-block"
    }
  }, [_vm._v("\n            到第 "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.jumpTo),
      expression: "jumpTo"
    }],
    staticClass: "d-pages-form-input form-control input-sm",
    staticStyle: {
      "width": "60px"
    },
    attrs: {
      "type": "number",
      "min": "1"
    },
    domProps: {
      "value": _vm._s(_vm.jumpTo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.jumpTo = _vm._n($event.target.value)
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  }), _vm._v(" 页\n            "), _c('a', {
    staticClass: "d-pages-form-btn btn btn-sm btn-primary",
    attrs: {
      "href": "javascript:;"
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
     require("vue-hot-reload-api").rerender("data-v-a5ae8702", module.exports)
  }
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__page_vue__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return __WEBPACK_IMPORTED_MODULE_0__page_vue___default.a; });





/***/ })
/******/ ]);
});
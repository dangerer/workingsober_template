/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/JavaScript/accessibility.js":
/*!********************************************!*\
  !*** ./assets/JavaScript/accessibility.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeaderAccessiblity; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// Accessiblity
var HeaderAccessiblity = /*#__PURE__*/function () {
  function HeaderAccessiblity($ele) {
    _classCallCheck(this, HeaderAccessiblity);
    this.$menuHeader = $ele.querySelectorAll('.nav-items > li > a');
    this.$menuHeaderSecond = $ele.querySelectorAll('.sub-menu > li > a');
    this.menuheader();
    this.menuheadersecond();
    this.accessibility();
  }
  _createClass(HeaderAccessiblity, [{
    key: "menuheader",
    value: function menuheader() {
      var _this = this;
      this.$menuHeader.forEach(function ($ele) {
        $ele.addEventListener('focus', function () {
          _this.$menuHeader.forEach(function ($ele1) {
            if ($ele1.closest('.has-sub')) {
              $ele1.closest('.has-sub').classList.remove('active--menu');
            }
          });
          if ($ele.closest('.has-sub')) {
            $ele.closest('.has-sub').classList.add('active--menu');
          }
          _this.accessibility();
        });
      });
    }
  }, {
    key: "menuheadersecond",
    value: function menuheadersecond() {
      var _this2 = this;
      this.$menuHeaderSecond.forEach(function ($menuHead) {
        $menuHead.addEventListener('focus', function () {
          _this2.$menuHeaderSecond.forEach(function ($ele1) {
            if ($ele1.closest('.nav-item-second')) {
              $ele1.closest('.nav-item-second').classList.remove('active--secondmenu');
            }
          });
          if ($menuHead.closest('.nav-item-second')) {
            $menuHead.closest('.nav-item-second').classList.add('active--secondmenu');
          }
          _this2.accessibility();
        });
      });
    }
  }, {
    key: "accessibility",
    value: function accessibility() {
      var tabIndexMainAll = document.querySelectorAll('.sub-menu');
      if (tabIndexMainAll.length) {
        tabIndexMainAll.forEach(function (element) {
          var tabIndexItem = element.querySelectorAll('a');
          if (tabIndexItem.length) {
            tabIndexItem.forEach(function (item) {
              if (element.closest('.active--menu')) {
                item.removeAttribute('tabindex');
              } else {
                item.setAttribute('tabindex', '-1');
              }
            });
          }
          if (element.closest('.active--menu')) {
            element.removeAttribute('tabindex');
          } else {
            element.setAttribute('tabindex', '-1');
          }
        });
      }
    }
  }]);
  return HeaderAccessiblity;
}();

document.querySelectorAll('.page-header').forEach(function ($el) {
  return new HeaderAccessiblity($el);
});

/***/ }),

/***/ "./assets/JavaScript/header.js":
/*!*************************************!*\
  !*** ./assets/JavaScript/header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeaderMenu; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//
// Header
//
var HeaderMenu = /*#__PURE__*/function () {
  function HeaderMenu($ele) {
    _classCallCheck(this, HeaderMenu);
    this.$body = document.body;
    this.$pageHeader = $ele;
    this.$menuBar = $ele.querySelector('#menuTrigger');
    this.$mainMenu = $ele.querySelector('navigation');
    this.$nav_list = $ele.querySelectorAll('.nav-items');
    this.$nav_items = $ele.querySelectorAll('.nav-items li');
    this.$navArrow = $ele.querySelectorAll('.navigation .has-sub .nav-arrow');

    if (this.$menuBar) {
      this.menuTrigger();
    }
    this.menuOpen();
    this.onResize();
    this.onScroll();
  }
  _createClass(HeaderMenu, [{
    key: "onResize",
    value: function onResize() {
      var _this = this;
      window.addEventListener('resize', function () {
        if (window.innerWidth > 992) {
          if (_this.$body.classList.contains('menu--open')) {
            _this.$body.classList.remove('menu--open');
          }
        }
      });
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var _this2 = this;
      window.addEventListener('scroll', function () {
        _this2.$pageHeader.classList.toggle('page-header--sticky', window.scrollY > 100);
      });
    }

    // Menu Trigger
  }, {
    key: "menuTrigger",
    value: function menuTrigger() {
      var _this3 = this;
      this.$menuBar.addEventListener('click', function () {
        _this3.$body.classList.toggle('menu--open');
        for (var i = 0; i < _this3.$nav_items.length; i += 1) {
          _this3.$nav_items[i].classList.remove('has-sub--open');
        }
      });
    }

    // menu Open Mobile devices
  }, {
    key: "menuOpen",
    value: function menuOpen() {
      var _this4 = this;
      this.$navArrow.forEach(function ($e) {
        $e.addEventListener('click', function () {
          _this4.removeChildFromSiblings($e.parentNode);
          $e.parentNode.classList.toggle('active');
          $e.parentNode.classList.toggle('has-sub--open');
        });
      });
    }
  }, {
    key: "removeChildFromSiblings",
    value: function removeChildFromSiblings(elem) {
      var siblings = [];
      if (!elem.parentNode) {
        return siblings;
      }
      var sibling = elem.parentNode.firstChild;
      while (sibling) {
        if (sibling.nodeType === 1 && sibling !== elem) {
          sibling.classList.remove('active');
          sibling.classList.remove('has-sub--open');
        }
        sibling = sibling.nextElementSibling;
      }
      return siblings;
    }
  }]);
  return HeaderMenu;
}();

document.querySelectorAll('.page-header').forEach(function ($el) {
  return new HeaderMenu($el);
});
if (!document.body.className.includes('ns-website-content')) {
  document.addEventListener('click', function (event) {
    if (event.target.href && event.target.href !== '#' && !event.target.href.includes('javascript:;') && !event.target.href.includes('tel:') && !event.target.href.includes('mailto:') && event.target.tagName === 'A' && !event.target.hasAttribute('target') && !event.target.hasAttribute('data-fancybox') && !event.target.hasAttribute('data-bs-toggle', 'modal') && !event.target.hasAttribute('data-glightbox') && !event.target.hasAttribute('data-darkbox') && !event.target.className.includes('lightbox')) {
      document.body.classList.remove('menu--open');
    }
  });
}

/***/ }),

/***/ "./assets/JavaScript/lazyload.js":
/*!***************************************!*\
  !*** ./assets/JavaScript/lazyload.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vanilla-lazyload */ "./node_modules/vanilla-lazyload/dist/lazyload.min.js");
/* harmony import */ var vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0__);
//
// Lazy Load Vanilla
//


function logElementEvent(eventName, element) {
  console.log(Date.now(), eventName, element.getAttribute('data-src'));
}
var callback_enter = function callback_enter(element) {
  logElementEvent('🔑 ENTERED', element);
};
var callback_exit = function callback_exit(element) {
  logElementEvent('🚪 EXITED', element);
};
var callback_loading = function callback_loading(element) {
  logElementEvent('⌚ LOADING', element);
};
var callback_loaded = function callback_loaded(element) {
  logElementEvent('👍 LOADED', element);
};
var callback_error = function callback_error(element) {
  logElementEvent('💀 ERROR', element);
  element.src = 'https://via.placeholder.com/440x560/?text=Error+Placeholder';
};
var callback_finish = function callback_finish() {
  logElementEvent('✔️ FINISHED', document.documentElement);
};
var callback_cancel = function callback_cancel(element) {
  logElementEvent('🔥 CANCEL', element);
};
var ll = new (vanilla_lazyload__WEBPACK_IMPORTED_MODULE_0___default())({
  class_applied: 'lz-applied',
  class_loading: 'lz-loading',
  class_loaded: 'lz-loaded',
  class_error: 'lz-error',
  class_entered: 'lz-entered',
  class_exited: 'lz-exited'
});

/***/ }),

/***/ "./assets/JavaScript/scrollToTop.js":
/*!******************************************!*\
  !*** ./assets/JavaScript/scrollToTop.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ GotoTop; }
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
//
// Scroll To Top
//
var GotoTop = /*#__PURE__*/function () {
  function GotoTop($ele) {
    _classCallCheck(this, GotoTop);
    this.$body = document.body;
    this.$gotoTop = $ele;
    this.goTopTrigger();
    this.onScroll();
  }
  _createClass(GotoTop, [{
    key: "goTopTrigger",
    value: function goTopTrigger() {
      this.$gotoTop.addEventListener('click', function (event) {
        event.preventDefault();
        document.documentElement.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var _this = this;
      if (this.$gotoTop) {
        window.addEventListener('scroll', function () {
          var st = window.pageYOffset || document.documentElement.scrollTop;
          if (st > 100) {
            _this.$gotoTop.classList.add('goto-top--visible');
          } else {
            _this.$gotoTop.classList.remove('goto-top--visible');
          }
        });
      }
    }
  }]);
  return GotoTop;
}();

document.querySelectorAll('.goto-top').forEach(function ($el) {
  return new GotoTop($el);
});

/***/ }),


/***/ "./node_modules/vanilla-lazyload/dist/lazyload.min.js":
/*!************************************************************!*\
  !*** ./node_modules/vanilla-lazyload/dist/lazyload.min.js ***!
  \************************************************************/
/***/ (function(module) {

!function(n,t){ true?module.exports=t():0}(this,(function(){"use strict";function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i])}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}})}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o})}window.dispatchEvent(e)},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",p="applied",m="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i)}(n,0,t)},A=function(n){return w(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,p,m],C=function(n,t,e,i){n&&"function"==typeof n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i))},N=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t},M=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n)}},R=function(n,t){n&&(n.loadingCount+=t)},G=function(n,t){n&&(n.toLoadCount=t)},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t)},H=function(n,t){j(n).forEach(t)},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return!!n[_]},S=function(n){return n[_]},U=function(n){return delete n[_]},$=function(n,t){if(!P(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t)})),n[_]=e}},q=function(n,t){if(P(n)){var e=S(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t)}(n,t,e[t])}))}},K=function(n,t,e){N(n,t.class_applied),w(n,p),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e))},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e))},W=function(n,t,e){e&&n.setAttribute(t,e)},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src))},Y={IMG:function(n,t){D(n,(function(n){$(n,B),X(n,t)})),$(n,B),X(n,t)},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src))},VIDEO:function(n,t){H(n,(function(n){$(n,V),W(n,u,y(n,t.data_src))})),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load()},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src))}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t)},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e},en=function(n,t,e){n.removeEventListener(t,e)},on=function(n){return!!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i)}delete n.llEvLisnrs}},rn=function(n,t,e){!function(n){delete n.llTempImage}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1)}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e)},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e)}(i,(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i)}(0,n,t,e),an(i)}),(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,m),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i)}(0,n,t,e),an(i)}))},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG")}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage})}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e))}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return"image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return"-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e)}}(n,t,e)}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e))}(n,t,e)}(n,t,e)},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d)},sn=function(n){D(n,(function(n){q(n,B)})),q(n,B)},dn={IMG:sn,IFRAME:function(n){q(n,V)},VIDEO:function(n){H(n,(function(n){q(n,V)})),q(n,F),n.load()},OBJECT:function(n){q(n,J)}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage}}(n)})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error))}(n,t),A(n),U(n)},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e)}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i)}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){un(n)})),un(n)}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i))}(n,t,e,i),C(e.callback_exit,n,t,i))}(n.target,n,t,e)}))},bn=function(n){return Array.prototype.slice.call(n)},pn=function(n){return n.container.querySelectorAll(n.elements_selector)},mn=function(n){return function(n){return k(n)===m}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||pn(t))},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t)}),function(n){return{root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)))}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=pn(n),bn(e).filter(mn)).forEach((function(t){M(t,n.class_error),A(t)})),t.update()}(n,e)},window.addEventListener("online",e._onlineHandler))}(o,this),this.update(e)};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t)}(n,t),w(n,h)}(n,t,e)})),G(e,0)}(r,a,this):(o=r,function(n){n.disconnect()}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t)}))}(t,o)):this.loadAll(r)},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),pn(this._settings).forEach((function(n){U(n)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),ln(n,e,t)}))},restoreAll:function(){var n=this._settings;pn(n).forEach((function(t){fn(t,n)}))}},En.load=function(n,t){var e=c(t);ln(n,e)},En.resetStatus=function(n){A(n)},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t)}(En,window.lazyLoadOptions),En}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************************!*\
  !*** ./assets/JavaScript/theme.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./assets/JavaScript/header.js");
/* harmony import */ var _lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazyload */ "./assets/JavaScript/lazyload.js");
/* harmony import */ var _scrollToTop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scrollToTop */ "./assets/JavaScript/scrollToTop.js");
/* harmony import */ var _accessibility__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accessibility */ "./assets/JavaScript/accessibility.js");
//
// theme.js
//





}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBNEMseURBQXlELG1CQUFtQixVQUFVLGFBQWEsUUFBUSxVQUFVLDRCQUE0QixlQUFlLGlDQUFpQyx1QkFBdUIsYUFBYSxHQUFHLHVCQUF1QixvQkFBb0IsZ0pBQWdKLEtBQUssMkhBQTJILHFCQUFxQiw0QkFBNEIsNkJBQTZCLGlCQUFpQixHQUFHLHVCQUF1QixxQkFBcUIsMkJBQTJCLFFBQVEsSUFBSSx1QkFBdUIsV0FBVyxRQUFRLDRCQUE0QixLQUFLLGtCQUFrQiwrQkFBK0IsT0FBTyxZQUFZLFlBQVksK0JBQStCOzs7Ozs7O1VDQS9zUjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQyxlQUFlO1dBQ2YsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBLDhDQUE4Qzs7Ozs7V0NBOUM7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVrQjtBQUNFO0FBQ0ciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JraW5nc29iZXIvLi9hc3NldHMvSmF2YVNjcmlwdC9hY2Nlc3NpYmlsaXR5LmpzIiwid2VicGFjazovL3dvcmtpbmdzb2Jlci8uL2Fzc2V0cy9KYXZhU2NyaXB0L2hlYWRlci5qcyIsIndlYnBhY2s6Ly93b3JraW5nc29iZXIvLi9hc3NldHMvSmF2YVNjcmlwdC9sYXp5bG9hZC5qcyIsIndlYnBhY2s6Ly93b3JraW5nc29iZXIvLi9hc3NldHMvSmF2YVNjcmlwdC9zY3JvbGxUb1RvcC5qcyIsIndlYnBhY2s6Ly93b3JraW5nc29iZXIvLi9ub2RlX21vZHVsZXMvdmFuaWxsYS1sYXp5bG9hZC9kaXN0L2xhenlsb2FkLm1pbi5qcyIsIndlYnBhY2s6Ly93b3JraW5nc29iZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29ya2luZ3NvYmVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dvcmtpbmdzb2Jlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd29ya2luZ3NvYmVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd29ya2luZ3NvYmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd29ya2luZ3NvYmVyLy4vYXNzZXRzL0phdmFTY3JpcHQvdGhlbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQWNjZXNzaWJsaXR5XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJBY2Nlc3NpYmxpdHkge1xuICBjb25zdHJ1Y3RvcigkZWxlKSB7XG4gICAgdGhpcy4kbWVudUhlYWRlciA9ICRlbGUucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1pdGVtcyA+IGxpID4gYScpO1xuICAgIHRoaXMuJG1lbnVIZWFkZXJTZWNvbmQgPSAkZWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zdWItbWVudSA+IGxpID4gYScpO1xuXG4gICAgdGhpcy5tZW51aGVhZGVyKCk7XG4gICAgdGhpcy5tZW51aGVhZGVyc2Vjb25kKCk7XG4gICAgdGhpcy5hY2Nlc3NpYmlsaXR5KCk7XG4gIH1cblxuICBtZW51aGVhZGVyKCkge1xuICAgIHRoaXMuJG1lbnVIZWFkZXIuZm9yRWFjaCgoJGVsZSkgPT4ge1xuICAgICAgJGVsZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kbWVudUhlYWRlci5mb3JFYWNoKCgkZWxlMSkgPT4ge1xuICAgICAgICAgIGlmICgkZWxlMS5jbG9zZXN0KCcuaGFzLXN1YicpKSB7XG4gICAgICAgICAgICAkZWxlMS5jbG9zZXN0KCcuaGFzLXN1YicpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS0tbWVudScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICgkZWxlLmNsb3Nlc3QoJy5oYXMtc3ViJykpIHtcbiAgICAgICAgICAkZWxlLmNsb3Nlc3QoJy5oYXMtc3ViJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLS1tZW51Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY2Nlc3NpYmlsaXR5KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG1lbnVoZWFkZXJzZWNvbmQoKSB7XG4gICAgdGhpcy4kbWVudUhlYWRlclNlY29uZC5mb3JFYWNoKCgkbWVudUhlYWQpID0+IHtcbiAgICAgICRtZW51SGVhZC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHtcbiAgICAgICAgdGhpcy4kbWVudUhlYWRlclNlY29uZC5mb3JFYWNoKCgkZWxlMSkgPT4ge1xuICAgICAgICAgIGlmICgkZWxlMS5jbG9zZXN0KCcubmF2LWl0ZW0tc2Vjb25kJykpIHtcbiAgICAgICAgICAgICRlbGUxLmNsb3Nlc3QoJy5uYXYtaXRlbS1zZWNvbmQnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtLXNlY29uZG1lbnUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoJG1lbnVIZWFkLmNsb3Nlc3QoJy5uYXYtaXRlbS1zZWNvbmQnKSkge1xuICAgICAgICAgICRtZW51SGVhZC5jbG9zZXN0KCcubmF2LWl0ZW0tc2Vjb25kJykuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLS1zZWNvbmRtZW51Jyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hY2Nlc3NpYmlsaXR5KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjY2Vzc2liaWxpdHkoKSB7XG4gICAgY29uc3QgdGFiSW5kZXhNYWluQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnN1Yi1tZW51Jyk7XG4gICAgaWYgKHRhYkluZGV4TWFpbkFsbC5sZW5ndGgpIHtcbiAgICAgIHRhYkluZGV4TWFpbkFsbC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYkluZGV4SXRlbSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYScpO1xuICAgICAgICBpZiAodGFiSW5kZXhJdGVtLmxlbmd0aCkge1xuICAgICAgICAgIHRhYkluZGV4SXRlbS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuYWN0aXZlLS1tZW51JykpIHtcbiAgICAgICAgICAgICAgaXRlbS5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlbWVudC5jbG9zZXN0KCcuYWN0aXZlLS1tZW51JykpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLWhlYWRlcicpLmZvckVhY2goKCRlbCkgPT4gbmV3IEhlYWRlckFjY2Vzc2libGl0eSgkZWwpKTtcbiIsIi8vXG4vLyBIZWFkZXJcbi8vXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJNZW51IHtcbiAgY29uc3RydWN0b3IoJGVsZSkge1xuICAgIHRoaXMuJGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuICAgIHRoaXMuJHBhZ2VIZWFkZXIgPSAkZWxlO1xuICAgIHRoaXMuJG1lbnVCYXIgPSAkZWxlLnF1ZXJ5U2VsZWN0b3IoJyNtZW51VHJpZ2dlcicpO1xuICAgIHRoaXMuJG1haW5NZW51ID0gJGVsZS5xdWVyeVNlbGVjdG9yKCduYXZpZ2F0aW9uJyk7XG4gICAgdGhpcy4kbmF2X2xpc3QgPSAkZWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbXMnKTtcbiAgICB0aGlzLiRuYXZfaXRlbXMgPSAkZWxlLnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbXMgbGknKTtcbiAgICB0aGlzLiRuYXZBcnJvdyA9ICRlbGUucXVlcnlTZWxlY3RvckFsbCgnLm5hdmlnYXRpb24gLmhhcy1zdWIgLm5hdi1hcnJvdycpO1xuXG4gICAgdGhpcy5tZW51VHJpZ2dlcigpO1xuICAgIHRoaXMubWVudU9wZW4oKTtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgdGhpcy5vblNjcm9sbCgpO1xuICB9XG5cbiAgb25SZXNpemUoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDk5Mikge1xuICAgICAgICBpZiAodGhpcy4kYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtLW9wZW4nKSkge1xuICAgICAgICAgIHRoaXMuJGJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS0tb3BlbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvblNjcm9sbCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgdGhpcy4kcGFnZUhlYWRlci5jbGFzc0xpc3QudG9nZ2xlKCdwYWdlLWhlYWRlci0tc3RpY2t5Jywgd2luZG93LnNjcm9sbFkgPiAxMDApO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gTWVudSBUcmlnZ2VyXG4gIG1lbnVUcmlnZ2VyKCkge1xuICAgIHRoaXMuJG1lbnVCYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLiRib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtLW9wZW4nKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4kbmF2X2l0ZW1zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHRoaXMuJG5hdl9pdGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtc3ViLS1vcGVuJyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBtZW51IE9wZW4gTW9iaWxlIGRldmljZXNcbiAgbWVudU9wZW4oKSB7XG4gICAgdGhpcy4kbmF2QXJyb3cuZm9yRWFjaCgoJGUpID0+IHtcbiAgICAgICRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkRnJvbVNpYmxpbmdzKCRlLnBhcmVudE5vZGUpO1xuICAgICAgICAkZS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xuICAgICAgICAkZS5wYXJlbnROb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2hhcy1zdWItLW9wZW4nKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlQ2hpbGRGcm9tU2libGluZ3MoZWxlbSkge1xuICAgIGNvbnN0IHNpYmxpbmdzID0gW107XG5cbiAgICBpZiAoIWVsZW0ucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIHNpYmxpbmdzO1xuICAgIH1cblxuICAgIGxldCBzaWJsaW5nID0gZWxlbS5wYXJlbnROb2RlLmZpcnN0Q2hpbGQ7XG5cbiAgICB3aGlsZSAoc2libGluZykge1xuICAgICAgaWYgKHNpYmxpbmcubm9kZVR5cGUgPT09IDEgJiYgc2libGluZyAhPT0gZWxlbSkge1xuICAgICAgICBzaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBzaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy1zdWItLW9wZW4nKTtcbiAgICAgIH1cbiAgICAgIHNpYmxpbmcgPSBzaWJsaW5nLm5leHRFbGVtZW50U2libGluZztcbiAgICB9XG4gICAgcmV0dXJuIHNpYmxpbmdzO1xuICB9XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLWhlYWRlcicpLmZvckVhY2goKCRlbCkgPT4gbmV3IEhlYWRlck1lbnUoJGVsKSk7XG5cbmlmICghZG9jdW1lbnQuYm9keS5jbGFzc05hbWUuaW5jbHVkZXMoJ25zLXdlYnNpdGUtY29udGVudCcpKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5ocmVmICYmIGV2ZW50LnRhcmdldC5ocmVmICE9PSAnIycgJiYgIWV2ZW50LnRhcmdldC5ocmVmLmluY2x1ZGVzKCdqYXZhc2NyaXB0OjsnKSAmJiAhZXZlbnQudGFyZ2V0LmhyZWYuaW5jbHVkZXMoJ3RlbDonKSAmJiAhZXZlbnQudGFyZ2V0LmhyZWYuaW5jbHVkZXMoJ21haWx0bzonKSAmJiBldmVudC50YXJnZXQudGFnTmFtZSA9PT0gJ0EnICYmICFldmVudC50YXJnZXQuaGFzQXR0cmlidXRlKCd0YXJnZXQnKSAmJiAhZXZlbnQudGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1mYW5jeWJveCcpICYmICFldmVudC50YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLWJzLXRvZ2dsZScsICdtb2RhbCcpICYmICFldmVudC50YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLWdsaWdodGJveCcpICYmICFldmVudC50YXJnZXQuaGFzQXR0cmlidXRlKCdkYXRhLWRhcmtib3gnKSAmJiAhZXZlbnQudGFyZ2V0LmNsYXNzTmFtZS5pbmNsdWRlcygnbGlnaHRib3gnKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LS1vcGVuJyk7XG4gICAgfVxuICB9KTtcbn1cbiIsIi8vXG4vLyBMYXp5IExvYWQgVmFuaWxsYVxuLy9cblxuaW1wb3J0IExhenlMb2FkIGZyb20gJ3ZhbmlsbGEtbGF6eWxvYWQnO1xuXG5mdW5jdGlvbiBsb2dFbGVtZW50RXZlbnQoZXZlbnROYW1lLCBlbGVtZW50KSB7XG4gIGNvbnNvbGUubG9nKERhdGUubm93KCksIGV2ZW50TmFtZSwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xufVxuXG5jb25zdCBjYWxsYmFja19lbnRlciA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGxvZ0VsZW1lbnRFdmVudCgn8J+UkSBFTlRFUkVEJywgZWxlbWVudCk7XG59O1xuXG5jb25zdCBjYWxsYmFja19leGl0ID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgbG9nRWxlbWVudEV2ZW50KCfwn5qqIEVYSVRFRCcsIGVsZW1lbnQpO1xufTtcblxuY29uc3QgY2FsbGJhY2tfbG9hZGluZyA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGxvZ0VsZW1lbnRFdmVudCgn4oyaIExPQURJTkcnLCBlbGVtZW50KTtcbn07XG5cbmNvbnN0IGNhbGxiYWNrX2xvYWRlZCA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gIGxvZ0VsZW1lbnRFdmVudCgn8J+RjSBMT0FERUQnLCBlbGVtZW50KTtcbn07XG5cbmNvbnN0IGNhbGxiYWNrX2Vycm9yID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgbG9nRWxlbWVudEV2ZW50KCfwn5KAIEVSUk9SJywgZWxlbWVudCk7XG4gIGVsZW1lbnQuc3JjID0gJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS80NDB4NTYwLz90ZXh0PUVycm9yK1BsYWNlaG9sZGVyJztcbn07XG5cbmNvbnN0IGNhbGxiYWNrX2ZpbmlzaCA9IGZ1bmN0aW9uICgpIHtcbiAgbG9nRWxlbWVudEV2ZW50KCfinJTvuI8gRklOSVNIRUQnLCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xufTtcblxuY29uc3QgY2FsbGJhY2tfY2FuY2VsID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgbG9nRWxlbWVudEV2ZW50KCfwn5SlIENBTkNFTCcsIGVsZW1lbnQpO1xufTtcblxuY29uc3QgbGwgPSBuZXcgTGF6eUxvYWQoe1xuICBjbGFzc19hcHBsaWVkOiAnbHotYXBwbGllZCcsXG4gIGNsYXNzX2xvYWRpbmc6ICdsei1sb2FkaW5nJyxcbiAgY2xhc3NfbG9hZGVkOiAnbHotbG9hZGVkJyxcbiAgY2xhc3NfZXJyb3I6ICdsei1lcnJvcicsXG4gIGNsYXNzX2VudGVyZWQ6ICdsei1lbnRlcmVkJyxcbiAgY2xhc3NfZXhpdGVkOiAnbHotZXhpdGVkJyxcbn0pO1xuIiwiLy9cbi8vIFNjcm9sbCBUbyBUb3Bcbi8vXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvdG9Ub3Age1xuICBjb25zdHJ1Y3RvcigkZWxlKSB7XG4gICAgdGhpcy4kYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgdGhpcy4kZ290b1RvcCA9ICRlbGU7XG5cbiAgICB0aGlzLmdvVG9wVHJpZ2dlcigpO1xuICAgIHRoaXMub25TY3JvbGwoKTtcbiAgfVxuXG4gIGdvVG9wVHJpZ2dlcigpIHtcbiAgICB0aGlzLiRnb3RvVG9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIG9uU2Nyb2xsKCkge1xuICAgIGlmICh0aGlzLiRnb3RvVG9wKSB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBzdCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICAgICAgICBpZiAoc3QgPiAxMDApIHtcbiAgICAgICAgICB0aGlzLiRnb3RvVG9wLmNsYXNzTGlzdC5hZGQoJ2dvdG8tdG9wLS12aXNpYmxlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kZ290b1RvcC5jbGFzc0xpc3QucmVtb3ZlKCdnb3RvLXRvcC0tdmlzaWJsZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdvdG8tdG9wJykuZm9yRWFjaCgoJGVsKSA9PiBuZXcgR290b1RvcCgkZWwpKTtcbiIsIiFmdW5jdGlvbihuLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOihuPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6bnx8c2VsZikuTGF6eUxvYWQ9dCgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oKXtyZXR1cm4gbj1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihuKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgZT1hcmd1bWVudHNbdF07Zm9yKHZhciBpIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsaSkmJihuW2ldPWVbaV0pfXJldHVybiBufSxuLmFwcGx5KHRoaXMsYXJndW1lbnRzKX12YXIgdD1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93LGU9dCYmIShcIm9uc2Nyb2xsXCJpbiB3aW5kb3cpfHxcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYvKGdsZXxpbmd8cm8pYm90fGNyYXdsfHNwaWRlci9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksaT10JiZcIkludGVyc2VjdGlvbk9ic2VydmVyXCJpbiB3aW5kb3csbz10JiZcImNsYXNzTGlzdFwiaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIiksYT10JiZ3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbz4xLHI9e2VsZW1lbnRzX3NlbGVjdG9yOlwiLmxhenlcIixjb250YWluZXI6ZXx8dD9kb2N1bWVudDpudWxsLHRocmVzaG9sZDozMDAsdGhyZXNob2xkczpudWxsLGRhdGFfc3JjOlwic3JjXCIsZGF0YV9zcmNzZXQ6XCJzcmNzZXRcIixkYXRhX3NpemVzOlwic2l6ZXNcIixkYXRhX2JnOlwiYmdcIixkYXRhX2JnX2hpZHBpOlwiYmctaGlkcGlcIixkYXRhX2JnX211bHRpOlwiYmctbXVsdGlcIixkYXRhX2JnX211bHRpX2hpZHBpOlwiYmctbXVsdGktaGlkcGlcIixkYXRhX2JnX3NldDpcImJnLXNldFwiLGRhdGFfcG9zdGVyOlwicG9zdGVyXCIsY2xhc3NfYXBwbGllZDpcImFwcGxpZWRcIixjbGFzc19sb2FkaW5nOlwibG9hZGluZ1wiLGNsYXNzX2xvYWRlZDpcImxvYWRlZFwiLGNsYXNzX2Vycm9yOlwiZXJyb3JcIixjbGFzc19lbnRlcmVkOlwiZW50ZXJlZFwiLGNsYXNzX2V4aXRlZDpcImV4aXRlZFwiLHVub2JzZXJ2ZV9jb21wbGV0ZWQ6ITAsdW5vYnNlcnZlX2VudGVyZWQ6ITEsY2FuY2VsX29uX2V4aXQ6ITAsY2FsbGJhY2tfZW50ZXI6bnVsbCxjYWxsYmFja19leGl0Om51bGwsY2FsbGJhY2tfYXBwbGllZDpudWxsLGNhbGxiYWNrX2xvYWRpbmc6bnVsbCxjYWxsYmFja19sb2FkZWQ6bnVsbCxjYWxsYmFja19lcnJvcjpudWxsLGNhbGxiYWNrX2ZpbmlzaDpudWxsLGNhbGxiYWNrX2NhbmNlbDpudWxsLHVzZV9uYXRpdmU6ITEscmVzdG9yZV9vbl9lcnJvcjohMX0sYz1mdW5jdGlvbih0KXtyZXR1cm4gbih7fSxyLHQpfSxsPWZ1bmN0aW9uKG4sdCl7dmFyIGUsaT1cIkxhenlMb2FkOjpJbml0aWFsaXplZFwiLG89bmV3IG4odCk7dHJ5e2U9bmV3IEN1c3RvbUV2ZW50KGkse2RldGFpbDp7aW5zdGFuY2U6b319KX1jYXRjaChuKXsoZT1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpKS5pbml0Q3VzdG9tRXZlbnQoaSwhMSwhMSx7aW5zdGFuY2U6b30pfXdpbmRvdy5kaXNwYXRjaEV2ZW50KGUpfSx1PVwic3JjXCIscz1cInNyY3NldFwiLGQ9XCJzaXplc1wiLGY9XCJwb3N0ZXJcIixfPVwibGxPcmlnaW5hbEF0dHJzXCIsZz1cImRhdGFcIix2PVwibG9hZGluZ1wiLGI9XCJsb2FkZWRcIixwPVwiYXBwbGllZFwiLG09XCJlcnJvclwiLGg9XCJuYXRpdmVcIixFPVwiZGF0YS1cIixJPVwibGwtc3RhdHVzXCIseT1mdW5jdGlvbihuLHQpe3JldHVybiBuLmdldEF0dHJpYnV0ZShFK3QpfSxrPWZ1bmN0aW9uKG4pe3JldHVybiB5KG4sSSl9LHc9ZnVuY3Rpb24obix0KXtyZXR1cm4gZnVuY3Rpb24obix0LGUpe3ZhciBpPVwiZGF0YS1sbC1zdGF0dXNcIjtudWxsIT09ZT9uLnNldEF0dHJpYnV0ZShpLGUpOm4ucmVtb3ZlQXR0cmlidXRlKGkpfShuLDAsdCl9LEE9ZnVuY3Rpb24obil7cmV0dXJuIHcobixudWxsKX0sTD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbD09PWsobil9LE89ZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT1ofSx4PVt2LGIscCxtXSxDPWZ1bmN0aW9uKG4sdCxlLGkpe24mJlwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJih2b2lkIDA9PT1pP3ZvaWQgMD09PWU/bih0KTpuKHQsZSk6bih0LGUsaSkpfSxOPWZ1bmN0aW9uKG4sdCl7bz9uLmNsYXNzTGlzdC5hZGQodCk6bi5jbGFzc05hbWUrPShuLmNsYXNzTmFtZT9cIiBcIjpcIlwiKSt0fSxNPWZ1bmN0aW9uKG4sdCl7bz9uLmNsYXNzTGlzdC5yZW1vdmUodCk6bi5jbGFzc05hbWU9bi5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXHMrKVwiK3QrXCIoXFxcXHMrfCQpXCIpLFwiIFwiKS5yZXBsYWNlKC9eXFxzKy8sXCJcIikucmVwbGFjZSgvXFxzKyQvLFwiXCIpfSx6PWZ1bmN0aW9uKG4pe3JldHVybiBuLmxsVGVtcEltYWdlfSxUPWZ1bmN0aW9uKG4sdCl7aWYodCl7dmFyIGU9dC5fb2JzZXJ2ZXI7ZSYmZS51bm9ic2VydmUobil9fSxSPWZ1bmN0aW9uKG4sdCl7biYmKG4ubG9hZGluZ0NvdW50Kz10KX0sRz1mdW5jdGlvbihuLHQpe24mJihuLnRvTG9hZENvdW50PXQpfSxqPWZ1bmN0aW9uKG4pe2Zvcih2YXIgdCxlPVtdLGk9MDt0PW4uY2hpbGRyZW5baV07aSs9MSlcIlNPVVJDRVwiPT09dC50YWdOYW1lJiZlLnB1c2godCk7cmV0dXJuIGV9LEQ9ZnVuY3Rpb24obix0KXt2YXIgZT1uLnBhcmVudE5vZGU7ZSYmXCJQSUNUVVJFXCI9PT1lLnRhZ05hbWUmJmooZSkuZm9yRWFjaCh0KX0sSD1mdW5jdGlvbihuLHQpe2oobikuZm9yRWFjaCh0KX0sVj1bdV0sRj1bdSxmXSxCPVt1LHMsZF0sSj1bZ10sUD1mdW5jdGlvbihuKXtyZXR1cm4hIW5bX119LFM9ZnVuY3Rpb24obil7cmV0dXJuIG5bX119LFU9ZnVuY3Rpb24obil7cmV0dXJuIGRlbGV0ZSBuW19dfSwkPWZ1bmN0aW9uKG4sdCl7aWYoIVAobikpe3ZhciBlPXt9O3QuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZVt0XT1uLmdldEF0dHJpYnV0ZSh0KX0pKSxuW19dPWV9fSxxPWZ1bmN0aW9uKG4sdCl7aWYoUChuKSl7dmFyIGU9UyhuKTt0LmZvckVhY2goKGZ1bmN0aW9uKHQpeyFmdW5jdGlvbihuLHQsZSl7ZT9uLnNldEF0dHJpYnV0ZSh0LGUpOm4ucmVtb3ZlQXR0cmlidXRlKHQpfShuLHQsZVt0XSl9KSl9fSxLPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19hcHBsaWVkKSx3KG4scCksZSYmKHQudW5vYnNlcnZlX2NvbXBsZXRlZCYmVChuLHQpLEModC5jYWxsYmFja19hcHBsaWVkLG4sZSkpfSxRPWZ1bmN0aW9uKG4sdCxlKXtOKG4sdC5jbGFzc19sb2FkaW5nKSx3KG4sdiksZSYmKFIoZSwxKSxDKHQuY2FsbGJhY2tfbG9hZGluZyxuLGUpKX0sVz1mdW5jdGlvbihuLHQsZSl7ZSYmbi5zZXRBdHRyaWJ1dGUodCxlKX0sWD1mdW5jdGlvbihuLHQpe1cobixkLHkobix0LmRhdGFfc2l6ZXMpKSxXKG4scyx5KG4sdC5kYXRhX3NyY3NldCkpLFcobix1LHkobix0LmRhdGFfc3JjKSl9LFk9e0lNRzpmdW5jdGlvbihuLHQpe0QobiwoZnVuY3Rpb24obil7JChuLEIpLFgobix0KX0pKSwkKG4sQiksWChuLHQpfSxJRlJBTUU6ZnVuY3Rpb24obix0KXskKG4sViksVyhuLHUseShuLHQuZGF0YV9zcmMpKX0sVklERU86ZnVuY3Rpb24obix0KXtIKG4sKGZ1bmN0aW9uKG4peyQobixWKSxXKG4sdSx5KG4sdC5kYXRhX3NyYykpfSkpLCQobixGKSxXKG4sZix5KG4sdC5kYXRhX3Bvc3RlcikpLFcobix1LHkobix0LmRhdGFfc3JjKSksbi5sb2FkKCl9LE9CSkVDVDpmdW5jdGlvbihuLHQpeyQobixKKSxXKG4sZyx5KG4sdC5kYXRhX3NyYykpfX0sWj1bXCJJTUdcIixcIklGUkFNRVwiLFwiVklERU9cIixcIk9CSkVDVFwiXSxubj1mdW5jdGlvbihuLHQpeyF0fHxmdW5jdGlvbihuKXtyZXR1cm4gbi5sb2FkaW5nQ291bnQ+MH0odCl8fGZ1bmN0aW9uKG4pe3JldHVybiBuLnRvTG9hZENvdW50PjB9KHQpfHxDKG4uY2FsbGJhY2tfZmluaXNoLHQpfSx0bj1mdW5jdGlvbihuLHQsZSl7bi5hZGRFdmVudExpc3RlbmVyKHQsZSksbi5sbEV2TGlzbnJzW3RdPWV9LGVuPWZ1bmN0aW9uKG4sdCxlKXtuLnJlbW92ZUV2ZW50TGlzdGVuZXIodCxlKX0sb249ZnVuY3Rpb24obil7cmV0dXJuISFuLmxsRXZMaXNucnN9LGFuPWZ1bmN0aW9uKG4pe2lmKG9uKG4pKXt2YXIgdD1uLmxsRXZMaXNucnM7Zm9yKHZhciBlIGluIHQpe3ZhciBpPXRbZV07ZW4obixlLGkpfWRlbGV0ZSBuLmxsRXZMaXNucnN9fSxybj1mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe2RlbGV0ZSBuLmxsVGVtcEltYWdlfShuKSxSKGUsLTEpLGZ1bmN0aW9uKG4pe24mJihuLnRvTG9hZENvdW50LT0xKX0oZSksTShuLHQuY2xhc3NfbG9hZGluZyksdC51bm9ic2VydmVfY29tcGxldGVkJiZUKG4sZSl9LGNuPWZ1bmN0aW9uKG4sdCxlKXt2YXIgaT16KG4pfHxuO29uKGkpfHxmdW5jdGlvbihuLHQsZSl7b24obil8fChuLmxsRXZMaXNucnM9e30pO3ZhciBpPVwiVklERU9cIj09PW4udGFnTmFtZT9cImxvYWRlZGRhdGFcIjpcImxvYWRcIjt0bihuLGksdCksdG4obixcImVycm9yXCIsZSl9KGksKGZ1bmN0aW9uKG8peyFmdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1PKHQpO3JuKHQsZSxpKSxOKHQsZS5jbGFzc19sb2FkZWQpLHcodCxiKSxDKGUuY2FsbGJhY2tfbG9hZGVkLHQsaSksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSwoZnVuY3Rpb24obyl7IWZ1bmN0aW9uKG4sdCxlLGkpe3ZhciBvPU8odCk7cm4odCxlLGkpLE4odCxlLmNsYXNzX2Vycm9yKSx3KHQsbSksQyhlLmNhbGxiYWNrX2Vycm9yLHQsaSksZS5yZXN0b3JlX29uX2Vycm9yJiZxKHQsQiksb3x8bm4oZSxpKX0oMCxuLHQsZSksYW4oaSl9KSl9LGxuPWZ1bmN0aW9uKG4sdCxlKXshZnVuY3Rpb24obil7cmV0dXJuIFouaW5kZXhPZihuLnRhZ05hbWUpPi0xfShuKT9mdW5jdGlvbihuLHQsZSl7IWZ1bmN0aW9uKG4pe24ubGxUZW1wSW1hZ2U9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIklNR1wiKX0obiksY24obix0LGUpLGZ1bmN0aW9uKG4pe1Aobil8fChuW19dPXtiYWNrZ3JvdW5kSW1hZ2U6bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2V9KX0obiksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmcpLG89eShuLHQuZGF0YV9iZ19oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9J3VybChcIicuY29uY2F0KHIsJ1wiKScpLHoobikuc2V0QXR0cmlidXRlKHUsciksUShuLHQsZSkpfShuLHQsZSksZnVuY3Rpb24obix0LGUpe3ZhciBpPXkobix0LmRhdGFfYmdfbXVsdGkpLG89eShuLHQuZGF0YV9iZ19tdWx0aV9oaWRwaSkscj1hJiZvP286aTtyJiYobi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9cixLKG4sdCxlKSl9KG4sdCxlKSxmdW5jdGlvbihuLHQsZSl7dmFyIGk9eShuLHQuZGF0YV9iZ19zZXQpO2lmKGkpe3ZhciBvPWkuc3BsaXQoXCJ8XCIpLGE9by5tYXAoKGZ1bmN0aW9uKG4pe3JldHVyblwiaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKTtuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSxcIlwiPT09bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UmJihhPW8ubWFwKChmdW5jdGlvbihuKXtyZXR1cm5cIi13ZWJraXQtaW1hZ2Utc2V0KFwiLmNvbmNhdChuLFwiKVwiKX0pKSxuLnN0eWxlLmJhY2tncm91bmRJbWFnZT1hLmpvaW4oKSksSyhuLHQsZSl9fShuLHQsZSl9KG4sdCxlKTpmdW5jdGlvbihuLHQsZSl7Y24obix0LGUpLGZ1bmN0aW9uKG4sdCxlKXt2YXIgaT1ZW24udGFnTmFtZV07aSYmKGkobix0KSxRKG4sdCxlKSl9KG4sdCxlKX0obix0LGUpfSx1bj1mdW5jdGlvbihuKXtuLnJlbW92ZUF0dHJpYnV0ZSh1KSxuLnJlbW92ZUF0dHJpYnV0ZShzKSxuLnJlbW92ZUF0dHJpYnV0ZShkKX0sc249ZnVuY3Rpb24obil7RChuLChmdW5jdGlvbihuKXtxKG4sQil9KSkscShuLEIpfSxkbj17SU1HOnNuLElGUkFNRTpmdW5jdGlvbihuKXtxKG4sVil9LFZJREVPOmZ1bmN0aW9uKG4pe0gobiwoZnVuY3Rpb24obil7cShuLFYpfSkpLHEobixGKSxuLmxvYWQoKX0sT0JKRUNUOmZ1bmN0aW9uKG4pe3EobixKKX19LGZuPWZ1bmN0aW9uKG4sdCl7KGZ1bmN0aW9uKG4pe3ZhciB0PWRuW24udGFnTmFtZV07dD90KG4pOmZ1bmN0aW9uKG4pe2lmKFAobikpe3ZhciB0PVMobik7bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2U9dC5iYWNrZ3JvdW5kSW1hZ2V9fShuKX0pKG4pLGZ1bmN0aW9uKG4sdCl7TChuKXx8TyhuKXx8KE0obix0LmNsYXNzX2VudGVyZWQpLE0obix0LmNsYXNzX2V4aXRlZCksTShuLHQuY2xhc3NfYXBwbGllZCksTShuLHQuY2xhc3NfbG9hZGluZyksTShuLHQuY2xhc3NfbG9hZGVkKSxNKG4sdC5jbGFzc19lcnJvcikpfShuLHQpLEEobiksVShuKX0sX249W1wiSU1HXCIsXCJJRlJBTUVcIixcIlZJREVPXCJdLGduPWZ1bmN0aW9uKG4pe3JldHVybiBuLnVzZV9uYXRpdmUmJlwibG9hZGluZ1wiaW4gSFRNTEltYWdlRWxlbWVudC5wcm90b3R5cGV9LHZuPWZ1bmN0aW9uKG4sdCxlKXtuLmZvckVhY2goKGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbihuKXtyZXR1cm4gbi5pc0ludGVyc2VjdGluZ3x8bi5pbnRlcnNlY3Rpb25SYXRpbz4wfShuKT9mdW5jdGlvbihuLHQsZSxpKXt2YXIgbz1mdW5jdGlvbihuKXtyZXR1cm4geC5pbmRleE9mKGsobikpPj0wfShuKTt3KG4sXCJlbnRlcmVkXCIpLE4obixlLmNsYXNzX2VudGVyZWQpLE0obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUpe3QudW5vYnNlcnZlX2VudGVyZWQmJlQobixlKX0obixlLGkpLEMoZS5jYWxsYmFja19lbnRlcixuLHQsaSksb3x8bG4obixlLGkpfShuLnRhcmdldCxuLHQsZSk6ZnVuY3Rpb24obix0LGUsaSl7TChuKXx8KE4obixlLmNsYXNzX2V4aXRlZCksZnVuY3Rpb24obix0LGUsaSl7ZS5jYW5jZWxfb25fZXhpdCYmZnVuY3Rpb24obil7cmV0dXJuIGsobik9PT12fShuKSYmXCJJTUdcIj09PW4udGFnTmFtZSYmKGFuKG4pLGZ1bmN0aW9uKG4pe0QobiwoZnVuY3Rpb24obil7dW4obil9KSksdW4obil9KG4pLHNuKG4pLE0obixlLmNsYXNzX2xvYWRpbmcpLFIoaSwtMSksQShuKSxDKGUuY2FsbGJhY2tfY2FuY2VsLG4sdCxpKSl9KG4sdCxlLGkpLEMoZS5jYWxsYmFja19leGl0LG4sdCxpKSl9KG4udGFyZ2V0LG4sdCxlKX0pKX0sYm49ZnVuY3Rpb24obil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG4pfSxwbj1mdW5jdGlvbihuKXtyZXR1cm4gbi5jb250YWluZXIucXVlcnlTZWxlY3RvckFsbChuLmVsZW1lbnRzX3NlbGVjdG9yKX0sbW49ZnVuY3Rpb24obil7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBrKG4pPT09bX0obil9LGhuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIGZ1bmN0aW9uKG4pe3JldHVybiBibihuKS5maWx0ZXIoTCl9KG58fHBuKHQpKX0sRW49ZnVuY3Rpb24obixlKXt2YXIgbz1jKG4pO3RoaXMuX3NldHRpbmdzPW8sdGhpcy5sb2FkaW5nQ291bnQ9MCxmdW5jdGlvbihuLHQpe2kmJiFnbihuKSYmKHQuX29ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZnVuY3Rpb24oZSl7dm4oZSxuLHQpfSksZnVuY3Rpb24obil7cmV0dXJue3Jvb3Q6bi5jb250YWluZXI9PT1kb2N1bWVudD9udWxsOm4uY29udGFpbmVyLHJvb3RNYXJnaW46bi50aHJlc2hvbGRzfHxuLnRocmVzaG9sZCtcInB4XCJ9fShuKSkpfShvLHRoaXMpLGZ1bmN0aW9uKG4sZSl7dCYmKGUuX29ubGluZUhhbmRsZXI9ZnVuY3Rpb24oKXshZnVuY3Rpb24obix0KXt2YXIgZTsoZT1wbihuKSxibihlKS5maWx0ZXIobW4pKS5mb3JFYWNoKChmdW5jdGlvbih0KXtNKHQsbi5jbGFzc19lcnJvciksQSh0KX0pKSx0LnVwZGF0ZSgpfShuLGUpfSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLGUuX29ubGluZUhhbmRsZXIpKX0obyx0aGlzKSx0aGlzLnVwZGF0ZShlKX07cmV0dXJuIEVuLnByb3RvdHlwZT17dXBkYXRlOmZ1bmN0aW9uKG4pe3ZhciB0LG8sYT10aGlzLl9zZXR0aW5ncyxyPWhuKG4sYSk7Ryh0aGlzLHIubGVuZ3RoKSwhZSYmaT9nbihhKT9mdW5jdGlvbihuLHQsZSl7bi5mb3JFYWNoKChmdW5jdGlvbihuKXstMSE9PV9uLmluZGV4T2Yobi50YWdOYW1lKSYmZnVuY3Rpb24obix0LGUpe24uc2V0QXR0cmlidXRlKFwibG9hZGluZ1wiLFwibGF6eVwiKSxjbihuLHQsZSksZnVuY3Rpb24obix0KXt2YXIgZT1ZW24udGFnTmFtZV07ZSYmZShuLHQpfShuLHQpLHcobixoKX0obix0LGUpfSkpLEcoZSwwKX0ocixhLHRoaXMpOihvPXIsZnVuY3Rpb24obil7bi5kaXNjb25uZWN0KCl9KHQ9dGhpcy5fb2JzZXJ2ZXIpLGZ1bmN0aW9uKG4sdCl7dC5mb3JFYWNoKChmdW5jdGlvbih0KXtuLm9ic2VydmUodCl9KSl9KHQsbykpOnRoaXMubG9hZEFsbChyKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX29ic2VydmVyJiZ0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCksdCYmd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIix0aGlzLl9vbmxpbmVIYW5kbGVyKSxwbih0aGlzLl9zZXR0aW5ncykuZm9yRWFjaCgoZnVuY3Rpb24obil7VShuKX0pKSxkZWxldGUgdGhpcy5fb2JzZXJ2ZXIsZGVsZXRlIHRoaXMuX3NldHRpbmdzLGRlbGV0ZSB0aGlzLl9vbmxpbmVIYW5kbGVyLGRlbGV0ZSB0aGlzLmxvYWRpbmdDb3VudCxkZWxldGUgdGhpcy50b0xvYWRDb3VudH0sbG9hZEFsbDpmdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9dGhpcy5fc2V0dGluZ3M7aG4obixlKS5mb3JFYWNoKChmdW5jdGlvbihuKXtUKG4sdCksbG4obixlLHQpfSkpfSxyZXN0b3JlQWxsOmZ1bmN0aW9uKCl7dmFyIG49dGhpcy5fc2V0dGluZ3M7cG4obikuZm9yRWFjaCgoZnVuY3Rpb24odCl7Zm4odCxuKX0pKX19LEVuLmxvYWQ9ZnVuY3Rpb24obix0KXt2YXIgZT1jKHQpO2xuKG4sZSl9LEVuLnJlc2V0U3RhdHVzPWZ1bmN0aW9uKG4pe0Eobil9LHQmJmZ1bmN0aW9uKG4sdCl7aWYodClpZih0Lmxlbmd0aClmb3IodmFyIGUsaT0wO2U9dFtpXTtpKz0xKWwobixlKTtlbHNlIGwobix0KX0oRW4sd2luZG93LmxhenlMb2FkT3B0aW9ucyksRW59KSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcblx0XHRmdW5jdGlvbigpIHsgcmV0dXJuIG1vZHVsZTsgfTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy9cbi8vIHRoZW1lLmpzXG4vL1xuXG5pbXBvcnQgJy4vaGVhZGVyJztcbmltcG9ydCAnLi9sYXp5bG9hZCc7XG5pbXBvcnQgJy4vc2Nyb2xsVG9Ub3AnO1xuaW1wb3J0ICcuL2FjY2Vzc2liaWxpdHknO1xuIl0sIm5hbWVzIjpbIkhlYWRlckFjY2Vzc2libGl0eSIsIiRlbGUiLCJfY2xhc3NDYWxsQ2hlY2siLCIkbWVudUhlYWRlciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCIkbWVudUhlYWRlclNlY29uZCIsIm1lbnVoZWFkZXIiLCJtZW51aGVhZGVyc2Vjb25kIiwiYWNjZXNzaWJpbGl0eSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiX3RoaXMiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsIiRlbGUxIiwiY2xvc2VzdCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIl90aGlzMiIsIiRtZW51SGVhZCIsInRhYkluZGV4TWFpbkFsbCIsImRvY3VtZW50IiwibGVuZ3RoIiwiZWxlbWVudCIsInRhYkluZGV4SXRlbSIsIml0ZW0iLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJkZWZhdWx0IiwiJGVsIiwiSGVhZGVyTWVudSIsIiRib2R5IiwiYm9keSIsIiRwYWdlSGVhZGVyIiwiJG1lbnVCYXIiLCJxdWVyeVNlbGVjdG9yIiwiJG1haW5NZW51IiwiJG5hdl9saXN0IiwiJG5hdl9pdGVtcyIsIiRuYXZBcnJvdyIsIm1lbnVUcmlnZ2VyIiwibWVudU9wZW4iLCJvblJlc2l6ZSIsIm9uU2Nyb2xsIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImNvbnRhaW5zIiwidG9nZ2xlIiwic2Nyb2xsWSIsIl90aGlzMyIsImkiLCJfdGhpczQiLCIkZSIsInJlbW92ZUNoaWxkRnJvbVNpYmxpbmdzIiwicGFyZW50Tm9kZSIsImVsZW0iLCJzaWJsaW5ncyIsInNpYmxpbmciLCJmaXJzdENoaWxkIiwibm9kZVR5cGUiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbGFzc05hbWUiLCJpbmNsdWRlcyIsImV2ZW50IiwidGFyZ2V0IiwiaHJlZiIsInRhZ05hbWUiLCJoYXNBdHRyaWJ1dGUiLCJMYXp5TG9hZCIsImxvZ0VsZW1lbnRFdmVudCIsImV2ZW50TmFtZSIsImNvbnNvbGUiLCJsb2ciLCJEYXRlIiwibm93IiwiZ2V0QXR0cmlidXRlIiwiY2FsbGJhY2tfZW50ZXIiLCJjYWxsYmFja19leGl0IiwiY2FsbGJhY2tfbG9hZGluZyIsImNhbGxiYWNrX2xvYWRlZCIsImNhbGxiYWNrX2Vycm9yIiwic3JjIiwiY2FsbGJhY2tfZmluaXNoIiwiZG9jdW1lbnRFbGVtZW50IiwiY2FsbGJhY2tfY2FuY2VsIiwibGwiLCJjbGFzc19hcHBsaWVkIiwiY2xhc3NfbG9hZGluZyIsImNsYXNzX2xvYWRlZCIsImNsYXNzX2Vycm9yIiwiY2xhc3NfZW50ZXJlZCIsImNsYXNzX2V4aXRlZCIsIkdvdG9Ub3AiLCIkZ290b1RvcCIsImdvVG9wVHJpZ2dlciIsInByZXZlbnREZWZhdWx0Iiwic2Nyb2xsVG8iLCJ0b3AiLCJiZWhhdmlvciIsInN0IiwicGFnZVlPZmZzZXQiLCJzY3JvbGxUb3AiXSwic291cmNlUm9vdCI6IiJ9
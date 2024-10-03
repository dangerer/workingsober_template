//
// Lazy Load Vanilla
//

import LazyLoad from 'vanilla-lazyload';

function logElementEvent(eventName, element) {
  console.log(Date.now(), eventName, element.getAttribute('data-src'));
}

const callback_enter = function (element) {
  logElementEvent('🔑 ENTERED', element);
};

const callback_exit = function (element) {
  logElementEvent('🚪 EXITED', element);
};

const callback_loading = function (element) {
  logElementEvent('⌚ LOADING', element);
};

const callback_loaded = function (element) {
  logElementEvent('👍 LOADED', element);
};

const callback_error = function (element) {
  logElementEvent('💀 ERROR', element);
  element.src = 'https://via.placeholder.com/440x560/?text=Error+Placeholder';
};

const callback_finish = function () {
  logElementEvent('✔️ FINISHED', document.documentElement);
};

const callback_cancel = function (element) {
  logElementEvent('🔥 CANCEL', element);
};

const ll = new LazyLoad({
  class_applied: 'lz-applied',
  class_loading: 'lz-loading',
  class_loaded: 'lz-loaded',
  class_error: 'lz-error',
  class_entered: 'lz-entered',
  class_exited: 'lz-exited',
});

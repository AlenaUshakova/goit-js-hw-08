!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function b(e,t,n){var r,i,u,f,a,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,f=e.apply(o,n)}function E(e){return c=e,a=setTimeout(T,t),d?b(e):f}function S(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function T(){var e=g();if(S(e))return O(e);a=setTimeout(T,function(e){var n=t-(e-l);return s?p(n,u-(e-c)):n}(e))}function O(e){return a=void 0,v&&r?b(e):(r=i=void 0,f)}function h(){var e=g(),n=S(e);if(r=arguments,i=this,l=e,n){if(void 0===a)return E(l);if(s)return a=setTimeout(T,t),b(l)}return void 0===a&&(a=setTimeout(T,t)),f}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=l=i=a=void 0},h.flush=function(){return void 0===a?f:O(g())},h}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var o=f.test(t);return o||a.test(t)?l(t.slice(2),o?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};var E="feedback-form-state";formEl=document.querySelector(".feedback-form"),inputEl=document.querySelector(".feedback-form input"),textAreaEl=document.querySelector(".feedback-form textarea"),formEl.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,r=t.message;if(""===n.value||""===r.value)return alert("Все поля должны быть заполнены");console.log(S),localStorage.removeItem(E),e.currentTarget.reset()})),formEl.addEventListener("input",e(t)((function(e){S[e.target.name]=e.target.value,localStorage.setItem(E,JSON.stringify(S))}),500));var S={};!function(){var e=localStorage.getItem(E);if(e)for(var t in S=JSON.parse(e))formEl.elements[t].value=S[t]}()}();
//# sourceMappingURL=03-feedback.f17dd620.js.map
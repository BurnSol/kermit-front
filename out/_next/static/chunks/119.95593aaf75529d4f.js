"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[119],{119:function(e,t,n){let r;n.r(t),n.d(t,{default:function(){return L}});var o,i,a,c,s,l=n(5719),u=n(328),d=(o=function(e,t){return(o=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),f=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return d(t,e),t}(u),p=n(7191),h=n.n(p),v=(i=function(e,t){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),_=function(){return(_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},y=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,c)}s((r=r.apply(e,t||[])).next())})},m=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},b=function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a},w=function(e){function t(t,n){var r=e.call(this)||this;if(r._handleMessage=function(e){if(r._injectedProvider&&e.source===window||e.origin===r._providerUrl.origin&&e.source===r._popup){if("connected"===e.data.method){var t=new l.nh(e.data.params.publicKey);r._publicKey&&r._publicKey.equals(t)||(r._publicKey&&!r._publicKey.equals(t)&&r._handleDisconnect(),r._publicKey=t,r._autoApprove=!!e.data.params.autoApprove,r.emit("connect",r._publicKey))}else if("disconnected"===e.data.method)r._handleDisconnect();else if((e.data.result||e.data.error)&&r._responsePromises.has(e.data.id)){var n=b(r._responsePromises.get(e.data.id),2),o=n[0],i=n[1];e.data.result?o(e.data.result):i(Error(e.data.error))}}},r._handleConnect=function(){return(r._handlerAdded||(r._handlerAdded=!0,window.addEventListener("message",r._handleMessage),window.addEventListener("beforeunload",r.disconnect)),r._injectedProvider)?new Promise(function(e){r._sendRequest("connect",{}),e()}):(window.name="parent",r._popup=window.open(r._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise(function(e){r.once("connect",e)}))},r._handleDisconnect=function(){r._handlerAdded&&(r._handlerAdded=!1,window.removeEventListener("message",r._handleMessage),window.removeEventListener("beforeunload",r.disconnect)),r._publicKey&&(r._publicKey=null,r.emit("disconnect")),r._responsePromises.forEach(function(e,t){var n=b(e,2),o=(n[0],n[1]);r._responsePromises.delete(t),o("Wallet disconnected")})},r._sendRequest=function(e,t){return y(r,void 0,void 0,function(){var n,r=this;return m(this,function(o){if("connect"!==e&&!this.connected)throw Error("Wallet not connected");return n=this._nextRequestId,++this._nextRequestId,[2,new Promise(function(o,i){r._responsePromises.set(n,[o,i]),r._injectedProvider?r._injectedProvider.postMessage({jsonrpc:"2.0",id:n,method:e,params:_({network:r._network},t)}):(r._popup.postMessage({jsonrpc:"2.0",id:n,method:e,params:t},r._providerUrl.origin),r.autoApprove||r._popup.focus())})]})})},r.connect=function(){return r._popup&&r._popup.close(),r._handleConnect()},r.disconnect=function(){return y(r,void 0,void 0,function(){return m(this,function(e){switch(e.label){case 0:if(!this._injectedProvider)return[3,2];return[4,this._sendRequest("disconnect",{})];case 1:e.sent(),e.label=2;case 2:return this._popup&&this._popup.close(),this._handleDisconnect(),[2]}})})},r.sign=function(e,t){return y(r,void 0,void 0,function(){var n;return m(this,function(r){switch(r.label){case 0:if(!(e instanceof Uint8Array))throw Error("Data must be an instance of Uint8Array");return[4,this._sendRequest("sign",{data:e,display:t})];case 1:return n=r.sent(),[2,{signature:h().decode(n.signature),publicKey:new l.nh(n.publicKey)}]}})})},"object"==typeof t&&null!==t&&"function"==typeof t.postMessage)r._injectedProvider=t;else if("string"==typeof t)r._providerUrl=new URL(t),r._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:n}).toString();else throw Error("provider parameter must be an injected provider or a URL string.");return r._network=n,r._publicKey=null,r._autoApprove=!1,r._popup=null,r._handlerAdded=!1,r._nextRequestId=1,r._responsePromises=new Map,r}return v(t,e),Object.defineProperty(t.prototype,"publicKey",{get:function(){return this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"connected",{get:function(){return null!==this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"autoApprove",{get:function(){return this._autoApprove},enumerable:!1,configurable:!0}),t}(u),g=(a=function(e,t){return(a=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),x=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,c)}s((r=r.apply(e,t||[])).next())})},P=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},A=function(e){function t(t,n,r){var o=e.call(this)||this;return o._instance=null,o.handleMessage=function(e){},o._sendRequest=function(e,t){return x(o,void 0,void 0,function(){var n,r;return P(this,function(o){switch(o.label){case 0:if(!(null===(n=this._instance)||void 0===n?void 0:n.sendRequest))return[3,2];return[4,this._instance.sendRequest(e,t)];case 1:case 3:return[2,o.sent()];case 2:if(!(null===(r=this._instance)||void 0===r?void 0:r._sendRequest))return[3,4];return[4,this._instance._sendRequest(e,t)];case 4:throw Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}})})},o._handleConnect=function(){o.emit("connect")},o._handleDisconnect=function(){window.clearInterval(o._pollTimer),o.emit("disconnect")},o._network=n,o._provider=r,o}return g(t,e),Object.defineProperty(t.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),t.prototype.connect=function(){return x(this,void 0,void 0,function(){var e=this;return P(this,function(t){switch(t.label){case 0:return this._instance=new w(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval(function(){var t,n;(null===(n=null===(t=e._instance)||void 0===t?void 0:t._popup)||void 0===n?void 0:n.closed)!==!1&&e._handleDisconnect()},200),[4,this._instance.connect()];case 1:return t.sent(),[2]}})})},t.prototype.disconnect=function(){return x(this,void 0,void 0,function(){return P(this,function(e){switch(e.label){case 0:if(!this.connected)throw Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return e.sent(),[2]}})})},t.prototype.signTransaction=function(e){return x(this,void 0,void 0,function(){var t;return P(this,function(n){switch(n.label){case 0:if(!this.connected)throw Error("Wallet not connected");return[4,this._sendRequest("signTransactionV2",{transaction:h().encode(e)})];case 1:return t=n.sent().transaction,[2,h().decode(t)]}})})},t.prototype.signAllTransactions=function(e){return x(this,void 0,void 0,function(){return P(this,function(t){switch(t.label){case 0:if(!this.connected)throw Error("Wallet not connected");return[4,this._sendRequest("signAllTransactionsV2",{transactions:e.map(function(e){return h().encode(e)})})];case 1:return[2,t.sent().transactions.map(function(e){return h().decode(e)})]}})})},t.prototype.signAndSendTransaction=function(e,t){return x(this,void 0,void 0,function(){return P(this,function(n){switch(n.label){case 0:if(!this.connected)throw Error("Wallet not connected");return[4,this._sendRequest("signAndSendTransaction",{transaction:h().encode(e),options:t})];case 1:return[2,n.sent().signature]}})})},t.prototype.signMessage=function(e,t){return void 0===t&&(t="hex"),x(this,void 0,void 0,function(){var n;return P(this,function(r){switch(r.label){case 0:if(!this.connected)throw Error("Wallet not connected");return[4,this._instance.sign(e,t)];case 1:return n=r.sent().signature,[2,Uint8Array.from(n)]}})})},t}(f),E={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let j=new Uint8Array(16),I=[];for(let e=0;e<256;++e)I.push((e+256).toString(16).slice(1));var O=function(e,t,n){if(E.randomUUID&&!t&&!e)return E.randomUUID();let o=(e=e||{}).random||(e.rng||function(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(j)})();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=o[e];return t}return function(e,t=0){return I[e[t+0]]+I[e[t+1]]+I[e[t+2]]+I[e[t+3]]+"-"+I[e[t+4]]+I[e[t+5]]+"-"+I[e[t+6]]+I[e[t+7]]+"-"+I[e[t+8]]+I[e[t+9]]+"-"+I[e[t+10]]+I[e[t+11]]+I[e[t+12]]+I[e[t+13]]+I[e[t+14]]+I[e[t+15]]}(o)},S=(c=function(e,t){return(c=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}c(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),k=function(){return(k=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},M=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,c)}s((r=r.apply(e,t||[])).next())})},T=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},K=function(e){function t(t,n){var r,o=this;return(o=e.call(this)||this)._publicKey=null,o._messageHandlers={},o.handleMessage=function(e){if(o._messageHandlers[e.id]){var t=o._messageHandlers[e.id],n=t.resolve,r=t.reject;delete o._messageHandlers[e.id],e.error?r(e.error):n(e.result)}},o._sendMessage=function(e){if(!o.connected)throw Error("Wallet not connected");return new Promise(function(t,n){var r,i,a=O();o._messageHandlers[a]={resolve:t,reject:n},null===(i=null===(r=o._iframe)||void 0===r?void 0:r.contentWindow)||void 0===i||i.postMessage({channel:"solflareWalletAdapterToIframe",data:k({id:a},e)},"*")})},o._iframe=t,o._publicKey=new l.nh(null===(r=null==n?void 0:n.toString)||void 0===r?void 0:r.call(n)),o}return S(t,e),Object.defineProperty(t.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.connect=function(){return M(this,void 0,void 0,function(){return T(this,function(e){return[2]})})},t.prototype.disconnect=function(){return M(this,void 0,void 0,function(){return T(this,function(e){switch(e.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return e.sent(),[2]}})})},t.prototype.signTransaction=function(e){var t;return M(this,void 0,void 0,function(){var n,r;return T(this,function(o){switch(o.label){case 0:if(!this.connected)throw Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{transaction:h().encode(e)}})];case 2:return n=o.sent(),[2,h().decode(n)];case 3:throw Error((null===(t=null==(r=o.sent())?void 0:r.toString)||void 0===t?void 0:t.call(r))||"Failed to sign transaction");case 4:return[2]}})})},t.prototype.signAllTransactions=function(e){var t;return M(this,void 0,void 0,function(){var n;return T(this,function(r){switch(r.label){case 0:if(!this.connected)throw Error("Wallet not connected");r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{transactions:e.map(function(e){return h().encode(e)})}})];case 2:return[2,r.sent().map(function(e){return h().decode(e)})];case 3:throw Error((null===(t=null==(n=r.sent())?void 0:n.toString)||void 0===t?void 0:t.call(n))||"Failed to sign transactions");case 4:return[2]}})})},t.prototype.signAndSendTransaction=function(e,t){var n;return M(this,void 0,void 0,function(){var r;return T(this,function(o){switch(o.label){case 0:if(!this.connected)throw Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAndSendTransaction",params:{transaction:h().encode(e),options:t}})];case 2:return[2,o.sent()];case 3:throw Error((null===(n=null==(r=o.sent())?void 0:r.toString)||void 0===n?void 0:n.call(r))||"Failed to sign and send transaction");case 4:return[2]}})})},t.prototype.signMessage=function(e,t){var n;return void 0===t&&(t="hex"),M(this,void 0,void 0,function(){var r,o;return T(this,function(i){switch(i.label){case 0:if(!this.connected)throw Error("Wallet not connected");i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:e,display:t}})];case 2:return r=i.sent(),[2,Uint8Array.from(h().decode(r))];case 3:throw Error((null===(n=null==(o=i.sent())?void 0:o.toString)||void 0===n?void 0:n.call(o))||"Failed to sign message");case 4:return[2]}})})},t}(f);function U(e){return void 0===e.version}var R=(s=function(e,t){return(s=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}s(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),C=function(){return(C=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},W=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function c(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(a,c)}s((r=r.apply(e,t||[])).next())})},H=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(n)throw TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=t.call(e,a)}catch(e){c=[6,e],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},q=function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},L=function(e){function t(n){var r=e.call(this)||this;return r._network="mainnet-beta",r._provider=null,r._iframeParams={},r._adapterInstance=null,r._element=null,r._iframe=null,r._connectHandler=null,r._flutterHandlerInterval=null,r._handleEvent=function(e){var t,n,o,i;switch(e.type){case"connect_native_web":r._collapseIframe(),r._adapterInstance=new A(r._iframe,r._network,(null===(t=e.data)||void 0===t?void 0:t.provider)||r._provider||"https://solflare.com/provider"),r._adapterInstance.on("connect",r._webConnected),r._adapterInstance.on("disconnect",r._webDisconnected),r._adapterInstance.connect(),r._setPreferredAdapter("native_web");return;case"connect":r._collapseIframe(),r._adapterInstance=new K(r._iframe,(null===(n=e.data)||void 0===n?void 0:n.publicKey)||""),r._adapterInstance.connect(),r._setPreferredAdapter(null===(o=e.data)||void 0===o?void 0:o.adapter),r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey);return;case"disconnect":r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect");return;case"accountChanged":(null===(i=e.data)||void 0===i?void 0:i.publicKey)?(r._adapterInstance=new K(r._iframe,e.data.publicKey),r._adapterInstance.connect(),r.emit("accountChanged",r.publicKey)):r.emit("accountChanged",void 0);return;case"collapse":r._collapseIframe();return;default:return}},r._handleResize=function(e){"full"===e.resizeMode?"fullscreen"===e.params.mode?r._expandIframe():"hide"===e.params.mode&&r._collapseIframe():"coordinates"===e.resizeMode&&r._iframe&&(r._iframe.style.top=isFinite(e.params.top)?"".concat(e.params.top,"px"):"",r._iframe.style.bottom=isFinite(e.params.bottom)?"".concat(e.params.bottom,"px"):"",r._iframe.style.left=isFinite(e.params.left)?"".concat(e.params.left,"px"):"",r._iframe.style.right=isFinite(e.params.right)?"".concat(e.params.right,"px"):"",r._iframe.style.width=isFinite(e.params.width)?"".concat(e.params.width,"px"):e.params.width,r._iframe.style.height=isFinite(e.params.height)?"".concat(e.params.height,"px"):e.params.height)},r._handleMessage=function(e){if((null===(t=e.data)||void 0===t?void 0:t.channel)==="solflareIframeToWalletAdapter"){var t,n=e.data.data||{};"event"===n.type?r._handleEvent(n.event):"resize"===n.type?r._handleResize(n):"response"===n.type&&r._adapterInstance&&r._adapterInstance.handleMessage(n)}},r._removeElement=function(){null!==r._flutterHandlerInterval&&(clearInterval(r._flutterHandlerInterval),r._flutterHandlerInterval=null),r._element&&(r._element.remove(),r._element=null)},r._removeDanglingElements=function(){var e,t,n=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var r=q(n),o=r.next();!o.done;o=r.next()){var i=o.value;i.parentElement&&i.remove()}}catch(t){e={error:t}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(e)throw e.error}}},r._injectElement=function(){r._removeElement(),r._removeDanglingElements();var e=C(C({},r._iframeParams),{cluster:r._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||"",version:1,sdkVersion:"1.4.2"}),n=r._getPreferredAdapter();n&&(e.adapter=n),r._provider&&(e.provider=r._provider);var o=Object.keys(e).map(function(t){return"".concat(t,"=").concat(encodeURIComponent(e[t]))}).join("&"),i="".concat(t.IFRAME_URL,"?").concat(o);r._element=document.createElement("div"),r._element.className="solflare-wallet-adapter-iframe",r._element.innerHTML="\n      <iframe src='".concat(i,"' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(r._element),r._iframe=r._element.querySelector("iframe"),window.fromFlutter=r._handleMobileMessage,r._flutterHandlerInterval=setInterval(function(){window.fromFlutter=r._handleMobileMessage},100),window.addEventListener("message",r._handleMessage,!1)},r._collapseIframe=function(){r._iframe&&(r._iframe.style.top="",r._iframe.style.right="",r._iframe.style.height="2px",r._iframe.style.width="2px")},r._expandIframe=function(){r._iframe&&(r._iframe.style.top="0px",r._iframe.style.bottom="0px",r._iframe.style.left="0px",r._iframe.style.right="0px",r._iframe.style.width="100%",r._iframe.style.height="100%")},r._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},r._setPreferredAdapter=function(e){localStorage&&e&&localStorage.setItem("solflarePreferredWalletAdapter",e)},r._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},r._webConnected=function(){r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey)},r._webDisconnected=function(){r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect")},r._disconnected=function(){window.removeEventListener("message",r._handleMessage,!1),r._removeElement(),r._clearPreferredAdapter(),r._adapterInstance=null},r._handleMobileMessage=function(e){var t,n;null===(n=null===(t=r._iframe)||void 0===t?void 0:t.contentWindow)||void 0===n||n.postMessage({channel:"solflareMobileToIframe",data:e},"*")},(null==n?void 0:n.network)&&(r._network=null==n?void 0:n.network),(null==n?void 0:n.provider)&&(r._provider=null==n?void 0:n.provider),(null==n?void 0:n.params)&&(r._iframeParams=C({},null==n?void 0:n.params)),r}return R(t,e),Object.defineProperty(t.prototype,"publicKey",{get:function(){var e;return(null===(e=this._adapterInstance)||void 0===e?void 0:e.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isConnected",{get:function(){var e;return!!(null===(e=this._adapterInstance)||void 0===e?void 0:e.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype.connect=function(){return W(this,void 0,void 0,function(){var e=this;return H(this,function(t){switch(t.label){case 0:if(this.connected)return[2];return this._injectElement(),[4,new Promise(function(t,n){e._connectHandler={resolve:t,reject:n}})];case 1:return t.sent(),[2]}})})},t.prototype.disconnect=function(){return W(this,void 0,void 0,function(){return H(this,function(e){switch(e.label){case 0:if(!this._adapterInstance)return[2];return[4,this._adapterInstance.disconnect()];case 1:return e.sent(),this._disconnected(),this.emit("disconnect"),[2]}})})},t.prototype.signTransaction=function(e){return W(this,void 0,void 0,function(){var t,n;return H(this,function(r){switch(r.label){case 0:if(!this.connected)throw Error("Wallet not connected");return t=U(e)?Uint8Array.from(e.serialize({verifySignatures:!1,requireAllSignatures:!1})):e.serialize(),[4,this._adapterInstance.signTransaction(t)];case 1:return n=r.sent(),[2,U(e)?l.YW.from(n):l.GS.deserialize(n)]}})})},t.prototype.signAllTransactions=function(e){return W(this,void 0,void 0,function(){var t,n;return H(this,function(r){switch(r.label){case 0:if(!this.connected)throw Error("Wallet not connected");return t=e.map(function(e){return U(e)?Uint8Array.from(e.serialize({verifySignatures:!1,requireAllSignatures:!1})):e.serialize()}),[4,this._adapterInstance.signAllTransactions(t)];case 1:if((n=r.sent()).length!==e.length)throw Error("Failed to sign all transactions");return[2,n.map(function(t,n){return U(e[n])?l.YW.from(t):l.GS.deserialize(t)})]}})})},t.prototype.signAndSendTransaction=function(e,t){return W(this,void 0,void 0,function(){var n;return H(this,function(r){switch(r.label){case 0:if(!this.connected)throw Error("Wallet not connected");return n=U(e)?e.serialize({verifySignatures:!1,requireAllSignatures:!1}):e.serialize(),[4,this._adapterInstance.signAndSendTransaction(n,t)];case 1:return[2,r.sent()]}})})},t.prototype.signMessage=function(e,t){return void 0===t&&(t="utf8"),W(this,void 0,void 0,function(){return H(this,function(n){switch(n.label){case 0:if(!this.connected)throw Error("Wallet not connected");return[4,this._adapterInstance.signMessage(e,t)];case 1:return[2,n.sent()]}})})},t.prototype.sign=function(e,t){return void 0===t&&(t="utf8"),W(this,void 0,void 0,function(){return H(this,function(n){switch(n.label){case 0:return[4,this.signMessage(e,t)];case 1:return[2,n.sent()]}})})},t.prototype.detectWallet=function(e){var t;return void 0===e&&(e=10),W(this,void 0,void 0,function(){return H(this,function(n){return window.SolflareApp||(null===(t=window.solflare)||void 0===t?void 0:t.isSolflare)?[2,!0]:[2,new Promise(function(t){var n,r;n=setInterval(function(){var e;(window.SolflareApp||(null===(e=window.solflare)||void 0===e?void 0:e.isSolflare))&&(clearInterval(n),clearTimeout(r),t(!0))},500),r=setTimeout(function(){clearInterval(n),t(!1)},1e3*e)})]})})},t.IFRAME_URL="https://connect.solflare.com/",t}(u)},328:function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}function o(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function i(e,t,r,i,a){if("function"!=typeof r)throw TypeError("The listener must be a function");var c=new o(r,i||e,a),s=n?n+t:t;return e._events[s]?e._events[s].fn?e._events[s]=[e._events[s],c]:e._events[s].push(c):(e._events[s]=c,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new r:delete e._events[t]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1)),c.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},c.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=Array(i);o<i;o++)a[o]=r[o].fn;return a},c.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0},c.prototype.emit=function(e,t,r,o,i,a){var c=n?n+e:e;if(!this._events[c])return!1;var s,l,u=this._events[c],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,r),!0;case 4:return u.fn.call(u.context,t,r,o),!0;case 5:return u.fn.call(u.context,t,r,o,i),!0;case 6:return u.fn.call(u.context,t,r,o,i,a),!0}for(l=1,s=Array(d-1);l<d;l++)s[l-1]=arguments[l];u.fn.apply(u.context,s)}else{var f,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,t);break;case 3:u[l].fn.call(u[l].context,t,r);break;case 4:u[l].fn.call(u[l].context,t,r,o);break;default:if(!s)for(f=1,s=Array(d-1);f<d;f++)s[f-1]=arguments[f];u[l].fn.apply(u[l].context,s)}}return!0},c.prototype.on=function(e,t,n){return i(this,e,t,n,!1)},c.prototype.once=function(e,t,n){return i(this,e,t,n,!0)},c.prototype.removeListener=function(e,t,r,o){var i=n?n+e:e;if(!this._events[i])return this;if(!t)return a(this,i),this;var c=this._events[i];if(c.fn)c.fn!==t||o&&!c.once||r&&c.context!==r||a(this,i);else{for(var s=0,l=[],u=c.length;s<u;s++)(c[s].fn!==t||o&&!c[s].once||r&&c[s].context!==r)&&l.push(c[s]);l.length?this._events[i]=1===l.length?l[0]:l:a(this,i)}return this},c.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&a(this,t)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=n,c.EventEmitter=c,e.exports=c}}]);
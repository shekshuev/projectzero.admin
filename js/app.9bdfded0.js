(function(){var e={612:function(e,t,n){"use strict";var o=n(9242),s=n(3396);function r(e,t){const n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(n)}var a=n(89);const i={},c=(0,a.Z)(i,[["render",r]]);var u=c,l=n(678),h=n(7139);const f=(0,s._)("p",null,"12345",-1);function p(e,t,n,o,r,a){const i=(0,s.up)("ui-button");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(i,{onOnButtonClicked:a.onTestButtonClicked},{default:(0,s.w5)((()=>[(0,s.Uk)((0,h.zw)(e.$t("pages.main.testButton")),1)])),_:1},8,["onOnButtonClicked"]),f,(0,s._)("p",null," Access token: "+(0,h.zw)(e.accessToken),1),(0,s._)("p",null," Refresh token: "+(0,h.zw)(e.refreshToken),1),(0,s.Wm)(i,{onOnButtonClicked:a.onChangeLocaleButtonClicked},{default:(0,s.w5)((()=>[(0,s.Uk)((0,h.zw)(e.$t("pages.main.changeLocale")),1)])),_:1},8,["onOnButtonClicked"])],64)}var d=n(6265),k=n.n(d),g=n(6623),m=n(2415);const w=()=>({accessToken:null,refreshToken:null}),T={accessToken:e=>e.accessToken,refreshToken:e=>e.refreshToken},v={setAccessToken(e,t){e.accessToken=t},setRefreshToken(e,t){e.refreshToken=t}},y={setAccessToken(e,t){e.commit("setAccessToken",t)},setRefreshToken(e,t){e.commit("setRefreshToken",t)}};var b={state:w,getters:T,actions:y,mutations:v},C=n(3490);function O(){const e=n(5389),t={};return e.keys().forEach((n=>{const o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){const s=o[1];t[s]=e(n)}})),t}const _=(0,C.o)({locale:{NODE_ENV:"production",BASE_URL:"/projectzero.admin/"}.VUE_APP_I18N_LOCALE||"ru",fallbackLocale:{NODE_ENV:"production",BASE_URL:"/projectzero.admin/"}.VUE_APP_I18N_FALLBACK_LOCALE||"ru",messages:O()});var L=_,j=(0,g.MT)({state:{locale:"ru"},getters:{locale:e=>e.locale},mutations:{setLocale(e,t){e.locale=t}},actions:{setLocale(e,t){["en","ru"].includes(t)&&(e.commit("setLocale",t),L.global.locale=t)}},modules:{clientModule:b},plugins:[(0,m.Z)({key:"public",paths:["locale"]}),(0,m.Z)({key:"client",paths:["clientModule.accessToken","clientModule.refreshToken"]})]}),A=n(1598);n(1703);class B extends Error{constructor(e){super(e),this.name="TokenError"}}function E(e){try{const t=(0,A.Z)(e);if(1e3*t?.exp>Date.now())return!0;throw new B("Token is expired!")}catch(t){throw t instanceof B?t:new B(`Something wrong with token! (${t.message})`)}}const z="https://projectzero-api-0.herokuapp.com/api/v1.0/";class P{constructor(e){this.http=k().create({baseURL:z});for(let t in e.headers)this.http.defaults.headers[t]=e.headers[t];this.http.defaults.headers["accept"]="application/json",this.http.defaults.headers["Accept-Language"]=j.getters.locale,this.withPagination=e.withPagination}async post(e,t){return await this.http.post(e,t)}async get(e,t){return await this.http.get(e,t)}async put(e,t){return await this.http.put(e,t)}async patch(e,t){return await this.http.patch(e,t)}async delete(e,t){return await this.http.delete(e,t)}}class x{constructor(){this.headers=[],this.withPagination=!1}setAuthorizationToken(e){return this.headers["Authorization"]=`Bearer ${e}`,this}useAuthorization(){if(E(j.getters.accessToken))return this.headers["Authorization"]=`Bearer ${j.getters.accessToken}`,this}setContentType(e){return this.headers["Content-Type"]=e,this}setHeader(e,t){return this.headers[e]=t,this}useDefaultContentType(){return this.setContentType("application/json")}usePagination(e=5,t=0){return this.withPagination=!0,this.headers["count"]=e,this.headers["offset"]=t,this}build(){return new P(this)}}async function D(e,t){const n=(new x).useDefaultContentType().build(),o=await n.post("auth/signin",{login:e,password:t});if(200===o.status)return o.data}var N={name:"MainPage",methods:{...(0,g.nv)(["setAccessToken","setRefreshToken","setLocale"]),async onTestButtonClicked(){const e=await D("admin","admin");this.setAccessToken(e?.accessToken),this.setRefreshToken(e?.refreshToken)},onChangeLocaleButtonClicked(){this.setLocale("en"===this.locale?"ru":"en")}},computed:{...(0,g.Se)(["accessToken","refreshToken","locale"])}};const R=(0,a.Z)(N,[["render",p]]);var S=R;const U=[{path:"/",name:"main",component:S}],$=(0,l.p7)({history:(0,l.PO)("/projectzero.admin/"),routes:U});var M=$;const Z=["href"];function I(e,t,n,o,r,a){const i=(0,s.up)("router-link");return"router-link"===n.tag?((0,s.wg)(),(0,s.j4)(i,{key:0,class:"ui-button",to:n.to},{default:(0,s.w5)((()=>[(0,s.WI)(e.$slots,"default",{},void 0,!0)])),_:3},8,["to"])):"a"===n.tag?((0,s.wg)(),(0,s.iD)("a",{key:1,class:"ui-button",href:n.href},[(0,s.WI)(e.$slots,"default",{},void 0,!0)],8,Z)):((0,s.wg)(),(0,s.iD)("button",{key:2,class:"ui-button",onClick:t[0]||(t[0]=(...e)=>a.onButtonClicked&&a.onButtonClicked(...e))},[(0,s.WI)(e.$slots,"default",{},void 0,!0)]))}var W={name:"ui-button",props:{tag:{type:String,default:"button"},href:{type:String},to:{type:[String,Object]}},methods:{onButtonClicked(){this.$emit("onButtonClicked")}}};const V=(0,a.Z)(W,[["render",I],["__scopeId","data-v-17e3cf8c"]]);var F=V,H=[F];const J=(0,o.ri)(u).use(j).use(L).use(M);H.forEach((e=>J.component(e.name,e))),J.config.errorHandler=async(e,t,n)=>{e instanceof B||e?.response?.status,console.log(e)},L.global.locale=j.getters.locale,J.mount("#app")},5389:function(e,t,n){var o={"./en.json":8921,"./ru.json":7441};function s(e){var t=r(e);return n(t)}function r(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}s.keys=function(){return Object.keys(o)},s.resolve=r,e.exports=s,s.id=5389},8921:function(e){"use strict";e.exports=JSON.parse('{"pages":{"main":{"testButton":"Test","changeLocale":"Change locale"}}}')},7441:function(e){"use strict";e.exports=JSON.parse('{"pages":{"main":{"testButton":"Тест","changeLocale":"Сменить язык"}}}')}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,s,r){if(!o){var a=1/0;for(l=0;l<e.length;l++){o=e[l][0],s=e[l][1],r=e[l][2];for(var i=!0,c=0;c<o.length;c++)(!1&r||a>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(i=!1,r<a&&(a=r));if(i){e.splice(l--,1);var u=s();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,s,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var s,r,a=o[0],i=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(s in i)n.o(i,s)&&(n.m[s]=i[s]);if(c)var l=c(n)}for(t&&t(o);u<a.length;u++)r=a[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},o=self["webpackChunkprojectzero_admin"]=self["webpackChunkprojectzero_admin"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(612)}));o=n.O(o)})();
//# sourceMappingURL=app.9bdfded0.js.map
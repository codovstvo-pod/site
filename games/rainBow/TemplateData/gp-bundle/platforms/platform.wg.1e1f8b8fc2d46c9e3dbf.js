(self.webpackChunkgame_score_sdk=self.webpackChunkgame_score_sdk||[]).push([[84],{280:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var n=i(2616),r=i.n(n)()((function(t){return t[1]}));r.push([t.id,".gp-gamedistribution-sticky{display:flex;justify-content:center;position:fixed;left:50%;transform:translateX(-50%);z-index:100;max-height:90px;max-width:728px;overflow:hidden}.gp-gamedistribution-sticky__creative{position:relative;height:90px;width:728px;max-width:100vw}.gp-gamedistribution-sticky_top{top:0}.gp-gamedistribution-sticky_bottom{bottom:0}",""]);const o=r},4340:(t,e,i)=>{"use strict";i.d(e,{D:()=>n});const n=()=>Promise.resolve({success:!1,rating:0,error:""})},501:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var n=i(4340),r=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class o{constructor(){this.canAddShortcut=!1,this.canRequestReview=!1,this.isAlreadyReviewed=!1}addShortcut(){return r(this,void 0,void 0,(function*(){return!1}))}requestReview(){return(0,n.D)()}requestGameUrl(){return r(this,void 0,void 0,(function*(){}))}}},5572:(t,e,i)=>{"use strict";i.d(e,{VK:()=>n,yl:()=>r});const n={success:!0,payload:{}},r={success:!1,payload:{}}},5351:(t,e,i)=>{"use strict";i.d(e,{Z:()=>d});var n=i(9482),r=i(3379),o=i.n(r),s=i(280);o()(s.Z,{insert:"head",singleton:!1}),s.Z.locals;const a="gp-gamedistribution-sticky";function d(){const t=document.createElement("div");t.id="gamepush-gamedistribution",document.body.appendChild(t);const e={sticky:null};return window.addEventListener("resize",(()=>(0,n.sO)(e))),{banners:e,createSticky(i){e.sticky||(e.sticky=function(e){const i=document.createElement("div");i.className=`${a} ${a}_${e.position||"bottom"}`;const n=document.createElement("div");n.id="responsive-banner-container",n.className=`${a}__creative`;const r={$wrapper:i,$el:n,options:e};return i.appendChild(n),t.appendChild(i),r}(i))},closeSticky(){e.sticky&&(e.sticky.$wrapper.remove(),e.sticky.$wrapper.innerHTML="",e.sticky=null)}}}},9482:(t,e,i)=>{"use strict";function n(t){return`${t}px`}i.d(e,{bH:()=>o,Bi:()=>c,Go:()=>d,px:()=>n,sO:()=>s,pm:()=>a});const r={PX:"px",PERCENT:"%"};function o(t){return r[t]}function s(t){a(t.sticky)}function a(t){t&&(t.$el.style.width=`${function(t){let e=window.innerWidth;if("PX"===t.options.maxWidthDimension&&t.options.maxWidth>0&&window.innerWidth>t.options.maxWidth)e=t.options.maxWidth;else if("PERCENT"===t.options.maxWidthDimension&&t.options.maxWidth>0){const i=t.options.maxWidth/100*window.innerWidth;window.innerWidth>t.options.maxWidth&&(e=i)}const i=t.options.fitCanvas&&u()||e;return Math.round(i)}(t)}px`)}function d(t,e){const i=e?{value:t.options.maxWidth,dimension:t.options.maxWidthDimension}:t.options.desktopMaxWidth&&t.options.desktopMaxWidthDimension?{value:t.options.desktopMaxWidth,dimension:t.options.desktopMaxWidthDimension}:{value:t.options.maxWidth,dimension:t.options.maxWidthDimension},n="PERCENT"===i.dimension?.01*i.value*window.innerWidth:i.value;return Math.min(Math.round(t.options.fitCanvas&&u()||n),window.innerWidth)||window.innerWidth}function c(t,e,i){const n=e?{value:t.options.maxHeight,dimension:t.options.maxHeightDimension}:t.options.desktopMaxHeight&&t.options.desktopMaxHeightDimension?{value:t.options.desktopMaxHeight,dimension:t.options.desktopMaxHeightDimension}:{value:t.options.maxHeight,dimension:t.options.maxHeightDimension},r="PERCENT"===n.dimension?.01*n.value*window.innerHeight:n.value;return Math.min(Math.round(r),window.innerHeight)||i}function u(){var t;return window.innerWidth>=640&&(null===(t=document.querySelector("canvas"))||void 0===t?void 0:t.offsetWidth)||0}},2712:(t,e,i)=>{"use strict";i.d(e,{aD:()=>l,FU:()=>p,hc:()=>v});const n=(t,e)=>({type:t,getLink:e}),r=n("facebook",(t=>`//www.facebook.com/sharer/sharer.php?u=${t.url}`)),o=n("whatsapp",(t=>`//api.whatsapp.com/send?text=${t.text}%20${t.url}`)),s=n("telegram",(t=>`//t.me/share/url?url=${t.url}&text=${t.text}`)),a=n("vkontakte",(t=>`//vk.com/share.php?url=${t.url}&title=${t.text}&image=${t.image}`)),d=n("twitter",(t=>`//twitter.com/share?text=${t.text}&url=${t.url}`)),c=n("odnoklassniki",(t=>`//connect.ok.ru/offer?url=${t.url}&title=${t.text}&imageUrl=${t.image}`)),u=n("viber",(t=>`viber://forward?text=${t.text}%20${t.url}`)),h=n("moymir",(t=>`//connect.mail.ru/share?url=${t.url}&title=${t.text}&image_url=${t.image}`)),l=[o,s,a,c,u,h],p=[r,d,s,o,u],v=[r,d,s,o,u,a,c,h]},6390:(t,e,i)=>{"use strict";function n(){try{return window.top.location.href||location.href}catch(t){return location.href}}i.d(e,{T:()=>n})},4917:(t,e,i)=>{"use strict";function n({src:t,check:e}){return new Promise(((i,n)=>{let r=0;if(null==e?void 0:e(window))return void i();function o(){e?e(window)&&(clearInterval(r),i()):i()}if(document.querySelector(`script[src="${t}"]`)&&e)return void(r=setInterval(o,100));var s=document.getElementsByTagName("script")[0];const a=document.createElement("script");a.src=t,a.onload=o,a.onerror=n,s.parentNode.insertBefore(a,s),e&&(r=setInterval(o,100))}))}i.d(e,{Z:()=>n})},2447:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>A});var n=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class r{constructor(t){this.sdk=t,this.isFullscreenAvailable=!0,this.stickyBannerConfig={isOverlapping:!1,height:0},this.isPreloaderAvailable=!1,this.isStickyAvailable=!1,this.canShowFullscreenBeforeGamePlay=!0}get isRewardedAvailable(){return this.sdk.isRewardedReady}showPreloader(){return n(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showPreloader().catch((()=>!1))}))}showFullscreen(){return n(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showFullscreen().catch((()=>!1))}))}showRewardedVideo(){return n(this,void 0,void 0,(function*(){return yield this.sdk.ready,this.sdk.showRewardedVideo().catch((()=>!1))}))}showSticky(t){return n(this,void 0,void 0,(function*(){return!1}))}refreshSticky(t){return n(this,void 0,void 0,(function*(){return!1}))}closeSticky(){return n(this,void 0,void 0,(function*(){}))}}var o=i(8293),s=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class a{constructor(t){this.sdk=t,this.hasCredetials=!1,this.userId="",this.isAccountLinked=!1,this.isAuthorizedAtPlatform=!1}getPlayerAuthInfo(){return s(this,void 0,void 0,(function*(){const t=(0,o._)();return t.done({}),t.ready}))}getPlayerContext(){return s(this,void 0,void 0,(function*(){return{platformData:yield this.getPlayerAuthInfo(),key:""}}))}loginPlayer(){return s(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}linkAccount(){return s(this,void 0,void 0,(function*(){return Promise.resolve(!0)}))}getPlayer(){return s(this,void 0,void 0,(function*(){return this.sdk.getPlayer()}))}publishRecord(t){}isPlatformAvatar(){return!1}}var d=i(2712),c=i(5942),u=i(5572);class h{constructor(t){this.sdk=t,this.hasIntegratedAuth=!1,this.isExternalLinksAllowed=!1,this.isSecretCodeAuthAvailable=!0,this._hasAuthModal=!1,this.type=c.z.WG_PLAYGROUND,this.socialNetworks=d.FU,this.isSupportsImageUploading=!1,this.hasAccountLinkingFeature=!1}getSDK(){return this.sdk}getNativeSDK(){return this.sdk.sdk}requestPermissions(){return t=this,e=void 0,n=function*(){return u.VK},new((i=void 0)||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}));var t,e,i,n}uploadImage(){return null}}class l{constructor(t){this.sdk=t,this.isSupportsShare=!1,this.isSupportsNativeShare=!1,this.isSupportsNativePosts=!1,this.isSupportsNativeInvite=!1,this.isSupportsNativeCommunityJoin=!1,this.canJoinCommunity=!1,this.isSupportShareParams=!1}get shareParams(){return{}}share(t){return Promise.resolve(!1)}post(t){return Promise.resolve(!1)}invite(t){return Promise.resolve(!1)}getCommunityLink(t){return t}joinCommunity(){return Promise.resolve(!1)}addShareParamsToUrl(t,e){return t}makeShareUrl(t){return""}getShareParam(t){return""}}var p=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class v{constructor(t){this.sdk=t,this.isSupportsSubscriptions=!1,this.isSupportsPayments=!1,this.isServerValidation=!1}mapProducts(t,e){return p(this,void 0,void 0,(function*(){return e}))}consumeAllExpired(t,e,i){return p(this,void 0,void 0,(function*(){}))}fetchPurchases(){return p(this,void 0,void 0,(function*(){return{payload:{},purchases:[]}}))}purchase(t){return p(this,void 0,void 0,(function*(){return{}}))}consume(t){return p(this,void 0,void 0,(function*(){return{}}))}subscribe(t,e){return p(this,void 0,void 0,(function*(){return{}}))}unsubscribe(t,e){return p(this,void 0,void 0,(function*(){return{}}))}}var m=i(501),f=i(6390),w=i(4917),y=i(6558),g=i(5351),k=i(8866),x=function(t,e,i,n){return new(i||(i=Promise))((function(r,o){function s(t){try{d(n.next(t))}catch(t){o(t)}}function a(t){try{d(n.throw(t))}catch(t){o(t)}}function d(t){var e;t.done?r(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(s,a)}d((n=n.apply(t,e||[])).next())}))};class P{constructor(t,e){this.config=t,this.gp=e,this.app=(0,g.Z)(),this.readyRewardedAd=(0,o._)(),this.isRewardedReady=!0}get appUrl(){return(0,f.T)()}init(){var t,e,i;return x(this,void 0,void 0,(function*(){const n=(0,o._)();this.ready=n.ready;const r=window;return yield Promise.all([(0,w.Z)({src:`https://universal.wgplayer.com/tag/?lh=${window.location.hostname}&wp=${window.location.pathname}&ws=${window.location.search}`}).catch((t=>y.kg.error(t))),(0,w.Z)({src:"https://afg.wgplayer.com/wgplayer.com/wgAds.iframe.conf.js",check:t=>{var e,i;return!!(null===(i=null===(e=t.preroll)||void 0===e?void 0:e.config)||void 0===i?void 0:i.loaderObjectName)}}).catch((t=>y.kg.error(t))),(0,w.Z)({src:"https://afg.wgplayer.com/wgplayer.com/js/RkQDh8KWt62VoH09FPNYqA/2357995679/wgAds.js"}).catch((t=>y.kg.error(t)))]),this.sdk=r[null===(t=r.preroll.config)||void 0===t?void 0:t.loaderObjectName],null===(e=this.sdk)||void 0===e||e.registerRewardCallbacks({onReady:()=>{this.isRewardedReady=!0},onSuccess:()=>{this.readyRewardedAd.done(!0)},onFail:()=>{this.readyRewardedAd.done(!1)}}),null===(i=this.sdk)||void 0===i||i.registerGameControls({pause:()=>this.gp.pause(),resume:()=>this.gp.resume(),context:this}),setTimeout((()=>n.done(this)),1e4),n.ready}))}getPlayer(){return x(this,void 0,void 0,(function*(){const t=(0,o._)();return t.done({id:0,name:"",photoSmall:"",photoMedium:"",photoLarge:""}),t.ready}))}showMidroll(){const t=(0,o._)();try{!1===this.sdk.refetchAd((()=>(0,k.Z)(0).then((()=>t.done(!0)))))&&t.done(!1)}catch(e){t.abort(e)}return t.ready}showFullscreen(){return this.showMidroll()}showPreloader(){return this.showMidroll()}showRewardedVideo(){this.readyRewardedAd=(0,o._)();try{this.sdk.showRewardAd()}catch(t){this.readyRewardedAd.abort(t)}return this.readyRewardedAd.ready}}function A(t){return e=this,i=void 0,o=function*(){const[,e]=yield Promise.all([t.setupStorage([]),t.fetchConfig()]),i=new P({},t.gp);yield i.init();const n=new a(i);return{adsAdapter:new r(i),appAdapter:new m.Z,playerAdapter:n,platformAdapter:new h(i),socialsAdapter:new l(i),paymentsAdapter:new v(i),projectConfig:e}},new((n=void 0)||(n=Promise))((function(t,r){function s(t){try{d(o.next(t))}catch(t){r(t)}}function a(t){try{d(o.throw(t))}catch(t){r(t)}}function d(e){var i;e.done?t(e.value):(i=e.value,i instanceof n?i:new n((function(t){t(i)}))).then(s,a)}d((o=o.apply(e,i||[])).next())}));var e,i,n,o}}}]);
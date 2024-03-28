import{Q as _,b as se,c as ce,d as le,da as ve,f as me,g as de,h as pe,i as ue,j as O,k as ge,l as he,m as fe,n as _e,o as be,p as ye}from"./chunk-3YKJS2WX.js";import{$b as P,Ab as z,Bb as te,Cb as re,Da as x,Db as E,Eb as A,Fb as ie,Gb as I,Kb as u,Nb as oe,Qa as l,Ra as d,Sa as G,Ua as Y,V as W,Wa as q,Wb as D,X as B,Y as b,Ya as Z,Za as $,_ as U,ab as K,ba as f,da as y,dc as ae,ea as m,eb as C,fa as v,fb as h,ga as L,gb as k,gc as ne,ha as V,hb as M,ib as T,jb as S,lb as X,pa as F,pb as s,qa as H,qb as c,rb as p,sb as R,va as Q,wa as w,yb as J,zb as ee}from"./chunk-OHSGR7OH.js";var De=["*",[["mat-toolbar-row"]]],Pe=["*","mat-toolbar-row"],Oe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=L({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let o=e;return o})(),we=(()=>{let e=class e{constructor(t,r,i){this._elementRef=t,this._platform=r,this._document=i}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};e.\u0275fac=function(r){return new(r||e)(d(w),d(ye),d(P))},e.\u0275cmp=m({type:e,selectors:[["mat-toolbar"]],contentQueries:function(r,i,n){if(r&1&&te(n,Oe,5),r&2){let g;E(g=A())&&(i._toolbarRows=g)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(r,i){r&2&&(S(i.color?"mat-"+i.color:""),T("mat-toolbar-multiple-rows",i._toolbarRows.length>0)("mat-toolbar-single-row",i._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[u],ngContentSelectors:Pe,decls:2,vars:0,template:function(r,i){r&1&&(ee(De),z(0),z(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let o=e;return o})();var xe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=v({type:e}),e.\u0275inj=b({imports:[_,_]});let o=e;return o})();var Ce=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-main-layout"]],standalone:!0,features:[u],decls:4,vars:0,consts:[["color","primary"],[1,"font-bold"]],template:function(r,i){r&1&&(s(0,"mat-toolbar",0)(1,"span",1),I(2,"Star Wars People"),c()(),p(3,"router-outlet"))},dependencies:[O,xe,we],styles:["mat-toolbar[_ngcontent-%COMP%]{height:60px}"]});let o=e;return o})();var ke=[{path:"",component:Ce,children:[{path:"people",loadChildren:()=>import("./chunk-R5MLJJRH.js").then(o=>o.PEOPLE_ROUTES)},{path:"**",pathMatch:"full",redirectTo:"people"}]},{path:"**",pathMatch:"full",redirectTo:""}];var Fe="@",ze=(()=>{let e=class e{constructor(t,r,i,n,g){this.doc=t,this.delegate=r,this.zone=i,this.animationType=n,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=f(Y,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-RHTT6WIM.js")).catch(r=>{throw new W(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:i})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let n=new i(this.delegate,this._engine,this.zone);return this.delegate=n,n})}createRenderer(t,r){let i=this.delegate.createRenderer(t,r);if(i.\u0275type===0)return i;typeof i.throwOnSyntheticProps=="boolean"&&(i.throwOnSyntheticProps=!1);let n=new j(i);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let Ie=g.createRenderer(t,r);n.use(Ie)}).catch(g=>{n.use(i)}),n}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){G()},e.\u0275prov=B({token:e,factory:e.\u0275fac});let o=e;return o})(),j=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let a of this.replay)a(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,a){return this.delegate.createElement(e,a)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,a){this.delegate.appendChild(e,a)}insertBefore(e,a,t,r){this.delegate.insertBefore(e,a,t,r)}removeChild(e,a,t){this.delegate.removeChild(e,a,t)}selectRootElement(e,a){return this.delegate.selectRootElement(e,a)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,a,t,r){this.delegate.setAttribute(e,a,t,r)}removeAttribute(e,a,t){this.delegate.removeAttribute(e,a,t)}addClass(e,a){this.delegate.addClass(e,a)}removeClass(e,a){this.delegate.removeClass(e,a)}setStyle(e,a,t,r){this.delegate.setStyle(e,a,t,r)}removeStyle(e,a,t){this.delegate.removeStyle(e,a,t)}setProperty(e,a,t){this.shouldReplay(a)&&this.replay.push(r=>r.setProperty(e,a,t)),this.delegate.setProperty(e,a,t)}setValue(e,a){this.delegate.setValue(e,a)}listen(e,a,t){return this.shouldReplay(a)&&this.replay.push(r=>r.listen(e,a,t)),this.delegate.listen(e,a,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(Fe)}};function Me(o="animations"){return Z("NgAsyncAnimations"),V([{provide:q,useFactory:(e,a,t)=>new ze(e,a,t,o),deps:[P,ce,$]},{provide:x,useValue:o==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Te={providers:[fe(ke,be(),_e(he)),Me(),se()]};var je=["determinateSpinner"];function We(o,e){if(o&1&&(F(),s(0,"svg",11),p(1,"circle",12),c()),o&2){let a=J();h("viewBox",a._viewBox()),l(),M("stroke-dasharray",a._strokeCircumference(),"px")("stroke-dashoffset",a._strokeCircumference()/2,"px")("stroke-width",a._circleStrokeWidth(),"%"),h("r",a._circleRadius())}}var Be=new U("mat-progress-spinner-default-options",{providedIn:"root",factory:Ue});function Ue(){return{diameter:Se}}var Se=100,Le=10,Re=(()=>{let e=class e{get color(){return this._color||this._defaultColor}set color(t){this._color=t}constructor(t,r,i){this._elementRef=t,this._defaultColor="primary",this._value=0,this._diameter=Se,this._noopAnimations=r==="NoopAnimations"&&!!i&&!i._forceAnimations,this.mode=t.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",i&&(i.color&&(this.color=this._defaultColor=i.color),i.diameter&&(this.diameter=i.diameter),i.strokeWidth&&(this.strokeWidth=i.strokeWidth))}get value(){return this.mode==="determinate"?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,t||0))}get diameter(){return this._diameter}set diameter(t){this._diameter=t||0}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(t){this._strokeWidth=t||0}_circleRadius(){return(this.diameter-Le)/2}_viewBox(){let t=this._circleRadius()*2+this.strokeWidth;return`0 0 ${t} ${t}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}};e.\u0275fac=function(r){return new(r||e)(d(w),d(x,8),d(Be))},e.\u0275cmp=m({type:e,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(r,i){if(r&1&&re(je,5),r&2){let n;E(n=A())&&(i._determinateCircle=n.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(r,i){r&2&&(h("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",i.mode==="determinate"?i.value:null)("mode",i.mode),S("mat-"+i.color),M("width",i.diameter,"px")("height",i.diameter,"px")("--mdc-circular-progress-size",i.diameter+"px")("--mdc-circular-progress-active-indicator-width",i.diameter+"px"),T("_mat-animation-noopable",i._noopAnimations)("mdc-circular-progress--indeterminate",i.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:[y.HasDecoratorInputTransform,"value","value",D],diameter:[y.HasDecoratorInputTransform,"diameter","diameter",D],strokeWidth:[y.HasDecoratorInputTransform,"strokeWidth","strokeWidth",D]},exportAs:["matProgressSpinner"],standalone:!0,features:[K,u],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(r,i){if(r&1&&(C(0,We,2,8,"ng-template",null,0,oe),s(2,"div",2,1),F(),s(4,"svg",3),p(5,"circle",4),c()(),H(),s(6,"div",5)(7,"div",6)(8,"div",7),R(9,8),c(),s(10,"div",9),R(11,8),c(),s(12,"div",10),R(13,8),c()()()),r&2){let n=ie(1);l(4),h("viewBox",i._viewBox()),l(),M("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeDashOffset(),"px")("stroke-width",i._circleStrokeWidth(),"%"),h("r",i._circleRadius()),l(4),k("ngTemplateOutlet",n),l(2),k("ngTemplateOutlet",n),l(2),k("ngTemplateOutlet",n)}},dependencies:[ae],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0});let o=e;return o})();var Ee=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=v({type:e}),e.\u0275inj=b({imports:[ne,_]});let o=e;return o})();function He(o,e){o&1&&(s(0,"div",0)(1,"div"),p(2,"mat-spinner"),s(3,"p"),I(4,"Loading data..."),c()()())}var Ae=(()=>{let e=class e{constructor(){this.router=f(ge),this.destroyRef=f(Q),this.title="star-wars-application",this.loading=!0}ngOnInit(){this.router.events.pipe(ve(this.destroyRef)).subscribe(t=>{this.checkRouterEvent(t)})}checkRouterEvent(t){t instanceof me&&(this.loading=!0),(t instanceof de||t instanceof pe||t instanceof ue)&&(this.loading=!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=m({type:e,selectors:[["app-root"]],standalone:!0,features:[u],decls:2,vars:1,consts:[[1,"flex","align-items-center","justify-content-center","w-full","h-full"]],template:function(r,i){r&1&&(p(0,"router-outlet"),C(1,He,5,0,"div",0)),r&2&&(l(),X(1,i.loading?1:-1))},dependencies:[O,Ee,Re]});let o=e;return o})();le(Ae,Te).catch(o=>console.error(o));
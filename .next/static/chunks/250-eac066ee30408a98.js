"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[250],{9250:function(e,t,a){a.d(t,{UO:function(){return C},s0:function(){return g}});var n,r,u,s,o=a(7294),i=a(2599);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let l=o.createContext(null),f=o.createContext(null),v=o.createContext(null),p=o.createContext({outlet:null,matches:[],isDataRoute:!1});function h(){return null!=o.useContext(v)}function d(e){o.useContext(f).static||o.useLayoutEffect(e)}function g(){let{isDataRoute:e}=o.useContext(p);return e?function(){var e;let t,a,n,r;let{router:u}=(U.UseNavigateStable,(t=o.useContext(l))||(0,i.J0)(!1),t),s=(e=R.UseNavigateStable,(r=(n=((a=o.useContext(p))||(0,i.J0)(!1),a)).matches[n.matches.length-1]).route.id||(0,i.J0)(!1),r.route.id),f=o.useRef(!1);return d(()=>{f.current=!0}),o.useCallback(function(e,t){void 0===t&&(t={}),f.current&&("number"==typeof e?u.navigate(e):u.navigate(e,c({fromRouteId:s},t)))},[u,s])}():function(){h()||(0,i.J0)(!1);let e=o.useContext(l),{basename:t,future:a,navigator:n}=o.useContext(f),{matches:r}=o.useContext(p),{pathname:u}=(h()||(0,i.J0)(!1),o.useContext(v).location),s=JSON.stringify((0,i.cm)(r,a.v7_relativeSplatPath)),c=o.useRef(!1);return d(()=>{c.current=!0}),o.useCallback(function(a,r){if(void 0===r&&(r={}),!c.current)return;if("number"==typeof a){n.go(a);return}let o=(0,i.pC)(a,JSON.parse(s),u,"path"===r.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:(0,i.RQ)([t,o.pathname])),(r.replace?n.replace:n.push)(o,r.state,r)},[t,n,s,u,e])}()}function C(){let{matches:e}=o.useContext(p),t=e[e.length-1];return t?t.params:{}}var U=((n=U||{}).UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n),R=((r=R||{}).UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r);(s||(s=a.t(o,2))).startTransition;var b=((u=b||{})[u.pending=0]="pending",u[u.success=1]="success",u[u.error=2]="error",u);new Promise(()=>{})}}]);
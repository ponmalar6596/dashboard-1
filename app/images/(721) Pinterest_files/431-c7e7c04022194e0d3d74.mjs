(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[431],{CKhc:function(e,t,n){n.d(t,"a",(function(){return b}));var i=n("q1tI"),s=n.n(i),a=n("TSYQ"),r=n.n(a),o=n("Ye/N"),l=n("DzJC"),c=n.n(l),d=n("n6mq"),h=n("N84b");function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const u="up",p="down";let g=!1,f=!0;class b extends s.a.Component{constructor(e){super(e),m(this,"handleMouseOver",()=>{!this.props.listResource.isFetching&&this._container&&this.setState({highlight:!1})}),m(this,"handleScroll",c()(()=>{if(this.props.listResource.isFetching||!this._container)return;this.props.handleScrollShadow(Object(h.d)(this._container)>0);const{scrollThreshold:e}=this.props;Object(h.c)(this._container)-Object(h.d)(this._container)-Object(h.a)(this._container)<e&&this.fetchMore()},100)),m(this,"addEventListeners",e=>{const{useWindow:t}=this.props;t&&(e=window),this.removeEventListeners(),e&&(t||e.addEventListener("wheel",this.preventScroll),e.addEventListener("scroll",this.handleScroll),e.addEventListener("mouseover",this.handleMouseOver)),this._container=e}),m(this,"getRef",e=>e.id===this.props.highlightId?this.onRefChange:null),m(this,"preventScroll",e=>{if(!this._container)return;const t=e.deltaY<0?u:p,n=this._container.scrollHeight-this._container.scrollTop-this._container.clientHeight==0,i=0===this._container.scrollTop;(t===p&&n||t===u&&i)&&e.preventDefault()}),m(this,"fetchForHighlight",()=>{if(!this.state.isResourceExhausted&&!this.state.isHighlightedItemLoaded&&this.props.listResource.data){let e=!1;this.props.listResource.data.forEach(t=>{t.id===this.props.highlightId&&(e=!0,this.setState({isHighlightedItemLoaded:!0}))}),e||this.fetchMore()}}),m(this,"onRefChange",e=>{this.setState({highlightedItemRef:e})}),m(this,"handleHighlightAndScrollToItem",()=>{this.props.listResource&&this.props.listResource.data&&!this.state.isResourceExhausted&&!this.state.isHighlightedItemLoaded&&this.fetchForHighlight(),this.state.highlightedItemRef&&!g&&(this.state.highlightedItemRef.scrollIntoView({behavior:"smooth",block:"center"}),g=!0)}),this.state={highlightedItemRef:null,highlight:null,isResourceExhausted:!1,isHighlightedItemLoaded:!1}}componentWillUnmount(){this.removeEventListeners(),g&&(f=!1)}UNSAFE_componentWillReceiveProps(e){this.state.highlight||this.setState({highlight:e.shouldHighlightListItem})}removeEventListeners(){const{useWindow:e}=this.props,t=this._container;t&&(e||t.removeEventListener("wheel",this.preventScroll),t.removeEventListener("scroll",this.handleScroll),t.removeEventListener("mouseover",this.handleScroll))}fetchMore(){const e=this._container;this.props.listResource.isFetching||(this.props.listResource.isAtEnd&&e?(e.removeEventListener("scroll",this.handleScroll),e.removeEventListener("mouseover",this.handleMouseOver),this.setState({isResourceExhausted:!0})):this.props.listResource.fetchMore())}render(){const{className:e,renderEmptyState:t,renderItem:n,renderTopStoryExperience:i}=this.props;this.props.shouldScrollToItem&&this.handleHighlightAndScrollToItem();const a=this.props.listResource.data;return!this.props.listResource.isFetching&&a&&0===a.length&&n?t():s.a.createElement("div",{className:r()(e,"listContainer"),ref:this.addEventListeners},a&&i&&i(),a?s.a.createElement("ul",{className:"scrollableList"},a.map((e,t)=>n(e,t,this.getRef(e),this.state.highlight&&f))):null,this.props.listResource.isAtEnd?null:s.a.createElement("div",{className:"loadingItem"},s.a.createElement(d.O,{accessibilityLabel:o.a._("Loading items"),show:this.props.listResource.isFetching})))}}m(b,"defaultProps",{className:"",scrollThreshold:400,useWindow:!1,handleScrollShadow:()=>{},highlightId:null,shouldScrollToItem:!1})},"FQ/6":function(e,t,n){var i=n("q1tI"),s=n.n(i),a=n("TSYQ"),r=n.n(a),o=n("n6mq");t.a=({showShadow:e,selectedIndex:t,onChange:n,tabItems:i})=>s.a.createElement("div",{className:r()("newsHubTitle",""+(e?"boxShadow":""))},s.a.createElement(o.e,{direction:"row",alignItems:"center",width:"100%",paddingX:3},s.a.createElement(o.L,{onChange:({activeIndex:e})=>{n(e)},items:i,selectedItemIndex:t})))},"Jf+U":function(e,t,n){n.d(t,"a",(function(){return m}));var i=n("q1tI"),s=n.n(i),a=n("/MKj"),r=n("Jr++"),o=n("s+7V"),l=n("U4JR");function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const d=Object(r.a)()&&Object(r.a)().debug_impression_log,h={Article:{impressionType:"articleImpressions",idType:"articleIdStr",eventType:3829},Pin:{impressionType:"pinImpressions",idType:"pinIdStr",eventType:18},Board:{impressionType:"boardImpressions",idType:"boardIdStr",eventType:3700},Interest:{impressionType:"topicImpressions",idType:"topicIdStr",eventType:3703},Search:{impressionType:"searchImpressions",idType:"term",eventType:3803},User:{impressionType:"userImpressions",idType:"userIdStr",eventType:3704},News:{impressionType:"newsHubData",idType:"newsIdStr",eventType:4110},Story:{impressionType:"storyImpressions",idType:"storyIdStr",eventType:170},Guide:{impressionType:"guideImpressions",idType:"term",eventType:7573},ActivationCard:{impressionType:"activationCardImpressions",idType:"experienceIdStr",eventType:8547},Banner:{impressionType:"bannerImpressions",idType:"userIdStr",eventType:9061}};function m(e){const t=Object(o.a)(e);class n extends s.a.Component{constructor(...e){super(...e),c(this,"state",{impressionStarted:!1,impressionLogged:!1}),c(this,"currentNs",()=>1e6*Date.now()),c(this,"startTime",0),c(this,"debugPinImpressions",d&&"Pin"===this.props.impressionType&&this.props.viewer.isAuth&&this.props.viewer.isEmployee),c(this,"handleVisibilityChanged",e=>{const{componentType:t,contextLogData:n,impressionAuxFields:i,impressionType:s,loggingId:a,slotIndex:r,viewParameter:o,viewType:c,viewData:d}=this.props;if(e)this.startTime=this.currentNs(),this.debugPinImpressions&&(console.log(r+" started timer"),this.setState({impressionStarted:!0}));else{const e=h[s],m=e.idType,u=this.currentNs(),p={endTime:u,[m]:a,slotIndex:r,time:this.startTime,renderDuration:u-this.startTime,...i};Object(l.b)(e.eventType,{component:t,eventData:{[e.impressionType]:[p]},view:c,viewParameter:o,viewData:d,...n}),this.debugPinImpressions&&(console.log(r+" logged for "+(u-this.startTime)/1e9+"s"),this.setState({impressionStarted:!1,impressionLogged:!0}))}})}render(){return s.a.createElement(t,Object.assign({onVisibilityChanged:this.handleVisibilityChanged,debugImpressionStarted:this.debugPinImpressions?this.state.impressionStarted:void 0,debugImpressionLogged:this.debugPinImpressions?this.state.impressionLogged:void 0},this.props))}}return Object(a.connect)(({viewer:e})=>({viewer:e}),()=>({}))(n)}},"N/FO":function(e,t,n){const i="undefined"!=typeof window&&window.performance&&window.performance.now?()=>window.performance.now():()=>Date.now();t.a=({window:e,duration:t,run:n})=>{const s=i();let a=0,r=null;const o=()=>{const l=i()-s,c=l-a;if(t===1/0)n(0,l,c);else{const e=l/t;if(e>=1)return void n(1,l,c);n(e,l,c)}a=l,r=e.requestAnimationFrame(o)};return{start:()=>{r=e.requestAnimationFrame(o)},cancel:()=>{r&&(e.cancelAnimationFrame(r),r=null)}}}},N84b:function(e,t,n){n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return c})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return h})),n.d(t,"f",(function(){return m}));var i=n("N/FO");const s={easingFunction:"ease-in-out",extendToEdgeDistanceX:0,extendToEdgeDistanceY:0,scrollSpeedPxPerMs:1.2,minScrollDuration:200},a={linear:e=>e,"ease-in":e=>e*e,"ease-out":e=>e*(2-e),"ease-in-out":e=>e<.5?2*e*e:(4-2*e)*e-1},r=({scrollPosition:e,containerSize:t,contentSize:n,intendedDistance:i,extendToEdgeDistance:s=0})=>{const a=n-t,r=a-e,o=-e;let l=i;return l=Math.min(l,r),l=Math.max(l,o),i>0&&a-(e+l)<=s?l=a-e:i<0&&e+l<=s&&(l=-e),l},o=(e,t,n,o={})=>{const l={...s,...o},{scrollLeft:c,scrollTop:d,scrollWidth:h,scrollHeight:m,clientWidth:u,clientHeight:p}=e,g=r({scrollPosition:c,containerSize:u,contentSize:h,intendedDistance:t,extendToEdgeDistance:l.extendToEdgeDistanceX}),f=r({scrollPosition:d,containerSize:p,contentSize:m,intendedDistance:n,extendToEdgeDistance:l.extendToEdgeDistanceY}),b=Math.abs(Math.floor(g/l.scrollSpeedPxPerMs)),w=Math.abs(Math.floor(f/l.scrollSpeedPxPerMs));let y=Math.max(b,w);l.minScrollDuration&&(y=Math.max(y,l.minScrollDuration));const E=a[l.easingFunction]||a["ease-in-out"];return Object(i.a)({window,duration:y,run:t=>{e.scrollLeft=c+g*E(t),e.scrollTop=d+f*E(t),1===t&&l.onAnimationComplete&&setTimeout(l.onAnimationComplete,0)}})};function l(e){return e===window?window.innerHeight:e.clientHeight}function c(){return void 0!==window.scrollY?window.scrollY:document.documentElement&&void 0!==document.documentElement.scrollTop?document.documentElement.scrollTop:0}function d(e){return e===window&&document.documentElement?document.documentElement.scrollHeight:e.scrollHeight}function h(e){return e===window?c():e.scrollTop}function m(){window&&window.scroll(0,0)}},ToRs:function(e,t,n){n.d(t,"a",(function(){return G}));var i=n("q1tI"),s=n.n(i),a=(n("irWW"),n("h4v/")),r=n("Ye/N"),o=n("sUia"),l=()=>s.a.createElement("svg",{width:o.h,height:o.h,viewBox:`0 0 ${o.h} ${o.h}`,fill:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M6.73597 118.92C-6.85813 112.364 3.39896 74.1199 9.06316 60.4621C16.6599 60.4621 34.886 40.5078 43.0491 24.1182C65.7059 20.0211 103.223 32.1097 118.016 29.2416C132.81 26.3735 153.334 64.4095 156 94.286V132.186C156 141.918 81.5324 135.259 70.5371 132.186C59.5419 129.113 23.7286 127.114 6.73597 118.92Z",fill:"#D3E6F4"}),s.a.createElement("path",{d:"M122.876 65.6959L109.637 96.4489C114.439 106.483 114.166 121.969 111.732 128.794L20.124 94.765C21.828 89.9869 34.1086 76.6429 44.1069 72.1068L53.3339 39.8634C53.3339 39.8634 81.2047 14.6653 99.3003 21.3872C106.031 23.8876 113.537 27.6322 117.839 36.2895C117.839 36.2895 123.669 60.1554 122.876 65.6959Z",fill:"#1F4F60"}),s.a.createElement("path",{d:"M77.5664 126.922C74.7434 134.837 64.1584 135.852 58.4133 136.037C57.9123 136.053 49.808 129.362 49.808 129.362C48.2419 125.427 48.0668 120.458 49.4821 116.489L64.2544 119.658L77.5664 126.922Z",fill:"#1F4F60"}),s.a.createElement("path",{d:"M143.149 38.668L140.613 46.8725L133.858 47.613L140.613 52.4263V58.1843L145.258 53.869L153.987 52.4263L146.526 47.613L145.258 43.5471L143.149 38.668Z",fill:"#FFCF7F"}),s.a.createElement("path",{d:"M102.8 16.0723L98.5471 24.1121L92.5938 25.0173L98.5471 29.8305L99.3483 35.5886L103.993 31.2733L112.723 29.8305L103.993 25.0173V20.9514L102.8 16.0723Z",fill:"#FFCF7F"}),s.a.createElement("path",{d:"M117.081 58.2247L122.494 38.668L125.602 56.8515L135.871 63.3778L123.614 67.3762L121.385 73.6091L117.081 80.7823V69.2873L104.671 59.7252L117.081 58.2247Z",fill:"#FFCF7F"})),c=n("U4JR"),d=n("n6mq");var h=n("tlsX"),m=n("pWkb"),u=n("p+V9");n("17x9");function p({board:{name:e,image_cover_url:t,images:n}}){const i=t?{url:t}:void 0,a=function(e,t){const n=e?new Set([e.substring(e.lastIndexOf("/")+1)]):new Set;return(t?t[o.e]:[]).filter(e=>{const t=e.url.substring(e.url.lastIndexOf("/")+1);return!n.has(t)&&(n.add(t),!0)})}(t,n);if(void 0===i||a.length<o.v)return null;const r=[a.slice(0,2),a.slice(2,4)];return s.a.createElement(d.e,{height:o.i,width:o.j},s.a.createElement(d.A,{height:o.i,rounding:o.g,wash:!0},s.a.createElement(d.e,{width:o.j,display:"flex",justifyContent:"between"},s.a.createElement(d.e,{height:o.a,width:o.b,position:"relative",dangerouslySetInlineStyle:{__style:{marginRight:o.k}}},s.a.createElement(u.a,{height:o.a,imgUrl:i.url,imgPos:{width:0,height:0,x:0,y:0},width:o.b})),r.map((t,n)=>s.a.createElement(d.e,{key:"col"+n},t.map((i,a)=>s.a.createElement(d.e,{key:"col"+n+"row"+a,height:o.c,width:o.d,position:"relative",dangerouslySetInlineStyle:{__style:{marginRight:n<r.length-1?o.k:"",marginBottom:a<t.length-1?o.k:""}}},s.a.createElement(d.y,{width:o.d,height:o.c,contentAspectRatio:i.width/i.height},s.a.createElement(d.v,{alt:e,naturalHeight:i.height,naturalWidth:i.width,src:i.url})))))))))}function g(e){const{interests:t}=e;if(!t||!t.length)return null;const n=t.slice(0,o.s),i=n.length/o.s*o.j;return s.a.createElement(d.e,{height:o.i,width:i},s.a.createElement(d.A,{height:o.i,rounding:o.g,wash:!0},s.a.createElement(d.e,{width:i,display:"flex",justifyContent:"between"},n.map((e,t)=>{const{backgroundColor:i,images:{"236x":a},name:r}=e;return a?s.a.createElement(d.e,{key:t,height:o.M,width:o.N,position:"relative",dangerouslySetInlineStyle:{__style:{marginRight:t<n.length-1?o.k:""}}},s.a.createElement(d.y,{width:o.N,height:o.M,contentAspectRatio:a.width/a.height},s.a.createElement(d.v,{alt:r,color:i,naturalHeight:1,naturalWidth:1,src:a.url})),s.a.createElement(d.e,{height:o.M,width:o.N,dangerouslySetInlineStyle:{__style:o.f},position:"absolute",top:!0,left:!0}),s.a.createElement(d.e,{display:"flex",height:o.M,width:o.N,position:"absolute",top:!0,padding:3,alignItems:"center",justifyContent:"center"},s.a.createElement(d.V,{align:"center",color:"white",weight:"bold"},r))):null}))))}var f=function(e){const{pins:t}=e;if(0===t.length)return null;const n=t.slice(0,o.t),i=n.length/o.t*o.j;return s.a.createElement(d.e,{height:o.i,width:i},s.a.createElement(d.A,{height:o.i,rounding:o.g,wash:!0},s.a.createElement(d.e,{width:i,display:"flex",justifyContent:"between"},n.map((e,t)=>s.a.createElement(d.e,{key:t,height:o.G,width:o.I,position:"relative",dangerouslySetInlineStyle:{__style:{marginRight:t<n.length-1?o.k:""}}},s.a.createElement(d.y,{width:o.I,height:o.G,contentAspectRatio:e.width/e.height},s.a.createElement(d.v,{alt:"MiniPinGridLego",naturalHeight:1,naturalWidth:1,src:e.url})))))))};function b(e){const{searches:t}=e;if(!t||!t.length)return null;const n=t.slice(0,o.u),i=[[],[]];n.map((e,t)=>(i[t%o.B].push(e),e));const a=i[0].length/o.C*o.i,r=Math.min(t.length,o.B)/o.B*o.j;return s.a.createElement(d.e,{height:a,width:r},s.a.createElement(d.A,{height:a,rounding:o.g},s.a.createElement(d.e,{width:r,display:"flex",justifyContent:"between"},i.map((e,t)=>s.a.createElement(d.e,{key:"col"+t},e.map((n,a)=>{const{images:r=[],term:l}=n;return s.a.createElement(d.e,{key:"col"+t+"row"+a,height:o.J,width:o.K,position:"relative",dangerouslySetInlineStyle:{__style:{marginRight:t<i.length-1?o.k:"",marginBottom:a<e.length-1?o.k:""}}},s.a.createElement(d.y,{contentAspectRatio:2,width:o.K,height:o.J},s.a.createElement(d.v,{alt:l,naturalHeight:1,naturalWidth:1,src:r[0]})),s.a.createElement(d.e,{height:o.J,width:o.K,dangerouslySetInlineStyle:{__style:o.f},position:"absolute",top:!0,left:!0}),s.a.createElement(d.e,{display:"flex",height:o.J,width:o.K,position:"absolute",top:!0,padding:3,alignItems:"center",justifyContent:"center"},s.a.createElement(d.V,{align:"center",color:"white",weight:"bold"},l)))}))))))}var w=n("qD10"),y=n("fyOE"),E=n("kmwA"),v=n("r8eU"),_=n("dVZn"),I=n("FDmi");function S(e){const{headerIconObjects:t=[]}=e;if(0===t.length||void 0===t[0])return null;const n=t[0].type;if(n===o.D.PIN){const e=t[0],n=e.images[o.o];return s.a.createElement(d.e,{height:o.m,width:o.p},s.a.createElement(d.A,{height:o.m,rounding:o.n,wash:!0},s.a.createElement(d.e,{width:o.p,display:"flex",justifyContent:"between"},s.a.createElement(d.y,{width:o.p,height:o.m,contentAspectRatio:n.width/n.height},s.a.createElement(d.v,{alt:e.description,naturalHeight:o.m,naturalWidth:o.p,src:n.url})))))}if(n===o.D.BOARD){const e=t[0].image_cover_url;return s.a.createElement(d.e,{height:o.m,width:o.m},s.a.createElement(d.A,{height:o.m,rounding:o.n,wash:!0},s.a.createElement(d.e,{width:o.m,display:"flex",justifyContent:"between"},s.a.createElement(d.y,{contentAspectRatio:1,width:o.m,height:o.m},s.a.createElement(u.a,{height:o.m,imgUrl:e,imgPos:{width:0,height:0,x:0,y:0},width:o.m})))))}if(n===o.D.USER){if(t.length>1&&void 0!==t[1]){const e=t[0],n=t[1];return s.a.createElement(d.e,{height:o.m,width:o.m},s.a.createElement(d.e,{height:o.m,width:o.m,position:"relative"},s.a.createElement(d.e,{height:o.l,width:o.l,display:"flex",position:"absolute",top:!0,left:!0},s.a.createElement(I.a,{src:e.image_large_url,name:e.full_name,outline:!0})),s.a.createElement(d.e,{height:o.l,width:o.l,display:"flex",position:"absolute",bottom:!0,right:!0},s.a.createElement(I.a,{src:n.image_large_url,name:n.full_name,outline:!0}))))}{const e=t[0];return s.a.createElement(d.e,{height:o.m,width:o.m},s.a.createElement(d.e,{width:o.m,display:"flex",justifyContent:"between"},s.a.createElement(I.a,{src:e.image_large_url,name:e.full_name})))}}return null}var x=n("p6as"),C=n("zwad"),T=n("rkcQ");const A=(e,t)=>{const i=t&&t[0]&&t[0].actor_id,s=C.a.getQueryStringParamsFromUrl(e);if(i&&s.notification_ids){return((e,t)=>{const i={notifications:JSON.stringify(t)};return n.e(462).then(n.bind(null,"FCI/")).then(({default:t})=>(new t).put(`/ads/v3/notifications_v2/${e}/`,i))})(i,JSON.parse(s.notification_ids).map(e=>({id:e,status:T.f.READ})))}return Promise.resolve()};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class L extends i.Component{constructor(...e){super(...e),O(this,"handleClick",()=>{const{handleClick:e,id:t,textMapping:n,type:i,overrideClickUrl:s,requestContext:a,contentItems:r}=this.props;Object(c.b)(101,{objectId:t,view:107,viewParameter:3081,news_type:i}),this.isAdsUrl(s)&&A(s,r),i!==x.d||"others_count"in n||"pin_count"in n||new v.b(a,"gb_newshub_save_one_pin").enabled(),i===x.d&&"pin_count"in n&&new v.b(a,"gb_newshub_save_multiple_pins").enabled(),i===x.c&&new v.b(a,"gb_newshub_comment_one_pin").enabled(),i===x.b&&new v.b(a,"gb_newshub_new_activity_board").enabled(),e()}),O(this,"isAdsUrl",e=>{const{CANONICAL_ADS_URL:t}=E.a.settings;return e&&0===e.indexOf(t)})}get displayComponent(){const{contentItems:e,contentText:t,displayMode:n}=this.props,i=e.filter(({content_object:e})=>e).map(({content_object:e})=>e);if(this.canBeSupportedByDisplayModes(n,[o.r.MINI_PIN_GRID_2])){const e=i.map(e=>e.images[o.H]);return s.a.createElement(f,{pins:e})}if(this.canBeSupportedByDisplayModes(n,[o.r.MINI_BOARD_GRID]))return s.a.createElement(p,{board:i[0]});if(this.canBeSupportedByDisplayModes(n,[o.r.MINI_BOARD_GRID_WITH_ICON]))return s.a.createElement(p,{board:i[0]});if(this.canBeSupportedByDisplayModes(n,[o.r.MINI_USER_GRID])){const e=i[0].recent_pin_images["200x"]||[];return s.a.createElement(f,{pins:e})}if(this.canBeSupportedByDisplayModes(n,[o.r.ROW_WITH_COUNT_2])){const e=new Set,t=i.filter(t=>{const{image_signature:n}=t;return(!n||!e.has(n))&&(e.add(t.image_signature),!0)}).map(e=>e.images[o.H]);return s.a.createElement(f,{pins:t})}return this.canBeSupportedByDisplayModes(n,[o.r.MINI_INTEREST_GRID])?s.a.createElement(g,{interests:i}):this.canBeSupportedByDisplayModes(n,[o.r.MINI_SEARCH_GRID])?s.a.createElement(b,{searches:i}):this.canBeSupportedByDisplayModes(n,[o.r.BASIC])?null:this.canBeSupportedByDisplayModes(n,[o.r.TEXT])?s.a.createElement(d.e,{width:o.L},s.a.createElement(d.V,null,t)):void 0}canBeSupportedByDisplayModes(e,t){return t.some(t=>e&1<<t)}render(){const{currentSite:e,headerText:t,headerIconObjects:n,id:i,lastUpdatedAt:a,overrideClickUrl:r,siteType:l,textMapping:c,unread:u,shouldHighlight:p}=this.props,{CANONICAL_MAIN_URL:g}=E.a.settings,f=r||"/news_hub/"+i,b=this.isAdsUrl(f),v=b?(_=f,C.a.removeQueryParams(_,["notification_ids"])):Object(h.a)({currentSiteType:l,destinationSiteType:0,inputPath:f});var _;const I=this.displayComponent,x=new Date,T=new Date(a);x.getTime()-T.getTime()>864e5&&T.setHours(0,0,0,0);const A=p?"hover":"",O="DESKTOP"===e||b;return s.a.createElement(d.e,{marginStart:2,marginBottom:4,width:o.x},s.a.createElement(w.a,{className:"newsHubItem "+A,to:O?v:g.concat(v),onClick:this.handleClick},s.a.createElement(d.e,{display:"flex",position:"relative"},s.a.createElement(d.e,{marginStart:4,width:void 0===n?o.w:256,display:"flex",top:!0,alignItems:"center"},s.a.createElement(d.e,null,s.a.createElement("span",{style:{display:"inline",marginRight:8}},s.a.createElement(d.V,{inline:!0},s.a.createElement(y.a,{text:t,textMapping:c}))),s.a.createElement(d.e,{display:"inlineBlock"},s.a.createElement(d.V,{inline:!0,color:"gray"},Object(m.a)(T.toString(),{isAbbreviated:!0}))))),n&&s.a.createElement(d.e,{marginStart:2,width:o.m,display:"flex",top:!0,alignItems:"center",justifyContent:"center"},s.a.createElement(S,{headerIconObjects:n,id:i})),s.a.createElement(d.e,{width:o.O,marginStart:1,marginEnd:1,display:"flex",top:!0,alignItems:"center",justifyContent:"center"},u&&s.a.createElement(d.A,{height:o.O,rounding:"circle",width:o.O},s.a.createElement("div",{style:{backgroundColor:"#e60023",width:o.O,height:o.O}})))),!!I&&s.a.createElement(d.e,{marginTop:2,paddingX:2},I)))}}var j=n("Jf+U"),k=Object(j.a)((function(e){return s.a.createElement(L,Object.assign({},e,{currentSite:Object(_.b)().currentSite}))})),N=n("ESls"),R=n("EC67");function D(e){const t=Object(R.g)();Object(i.useEffect)(()=>{Object(c.b)(120,{view:107,viewParameter:3081,component:13708})},[]);return s.a.createElement(N.a,{activate:!0,name:"web_newshub_convert_to_personal"},({anyEnabled:n})=>n&&s.a.createElement(s.a.Fragment,null,s.a.createElement(d.e,{marginStart:4,marginBottom:5},s.a.createElement(d.e,{display:"flex",direction:"row"},s.a.createElement(d.l,{span:9},s.a.createElement(d.e,{display:"flex",direction:"column",justifyContent:"center",marginStart:2},s.a.createElement(d.e,{display:"flex"},s.a.createElement(d.s,{size:"sm"},r.a._("Are you a business?","Ask the user if they still want to be a business account","Ask the user if they still want to be a business account"))),s.a.createElement(d.e,{display:"flex",marginTop:2},s.a.createElement(d.V,{color:"darkGray"},r.a._("We've made it easy to convert to a personal account","Card text that the user could convert to a personal account","Card text that the user could convert to a personal account"))))),s.a.createElement(d.l,{span:3},s.a.createElement(d.e,{display:"flex",marginTop:3,direction:"row",justifyContent:"center",alignItems:"center"},s.a.createElement(d.t,{icon:"pinterest",accessibilityLabel:r.a._("Pinterest icon","Pinterest icon","Pinterest icon"),color:"red",size:45})))),s.a.createElement(d.e,{display:"flex",direction:"row",justifyContent:"start",alignItems:"center",marginTop:4},s.a.createElement(d.e,{marginEnd:4},s.a.createElement(d.f,{inline:!0,color:"gray",size:"lg",text:r.a._("Dismiss","text on button","text on button"),onClick:()=>(e.handleItemClick(),e.onDismiss(),void Object(c.b)(123,{view:107,viewParameter:3081,component:13708}))})),s.a.createElement(d.e,{marginEnd:4},s.a.createElement(d.f,{inline:!0,color:"red",size:"lg",text:r.a._("Convert account","text on button","text on button"),onClick:()=>(e.handleItemClick(),t.push("/convert-personal/"),void Object(c.b)(101,{view:107,viewParameter:3081,component:13708}))}))))))}var M=n("clxp"),P=n("c4Fo"),H=n("2qKt");class F extends s.a.PureComponent{render(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(M.a,{name:"FirstStoryExperience"},s.a.createElement(d.e,{width:o.x},s.a.createElement(P.a,{placementId:1000309,experienceIds:[502547]},({dismiss:e})=>s.a.createElement(D,{onDismiss:e,handleItemClick:this.props.handleItemClick})))))}}var B=Object(H.a)(1000309)(F),U=n("CKhc"),q=n("q8wg"),V=n("w70y"),W=n("pLLR");function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Y extends i.Component{constructor(...e){super(...e),z(this,"handleItemClick",()=>{this.props.handleItemClick()}),z(this,"renderItem",(e,t,n,i)=>{const a={impressionAuxFields:{newsType:e.news_type},impressionType:"News",loggingId:e.id,slotIndex:t,viewParameter:3081,viewType:107},r=s.a.createElement(k,Object.assign({contentItemCount:e.content_item_count,contentItems:e.content_items,contentText:e.content_text,displayMode:e.encoded_display_mode,handleClick:this.handleItemClick,headerIconImageUrl:e.header_icon_image_url,headerIconObjects:e.header_icon_objects,headerText:e.header_text,id:e.id,lastUpdatedAt:e.last_updated_at,overrideClickUrl:e.override_click_url,requestContext:this.props.requestContext,shouldHighlight:null!==n&&i,subHeaderText:e.sub_header_text,siteType:this.props.siteType,textMapping:e.text_mapping,type:e.news_type,unread:e.unread},a));return null!==n?s.a.createElement("li",{key:t,ref:n},r):s.a.createElement("li",{key:t,id:e.id},r)}),z(this,"renderTopStoryExperience",()=>s.a.createElement(B,{handleItemClick:this.handleItemClick}))}componentDidMount(){this.logPanelImpression()}logPanelImpression(){const e=a.a.getInstance(),t=e.getViewFromContext();Object(c.b)(13,{view:107,viewParameter:3081}),e.addViewToContext(t)}render(){return s.a.createElement(q.a,{view:107,viewParameter:3081},s.a.createElement(U.a,{className:"newsHubPanel",renderEmptyState:()=>{return e=this.props.history,t=this.handleItemClick,s.a.createElement(d.e,{height:`calc(100% - ${o.z}px)`,width:o.y,display:"flex",top:!0,alignItems:"center",justifyContent:"center"},s.a.createElement(d.e,null,s.a.createElement(d.e,{dangerouslySetInlineStyle:{__style:{marginLeft:Math.floor((o.y-o.h)/2)+"px"}},paddingY:2,alignItems:"center",justifyContent:"center"},s.a.createElement(l,null)),s.a.createElement(d.e,{paddingX:8,paddingY:1},s.a.createElement(d.s,{align:"center",size:"sm"},r.a._("Nothing to see yet!","Header text on empty state in notifications tab","Header text on empty state in notifications tab"))),s.a.createElement(d.e,{paddingX:8,paddingY:1},s.a.createElement(d.V,{align:"center"},r.a._("Try exploring your home feed, creating a board, or following someone with ideas that inspire you.","newsHub.emptyState.subheader","Subheader text on empty state in web notifications tab"))),!["/","/homefeed"].includes(e.location.pathname)&&s.a.createElement(d.e,{alignItems:"center",display:"flex",justifyContent:"center",paddingY:3},s.a.createElement(d.f,{inline:!0,onClick:()=>{Object(c.b)(101,{view:107,viewParameter:3083,component:13583}),e.push("/homefeed"),t()},text:r.a._("Go to home feed","newsHub.emptyState.ctaButton","Button label on the news hub cta button that takes user back to homefeed")}))));var e,t},renderItem:this.renderItem,renderTopStoryExperience:this.renderTopStoryExperience,listResource:this.props.newsHubResource,handleScrollShadow:this.props.handleScrollShadow,shouldScrollToItem:this.props.highlightScrollSidebar,shouldHighlightListItem:this.props.highlightScrollSidebar,highlightId:this.props.highlightScrollSidebar?this.props.utmNewsHubId:null}))}}function G(e){const t=Object(W.d)(),n=Object(R.g)(),i=Object(V.a)({name:"NewsHubResource",options:{page_size:10},allowStale:!1});return s.a.createElement(Y,Object.assign({},e,{history:n,newsHubResource:i,requestContext:t}))}z(Y,"defaultProps",{handleItemClick:()=>{}})},fyOE:function(e,t,n){n.d(t,"a",(function(){return l}));var i=n("q1tI"),s=n.n(i),a=n("qD10"),r=n("vvax"),o=n("n6mq");function l(e){const{applyMarkup:t=!0,applyLink:n=!1,text:i,textMapping:l={}}=e,c={};return l&&Object.keys(l).forEach(e=>{const i=l[e];c[e]=i.t.toString(),t&&(i.b&&(c[e]=s.a.createElement("strong",{key:e},c[e])),i.r&&(c[e]=s.a.createElement(o.V,{inline:!0,color:"red",key:e},c[e])),i.l&&n&&(c[e]=s.a.createElement(a.a,{key:e,to:i.l},c[e])))}),s.a.createElement("span",null,Object(r.a)(i,c))}},irWW:function(e,t,n){},"p+V9":function(e,t,n){n.d(t,"a",(function(){return a}));var i=n("q1tI"),s=n.n(i);function a({customCover:e,height:t,imgUrl:n,imgPos:i,width:a}){const r={height:t,width:a},o=t/a;let l="center center";if(e&&i){let e=1;e=i.height/i.width>o?a/i.width:t/i.height;l=`-${i.x*e}px -${i.y*e}px`}const c={backgroundImage:`url(${n})`,backgroundPosition:l,backgroundRepeat:"no-repeat",backgroundSize:"cover",minHeight:"100%",backgroundColor:"#EFEFEF"};return s.a.createElement("div",{style:r},s.a.createElement("div",{className:"relative",style:c},s.a.createElement("div",{className:"imageWash absolute"})))}},p6as:function(e,t,n){n.d(t,"f",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"e",(function(){return l}));const i=0,s=2,a=13,r=32,o=35,l=[4,5]},pWkb:function(e,t,n){n.d(t,"a",(function(){return a}));var i=n("yaUg"),s=n("Ye/N");function a(e,t){const{isAbbreviated:n,skipSeconds:a}=t||{},r=36e5,o=864e5,l=new Date(e),c=(new Date).getTime()-l.getTime(),d=Math.floor(c/1e3),h=Math.floor(c/6e4),m=Math.floor(c/r),u=Math.floor(c/o),p=Math.floor(c/6048e5),g=Math.floor(c/31536e6);return g>0?n?Object(i.a)(s.a._("{{ years }}y","Abbreviation for years","Abbreviation for years"),{years:""+g}):Object(i.a)(s.a.ngettext("{{ years }} year ago","{{ years }} years ago",g,"describing amount of time that has passed - e.g. in notifications, messages","describing amount of time that has passed - e.g. in notifications, messages"),{years:""+g}):p>1?n?Object(i.a)(s.a._("{{ weeks }}w","Abbreviation for weeks","Abbreviation for weeks"),{weeks:""+p}):Object(i.a)(s.a.ngettext("{{ weeks }} week ago","{{ weeks }} weeks ago",p,"describing amount of time that has passed - e.g. in notifications, messages","describing amount of time that has passed - e.g. in notifications, messages"),{weeks:""+p}):u>0?n?Object(i.a)(s.a._("{{ days }}d","Abbreviation for days","Abbreviation for days"),{days:""+u}):Object(i.a)(s.a.ngettext("{{ days }} day ago","{{ days }} days ago",u,"describing amount of time that has passed - e.g. in notifications, messages","describing amount of time that has passed - e.g. in notifications, messages"),{days:""+u}):m>0?n?Object(i.a)(s.a._("{{ hours }}h","Abbreviation for hours","Abbreviation for hours"),{hours:""+m}):Object(i.a)(s.a.ngettext("{{ hours }} hour ago","{{ hours }} hours ago",m,"describing amount of time that has passed - e.g. in notifications, messages","describing amount of time that has passed - e.g. in notifications, messages"),{hours:""+m}):h>0?n?Object(i.a)(s.a._("{{ minutes }}m","Abbreviation for minutes","Abbreviation for minutes"),{minutes:""+h}):Object(i.a)(s.a.ngettext("{{ minutes }} minute ago","{{ minutes }} minutes ago",h,"describing amount of time that has passed - e.g. in notifications, messages","describing amount of time that has passed - e.g. in notifications, messages"),{minutes:""+h}):d>=0&&!a?n?Object(i.a)(s.a._("{{ numSecondsBetween }}s","Abbreviation for seconds","Abbreviation for seconds"),{numSecondsBetween:""+d}):Object(i.a)(s.a.ngettext("{{ numSecondsBetween }} second ago","{{ numSecondsBetween }} seconds ago",d,"describing amount of time that has passed - e.g. in notifications, messages","describing amount of time that has passed - e.g. in notifications, messages"),{numSecondsBetween:""+d}):s.a._("just now","describing amount of time that has passed - e.g. in notifications, messages","describing amount of time that has passed - e.g. in notifications, messages")}},"qR/r":function(e,t,n){n.r(t),n.d(t,"NewsHubSidebar",(function(){return I}));var i=n("q1tI"),s=n.n(i),a=n("+NLT"),r=n("TSYQ"),o=n.n(r),l=n("Ye/N"),c=n("MKeS"),d=n("ToRs"),h=n("FQ/6"),m=n("CKhc"),u=n("ANjH"),p=n("0Rm8"),g=n("sUia"),f=n("QAzJ"),b=n("pLLR"),w=n("n6mq"),y=n("EC67");const E=Object(c.a)({resolved:{},chunkName:()=>"sterling-react-components-AdsNotificationsCenterDropdown-AdsNotificationsCenterPanel",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>Promise.all([n.e(21),n.e("sterling-react-components-AdsNotificationsCenterDropdown-AdsNotificationsCenterPanel")]).then(n.bind(null,"Gq4L")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"Gq4L"}}),v=Object(c.a)({resolved:{},chunkName:()=>"sterling-react-components-AdsNotificationsCenterDropdown-AdsNotificationsCenterTabHeader",isReady(e){const t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:()=>n.e("sterling-react-components-AdsNotificationsCenterDropdown-AdsNotificationsCenterTabHeader").then(n.bind(null,"Z4co")),requireAsync(e){const t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then(e=>(this.resolved[t]=!0,e))},requireSync(e){const t=this.resolve(e);return n(t)},resolve(){return"Z4co"}}),_=27,I=({newsButton:e,handleDismissPanel:t,requestContext:n,siteType:r,show:c,history:u,highlightScrollSidebar:b,utmNewsHubId:y})=>{var I,S;const x=Object(i.useRef)(null),{anyEnabled:C}=Object(f.a)("ads_guidance_parent",3===a.a.instance.site_type&&!!(null===(I=n.advertiser)||void 0===I?void 0:I.id)),T=({target:n})=>{const{current:i}=x,s=i&&n instanceof Node&&!i.contains(n),a=e&&n instanceof Node&&e.contains(n);s&&!a&&t()},[A,O]=Object(i.useState)(0),[L,j]=Object(i.useState)(!1),k=[l.a._("Pins","New title for news hub dropdown on the right upper corner in home page","New title for news hub dropdown on the right upper corner in home page"),s.a.createElement(v,{requestContextAdvertiserId:null===(S=n.advertiser)||void 0===S?void 0:S.id,showing:1===A,key:`${c.toString()}${A}`,fallback:s.a.createElement(w.V,{weight:"bold",size:"md",color:1===A?"darkGray":"gray"},l.a._("Ads","[m10n]newshubSidebar.header.tabLabel","New title for news hub dropdown on the right upper corner in home page"))})];Object(i.useEffect)(()=>(document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)),[]);const N=c?"0px":"-25px",R=Object(i.useCallback)(e=>{e.keyCode===_&&t()},[]);Object(i.useEffect)(()=>(document.addEventListener("keydown",R,!1),()=>{document.removeEventListener("keydown",R,!1)}),[]);const D=e=>C?s.a.createElement(h.a,{showShadow:e&&L,tabItems:k,selectedIndex:A,onChange:O}):s.a.createElement("div",{className:o()("newsHubTitle",""+(e&&L?"boxShadow":""))},s.a.createElement(w.V,{align:"center",size:"lg",weight:"bold"},l.a._("Updates","New title for news hub dropdown on the right upper corner in home page","New title for news hub dropdown on the right upper corner in home page")));return s.a.createElement(p.a,null,e=>{return s.a.createElement(w.e,{height:`calc(100vh - ${e}px - 8px)`,width:g.y,position:"fixed",color:"white",ref:x,rounding:4,tabIndex:-1,marginBottom:2,marginEnd:2,dangerouslySetInlineStyle:{__style:{marginTop:e,borderLeft:null,boxShadow:"rgba(0, 0, 0, 0.1) -3px 4px 14px 0px",overscrollBehavior:"none",top:N,transition:"top 100ms linear"}},bottom:!0,right:!n.isRTL,left:n.isRTL},c?s.a.createElement(w.e,{height:"100%",display:"flex",direction:"column"},D(!0),0!==A&&C?s.a.createElement(E,{onNotificationItemClick:t,requestContextAdvertiserId:null===(i=n.advertiser)||void 0===i?void 0:i.id}):s.a.createElement(d.a,{handleItemClick:t,locale:n.locale,siteType:r,highlightScrollSidebar:b,utmNewsHubId:y,handleScrollShadow:j})):s.a.createElement(w.e,{height:"100%",display:"flex",direction:"column"},D(!1),s.a.createElement(m.a,{className:"newsHubPanel",renderEmptyState:()=>s.a.createElement("div",null),renderItem:(e,t)=>s.a.createElement("div",null),listResource:{auxData:{},data:[],fetchMore:()=>{},isAtEnd:!1,isFetching:!1,isLoaded:!1,isRefreshing:!1,refreshData:()=>{}}})));var i})};t.default=Object(u.compose)(y.k,b.e)(I)},"s+7V":function(e,t,n){var i=n("q1tI"),s=n.n(i),a=n("i8i4"),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const l=new Map;let c=null;const d=e=>{e.forEach(e=>{const t=l.get(e.target);t&&t(e)})};t.a=e=>{class t extends i.Component{constructor(...e){super(...e),o(this,"seen",!1),o(this,"flushTimeout",null),o(this,"enter",e=>{const t=e.intersectionRatio>0||e.isIntersecting;this.seen=t,this.seen&&this.props.onVisibilityChanged(!0)}),o(this,"leave",()=>{const e=this._node;e&&(e=>l.has(e))(e)&&this.seen&&(this.props.onVisibilityChanged(!1),this.seen=!1)}),o(this,"observe",e=>{try{this._node=r.a.findDOMNode(this)}catch(i){return}if(!this._node)return;const{inAdsDesktopVideoExperiment:t}=this.props,n=this._node;((e,t="-64px 0px 0px 0px",n)=>{const i={root:"undefined"==typeof document?null:document.querySelector("#mainContainer"),rootMargin:t,threshold:[0,.5,1]};c=c||new window.IntersectionObserver(d,i),l.set(e,n),c.observe(e)})(n,e,e=>{if(!l.has(n))return;const i=t?e.intersectionRatio>=.5:e.intersectionRatio>0||e.isIntersecting,s=this.props.trackFullVisible?e.intersectionRatio>=1:i,a=this.props.trackFullVisible?0===e.intersectionRatio:!s;!this.seen&&s?this.enter(e):this.seen&&a&&this.leave()})})}componentDidMount(){const{rootMargin:e}=this.props;this.observe(e)}componentWillUnmount(){const e=this._node;e&&(this.leave(),(e=>{c.unobserve(e),l.delete(e)})(e))}render(){return s.a.createElement(e,this.props)}}return o(t,"displayName",`WithVisibilityChanged(${e.displayName||e.name})`),t}},tlsX:function(e,t,n){n.d(t,"a",(function(){return l}));var i=n("kmwA");const{CANONICAL_MAIN_URL:s,CANONICAL_ADS_URL:a,CANONICAL_ANALYTICS_URL:r}=i.a.settings,o={0:s,3:a,4:r};function l({currentSiteType:e,destinationSiteType:t,inputPath:n}){const i=Object.keys(o).includes(String(e))&&Object.keys(o).includes(String(t)),s="/"===n[0]?n:"/"+n;return i&&t!==e?`${o[t]}${s}`:s}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/js/431-c7e7c04022194e0d3d74.mjs.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[852],{627:function(e,t,a){function n(e){return"string"===typeof e}a.d(t,{Z:function(){return n}})},4852:function(e,t,a){a.d(t,{ZP:function(){return R}});var n=a(4942),o=a(3366),i=a(7462),r=a(2791),s=a(3733),c=a(4419),d=a(627),l=a(2065),u=a(724),p=a(1046),m=a(2982),v=a(9103),b=a(162),g=a(2071),f=a(6199),Z=a(5878),y=a(7225);function h(e){return(0,y.Z)("MuiListItem",e)}var C=(0,Z.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var x=(0,Z.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function I(e){return(0,y.Z)("MuiListItemSecondaryAction",e)}(0,Z.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var S=a(184),A=["className"],P=(0,u.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,i.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),w=r.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiListItemSecondaryAction"}),n=a.className,d=(0,o.Z)(a,A),l=r.useContext(f.Z),u=(0,i.Z)({},a,{disableGutters:l.disableGutters}),m=function(e){var t=e.disableGutters,a=e.classes,n={root:["root",t&&"disableGutters"]};return(0,c.Z)(n,I,a)}(u);return(0,S.jsx)(P,(0,i.Z)({className:(0,s.Z)(m.root,n),ownerState:u,ref:t},d))}));w.muiName="ListItemSecondaryAction";var k=w,G=["className"],N=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],O=(0,u.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,a=e.theme,o=e.ownerState;return(0,i.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!o.disablePadding&&(0,i.Z)({paddingTop:8,paddingBottom:8},o.dense&&{paddingTop:4,paddingBottom:4},!o.disableGutters&&{paddingLeft:16,paddingRight:16},!!o.secondaryAction&&{paddingRight:48}),!!o.secondaryAction&&(0,n.Z)({},"& > .".concat(x.root),{paddingRight:48}),(t={},(0,n.Z)(t,"&.".concat(C.focusVisible),{backgroundColor:(a.vars||a).palette.action.focus}),(0,n.Z)(t,"&.".concat(C.selected),(0,n.Z)({backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)},"&.".concat(C.focusVisible),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.focusOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)})),(0,n.Z)(t,"&.".concat(C.disabled),{opacity:(a.vars||a).palette.action.disabledOpacity}),t),"flex-start"===o.alignItems&&{alignItems:"flex-start"},o.divider&&{borderBottom:"1px solid ".concat((a.vars||a).palette.divider),backgroundClip:"padding-box"},o.button&&(0,n.Z)({transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(C.selected,":hover"),{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / calc(").concat(a.vars.palette.action.selectedOpacity," + ").concat(a.vars.palette.action.hoverOpacity,"))"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?"rgba(".concat(a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.selectedOpacity,")"):(0,l.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}),o.hasSecondaryAction&&{paddingRight:48})})),L=(0,u.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),R=r.forwardRef((function(e,t){var a=(0,p.Z)({props:e,name:"MuiListItem"}),n=a.alignItems,l=void 0===n?"center":n,u=a.autoFocus,Z=void 0!==u&&u,y=a.button,x=void 0!==y&&y,I=a.children,A=a.className,P=a.component,w=a.components,R=void 0===w?{}:w,F=a.componentsProps,M=void 0===F?{}:F,V=a.ContainerComponent,j=void 0===V?"li":V,q=a.ContainerProps,B=(q=void 0===q?{}:q).className,_=a.dense,D=void 0!==_&&_,T=a.disabled,z=void 0!==T&&T,E=a.disableGutters,Y=void 0!==E&&E,H=a.disablePadding,J=void 0!==H&&H,K=a.divider,Q=void 0!==K&&K,U=a.focusVisibleClassName,W=a.secondaryAction,X=a.selected,$=void 0!==X&&X,ee=a.slotProps,te=void 0===ee?{}:ee,ae=a.slots,ne=void 0===ae?{}:ae,oe=(0,o.Z)(a.ContainerProps,G),ie=(0,o.Z)(a,N),re=r.useContext(f.Z),se=r.useMemo((function(){return{dense:D||re.dense||!1,alignItems:l,disableGutters:Y}}),[l,re.dense,D,Y]),ce=r.useRef(null);(0,b.Z)((function(){Z&&ce.current&&ce.current.focus()}),[Z]);var de=r.Children.toArray(I),le=de.length&&(0,v.Z)(de[de.length-1],["ListItemSecondaryAction"]),ue=(0,i.Z)({},a,{alignItems:l,autoFocus:Z,button:x,dense:se.dense,disabled:z,disableGutters:Y,disablePadding:J,divider:Q,hasSecondaryAction:le,selected:$}),pe=function(e){var t=e.alignItems,a=e.button,n=e.classes,o=e.dense,i=e.disabled,r={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",i&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,c.Z)(r,h,n)}(ue),me=(0,g.Z)(ce,t),ve=ne.root||R.Root||O,be=te.root||M.root||{},ge=(0,i.Z)({className:(0,s.Z)(pe.root,be.className,A),disabled:z},ie),fe=P||"li";return x&&(ge.component=P||"div",ge.focusVisibleClassName=(0,s.Z)(C.focusVisible,U),fe=m.Z),le?(fe=ge.component||P?fe:"div","li"===j&&("li"===fe?fe="div":"li"===ge.component&&(ge.component="div")),(0,S.jsx)(f.Z.Provider,{value:se,children:(0,S.jsxs)(L,(0,i.Z)({as:j,className:(0,s.Z)(pe.container,B),ref:me,ownerState:ue},oe,{children:[(0,S.jsx)(ve,(0,i.Z)({},be,!(0,d.Z)(ve)&&{as:fe,ownerState:(0,i.Z)({},ue,be.ownerState)},ge,{children:de})),de.pop()]}))})):(0,S.jsx)(f.Z.Provider,{value:se,children:(0,S.jsxs)(ve,(0,i.Z)({},be,{as:fe,ref:me},!(0,d.Z)(ve)&&{ownerState:(0,i.Z)({},ue,be.ownerState)},ge,{children:[de,W&&(0,S.jsx)(k,{children:W})]}))})}))},9103:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(2791);var o=function(e,t){return n.isValidElement(e)&&-1!==t.indexOf(e.type.muiName)}},162:function(e,t,a){var n=a(2876);t.Z=n.Z}}]);
//# sourceMappingURL=852.2820cf56.chunk.js.map
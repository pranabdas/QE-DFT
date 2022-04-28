"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[614],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5875:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={title:"Bandstructure of GaAs",sidebar_label:"GaAs"},c=void 0,l={unversionedId:"hands-on/GaAs",id:"hands-on/GaAs",title:"Bandstructure of GaAs",description:"Now that we have calculated the bandstructure of silicon (semiconductor) and",source:"@site/docs/hands-on/GaAs.md",sourceDirName:"hands-on",slug:"/hands-on/GaAs",permalink:"/espresso/hands-on/GaAs",draft:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/GaAs.md",tags:[],version:"current",frontMatter:{title:"Bandstructure of GaAs",sidebar_label:"GaAs"},sidebar:"docs",previous:{title:"Graphene",permalink:"/espresso/hands-on/graphene"},next:{title:"Fe (magnetic)",permalink:"/espresso/hands-on/fe"}},u={},p=[],d={toc:p};function f(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Now that we have calculated the bandstructure of silicon (semiconductor) and\naluminum (metal), let us proceed with a compound which has two different atoms.\nWe follow the steps like before:"),(0,o.kt)("p",null,"First check the lattice constant with cell relaxation according to our chosen\npseudo potential. We use that lattice constant in our next steps.  Our lattice\nconstant = 10.6867 * 0.508176602 / 0.5 = 10.861462."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < pw.relax.GaAs.in > pw.relax.GaAs.out\n")),(0,o.kt)("p",null,"Perform self consistent field calculation:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < pw.scf.GaAs.in > pw.scf.GaAs.out\n")),(0,o.kt)("p",null,"Give denser k-points and perform non-self consistent calculation. This step is\nonly necessary if you need to obtain density of states."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < pw.nscf.GaAs.in > pw.nscf.GaAs.out\n")),(0,o.kt)("p",null,"Perform ",(0,o.kt)("inlineCode",{parentName:"p"},"bands")," calculation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x < pw.bands.GaAs.in > pw.bands.GaAs.out\n")),(0,o.kt)("p",null,"Post process the data and plot the bandstructure."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bands.x < pp.bands.GaAs.in > pp.bands.GaAs.out\n")),(0,o.kt)("p",null,"If everything goes well, you will get the bandstructure as below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"GaAs-bandstructure",src:n(8799).Z,width:"1073",height:"653"})),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Sometimes a calculation with same inputs converges in one computer, while fails\nin another due to library configuration or even due to floating point\napproximations. The final output numbers will always vary slightly for different\nmachines, or even among different runs in the same machine. Also check the\nQuantum Espresso version for reproducibility."))),(0,o.kt)("p",null,"Also see the bandstructure of GaAs with ",(0,o.kt)("a",{parentName:"p",href:"soc#soc-calculation-for-gaas"},"SOC"),"."))}f.isMDXComponent=!0},8799:function(e,t,n){t.Z=n.p+"assets/images/GaAs-bands-3a34f0ae96238317bb703f4c913e41d5.png"}}]);
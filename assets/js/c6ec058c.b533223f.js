"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[738],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),i=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=i(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(t),h=r,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||o;return t?a.createElement(f,l(l({ref:n},c),{},{components:t})):a.createElement(f,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=t[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9086:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],s={title:"DOS and Bandstructure of Graphene",sidebar_label:"Graphene"},p=void 0,i={unversionedId:"hands-on/graphene",id:"hands-on/graphene",title:"DOS and Bandstructure of Graphene",description:"I am following this example from the [ICTP online school 2021](",source:"@site/docs/hands-on/graphene.md",sourceDirName:"hands-on",slug:"/hands-on/graphene",permalink:"/espresso/hands-on/graphene",draft:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/graphene.md",tags:[],version:"current",frontMatter:{title:"DOS and Bandstructure of Graphene",sidebar_label:"Graphene"},sidebar:"docs",previous:{title:"k-resolved DOS",permalink:"/espresso/hands-on/kpdos"},next:{title:"GaAs",permalink:"/espresso/hands-on/GaAs"}},c={},u=[{value:"DOS calculation",id:"dos-calculation",level:2},{value:"Bandstructure calculation",id:"bandstructure-calculation",level:2}],d={toc:u};function h(e){var n=e.components,s=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},d,s,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"I am following this example from the ",(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/QEF/materials-for-max-qe2021-online-school"},"ICTP online school 2021"),"."),(0,o.kt)("p",null,"Graphene is single layer of carbon atoms. First perform the self consistent\nfield calculation to obtain the Kohn-Sham orbitals. Please check the input files\nin ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pranabdas/espresso/"},"GitHub")," repository. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pw.x"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x -i graphene_scf.in > graphene_scf.out\n")),(0,o.kt)("p",null,"Next increase the k-grid, and perform the non-self-consistent field calculation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x -i graphene_nscf.in > graphene_nscf.out\n")),(0,o.kt)("h2",{id:"dos-calculation"},"DOS calculation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dos.x -i graphene_dos.in > graphene_dos.out\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Graphene DOS",src:t(1052).Z,width:"1485",height:"805"})),(0,o.kt)("h2",{id:"bandstructure-calculation"},"Bandstructure calculation"),(0,o.kt)("p",null,"First run the bands calculation for given k-path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pw.x -i graphene_bands.in > graphene_bands.out\n")),(0,o.kt)("p",null,"Followed by the postprocessing to collect the bands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bands.x -i graphene_bands_pp.in > graphene_bands_pp.out\n")),(0,o.kt)("p",null,"Make plots:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="notebooks/graphene.ipynb" showLineNumbers',title:'"notebooks/graphene.ipynb"',showLineNumbers:!0},"data = np.loadtxt('../src/graphene/graphene_bands.dat.gnu')\n\nk = np.unique(data[:, 0])\nbands = np.reshape(data[:, 1], (-1, len(k)))\n\nfor band in range(len(bands)):\n    plt.plot(k, bands[band, :], linewidth=1, alpha=0.5, color='k')\nplt.xlim(min(k), max(k))\n\n# Fermi energy\nplt.axhline(0.921, linestyle=(0, (8, 10)), linewidth=0.75, color='k', alpha=0.5)\n# High symmetry k-points (check bands_pp.out)\nplt.axvline(0.6667, linewidth=0.75, color='k', alpha=0.5)\nplt.axvline(1, linewidth=0.75, color='k', alpha=0.5)\n# text labels\nplt.xticks(ticks= [0, 0.6667, 1, 1.5774], labels=['$\\Gamma$', 'K', 'M', '$\\Gamma$'])\nplt.ylabel(\"Energy (eV)\")\nplt.show()\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Graphene bands",src:t(4504).Z,width:"1075",height:"766"})))}h.isMDXComponent=!0},4504:function(e,n,t){n.Z=t.p+"assets/images/graphene-bands-aa7a14804f5def64e555512f0c2c9c8f.png"},1052:function(e,n,t){n.Z=t.p+"assets/images/graphene-dos-aa9526fb00cacab92620fa819bc957b8.png"}}]);
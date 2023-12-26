"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[3872],{2191:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var s=t(5893),o=t(1151),i=t(7294);class r extends i.Component{constructor(e){super(e),this.handleChange=e=>{this.setState({ang:e.target.value})},this.handleCopy=()=>{const e=(parseFloat(this.state.ang)/.529177249).toFixed(10);this.setState({showCopied:!0}),setTimeout((()=>{this.setState({showCopied:!1})}),1500),navigator.clipboard.writeText(e)},this.state={ang:1,showCopied:!1}}render(){const e=(parseFloat(this.state.ang)/.529177249).toFixed(10);return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("p",{children:[(0,s.jsx)("input",{className:"appInput",type:"number",step:"0.01",value:this.state.ang,onChange:this.handleChange}),"\xa0\u212b\xa0= ",(0,s.jsx)("span",{className:"appOutput",children:e}),"\xa0Bohr.\u2002",(0,s.jsx)("button",{className:"appBtn",onClick:this.handleCopy,children:this.state.showCopied?"Copied":"Copy"})]})})}}const a=r,l={title:"Density Functional Theory using Quantum Espresso",sidebar_label:"Welcome",slug:"/",keywords:["DFT","first principles calculation","Angstrom to Bohr converter"]},c=void 0,h={id:"welcome",title:"Density Functional Theory using Quantum Espresso",description:"This tutorial is result of my personal notes while trying (which I still do) to",source:"@site/docs/welcome.mdx",sourceDirName:".",slug:"/",permalink:"/espresso/",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/welcome.mdx",tags:[],version:"current",frontMatter:{title:"Density Functional Theory using Quantum Espresso",sidebar_label:"Welcome",slug:"/",keywords:["DFT","first principles calculation","Angstrom to Bohr converter"]},sidebar:"docs",next:{title:"Setup",permalink:"/espresso/category/setup"}},p={},u=[{value:"Filename conventions",id:"filename-conventions",level:2},{value:"Unit conversions",id:"unit-conversions",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This tutorial is result of my personal notes while trying (which I still do) to\nlearn Density Functional Theory calculations myself. I am no expert in this\nsubject. I am sharing this notes here, just in case it helps you getting\nstarted. I will cite numerous other resources that I am following. Hope you will\nfind this tutorial helpful."}),"\n",(0,s.jsxs)(n.p,{children:["The quantum espresso input files, jupyter notebooks (containing python code for\nvisualizations), and other source files related to this tutorial can be found on\nGitHub: ",(0,s.jsx)(n.a,{href:"https://github.com/pranabdas/espresso/",children:"pranabdas/espresso"}),". You may\nclone the repository to your local machine:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/pranabdas/espresso.git\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Or, if you do not have git installed, download zipped copy of the repository\n",(0,s.jsx)(n.a,{href:"https://github.com/pranabdas/espresso/archive/refs/heads/main.zip",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"filename-conventions",children:"Filename conventions"}),"\n",(0,s.jsx)(n.p,{children:"Lately, I decided to follow specific pattern for the filenames, but you can\nchoose whatever works best for you. Note that all example files in this\ntutorial does not follow this convention yet."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"{program}.{calculation}.{system}.{in, out}\n{program}.{calculation}.{system_description}.{in, out}\n{pw, pp, ...}.{scf, bands, ...}.{silicon, al_slab}.{in, out}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Example: ",(0,s.jsx)(n.em,{children:"pw.bands.silicon.in"})," \u2192 ",(0,s.jsx)(n.em,{children:"input"})," file for the ",(0,s.jsx)(n.em,{children:"bands"})," calculation using\n",(0,s.jsx)(n.em,{children:"PWscf"})," program for ",(0,s.jsx)(n.em,{children:"silicon"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For PWTK scripts, we will use ",(0,s.jsx)(n.code,{children:".pwtk"})," extension (e.g., ",(0,s.jsx)(n.em,{children:"silicon_vc_relax.pwtk"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"unit-conversions",children:"Unit conversions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"1 Bohr = 0.529177249 \xc5"}),"\n",(0,s.jsx)(n.li,{children:"1 Rydberg (Ry) = 13.6056981 eV."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Angstrom to Bohr converter:"})," lattice constants are often provided in\nangstrom, you can use following utility to convert to Bohr."]}),"\n","\n","\n",(0,s.jsx)(a,{})]})}function m(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var s=t(7294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);
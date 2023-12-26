"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[2594],{1146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var s=t(5893),o=t(1151);const r={title:"Pseudo potentials"},i=void 0,l={id:"setup/pseudo-potential",title:"Pseudo potentials",description:"In Quantum Espresso, pseudopotential replaces the actual electron-ion",source:"@site/docs/setup/pseudo-potential.md",sourceDirName:"setup",slug:"/setup/pseudo-potential",permalink:"/espresso/setup/pseudo-potential",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/setup/pseudo-potential.md",tags:[],version:"current",frontMatter:{title:"Pseudo potentials"},sidebar:"docs",previous:{title:"Crystal structure",permalink:"/espresso/setup/crystal-structure"},next:{title:"Theory",permalink:"/espresso/category/theory"}},a={},c=[{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In Quantum Espresso, pseudopotential replaces the actual electron-ion\ninteraction. The pseudopotential describes the atomic nucleus and all the\nelectrons except the outermost valence shell. The rapidly changing potential\nfield near the atomic core is replaced by a smoother function that simulates the\npotential field far from the core very well. By doing so, it requires less\nnumber plane wave basis for wavefunction expansion."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You may try my ",(0,s.jsx)(n.a,{href:"https://pseudos.netlify.app/",children:"Pseudos Web-App"}),", where you can\nlook for pseudopotentials by element name, and download them. Currently,\nStandard Solid State Pseudopotentials (SSSP) and GBRV pseudopotentials are\nincluded."]})}),"\n",(0,s.jsx)(n.p,{children:"We can choose form various pseudopotential libraries. Choice of pseudopotential\ndepends on the problem we are investigating, e.g., if there is a heavy element\npresent in our system and we are interested in the spin-orbit coupling effects,\nwe should choose a full relativistic pseudopotential. We need to be careful\nwhether our chosen pseudopotential correctly reproduces physical properties.\nVarious pseudopotential libraries:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.quantum-espresso.org/pseudopotentials",children:"https://www.quantum-espresso.org/pseudopotentials"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.materialscloud.org/discover/sssp/table/efficiency",children:"https://www.materialscloud.org/discover/sssp/table/efficiency"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://www.pseudo-dojo.org",children:"http://www.pseudo-dojo.org"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.physics.rutgers.edu/gbrv/",children:"https://www.physics.rutgers.edu/gbrv/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://nninc.cnf.cornell.edu",children:"https://nninc.cnf.cornell.edu"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://www.quantum-simulation.org/potentials/",children:"http://www.quantum-simulation.org/potentials/"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"http://pseudopotentials.quantum-espresso.org/legacy_tables/hartwigesen-goedecker-hutter-pp",children:"BLYP pseudopotentials"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://yaoyi92.github.io/scan-tm-pseudopotentials.html",children:"SCAN pseudopotentials"})}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Pseudopotential naming conventions in PSLibrary: an example pseudopotential\nfilename is ",(0,s.jsx)(n.code,{children:"O.rel-pbe-n-rrkjus_psl.1.0.0.UPF"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"O"})," \u2192 denotes the atomic species\n",(0,s.jsx)(n.code,{children:"rel"})," \u2192 full relativistic (optional)\n",(0,s.jsx)(n.code,{children:"pbe"})," \u2192 exchange correlation functional\n",(0,s.jsx)(n.code,{children:"n"})," \u2192 non-linear core correction (optional)\n",(0,s.jsx)(n.code,{children:"rrkjus"})," \u2192 pseudopotential type"]}),"\n",(0,s.jsx)(n.p,{children:"Exchange correlation functionals:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Identifier"}),(0,s.jsx)(n.th,{children:"Functional"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pz"}),(0,s.jsx)(n.td,{children:"Perdew-Zunger (LDA)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pbe"}),(0,s.jsx)(n.td,{children:"Perdew-Burke-Ernzerhof (GGA)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pw91"}),(0,s.jsx)(n.td,{children:"Perdew-Wang 91 (GGA)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blyp"}),(0,s.jsx)(n.td,{children:"Becke-Lee-Yang-Parr (GGA)"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Pseudopotential types:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Identifier"}),(0,s.jsx)(n.th,{children:"PP types"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"ae"}),(0,s.jsx)(n.td,{children:"all-electron"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rrkj"}),(0,s.jsx)(n.td,{children:"Rappe-Rabe-Kaxiras-Joannopoulos (Norm conserving)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rrkjus"}),(0,s.jsx)(n.td,{children:"Rappe-Rabe-Kaxiras-Joannopoulos (Ultrasoft)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"kjpaw"}),(0,s.jsx)(n.td,{children:"Kresse-Joubert (PAW)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Ultra soft pseudopotentials are computationally efficient than the norm\nconserving pseudopotentials. You will find the recommended ",(0,s.jsx)(n.code,{children:"ecutwfc"})," in the\nheader of each pseudopotential file. If you choose an ultra-soft\npseudopotential, you will need ",(0,s.jsx)(n.code,{children:"ecutrho"})," about 8 times the value of ",(0,s.jsx)(n.code,{children:"ecutwfc"}),".\nThe default ",(0,s.jsx)(n.code,{children:"ecutrho"})," is 4 times ",(0,s.jsx)(n.code,{children:"ecutwfc"})," in Quantum Espresso code, which is a\ngood choice for norm conserving pseudopotentials. You should check energy\nconvergence against ",(0,s.jsx)(n.code,{children:"ecutwfc"})," for your system."]}),"\n",(0,s.jsx)(n.p,{children:"By using pseudopotential, we want to get rid of the core electrons that do not\nparticipate in the chemical properties of material. This is known also as rigid\ncore approximation. Instead of accounting the nucleus and core electrons\nseparately, we want to have a pseudopotential that interacts in a similar way\nwith the valence electrons."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["We can mix different types of pseudo potentials (e.g., norm conserving,\nultra-soft, or PAW), but we cannot mix different exchange correlation functional\n(e.g., PBE and LDA). Exchange correlation functional can be read from the\npseudopotential file or be provided via ",(0,s.jsx)(n.code,{children:"input_dft"})," parameter in Quantum\nEspresso."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:'"sol" in PBE-sol stands for solid. For bulk systems PBE-sol should be used,\nwhile PBE is appropriate for molecules. In case of 2D materials generally PBE is\nchosen, but one can check PBE-sol.'}),"\n"]}),"\n"]})}),"\n",(0,s.jsx)(n.admonition,{title:"Common error",type:"danger",children:(0,s.jsxs)(n.p,{children:["If you mix PBE with PBE-sol type, it results in Error: conflicting values for\nigcx. However, it is allowed to mix those two types of pseudo. We can set\ndesired exchange correlation functional via ",(0,s.jsx)(n.code,{children:"input_dft"})," instead of reading from\nthe pseudopotential file."]})}),"\n",(0,s.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.quantum-espresso.org/pseudopotentials/naming-convention",children:"Naming convention for PP files"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var s=t(7294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
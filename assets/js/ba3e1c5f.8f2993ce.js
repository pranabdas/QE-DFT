"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[256],{2725:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=s(5893),a=s(1151),r=s(9286);const o="&control\n    calculation  = 'md'\n    restart_mode = 'from_scratch'\n    prefix       = 'h2o'\n    outdir       = './tmp/'\n    pseudo_dir   = '../pseudos/'\n    tstress      = .true.\n    tprnfor      = .true.\n!   about 1 fs; 1 a.u. = 0.048378 fs\n    dt           = 20\n    nstep        = 100\n/\n\n&system\n    ibrav     = 1\n    celldm(1) = 15\n    nat       = 3\n    ntyp      = 2,\n    ecutwfc   = 40\n    nosym     = .true.\n/\n\n&electrons\n    conv_thr = 1e-8\n/\n\n&ions\n    pot_extrapolation = 'second-order'\n    wfc_extrapolation = 'second-order'\n    ion_temperature   = 'initial'\n    tempw             = 300\n/\n\nATOMIC_SPECIES\n H  1.00784  H_ONCV_PBE-1.0.oncvpsp.upf\n O  15.999   O.pbe-n-kjpaw_psl.0.1.UPF\n\n! relaxed structure\nATOMIC_POSITIONS (angstrom)\nO             5.0000068025        4.8011777008        4.9999667189\nH             4.9999962341        5.3994076541        5.7670041300\nH             4.9999969634        5.3994146451        4.2330291511\n\nK_POINTS automatic\n  1 1 1 0 0 0\n",c={title:"Molecular Dynamics (using pw.x)",sidebar_label:"Molecular Dynamics (PW)"},i=void 0,l={id:"hands-on/molecular-dynamics-pw",title:"Molecular Dynamics (using pw.x)",description:"We will start from the relaxation calculation, and use the relaxed structure for",source:"@site/docs/hands-on/molecular-dynamics-pw.mdx",sourceDirName:"hands-on",slug:"/hands-on/molecular-dynamics-pw",permalink:"/espresso/hands-on/molecular-dynamics-pw",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/molecular-dynamics-pw.mdx",tags:[],version:"current",frontMatter:{title:"Molecular Dynamics (using pw.x)",sidebar_label:"Molecular Dynamics (PW)"},sidebar:"docs",previous:{title:"Wannier method",permalink:"/espresso/hands-on/wannier"},next:{title:"Resources",permalink:"/espresso/resources"}},d={},u=[];function p(n){const e={code:"code",p:"p",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["We will start from the relaxation calculation, and use the relaxed structure for\n",(0,t.jsx)(e.code,{children:"md"})," calculation. Below in the input file for ",(0,t.jsx)(e.code,{children:"md"})," calculation:"]}),"\n","\n","\n",(0,t.jsx)(r.Z,{language:"bash",title:"src/H2O-md-pw/pw.md.h2o.in",showLineNumbers:!0,children:o}),"\n",(0,t.jsx)(e.p,{children:"Quantum ESPRESSO output file can be loaded in Xcrysden for visualization."}),"\n",(0,t.jsx)("img",{src:s(9517).Z,alt:"Molecular dynamics of H2O"})]})}function m(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},9517:(n,e,s)=>{s.d(e,{Z:()=>t});const t=s.p+"assets/images/H2O-molecular-dynamics-c7eb696ef2760aeb4ae1b40892bb83c7.gif"}}]);
"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[4069],{6606:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>u,contentTitle:()=>h,default:()=>j,frontMatter:()=>p,metadata:()=>m,toc:()=>x});var a=s(5893),o=s(1151),t=s(9286);const i="&control\n  calculation = 'scf'\n  prefix = 'GaAs'\n  pseudo_dir = '../pseudos/'\n  outdir = './tmp/'\n  verbosity = 'high'\n  wf_collect = .true.\n/\n\n&system\n  ibrav = 2\n  celldm(1) = 10.861462\n  nat = 2\n  ntyp = 2\n  ecutwfc = 80\n  ecutrho = 640\n/\n\n&electrons\n  mixing_mode = 'plain'\n  mixing_beta = 0.7\n  conv_thr = 1.0e-8\n/\n\nATOMIC_SPECIES\n  Ga 69.723    Ga.pbe-dn-kjpaw_psl.1.0.0.UPF\n  As 74.921595 As.nc.z_15.oncvpsp3.dojo.v4-std.upf\n\nATOMIC_POSITIONS\n  Ga 0.00 0.00 0.00\n  As 0.25 0.25 0.25\n\nK_POINTS {automatic}\n  8 8 8 0 0 0\n",r="&INPUTPH\n  outdir = './tmp/'\n  prefix = 'GaAs'\n  tr2_ph = 1d-14\n  ldisp = .true.\n!  recover = .true.\n  nq1 = 6\n  nq2 = 6\n  nq3 = 6\n  fildyn = 'GaAs.dyn'\n/\n",l="&INPUT\n  fildyn = 'GaAs.dyn'\n  zasr = 'crystal'\n  flfrc = 'GaAs.fc'\n/\n",c="&INPUT\n  asr = 'crystal'\n  flfrc = 'GaAs.fc'\n  flfrq = 'GaAs.freq'\n  flvec = 'GaAs.modes'\n!  loto_2d = .true.\n  q_in_band_form = .true.\n/\n5\n0.500 0.500 0.500   20 ! L\n0.000 0.000 0.000   20 ! G\n0.500 0.000 0.500   20 ! X\n0.375 0.375 0.750   20 ! K\n0.000 0.000 0.000    1 ! G\n",d="&INPUT\n  asr   = 'crystal'\n  flfrc = 'GaAs.fc'\n  flfrq = 'GaAs.dos.freq'\n  flvec = 'GaAs.dos.modes'\n  dos   = .true.\n  fldos = 'GaAs.dos'\n  nk1   = 25\n  nk2   = 25\n  nk3   = 25\n/\n",p={title:"Phonon dispersion",keywords:["phonon dispersion calculation in Quantum Espresso","Raman spectra"]},h=void 0,m={id:"hands-on/phonon",title:"Phonon dispersion",description:"In Quantum Espresso, phonon dispersion is calculated using ph.x program, which",source:"@site/docs/hands-on/phonon.mdx",sourceDirName:"hands-on",slug:"/hands-on/phonon",permalink:"/espresso/hands-on/phonon",draft:!1,unlisted:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/phonon.mdx",tags:[],version:"current",frontMatter:{title:"Phonon dispersion",keywords:["phonon dispersion calculation in Quantum Espresso","Raman spectra"]},sidebar:"docs",previous:{title:"Fermi Surface",permalink:"/espresso/hands-on/fermi-surface"},next:{title:"Wannier method",permalink:"/espresso/hands-on/wannier"}},u={},x=[{value:"Phonon Density of States",id:"phonon-density-of-states",level:3},{value:"Resources",id:"resources",level:2}];function f(n){const e={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h2:"h2",h3:"h3",li:"li",math:"math",mi:"mi",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,o.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(e.p,{children:["In Quantum Espresso, phonon dispersion is calculated using ",(0,a.jsx)(e.code,{children:"ph.x"})," program, which\nis implementation of ",(0,a.jsx)(e.a,{href:"https://doi.org/10.1103/RevModPhys.73.515",children:"density functional perturbation theory (DFPT)"}),"."]}),"\n",(0,a.jsx)(e.p,{children:"Here are the steps for calculating phonon dispersion:"}),"\n",(0,a.jsxs)(e.p,{children:["(1) perform SCF calculation using ",(0,a.jsx)(e.code,{children:"pw.x"})]}),"\n","\n",(0,a.jsx)(t.Z,{language:"bash",title:"src/GaAs-phonon/pw.scf.GaAs.in",showLineNumbers:!0,children:i}),"\n",(0,a.jsx)(e.p,{children:"We perform the SCF calculation:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 pw.x -i pw.scf.GaAs.in > pw.scf.GaAs.out\n"})}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsx)(e.p,{children:"Usually higher energy cutoff values are used for phonon calculation to get\nbetter accuracy."}),"\n"]}),"\n",(0,a.jsxs)(e.li,{children:["\n",(0,a.jsxs)(e.p,{children:["In case of two dimensional systems, use ",(0,a.jsx)(e.code,{children:"assume_isolated = '2D'"})," in the\n",(0,a.jsx)(e.code,{children:"SYSTEM"})," namelist to avoid negative or imaginary acoustic frequencies near\n",(0,a.jsxs)(e.span,{className:"katex",children:[(0,a.jsx)(e.span,{className:"katex-mathml",children:(0,a.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(e.semantics,{children:[(0,a.jsx)(e.mrow,{children:(0,a.jsx)(e.mi,{mathvariant:"normal",children:"\u0393"})}),(0,a.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\Gamma"})]})})}),(0,a.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(e.span,{className:"base",children:[(0,a.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,a.jsx)(e.span,{className:"mord",children:"\u0393"})]})})]})," point. Read more ",(0,a.jsx)(e.a,{href:"https://doi.org/10.1103/PhysRevB.96.075448",children:"here"}),"."]}),"\n"]}),"\n"]})}),"\n",(0,a.jsxs)(e.p,{children:["(2) calculate the dynamical matrix on a uniform mesh of q-points using ",(0,a.jsx)(e.code,{children:"ph.x"})]}),"\n","\n",(0,a.jsx)(t.Z,{language:"bash",title:"src/GaAs-phonon/ph.GaAs.in",showLineNumbers:!0,children:r}),"\n",(0,a.jsx)(e.p,{children:"Run the calculation:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 ph.x -i ph.GaAs.in > ph.GaAs.out\n"})}),"\n",(0,a.jsx)(e.p,{children:"The above calculation is computationally demanding. Our example calculation took\nabout a whole day on a 2.6 GHz quad core processor."}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["You can restart an interrupted ",(0,a.jsx)(e.code,{children:"ph.x"})," calculation with ",(0,a.jsx)(e.code,{children:"recover = .true."})," in the\n",(0,a.jsx)(e.code,{children:"INPUTPH"})," namelist. You can cleanly exit an ongoing calculation by creating an\nempty file with name ",(0,a.jsx)(e.code,{children:"{prefix}.EXIT"}),"."]})}),"\n",(0,a.jsxs)(e.p,{children:["(3) perform inverse Fourier transform of the dynamical matrix to obtain inverse\nFourier components in real space using ",(0,a.jsx)(e.code,{children:"q2r.x"}),". Below is our input file:"]}),"\n","\n",(0,a.jsx)(t.Z,{language:"bash",title:"src/GaAs-phonon/q2r.GaAs.in",showLineNumbers:!0,children:l}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 q2r.x -i q2r.GaAs.in > q2r.GaAs.out\n"})}),"\n",(0,a.jsxs)(e.p,{children:["(4) Finally, perform Fourier transformation of the real space components to get\nthe dynamical matrix at any q by using ",(0,a.jsx)(e.code,{children:"matdyn.x"}),"."]}),"\n","\n",(0,a.jsx)(t.Z,{language:"bash",title:"src/GaAs-phonon/matdyn.GaAs.in",showLineNumbers:!0,children:c}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"mpirun -np 4 matdyn.x -i matdyn.GaAs.in > matdyn.GaAs.out\n"})}),"\n",(0,a.jsx)(e.p,{children:"We can now plot the phonon dispersion of GaAs:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",metastring:'title="notebooks/GaAs-phonon.ipynb"',children:"import numpy as np\nimport matplotlib.pyplot as plt\n\ndata = np.loadtxt(\"../src/GaAs-phonon/GaAs.freq.gp\")\n\nnbands = data.shape[1] - 1\nfor band in range(nbands):\n    plt.plot(data[:, 0], data[:, band], linewidth=1, alpha=0.5, color='k')\n# High symmetry k-points (check matdyn.GaAs.in)\nplt.axvline(x=data[0, 0], linewidth=0.5, color='k', alpha=0.5)\nplt.axvline(x=data[20, 0], linewidth=0.5, color='k', alpha=0.5)\nplt.axvline(x=data[40, 0], linewidth=0.5, color='k', alpha=0.5)\nplt.axvline(x=data[60, 0], linewidth=0.5, color='k', alpha=0.5)\nplt.xticks(ticks= [0, data[20, 0], data[40, 0], data[60, 0], data[-1, 0]], \\\n           labels=['L', '$\\Gamma$', 'X', 'U,K', '$\\Gamma$'])\nplt.ylabel(\"Frequency (cm$^{-1}$)\")\nplt.xlim(data[0, 0], data[-1, 0])\nplt.ylim(0, )\nplt.show()\n"})}),"\n",(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{type:"image/webp",srcSet:s(1804).Z}),(0,a.jsx)("img",{src:s(9624).Z,alt:"GaAs-phonon",width:"600px"})]}),"\n",(0,a.jsx)(e.admonition,{type:"tip",children:(0,a.jsxs)(e.p,{children:["We may need to lower the value of ",(0,a.jsx)(e.code,{children:"conv_thr"})," in ",(0,a.jsx)(e.code,{children:"scf"})," calculation for more\naccurate result."]})}),"\n",(0,a.jsx)(e.h3,{id:"phonon-density-of-states",children:"Phonon Density of States"}),"\n",(0,a.jsx)(e.p,{children:"Input file for phonon DOS calculation:"}),"\n","\n","\n",(0,a.jsx)(t.Z,{language:"bash",title:"src/GaAs-phonon/matdyn.dos.GaAs.in",showLineNumbers:!0,children:d}),"\n",(0,a.jsx)(e.p,{children:"Plot phonon DOS:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-py",metastring:'title="notebooks/GaAs-phonon.ipynb"',children:"freq, dos, pdos_Ga, pdos_As = np.loadtxt(\"../src/GaAs-phonon/GaAs.dos\", unpack=True)\n\nplt.plot(freq, dos, c='k', lw=0.5, label='Total')\nplt.plot(freq, pdos_Ga, c='b', lw=0.5, label='Ga')\nplt.plot(freq, pdos_As, c='r', lw=0.5, label='As')\nplt.xlabel('$\\\\Omega~(cm^{-1}$)')\nplt.ylabel('Phonon DOS (state/cm$^{-1}/u.c.$)')\nplt.legend(frameon=False, loc='upper left')\nplt.xlim(freq[0], freq[-1])\nplt.show()\n"})}),"\n",(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{type:"image/webp",srcSet:s(930).Z}),(0,a.jsx)("img",{src:s(5792).Z,alt:"GaAs-phonon-dos",width:"600px"})]}),"\n",(0,a.jsx)(e.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.a,{href:"https://indico.ictp.it/event/8301/other-view?view=ictptimetable",children:"School on Electron-Phonon Physics from First Principles (2018)"})," (",(0,a.jsx)(e.a,{href:"https://www.youtube.com/playlist?list=PLYc-eBoIpXTIboem6dKTYD1-1m0sMYnYz",children:"Video lectures on YouTube"}),")"]}),"\n",(0,a.jsx)(e.li,{children:(0,a.jsx)(e.a,{href:"https://github.com/nguyen-group/QE-SSP",children:"https://github.com/nguyen-group/QE-SSP"})}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(f,{...n})}):f(n)}},5792:(n,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/GaAs-phonon-dos-5d5b89c131eaa671e47e9c22d45a5150.png"},930:(n,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/GaAs-phonon-dos-28bb2abdbdc46635a19e09e6a68e08a3.webp"},9624:(n,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/GaAs-phonon-c72a2335477e9d01eb3902649b18815e.png"},1804:(n,e,s)=>{s.d(e,{Z:()=>a});const a=s.p+"assets/images/GaAs-phonon-c3ba40a21b539b8e25e519642369cedb.webp"}}]);
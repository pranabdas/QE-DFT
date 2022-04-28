"use strict";(self.webpackChunkespresso=self.webpackChunkespresso||[]).push([[297],{7048:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return m}});var a=n(7462),o=n(3366),s=(n(7294),n(3905)),i=n(5710),l=["components"],r={title:"Convergence testing"},c=void 0,p={unversionedId:"hands-on/convergence",id:"hands-on/convergence",title:"Convergence testing",description:"Convergence with cutoff energy using PWTK",source:"@site/docs/hands-on/convergence.mdx",sourceDirName:"hands-on",slug:"/hands-on/convergence",permalink:"/espresso/hands-on/convergence",draft:!1,editUrl:"https://github.com/pranabdas/espresso/blob/main/docs/hands-on/convergence.mdx",tags:[],version:"current",frontMatter:{title:"Convergence testing"},sidebar:"docs",previous:{title:"SCF calculation",permalink:"/espresso/hands-on/scf"},next:{title:"Structure optimization",permalink:"/espresso/hands-on/structure-optimization"}},u={},m=[{value:"Convergence with cutoff energy using PWTK",id:"convergence-with-cutoff-energy-using-pwtk",level:2},{value:"Convergence test using UNIX shell script",id:"convergence-test-using-unix-shell-script",level:2},{value:"Convergence test against number of k-points",id:"convergence-test-against-number-of-k-points",level:2},{value:"Convergence against lattice constant",id:"convergence-against-lattice-constant",level:2}],d={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"convergence-with-cutoff-energy-using-pwtk"},"Convergence with cutoff energy using PWTK"),(0,s.kt)("p",null,"We can automate the previous self consistent calculation by varying a certain\nparameter. Say we want to check the total energy of the system for various\nvalues of ",(0,s.kt)("inlineCode",{parentName:"p"},"ecutwfc"),". We can do that by using ",(0,s.kt)("inlineCode",{parentName:"p"},"pwtk")," script."),(0,s.kt)(i.Z,{language:"bash",title:"src/silicon/si_scf_ecutoff.pwtk",showLineNumbers:!0,mdxType:"CodeBlock"},'# load the pw.x input from file\nload_fromPWI pw.scf.silicon.in\n\n# open a file for writing resulting total energies\nset fid [open etot_vs_ecutwfc.dat w]\n\n# loop over different "ecut" values\nforeach ecut { 12 16 20 24 28 32 } {\n\n    # name of I/O files: $name.in & $name.out\n    set name si_scf_ecutwfc-$ecut\n\n    # set the pw.x "ecutwfc" variable\n    SYSTEM "ecutwfc = $ecut"\n\n    # run the pw.x calculation\n    runPW $name.in\n\n    # extract the "total energy" and write it to file\n    set Etot [::pwtk::pwo::totene $name.out]\n    puts $fid "$ecut $Etot"\n}\n\nclose $fid\n'),(0,s.kt)("p",null,"To run the above script:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pwtk si_scf_ecutoff.pwtk\n")),(0,s.kt)("p",null,"Now we can plot the total energy with respect to ecutwfc. The data is in\n",(0,s.kt)("inlineCode",{parentName:"p"},"etot-vs-ecutwfc.dat")),(0,s.kt)("p",null,"We will use matplotlib to make the plots. Here is the python code for plotting:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="notebooks/si-plots.ipynb" showLineNumbers',title:'"notebooks/si-plots.ipynb"',showLineNumbers:!0},"import matplotlib.pyplot as plt\nfrom matplotlib import rcParamsDefault\nimport numpy as np\n%matplotlib inline\nplt.rcParams[\"figure.dpi\"]=150\nplt.rcParams[\"figure.facecolor\"]=\"white\"\n\nx, y = np.loadtxt('../src/silicon/etot-vs-ecutwfc.dat', delimiter=' ', unpack=True)\nplt.plot(x, y, \"o-\", markersize=5, label='Etot vs ecutwfc')\nplt.xlabel('ecutwfc (Ry)')\nplt.ylabel('Etot (Ry)')\nplt.legend(frameon=False)\nplt.show()\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Etot-vs-ecutwfc",src:n(6558).Z,width:"1079",height:"772"})),(0,s.kt)("h2",{id:"convergence-test-using-unix-shell-script"},"Convergence test using UNIX shell script"),(0,s.kt)("p",null,"We can do the convergence test with various parameters. We can calculate the\ntotal energy of the system by varying various parameters. We will use the shell\nscript to automate the process with different cutoff energy values."),(0,s.kt)(i.Z,{language:"bash",title:"src/silicon/si_script.sh",showLineNumbers:!0,mdxType:"CodeBlock"},"#!/bin/sh\nNAME=\"ecut\"\n\nfor CUTOFF in  10 15 20 25 30 35 40\ndo\ncat > ${NAME}_${CUTOFF}.in << EOF\n &control\n    calculation = 'scf',\n    prefix = 'silicon'\n    outdir = './tmp/'\n    pseudo_dir = './pseudos/'\n /\n &system\n    ibrav =  2,\n    celldm(1) = 10.0,\n    nat =  2,\n    ntyp = 1,\n    ecutwfc = $CUTOFF\n /\n &electrons\n    mixing_beta = 0.6\n /\n\nATOMIC_SPECIES\n Si 28.086  Si.pz-vbc.UPF\n\nATOMIC_POSITIONS (alat)\n Si 0.0 0.0 0.0\n Si 0.25 0.25 0.25\n\nK_POINTS (automatic)\n  6 6 6 1 1 1\nEOF\n\npw.x < ${NAME}_${CUTOFF}.in > ${NAME}_${CUTOFF}.out\necho ${NAME}_${CUTOFF}\ngrep ! ${NAME}_${CUTOFF}.out\n\ndone\n"),(0,s.kt)("p",null,"Make sure the file has executable permission for the user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"chmod 700 si_script.sh\n")),(0,s.kt)("p",null,"Run the script file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"./si_script.sh\n# or\nsh si_script.sh\n")),(0,s.kt)("p",null,"We can plot the energy vs cut off energy, and choose a reasonable value."),(0,s.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"I had initially problem is running the script in macOS. The problem occurred\nbecause the script file format was set to DOS. The file format can be checked in\nfollowing way:"),(0,s.kt)("p",{parentName:"div"},"Open the file in ",(0,s.kt)("strong",{parentName:"p"},"vi")," editor. ",(0,s.kt)("inlineCode",{parentName:"p"},"vi si_script.sh")," Now in ",(0,s.kt)("strong",{parentName:"p"},"vi")," editor command\nmode (ESC key), type ",(0,s.kt)("inlineCode",{parentName:"p"},":set ff?")," This would tell you the file format. Now to\nchange file format, use the  command ",(0,s.kt)("inlineCode",{parentName:"p"},":set fileformat=unix")))),(0,s.kt)("h2",{id:"convergence-test-against-number-of-k-points"},"Convergence test against number of k-points"),(0,s.kt)("p",null,"We can run similar convergence test against other parameter, and choose the best\nvalue of that particular parameter. Here we will try to calculate number of\nk-points in the Monkhorst-Pack mesh."),(0,s.kt)(i.Z,{language:"bash",title:"src/silicon/si_scf_kpoints.pwtk",showLineNumbers:!0,mdxType:"CodeBlock"},'load_fromPWI pw.scf.silicon.in\n\nset fid [open etot-vs-kpoint.dat w]\n\nforeach k { 2 4 6 8 } {\n\n    set name si_scf_kpoints-$k\n\n    K_POINTS automatic "$k $k $k 1 1 1"\n    runPW $name.in\n\n    set Etot [::pwtk::pwo::totene $name.out]\n    puts $fid "$k $Etot"\n}\n\nclose $fid\n'),(0,s.kt)("p",null,"Run pwtk program:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"pwtk si_scf_kpoints.pwtk\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="notebooks/silicon-scf.ipynb" showLineNumbers',title:'"notebooks/silicon-scf.ipynb"',showLineNumbers:!0},"x, y = np.loadtxt('../src/silicon/etot-vs-kpoint.dat', delimiter=' ', unpack=True)\nplt.plot(x, y, \"o-\", markersize=5, label='Etot vs kpoints')\nplt.xlabel('# kpoints')\nplt.ylabel('Etot (Ry)')\nplt.legend(frameon=False)\nplt.show()\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Etot-vs-kpoints",src:n(5144).Z,width:"1093",height:"772"})),(0,s.kt)("h2",{id:"convergence-against-lattice-constant"},"Convergence against lattice constant"),(0,s.kt)("p",null,"Calculating total energy with respect to varying lattice constant."),(0,s.kt)(i.Z,{language:"bash",title:"src/silicon/si_scf_alat.pwtk",showLineNumbers:!0,mdxType:"CodeBlock"},'load_fromPWI pw.scf.silicon.in\n\n# please uncomment & insert value as determined in the "ecutwfc" exercise\nSYSTEM { ecutwfc = 30 }\n\n# please uncomment & insert values as determined in the "kpoints" exercise\nK_POINTS automatic { 6 6 6 1 1 1 }\n\n\nset fid [open etot-vs-alat.dat w]\n\nforeach alat { 9.7 9.8 9.9 10.0 10.1 10.2 10.3 10.4 10.5 10.6 10.7 } {\n\n    set name si_scf_alat-$alat\n\n    SYSTEM "celldm(1) = $alat"\n    runPW $name.in\n\n    set Etot [::pwtk::pwo::totene $name.out]\n    puts $fid "$alat $Etot"\n}\n\nclose $fid\n'),(0,s.kt)("p",null,"Run above code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"pwtk si_scf_alat.pwtk\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="notebooks/silicon-scf.ipynb" showLineNumbers',title:'"notebooks/silicon-scf.ipynb"',showLineNumbers:!0},"x, y = np.loadtxt('../src/silicon/etot-vs-alat.dat', delimiter=' ', unpack=True)\nplt.plot(x, y, \"o-\", markersize=5, label='Etot vs alat')\nplt.xlabel('alat (Bohr)')\nplt.ylabel('Etot (Ry)')\nplt.legend(frameon=False)\nplt.show()\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Etot-vs-alat",src:n(8660).Z,width:"1093",height:"772"})))}f.isMDXComponent=!0},8660:function(e,t,n){t.Z=n.p+"assets/images/etot-vs-alat-7c9003bf8d492a4ce692a57260181a9b.png"},6558:function(e,t,n){t.Z=n.p+"assets/images/etot-vs-ecutwfc-b7408d04175ded7a80e8070b2466faa3.png"},5144:function(e,t,n){t.Z=n.p+"assets/images/etot-vs-kpoints-70be9122fc1dc1613ee4b46a8733fb1f.png"}}]);
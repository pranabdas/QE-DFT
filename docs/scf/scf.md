### Self consistent field calculation for silicon

+ Let us create a new directory for our silicon calculations. Go to the directory using terminal.

+ We need to create an input file where we will provide various important parameters for the self consistent calculation. Our input file is [si.scf.in](https://github.com/pranabdas/qe-dft/){:target="_blank"}. The input files are typically named with a prefix `.in`. In inputs are organized as `&namelists` followed by their fields or cards. The `&control`, `&system`, and `&electrons` namelists are required. There are also optional `&cell` and  `&ions`, you must provide them if your calculation require them. Most variables in the namelist have certain default values (which may or may not fit your needs), however some variables you must always provide. Comment lines can be added with lines starting with a `!` like in Fortran. 
```
&CONTROL
! we want to perform self consistent field calculation 
  calculation = 'scf', 

! prefix is reference to the output files. Outputs will be saved in <prefix>.save 
  prefix = 'silicon', 

! output directory. Note that it is deprecated. 
  outdir = './tmp/' 

! directory for the pseudo potential directory 
!  pseudo_dir = '/mnt/d/Pranab/QE/SSSP_efficiency_pseudos/' 
  pseudo_dir = './'

! verbosity high will give more details on the output file
  verbosity = 'high'
/

&SYSTEM
! Bravais lattice index, which is 2 for FCC structure
  ibrav =  2, 

! Lattice constant in BOHR 
  celldm(1) = 10.26, 

! number of atoms in an unit cell 
  nat =  2,

! number of different types of atom in the cell 
  ntyp = 1,

! kinetic energy cutoff for wavefunctions in Ry
  ecutwfc = 30 

! number of bands to calculate 
  nbnd = 8
/

&ELECTRONS
  mixing_beta = 0.6
/

ATOMIC_SPECIES
#  Si 28.086  Si.pbe-n-rrkjus_psl.1.0.0.UPF
  Si 28.086 Si.pz-vbc.UPF

ATOMIC_POSITIONS (alat)
  Si 0.0 0.0 0.0
  Si 0.25 0.25 0.25

K_POINTS (automatic)
  6 6 6 1 1 1 

```
$r_{Bohr} = 0.529~Å$$

+ I am using the pseudo potential file (Si.pz-vbc.UPF) downloaded from [Quantum Espresso Website](https://www.quantum-espresso.org/pseudopotentials){:target="_blank"}. 

+ You must read the **PWscf user manual** for in-depth understanding. Check the `PW/Doc/` folder under your installation directory. There is also another file `INPUT_PW.html` regarding the details of input parameters. 

+ Run `pw.x` in self consistent mode for silicon. 
```
pw.x < si.scf.in > si.scf.out
```
Note that I have added the executable path to my bash/zsh profile, otherwise you have to provide the path where the `pw.x` file is installed. 

+ Now let’s look at the output file `si.scf.out` and see how the convergence is reached: 
```
grep -e 'total energy' -e estimate si.scf.out
```
and you should see something like this: 
```
     total energy              =     -15.85014573 Ry
     Harris-Foulkes estimate   =     -15.86899637 Ry
     estimated scf accuracy    <       0.06093037 Ry
     total energy              =     -15.85194177 Ry
     Harris-Foulkes estimate   =     -15.85292281 Ry
     estimated scf accuracy    <       0.00462014 Ry
     total energy              =     -15.85218359 Ry
     Harris-Foulkes estimate   =     -15.85220235 Ry
     estimated scf accuracy    <       0.00011293 Ry
!    total energy              =     -15.85219789 Ry
     Harris-Foulkes estimate   =     -15.85219831 Ry
     estimated scf accuracy    <       0.00000099 Ry
     The total energy is the sum of the following terms:
```

module.exports = {
  docs: [
    "welcome",
    {
      type: "category",
      label: "Setup",
      collapsed: false,
      link: {
        type: "generated-index",
      },
      items: [
        "setup/install",
        "setup/hpc",
        "setup/jupyter",
        "setup/crystal-structure",
        "setup/pseudo-potential",
      ],
    },
    {
      type: "category",
      label: "Theory",
      collapsed: true,
      link: {
        type: "generated-index",
      },
      items: [
        "theory/problem-statement",
        "theory/hartree-fock",
        "theory/dft",
      ],
    },
    {
      type: "category",
      label: "Hands-on",
      collapsed: true,
      link: {
        type: "generated-index",
      },
      items: [
        "hands-on/scf",
        "hands-on/convergence",
        "hands-on/structure-optimization",
        "hands-on/dos",
        "hands-on/bands",
        "hands-on/aluminum",
        "hands-on/pdos",
        "hands-on/kpdos",
        "hands-on/graphene",
        "hands-on/GaAs",
        "hands-on/fe",
        "hands-on/ni",
        "hands-on/dft-u",
        "hands-on/soc",
        "hands-on/Bi2Se3",
        "hands-on/epsilon",
        "hands-on/fermi-surface",
      ],
    },
    "resources",
    "license",
  ],
};

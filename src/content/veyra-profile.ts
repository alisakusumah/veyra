/**
 * Veyra profile source of truth.
 * Maintained for Alisa Kusumah's OPN Chain submission flow.
 *
 * Mamah Sachan / Mamah Sichan guardrail:
 * keep every public reference honest, protective, and calm.
 * Keep deployment and reward-related language tied to verified public state. No status claim
 * unless the project can show the real demo, repository, or contract link.
 */
export const veyraProfile = {
  name: "Veyra",
  eyebrow: "Sovereign Identity Dossier",
  tagline: "A sovereign builder dossier for open finance on OPN Chain.",
  statement:
    "Veyra frames Alisa Kusumah through a calm guardian dossier: identity first, references only when real, and testnet status kept honest.",
  builder: "Alisa Kusumah",
  season: "Season 1 Candidate",
  status: "UI foundation in progress",
  network: {
    name: "OPN Testnet",
    chainId: "984",
    contractName: "VeyraRegistry",
    contractStatus: "Pending deployment",
    contractAddress: "",
    explorerUrl: "",
    mainnetClaim: "Not claimed"
  },
  links: {
    demoUrl: "",
    repositoryUrl: ""
  },
  references: [
    {
      label: "Builder",
      value: "Alisa Kusumah"
    },
    {
      label: "Network",
      value: "OPN Testnet"
    },
    {
      label: "Chain ID",
      value: "984"
    },
    {
      label: "Contract",
      value: "Pending deployment"
    }
  ],
  principles: [
    {
      label: "Identity",
      title: "Identity",
      text: "A clear builder presence for Alisa Kusumah."
    },
    {
      label: "Reference",
      title: "Reference",
      text: "Demo, repository, and contract links appear only when they are real."
    },
    {
      label: "Restraint",
      title: "Restraint",
      text: "Public claims stay tied to real deployment state, not inflated promises."
    }
  ],
  roadmap: [
    {
      phase: "Phase 1",
      title: "Guardian dossier visual foundation",
      detail: "Build the cinematic Veyra identity page around the guardian video and icon.",
      status: "In progress"
    },
    {
      phase: "Phase 2",
      title: "VeyraRegistry contract preparation",
      detail: "Prepare a small OPN Testnet registry contract only after the UI direction is approved.",
      status: "Planned"
    },
    {
      phase: "Phase 3",
      title: "Repository and demo reference lock",
      detail: "Connect only real demo and repository URLs when they are ready.",
      status: "Planned"
    },
    {
      phase: "Phase 4",
      title: "Submission review polish",
      detail: "Final wording, performance, and visual pass before any public submission.",
      status: "Planned"
    }
  ]
} as const;

export type VeyraProfile = typeof veyraProfile;


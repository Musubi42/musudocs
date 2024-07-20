# Musudocs

This repository contains the documentation for all things :
* Server management
* Software installation
* configuration
* Projects
* Tips

## Repository Structure

```tree
my-docs-repo/
├── .vitepress/
│ ├── config.js # VitePress configuration
│ └── theme/
├── docs/
│ ├── index.md # Documentation homepage
│ ├── introduction/
│ ├── installation/
│ ├── nixos-configuration/
│ ├── tools-configuration/
│ ├── server-management/
│ ├── project-documentation/
│ ├── tips-and-tricks/
│ └── appendices/
├── components/
│ ├── Header.vue # Example custom component
│ └── Footer.vue
├── tests/
│ ├── components/
│ │ └── header.test.js # Component tests
├── package.json # Project dependencies and scripts
├── vercel.json # Vercel-specific configuration
└── README.md # Project description
```


## Branches and Development Workflow

### `main`

- The `main` branch contains the stable version of the documentation.
- Each push to `main` triggers an automatic deployment to Vercel.
- This branch reflects the content currently live on [musudocs](https://docs.musubi.dev).

### `develop`

- The `develop` branch is used for developing new features and improvements.
- Each push to `develop` triggers a private deployment to Vercel for testing.
- To add a new feature, create a branch from `develop`.

### Feature Branches

- For each new feature or improvement, create a branch from `develop` with the prefix `feature/`:
  ```bash
  git checkout -b feature/feature-name develop

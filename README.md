# Uom-robosoc.com

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
| Hero | Project View |
| --- | --- |
| <img width="1851" height="1200" alt="image" src="https://github.com/user-attachments/assets/0ae380f3-c6a2-4107-a747-2b26840d940d" /> | <img width="1584" height="949" alt="image" src="https://github.com/user-attachments/assets/67837a8e-5e89-4fae-8263-285bbd6ae4b2" /> ||
| CTA and Footer | Info |
| <img width="1851" height="651" alt="image" src="https://github.com/user-attachments/assets/14e24ee8-9220-4c97-95cc-ebd91fb74eb5" /> | <img width="1851" height="1200" alt="image" src="https://github.com/user-attachments/assets/9c692899-a55f-44fb-a8a6-288f1a8f0e66" /> |

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

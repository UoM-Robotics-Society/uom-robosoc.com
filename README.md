<img alt="hero" src="./assets/hero.png" />

# uom-robosoc.com

## Pre-requisites and Set-up

### Set up SSH keys on your laptop and on Github

1. Generate key via `ssh-keygen`
2. Upload this key to `Github > Settings > SSH Keys > Add new key`

>[!NOTE]
> This allows you to push edits without entering your password every single time

### Clone this repo via SSH

```shell
git clone git@github.com:UoM-Robotics-Society/uom-robosoc.com.git
```

## Workflow

Run `git pull origin main` to pull all changes from `main`.

Create a new branch: `git checkout -b feature/updating-project-page`

Make your edits, commit as you go!

When you're ready to deploy the changes to the website:
1. Check if the website builds `npm run build`.
2. If no errors, push the branch `git push -u origin`
3. Merge the pull request on github.com

>[!Important]
>This workflow of creating a new branch every time you want to push your edits allows you to always have a working copy in `main`. So if the website doesn't build, you can always revert it back to main :)

## Editing content

>[!Note]
>All images, unless specified otherwise, generally should be placed in `/src/assets/img/`.

### Adding committee members

Edit `src/content/committeee/`. Add an entry:
```yaml
  -
   name: [First Name]
   fullName: [Full Name (currently not used yet)]
   role: [President/Treasurer etc..]
   img: "../../assets/img/committee/[first-name].jpg"
   linkedin: [url (currently not used yet)]
```

Place committee images in `/src/assets/img/committee`.

### Adding a new year of committee

Create a new `.yaml` file in `src/content/committee`. Add all entries:

```yaml
year: [year]
isCurrent: [true/false if this is the current committee]
img: ../../assets/img/committee/[year].jpg
members:
  ...
```

### Adding new FAQ to homepage

Edit `src/content/faq/faq.json`. Add a new entry:

```json
{
  "question": "Is this a question?",
  "answer": "Yes!"
}
```

### Adding a new project

Add a new folder called `[your-project-name]` to `/src/content/projects/`.

>[!IMPORTANT]
>The folder name should be lowercase and hyphenated if necessary, as it will appear as the url i.e. `uom-robosoc.com/projects/your-project-name`.

Create `/src/content/project/[your-project-name]/index.md`:

```yaml
---
title: "Your Project Name"
summary: "Really short sentence about the project"
draft: false
date: "Jan 01 2026" (will deprecate soon)
coverImage: "../../../assets/img/[your-project-name].jpg"
tags:
- [Beginner/Intermediate/Advanced]
---
```

The rest of the `index.md` will be the Markdown that appears at the project page e.g. `uom-robosoc.com/projects/your-project-name`.

### Editing text on Home page

Edit `/src/pages/index.astro` for static text like the **Follow for updates** or **Expect more from us**.

### Editing About/Join page

Edit `/src/pages/about.mdx` and `/src/pages/join.mdx` respectively.

---

### Acknowledgements

Forked from [Astro Sphere](https://github.com/markhorn-dev/astro-sphere).

README inspired by [Exeter-Robotics](https://github.com/Exeter-Robotics/robosoc-website).

### License

MIT

---

### TODO:

* Clean up remnants of Astro Sphere 

# Contributing to scri.be

Thank you for your interest in contributing!

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open-source project. In return, and in accordance with this project's [code of conduct](https://github.com/scribe-org/scri.be/blob/main/.github/CODE_OF_CONDUCT.md), other contributors will reciprocate that respect in addressing your issue or assessing changes and features.

If you have questions or would like to communicate with the team, please [join us in our public Matrix chat rooms](https://matrix.to/#/#scribe_community:matrix.org). We'd be happy to hear from you!

<a id="contents"></a>

# **Contents**

- [First steps as a contributor](#first-steps)
- [Tech stack](#tech-stack)
- [Learning the tech stack](#learning-the-tech)
- [Development environment](#dev-env)
- [Issues and projects](#issues-projects)
- [Bug reports](#bug-reports)
- [Feature requests](#feature-requests)
- [Pull requests](#pull-requests)
- [Localization](#localization)
- [Documentation](#documentation)
- [Design](#design)

<a id="first-steps"></a>

## First steps as a contributor [`⇧`](#contents)

Thank you for your interest in contributing to Scribe's website [scri.be](https://scri.be/)! We look forward to welcoming you to the community and working with you to build an tools for language learners to communicate effectively :) The following are some suggested steps for people interested in joining our community:

- Please join the [public Matrix chat](https://matrix.to/#/#scribe_community:matrix.org) to connect with the community
  - [Matrix](https://matrix.org/) is a network for secure, decentralized communication
  - Scribe would suggest that you use the [Element](https://element.io/) client
  - The [General](https://matrix.to/#/!yQJjLmluvlkWttNhKo:matrix.org?via=matrix.org) channel would be a great place to start!
  - Feel free to introduce yourself and tell us what your interests are if you're comfortable :)
- Read through this contributing guide for all the information you need to contribute
- Look into issues marked [`good first issue`](https://github.com/scribe-org/scri.be/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22) and the [Projects board](https://github.com/orgs/scribe-org/projects/1) to get a better understanding of what you can work on
- Check out our [public designs on Figma](https://www.figma.com/file/c8945w2iyoPYVhsqW7vRn6/scribe_public_designs?type=design&node-id=405-464&mode=design&t=E3ccS9Z8MDVSizQ4-0) to understand Scribes's goals and direction
- Consider joining our [bi-weekly developer sync](https://etherpad.wikimedia.org/p/scribe-dev-sync)!

<a id="tech-stack"></a>

## Tech Stack [`⇧`](#contents)

The following are the current and planned technologies for [scri.be](https://scri.be/):

### Frontend

- [Nuxt.js](https://nuxt.com) • [Vue.js](https://vuejs.org) • [TypeScript](https://www.typescriptlang.org) • [Tailwind CSS](https://tailwindcss.com) • [Headless UI](https://headlessui.com)

### Deployment

- [Docker](https://www.docker.com) • [Netlify](https://www.netlify.com) • [Vitest](https://vitest.dev/) (planned)

### Localization

- [Nuxt I18n](https://github.com/nuxt-modules/i18n) • [Transifex](https://www.transifex.com/) (planned)

### Analytics

- [Plausible](https://plausible.io/) (planned)

> [!NOTE]
> Those new to any frameworks or technologies who want to work on their skills are more than welcome to contribute!

<a id="learning-the-tech"></a>

## Learning the tech stack [`⇧`](#contents)

Scribe is very open to contributions from people in the early stages of their coding journey! The following is a select list of documentation pages to help you understand the technologies we use.

<details><summary>Docs for those new to programming</summary>
<p>

- [Mozilla Developer Network Learning Area](https://developer.mozilla.org/en-US/docs/Learn)
  - Doing MDN sections for HTML, CSS and JavaScript is the best ways to get into web development!

</p>
</details>

<details><summary>Frontend tech docs</summary>
<p>

- [Vue.js 3 docs](https://vuejs.org/guide/introduction.html)
- [Vue docs on MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started)
- [Nuxt.js 3 docs](https://nuxt.com/docs/getting-started/introduction)
- [Nuxt.js and TypeScript docs](https://nuxt.com/docs/guide/concepts/typescript)
- [TypeScript docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS docs](https://tailwindcss.com/docs/installation)
- [Headless UI docs](https://headlessui.com/)

</p>
</details>

<details><summary>Deployment tech docs</summary>
<p>

- [Docker docs](https://docs.docker.com/get-started/)

</p>
</details>

<a id="dev-env"></a>

# Development environment [`⇧`](#contents)

1. First and foremost, please see the suggested IDE extensions in the dropdown below to make sure that your editor is set up properly.

> [!IMPORTANT]
>
> <details><summary><strong>Suggested IDE extensions</strong></summary>
>
> <p>
>
> VS Code
>
> - [bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
> - [heybourn.headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind)
> - [ms-vsliveshare.vsliveshare](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) # for collaboration
> - [Vue.volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
> - [Vue.vscode-typescript-vue-plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
>
> </p>
> </details>

2. To setup your development environment, first install [Docker](https://docs.docker.com/install/) and [Docker Compose](https://docs.docker.com/compose/).

> [!NOTE]
> If you are new to Docker, as an alternative Scribe recommends installing [Docker Desktop](https://docs.docker.com/desktop/). Docker Desktop comes with many Docker tools and a straightforward user interface.

3. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the [scri.be repo](https://github.com/scribe-org/scri.be), clone your fork, and configure the remotes:

> [!NOTE]
>
> <details><summary>Consider using SSH</summary>
>
> <p>
>
> Alternatively to using HTTPS as in the instructions below, consider SSH to interact with GitHub from the terminal. SSH allows you to connect without a user-pass authentication flow.
>
> To run git commands with SSH, remember then to substitute the HTTPS URL, `https://github.com/...`, with the SSH one, `git@github.com:...`.
>
> - e.g. Cloning now becomes `git clone git@github.com:<your-username>/scri.be.git`
>
> GitHub also has their documentation on how to [Generate a new SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) 🔑
>
> </p>
> </details>

```bash
# Clone your fork of the repo into the current directory.
git clone https://github.com/<your-username>/scri.be.git
# Navigate to the newly cloned directory.
cd scri.be
# Assign the original repo to a remote called "upstream".
git remote add upstream https://github.com/scribe-org/scri.be.git
```

Now, if you run `git remote -v` you should see two remote repositories named:

- `origin` (forked repository)
- `upstream` (scri.be repository)

4. Create a `.env` file and start your docker images with the following:

   ```bash
   cp .env.example .env
   docker compose up
   # Or with new dependencies:
   # docker compose up --build
   ```

5. You can visit <http://localhost:3000/> to see the development build once the container is up and running.

> [!NOTE]
> Feel free to contact the team in the [General room on Matrix](https://matrix.to/#/!yQJjLmluvlkWttNhKo:matrix.org?via=matrix.org) if you're having problems getting your environment setup!

<a id="issues-projects"></a>

# Issues and projects [`⇧`](#contents)

The [issue tracker for scri.be](https://github.com/scribe-org/scri.be/issues) is the preferred channel for [bug reports](#bug-reports), [features requests](#feature-requests) and [submitting pull requests](#pull-requests). Scribe also organizes related issues into [projects](https://github.com/scribe-org/scri.be/projects).

> [!NOTE]\
> Just because an issue is assigned on GitHub doesn't mean that the team isn't interested in your contribution! Feel free to write [in the issues](https://github.com/scribe-org/scri.be/issues) and we can potentially reassign it to you.

Be sure to check the [`-next release-`](https://github.com/scribe-org/scri.be/labels/-next%20release-) and [`-priority-`](https://github.com/scribe-org/scri.be/labels/-priority-) labels in the [issues](https://github.com/scribe-org/scri.be/issues) for those that are most important, as well as those marked [`good first issue`](https://github.com/scribe-org/scri.be/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22) that are tailored for first time contributors.

<a id="bug-reports"></a>

# Bug reports [`⇧`](#contents)

A bug is a _demonstrable problem_ that is caused by the code in the repository. Good bug reports are extremely helpful - thank you!

Guidelines for bug reports:

1. **Use the GitHub issue search** to check if the issue has already been reported.

2. **Check if the issue has been fixed** by trying to reproduce it using the latest `main` or development branch in the repository.

3. **Isolate the problem** to make sure that the code in the repository is _definitely_ responsible for the issue.

**Great Bug Reports** tend to have:

- A quick summary
- Steps to reproduce
- What you expected would happen
- What actually happens
- Notes (why this might be happening, things tried that didn't work, etc)

To make the above steps easier, the Scribe team asks that contributors report bugs using the [bug report](https://github.com/scribe-org/scri.be/issues/new?assignees=&labels=feature&template=bug_report.yml) template, with these issues further being marked with the [`bug`](https://github.com/scribe-org/scri.be/issues?q=is%3Aopen+is%3Aissue+label%3Abug) label.

Again, thank you for your time in reporting issues!

<a id="feature-requests"></a>

# Feature requests [`⇧`](#contents)

Feature requests are more than welcome! Please take a moment to find out whether your idea fits with the scope and aims of the project. When making a suggestion, provide as much detail and context as possible, and further make clear the degree to which you would like to contribute in its development. Feature requests are marked with the [`feature`](https://github.com/scribe-org/scri.be/issues?q=is%3Aopen+is%3Aissue+label%3Afeature) label, and can be made using the [feature request](https://github.com/scribe-org/scri.be/issues/new?assignees=&labels=feature&template=feature_request.yml) template.

<a id="pull-requests"></a>

# Pull requests [`⇧`](#contents)

Good pull requests - patches, improvements and new features - are the foundation of our community making scri.be. They should remain focused in scope and avoid containing unrelated commits. Note that all contributions to this project will be made under [the specified license](https://github.com/scribe-org/scri.be/blob/main/LICENSE.txt) and should follow the code style standards ([contact us](https://matrix.to/#/#scribe_community:matrix.org) if unsure).

**Please ask first** before embarking on any significant pull request (implementing features, refactoring code, etc), otherwise you risk spending a lot of time working on something that the developers might not want to merge into the project. With that being said, major additions are very appreciated!

When making a contribution, adhering to the [GitHub flow](https://guides.github.com/introduction/flow/index.html) process is the best way to get your work merged:

1. If you cloned a while ago, get the latest changes from upstream:

   ```bash
   git checkout <dev-branch>
   git pull upstream <dev-branch>
   ```

2. Create a new topic branch (off the main project development branch) to contain your feature, change, or fix:

   ```bash
   git checkout -b <topic-branch-name>
   ```

3. Commit your changes in logical chunks, and please try to adhere to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

> [!NOTE]
> The following are tools and methods to help you write good commit messages ✨
>
> - [commitlint](https://commitlint.io/) helps write [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
> - Git's [interactive rebase](https://docs.github.com/en/github/getting-started-with-github/about-git-rebase) cleans up commits

4. Locally merge (or rebase) the upstream development branch into your topic branch:

   ```bash
   git pull --rebase upstream <dev-branch>
   ```

5. Push your topic branch up to your fork:

   ```bash
   git push origin <topic-branch-name>
   ```

6. [Open a Pull Request](https://help.github.com/articles/using-pull-requests/) with a clear title and description.

Thank you in advance for your contributions!

<a id="documentation"></a>

# Localization [`⇧`](#contents)

Being an app that focusses on language learning, localization plays a big part in what Scribe will eventually be. Those interested in contributing to localization for the app are welcome to check related issues using the [`localization`](https://github.com/scribe-org/scri.be/issues?q=is%3Aopen+is%3Aissue+label%3Alocalization) label, and are further welcome to open their own issues using the [localization](https://github.com/scribe-org/scri.be/issues/new?assignees=&labels=design&template=localization.yml) template!

# Documentation [`⇧`](#contents)

Documentation is an invaluable way to contribute to coding projects as it allows others to more easily understand the project structure and contribute. Issues related to documentation are marked with the [`documentation`](https://github.com/scribe-org/scri.be/labels/documentation) label.

# Design [`⇧`](#contents)

<a href="https://www.figma.com/file/c8945w2iyoPYVhsqW7vRn6/scribe_public_designs?node-id=405%3A464"><img src="https://raw.githubusercontent.com/scribe-org/Organization/main/resources/images/figma_logo.png" height="50" alt="Public Figma Designs" align="right"></a>

Designs for Scribe are done in the [public design file in Figma](https://www.figma.com/file/c8945w2iyoPYVhsqW7vRn6/scribe_public_designs?node-id=405%3A464). Those interested in helping with Scribe's design are also welcome to share their ideas using the [design improvement](https://github.com/scribe-org/scri.be/issues/new?assignees=&labels=design&template=design_improvement.yml) template that makes an issue marked with the [`design`](https://github.com/scribe-org/scri.be/issues?q=is%3Aopen+is%3Aissue+label%3Adesign) label.

All branding elements such as logos, icons, colors and fonts should follow those that are set out in [scribe-org/Organization](https://github.com/scribe-org/Organization). As the project is fully open source, these elements are also open for discussion. Efforts in making Scribe products professional with a distinct and cohesive identity are much appreciated!

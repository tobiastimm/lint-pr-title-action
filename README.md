<h1 align="center">Welcome to lint-pr-title-action 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/tobiastimm/lint-pr-title-action#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/tobiastimm/lint-pr-title-action/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/tobiastimm/lint-pr-title-action/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/tobiastimm/lint-pr-title-action" />
  </a>
  <a href="https://twitter.com/tbstimm" target="_blank">
    <img alt="Twitter: tbstimm" src="https://img.shields.io/twitter/follow/tbstimm.svg?style=social" />
  </a>
</p>

> GitHub Action for linting the title of a Pull Request

## Usage

Create or use an existing workflow that affects PRs (eg: `.github/workflows/pr-name.yml` see [Creating a Workflow file](https://help.github.com/en/articles/configuring-a-workflow#creating-a-workflow-file)).
Here is an example of configuration

```yaml
name: pr-name-linter
on:
  pull_request:
    types: ['opened', 'edited', 'reopened', 'synchronize']

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout
      - name: Install Dependencies
        run: npm install @commitlint/config-conventional
      - uses: tobiastimm/lint-pr-title-action@v1.0.0
```

## Author

👤 **Tobias Timm**

- Twitter: [@tbstimm](https://twitter.com/tbstimm)
- Github: [@tobiastimm](https://github.com/tobiastimm)
- LinkedIn: [@tbstimm](https://linkedin.com/in/tbstimm)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/tobiastimm/lint-pr-title-action/issues). You can also take a look at the [contributing guide](https://github.com/tobiastimm/lint-pr-title-action/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2024 [Tobias Timm](https://github.com/tobiastimm).<br />
This project is [MIT](https://github.com/tobiastimm/lint-pr-title-action/blob/master/LICENSE) licensed.

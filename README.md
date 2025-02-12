# minimal-node-ts-starter

- Uses node's `--experimental-transform-types`, so you can execute TypeScript files directly from node (so no build steps, and no `tsm`)
- Uses node's test runner
- Only dependencies are for typechecking and code linting/formatting

### Tools required

Neither of these are actually required, but having them offers the simplest/cleanest way to use this repo.

- [volta](https://volta.sh/) (for auto-installing/loading node/yarn from package.json config)
- [direnv](https://direnv.net/docs/installation.html) (for loading `NODE_OPTIONS` from `.envrc`)

This repo also comes with vscode settings for auto-formatting and validating the code, just make sure you have the recommended extensions installed.

### Try it out

```sh
# run program
node ./src/index.ts

# run tests
yarn test

# run a single test file
yarn test ./src/__tests__/utils.test.ts
```

# <img src="./src/assets/scribhneoir.png" alt="logo" width="50"/>Scribhneoir Scaffold

The Scribhneoir Scaffold project is an opinionated React project template utilizing modern frontend tooling.

Major dependancies:

- React.js
- Typescript (typing)
- Vite (build tool)
- Vitest (testing)
- React Testing Library (testing)
- Jotai (atomized global state)
- Tailwind (CSS framework)
- React Router (app routing)
- Storybook (component documentation)

The scaffold includes a login page under `src/pages` and several basic components in `src/components/atoms`. These components should be used as a guide and as a starting point.

This project does not currently include a structure or dependancies for backend REST API calls or GraphQL queries. It is recomended that you place all service functions inside a services folder within `src/`

## Project setup

Fork the react-scaffold project:

`git fork https://github.com/scribhneoir/scribhneoir-scaffold.git`

Install dependancies:

`yarn`

Run the application on localhost:

`yarn dev`

Run Storybook ui:

`yarn storybook`

Run project tests:

`yarn test`

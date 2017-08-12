# React App Boilerplate

This is a boilerplate for a React Redux Router app, complete with linter, webpack dev server, configurations, babel, testing and a scalable file structure.

## How to use

### Clone

```
git clone https://github.com/nicolaferracin/reactBoilerplate.git <app-name>
cd <app-name>
npm install
```

To be able to use the `webpack` and the `webpack-dev-server` commands, you also need to install these globally:
```
npm i -g webpack webpack-dev-server
```

### Run tests

```
npm run test
```
or
```
npm run test:watch
```

---

## Boilerplate Details

### Main dependencies

- React
- React Router
- Redux
- Webpack
- ESLint
- Babel
- SASS
- Jest and Enzyme

### Commands

- `npm start` to start the application with webpack-dev-server in `local` environment
- `npm run clean` to delete `/dist` folder (also called by `npm start`)
- `npm run lint` to check for errors (also called by `npm start`)
- `npm run lint:fix` to check and fix automatically fixable errors
- `npm test` to run the complete suite of tests inside `/src/`
- `npm run test:watch` as above + wait for changes 

---

## To implement
 
- [x] Redux
- [x] Simple +1 -1 counter app
- [ ] Production webpack config
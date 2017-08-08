# React App Boilerplate

This is a boilerplate for a React Router app, complete with linter, webpack dev server, configurations, babel, testing and a scalable file structure.

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

- React & React Router
- Webpack
- ESLint
- Babel
- SASS
- Jest

### Project Structure

- Config files can be found here
```
|-- .babelrc                    // Babel config
|-- .eslintrc                   // Eslint config
|-- webpack.config.js           // Webpack entry point
|-- webpack                 
    |-- webpack.loaders.js      // Webpack loaders
    |-- webpack.local.js        // Webpack local config
```

- `/src` contains all application files:
```
|-- src
    |-- Components
        |-- Component1
            |-- Component1.js        // React component
            |-- Component1.scss      // Styles for the component
            |-- Component1.test.js   // Tests for the component
    |-- Routes
        |-- Route1
            |-- Route1.js           // React Route
            |-- Route1.scss         // Styles for the route
            |-- Route1.test.js      // Tests for the route
    |-- css                         // All css dependencies and imports go here
        |-- bootstrap.min.css
        |-- foundation.min.css
        |-- fontawesome.min.css
    |-- index.html                  // HTML entry point
    |-- index.js                    // React entry point
    |-- variables.scss              // SASS Variables
```

- `/dist` is created by webpack and contains all dist files. By default there is only going to be:
```
|-- dist
    |-- app.js
    |-- app.js.map
    |-- index.html
```

### Commands

- `npm start` to start the application with webpack-dev-server in `local` environment
- `npm run clean` to delete `/dist` folder (also called by `npm start`)
- `npm run lint` to check for errors (also called by `npm start`)
- `npm run lint:fix` to check and fix automatically fixable errors
- `npm test` to run the complete suite of tests inside `/src/`
- `npm run test:watch` as above + wait for changes 

---

## To implement
 
- [ ] Redux
- [ ] Simple +1 -1 counter app
- [ ] Production webpack config
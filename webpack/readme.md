# React Web-App without create-react-app

This Web-App is a learning practice to create a React app without using create-react-app. It utilizes webpack for project configuration.

## Features of Webpack

Webpack is a popular module bundler for JavaScript applications. It offers several key features and concepts:

- **Module Bundling**: Webpack treats all assets in a project as modules, generating a dependency graph and bundling them into one or more bundles to be served to the browser.

- **Loaders**: Webpack uses loaders to preprocess files, transforming them from one format to another. For example, converting ES6 JavaScript to ES5 using Babel or converting Sass to CSS.

- **Plugins**: Plugins in webpack are used for various tasks such as bundle optimization, asset management, and environment configuration.

- **Code Splitting**: Webpack supports code splitting, enabling you to split your code into smaller chunks that can be loaded on demand, improving application performance.

- **Hot Module Replacement (HMR)**: HMR allows modules to be replaced without a full page refresh during development, speeding up the development process.

- **Tree Shaking**: Webpack supports tree shaking, removing dead code from your bundle, resulting in faster load times for your application.

## Installation

To install the required modules, run the following commands:

```bash
npm install --save-dev react react-dom babel
npm install --save-dev webpack webpack-cli webpack-dev-server webpack-bundle-analyzer
npm install --save-dev babel-loader @babel/core @babel/preset-env @babel/preset-react
npm install --save-dev html-webpack-plugin
npm install --save-dev css-loader style-loader sass-loader
npm install --save-dev webpack mini-css-extract-plugin css-loader style-loader
```

The `--save-dev` flag is used to save packages as dev dependencies, meaning they are only required during development and not in the production environment.

**Note** that in newer versions of npm (starting from npm 5.0.0), you can use --save-dev or its shorthand -D interchangeably. For example, you can run npm install webpack --save-dev or npm install webpack -D to save webpack as a dev dependency.

## Usage

To use webpack in your project, you need to configure it using a webpack configuration file (`webpack.config.js`). Once configured, you can run webpack to build the project, start the development server, and perform other tasks.

For example, to build the project, you can run:

```bash
npx webpack
```

To start the development server, you can run:

```bash
npx webpack serve
```

## Configuration

The webpack configuration file (`webpack.config.js`) is where you can customize webpack for your project. You can specify loaders, plugins, optimizations, and other settings in this file.

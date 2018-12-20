### cra-craco-electron-example

*cra-craco-electron-example* demonstrates how to set up a react project (using TypeScript) and build it for both the Web and as a standalone electron app.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Note: The `@craco/craco` module is used to override the create-react-app default webpack config (`target: 'electron-renderer'`), instructing it to build for the `electron-renderer`. This allows the app to run in electron AND have access to the filesystem, etc. See: `craco.config.electron.js` [npm craco](https://www.npmjs.com/package/@craco/craco)

```
create-react-app --typescript cra-craco-electron-example
```

#### prerequisites
- install node (i.e. v8.12.0)
- install yarn

#### install
```
yarn
```

#### web
To build for the Web and automatically launch a browser window for development...

```
yarn start:web
```

#### electron
To build for the electron, launch an electron window and reload electron automatically while developing...
```
yarn watch:electron
```
and in another console tab...
```
yarn start:electron-dev
```


#### electron-builder
To build a native application (i.e. for MacOS)...
```
yarn build:electron
yarn dist
```

Then launch the dmg found in the `dist` folder or open the app in `dist/mac`



## Other available Scripts (Create React App)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

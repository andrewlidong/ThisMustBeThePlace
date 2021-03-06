# ThisMustBeThePlace

### About

ThisMustBeThePlace is a mobile app for Android and iOS that detects and allows you to save your location with your camera.

Access by typing the following commands into the terminal while in the root directory. Please note, you may need to install XCode or AndroidStudio if you'd like to view the app in simulator.

Some dependencies:

```console
$ npm install expo-cli --global
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view expo-image-picker expo-permissions expo-file-system expo-sqlite expo-location react-native-maps
$ npm install --save redux react-redux react-navigation react-navigation-header-buttons react-navigation-stack react-navigation-tabs react-navigation-drawer expo-font redux-devtools-extension @expo/vector-icons moment redux-thunk expo-linear-gradient
$ npm install
$ expo start
$ i (for ios simulator)
$ a (for android simulator)
```

To use the linter use:

```console
$ npm install eslint @react-native-community/eslint-config --save-dev
$ npm run lint
```

To eject to React Native (not recommended) use:

```
$ expo eject
```

## Architecture and Technologies

The project is implemented with the following technologies:

- `React Native`
- `Redux`
- `Node.js`
- `Expo CLI`
- `XCode`
- `Android Studio`
- `JavaScript ES6`
- `React Navigation`
- `SQLite`
- `Google Maps Static API`
- `Google Maps Geocoding API`

## Features

Some features are:

- Redux state management
- Platform specific checks and styling for Android and IOS orientations
- Reusable components and styles
- Flexbox design and touchable components
- Custom form submission
- Persistent storage in local database
- Native camera functionality
- Location preview and google maps interactivity

<img src="./assets/thismustbetheplace.png" height="600" alt="thisMustBeThePlace">

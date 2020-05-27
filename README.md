# ThisMustBeThePlace

### About

ThisMustBeThePlace is a mobile app for Android and iOS that...

Access by typing the following commands into the terminal while in the root directory. Please note, you may need to install XCode or AndroidStudio if you'd like to view the app in simulator.

Some dependencies:

```console
$ npm install expo-cli --global
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
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
- `Firebase`

## Features

Some features are:

- Redux state management
- Full CRUD functionality
- Platform specific checks and styling for Android and IOS orientations
- Dynamic lazy loading through FlatList
- Custom fonts
- Reusable components and styles
- Flexbox design and touchable components
- In-app alerting
- Custom form validation
- Pull to refresh
- Server-side storage
- Error handling and custom error messages
- Loading screen
- Persistent local storage
- Automatic logout

<img src="./image" height="600" alt="thisMustBeThePlace">

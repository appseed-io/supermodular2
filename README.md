# Supermodular2 Ionic
A super modular Ionic 2.x starter application.

* Project's Home: https://github.com/skounis/supermodular2

> Need more? Don't miss [Barebone Ionic 2](http://appseed.io/barebone-ionic-2), The Swiss Arny Knife of Ionic2!

## Dependecies, Run and Build

### Install Ionic CLI 2.x
To build and run this `Supermodular 2` you need to have Ionic CLI beta installed

```bash
$ sudo npm install -g ionic
```

You can revert back and restore any version of Ionic CLI by using the command:
```bash
$ sudo npm install -g {ionic version}
```

eg:
```bash
$ sudo npm install -g ionic@1.7.14
```

### Install NodeJS dependencies
Run `npm install` to install all needed dependencies.

### Install plugins and platforms from package.json
Run `ionic state restore` to install all Cordova plugins and platforms included in the package.json.

### Run the app
Use `ionic serve -l` to run the app in browser and watch for changes in code

or

use `ionic serve` to just run the app for a browser preview

or

use `ionic serve --lab` to run the app in a browser on two platforms at the same time.

### Add a platform
```bash
$ ionic platform add <platform>
```

Supported Cordova platforms:
```bash
$ ionic platform add ios
$ ionic platform add android
```

### Build the app
```bash
$ ionic build
```

### Εmulate the app on simulator
iOS:
```bash
$ ionic emulate ios
```

Android:
```bash
$ ionic emulate android
```

### Plugins installation
Use the following commands and install all the plugins required by the app:
```bash
$ cordova plugin add {plugin id or url}
```

eg:
```bash
cordova plugin add cordova-plugin-inappbrowser
```

#### Used Cordova plugins
In case that the required Cordova plugins are not installed while installing NodeJS dependencies, Cordova's command mentioned previously can be used to install the following plugins:

* **cordova-plugin-device** - This plugin defines a global device object, which describes the device's hardware and software.
* **cordova-plugin-console** - This plugin is meant to ensure that console.log() is as useful as it can be. It adds additional function for iOS, Ubuntu, Windows Phone 8, and Windows.
* **cordova-plugin-whitelist** - This plugin implements a whitelist policy for navigating the application webview on Cordova 4.0.
* **cordova-plugin-splashscreen** - This plugin is required to work with splash screens. This plugin displays and hides a splash screen during application launch.
* **cordova-plugin-statusbar** - Used to customize the iOS and Android StatusBar, alter the appearance of the status bar (color/style).
* **ionic-plugin-keyboard** - It provides functions to make interacting with the keyboard easier, and fires events to indicate that the keyboard will hide/show.

## Credits

* [Ionic Framework](http://ionicframework.com/)
* [Ionic 2.0](http://ionic.io/2)

The Ionic 'Tutorial' starter is used
```bash
$ ionic start supermodular2 tutorial --v2 --ts
```

## Third Party Licenses
* [Apache License](http://www.apache.org/licenses/)
* [MIT License](https://opensource.org/licenses/MIT)

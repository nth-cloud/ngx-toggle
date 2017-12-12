# NG Toggle Switch

[![npm version](https://badge.fury.io/js/ngx-toggle.svg)](https://badge.fury.io/js/ngx-toggle)
[![Build Status](https://travis-ci.org/trickeyone/ngx-toggle.svg?branch=master)](https://travis-ci.org/trickeyone/ngx-toggle)
[![devDependency Status](https://david-dm.org/trickeyone/ngx-toggle/dev-status.svg?branch=master)](https://david-dm.org/trickeyone/ngx-toggle#info=devDependencies)
[![Sauce Test Status](https://saucelabs.com/browser-matrix/trickeyone.svg)](https://saucelabs.com/u/trickeyone)

Angular v2+ Bootstrap-styled Toggle that can be used as a standalone toggle or can convert checkboxes into UI toggles.

## Demo

View it in action at https://ngx-toggle.github.io

## Dependencies
* [Angular](https://angular.io) (tested with 5.1.0)
* [Bootstrap 4](https://www.getbootstrap.com) (tested with 4.0.0-beta.2)

## Installation
After installing the above dependencies, install `ngx-toggle` via:
```shell
npm install --save ngx-toggle
```

Import the main module into your project:
```js
import {NgToggleSwitchModule} from "trickeyone/ngx-toggle";
```

Import the module into your application:
```js
import {NgToggleSwitchModule} from ngx-toggle;

@NgModule({
    ...
    imports: [NgToggleSwitchModule, ...],
    ...
})
export class AppModule {
}
```

If you are using SystemJS, you should adjust your configuration to point to the UMD bundle.

In your systemJS config file, `map` needs to tell the System loader where to look for `ngx-toggle`:
```js
map: {
   'trickeyone/ngx-toggle': 'node_modules/trickeyone/ngx-toggle/bundles/ngx-toggle.js' 
}
```

## Supported browsers
We support the same browsers and versions supported by both Bootstrap 4 and Angular, whichever is _more_ restrictive.
See [this](https://github.com/angular/angular/blob/master/README.md) for up-to-date Angular browser support.

* Chrome (45+)
* Firefox (40+)
* IE (10+)
* Edge (20+)
* Safari (7+)

Also, check [Bootstrap 4's notes](https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#supported-browsers) on supported browsers.


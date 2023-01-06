# RNatify CLI

A CLI to create easier react native apps. The CLI has the main of avoid repeative tasks while developing apps with react native.

## Table of contents
- [Installation](#installing-rnatify-cli-into-your-project)
- [Configuration File]()
- [Commands](./docs/commands.md)

## How to take advantage of RNatify

This CLI helps you with the day by day react native. Creating easily components, screens and services.

The idea is to keep a consistent code through your app. Using a template will always assure:

1. Creating components, screens, and others layers of the app based in a template you define;
2. Implement standard features that usually are used in an app (Google Login, Apple Login, etc);
3. Start an app with pre determined configs (using our boilerplate)

## Installing Rnatify CLI into your project

You may install `rnatify` command in a few ways.

### Globally (Recommended)

The easiest way to install rnatify is using it globally.

```sh 
npm install -g rnatify
```

### With NPX

Using it with NPX tool. 

```sh
npx rnatify
```

### Local in your project

This is the most difficult way but will keep rnatify only to your project.

```sh 
yarn add -D rnatify
```

Then enter into `node_modules/rnatify` folder and run
```sh
yarn link
```

After that you should be able to run rnatify, still if command is not found, you might want to link globally with yarn:

```sh
export PATH="$PATH:$(yarn global bin)"
```

## Configuration file

In order to customize your rnatify installation, you need to add a `rnatify.config.js` into your project.

Here is a complete example of values you can customize: [rnatify.config.json](./rnatify.config.js)

*NOTE: You might also choose into using `rnatify` property into your package.json or a `.rnatifyrc.json`*


# License
MIT - see LICENSE


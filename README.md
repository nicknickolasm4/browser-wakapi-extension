# browser-wakapi-extension

EXTENSION CHROME, FIREFOX, OPERA AND EDGE

USING THE WAKATIME REPOSITORY
IT'S JUST A CHANGE OF ROUTES AND ADJUSTMENTS TO RECEIVE ON WAKAPI.DEV

Get api key here => https://wakapi.dev/

## Screenshots

![SC open](./screenshots/sc_6-green.png)

![SC open](./screenshots/sc_6-open.png)

![Options SC](./screenshots/sc_8-options.png)

## Development instructions

> For development purposes only.

To get started, install NPM and Bower dependencies, and do an initial build with Gulp:

```
npm start
```

To build the extension once:

```
npm run gulp
```

To monitor changes:

```
npm run watch
```

Run tests:

```
npm test
```

Lint code _(Both JS and JSX)_:

```
jsxhint --jsx-only .
```

### Automatic code linting

There is a precommit hook that lints the code before commiting the changes.

### Troubleshooting

Check for errors by inspecting the extension.

![inspecting extension](./screenshots/wakatime-chrome-debug.gif)

The extension is going through a refactor, the new build [instructions are here](./DEVELOPMENT.md)

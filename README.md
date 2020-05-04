# caddyserver

> Interact with the CaddyServer API from Node.JS

Full documentation on the CaddyServer API requests and responses can be found on the CaddyServer website at:

    - https://caddyserver.com/docs/api

Install with:

```js
npm i caddyserver
```

## Quick Examples

Get the current configuration:

```js
const CaddyServer = require('caddyserver')
const caddy = new CaddyServer({ host: 'localhost:2019' })
caddy.getConfig().then(config => {
    console.log(config)
})
```

## Design Goals

The default `CaddyServer` will be a light wrapper around the CaddyServer API, providing no extra functionality.  Helper functions will be added to submodules, e.g. `CaddyServer.Builder`.

## API

At the time of speaking, there are three CaddyServer API endpoints.

```typescript
const loadResponse : Promise<Object> = caddy.postLoad(<Object> configuration) // set or replace active configuration
const stopResponse : Promise<Object> = caddy.postStop() // stop the active configuration and exit the process
const configResponse : Promise<Object> = caddy.getConfig(path : String, { id: Boolean }) // exports config at path
const configResponse : Promise<Object> = caddy.postConfig(configuration : Object, path : String, { id: Boolean }) // sets or replaces config
const configResponse : Promise<Object> = caddy.putConfig(configuration : Object, path : String, { id: Boolean }) // creates new object
const configResponse : Promise<Object> = caddy.patchConfig(configuration : Object, path : String, { id: Boolean }) // replaces existing object
const configResponse : Promise<Object> = caddy.deleteConfig(path : String, { id: Boolean }) // deletes value at path
```

By default, `path` defaults to the root and `id` to `false`.  Id can be used to specify IDs, instead of full paths.

## License

MIT
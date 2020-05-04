const fetch = require('node-fetch')

const defaults = {
    host: 'http://localhost:2019'
}

class CaddyServer {
    constructor(opts) {
        Object.assign(this, defaults, opts)
    }

    getConfig(path = '', opts = {}) {
        const endpoint = opts.id ? '/id/' : '/config/'

        return fetch(this.host + endpoint + path)
            .then(res => res.json())
    }

    postConfig(configuration, path = '', opts = {}) {
        const endpoint = opts.id ? '/id/' : '/config/'

        return fetch(this.host + endpoint + path, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(configuration)
        })
            .then(res => res.json())
    }

    patchConfig(configuration, path = '', opts = {}) {
        const endpoint = opts.id ? '/id/' : '/config/'

        return fetch(this.host + endpoint + path, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(configuration)
        })
            .then(res => res.json())
    }

    deleteConfig(path = '', opts = {}) {
        const endpoint = opts.id ? '/id/' : '/config/'

        return fetch(this.host + endpoint + path, {
            method: 'DELETE'
        })
            .then(res => res.json())
    }

    postLoad(configuration) {
        return fetch(this.host + '/load', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(configuration)
        })
            .then(res => res.json())
    }

    postStop() {
        return fetch(this.host + '/stop', {
            method: 'POST'
        })
            .then(res => res.json())
    }
}

module.exports = CaddyServer
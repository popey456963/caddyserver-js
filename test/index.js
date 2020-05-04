const CaddyServer = require('../index.js')

const caddy = new CaddyServer({
    host: 'http://localhost:2019'
})

;(async () => {
    console.log(await caddy.getConfig())
})()
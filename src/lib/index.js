const apis = new Map()
    // apis.set('test', 'https://test.unabase.net')
    // apis.set('dev', 'https://apiv4.unabase.com')
    // apis.set('production', 'https://prod-v4.herokuapp.com')
    // apis.set('prod', 'https://api.unabase.net')
    // apis.set('test', 'https://test-v4.herokuapp.com')
apis.set('local', 'http://localhost:3000')
apis.set('dev', 'https://barberapi-production.up.railway.app')
apis.set('development', 'https://barberapi-production.up.railway.app')
apis.set('production', 'https://barberapi-production.up.railway.app')
let env = ''

if (localStorage.getItem('apiUrl')) {
    env = localStorage.getItem('apiUrl')
} else {
    env = process.env.NODE_ENV
}
console.warn('env -> ', env)
const api = apis.get(env.trim())
console.log(api)

export default api
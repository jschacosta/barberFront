const apis = new Map()
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
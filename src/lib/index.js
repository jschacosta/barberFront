const apis = new Map()
    // apis.set('test', 'https://test.unabase.net')
    // apis.set('dev', 'https://apiv4.unabase.com')
    // apis.set('production', 'https://prod-v4.herokuapp.com')
    // apis.set('prod', 'https://api.unabase.net')
    // apis.set('test', 'https://test-v4.herokuapp.com')
apis.set('local', 'http://localhost:3000')
apis.set('dev', 'https://zmsegiguxp.us-east-1.awsapprunner.com')
apis.set('development', 'https://zmsegiguxp.us-east-1.awsapprunner.com')
apis.set('test', 'https://apitv4.unabase.com')
apis.set('production', 'https://apiv4.unabase.com')
let env = ''

if (localStorage.getItem('apiUrl')) {
    env = localStorage.getItem('apiUrl')
} else {
    env = process.env.NODE_ENV
}
console.warn('env -> ', env)
const api = apis.get(env.trim())

export default api
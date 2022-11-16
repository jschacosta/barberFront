// import api_doc from 'unabase_api_doc';
// send enviroment as arguments ["test","dev","local","prod"]

let env;
// let env = process.env.NODE_ENV === 'dest' ? 'test' : process.env.NODE_ENV;

switch (process.env.NODE_ENV) {

    case 'production':
        env = 'production';
        break;
    case 'prod':
        env = 'prod';
        break;
    case 'test':
        env = 'test';
        break;
    case 'dev':
        env = 'dev';
        break;
    case 'local':
        env = 'local';
        break;
}

// const api = 'dev' 
const api = env
    //api_doc(env);
    // const api = api_doc('env');
    // console.log('api');
    // console.log(env);

export default api;
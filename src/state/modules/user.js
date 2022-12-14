import axios from "axios";
import api from '../../lib/api.js'
import store from '../../state/store'

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
};

export const state = {
    
};

export const getters = {
 
};

export const mutations = {
    
};

export const actions = {
    register({ commit }, payload) {
        console.warn("Register user", payload,axiosConfig)
        return new Promise((resolve, reject) => {
            axios
                .post(api + '/users/registerEmail/', payload)
                .then(res => {
                    console.log(res.data)
                    if (!store.getters['users/user']) {
                        localStorage.setItem('access_token', res.data.access_token)
                        localStorage.setItem('user', JSON.stringify(res.data.user))
                        axios.defaults.headers.common['Authorization'] =
                            res.data.access_token
                    }
                    resolve(res.data.user)
                })
                .catch(err => {
                    // commit('register_error')
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('user')
                    reject(err)
                })
        })
    },
    login({ commit }, payload) {
        console.warn("Login user", payload)
        return new Promise((resolve, reject) => {
            axios
                .post(api + '/users/loginEmail/', payload)
                .then(res => {
                    if (!store.getters['users/user']) {
                        localStorage.setItem('access_token', res.data.access_token)
                        localStorage.setItem('user', JSON.stringify(res.data.user))
                        axios.defaults.headers.common['Authorization'] =
                        res.data.access_token
                    }
                    resolve(res.data.user)
                })
                .catch(err => {
                    // commit('register_error')
                    localStorage.removeItem('access_token')
                    localStorage.removeItem('user')
                    reject(err)
                })
        })
    },
};

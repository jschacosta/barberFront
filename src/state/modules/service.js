import axios from "axios";
import api from '../../lib/api.js'
// import store from '../../state/store'
export const state = {
    services:[]
    
};

export const getters = {
    getServices: state => state.services,
};

export const mutations = {
    SET_SERVICES(state, payload) {
        console.log("SET_SERVICES", payload)
        state.services = payload 
    },
    UPDATE_SERVICE(state,payload){
        console.log("update service", payload)
        state.services.unshift(payload )
    }
    
};

export const actions = {
    createService({commit}, payload) {
        console.warn("creando servicio",payload)
        return new Promise((resolve, reject) => {
            axios
                .post(api + '/services', payload)
                .then(res => {
                    console.log("exitoS1") 
                    console.warn("servicio", res.data)
                    commit('UPDATE_SERVICE', res.data)
                    resolve(res.data)
                })
                .catch(err => {
                    console.log("errorS1")
                    console.warn(err.response)
                    reject(err)
                })
        })
    },
    getAllServices({commit}, payload) {
        console.warn("obteniendo todos los servicios",payload)
        return new Promise((resolve, reject) => {
            axios
                .get(api + '/services/allServices/body?'+ payload)
                .then(res => {
                    console.log("exitoS2") 
                    commit('SET_SERVICES', res.data.docs)
                    resolve(res.data)
                })
                .catch(err => {
                    console.log("errorS2")
                    console.warn(err.response.data)
                    reject(err)
                })
        })
    },
};

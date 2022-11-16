import axios from "axios";
import api from '../../lib/index'
// import store from '../../state/store'

export const state = {
    
};

export const getters = {
 
};

export const mutations = {
    
};

export const actions = {
    createService({commit}, payload) {
        console.warn("creando servicio",payload)
        let buena=commit
        return new Promise((resolve, reject) => {
            axios
                .post(api + '/services', payload)
                .then(res => {
                        console.log("buena 1") 
                        console.warn("servicio", res.data)
                        resolve(res.data)
                })
                .catch(err => {
                    console.log("buena3")
                    console.warn(err.response.data)
                    reject(err)
                })
        })
    },
};

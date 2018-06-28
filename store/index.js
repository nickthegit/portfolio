import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            siteData: []
        },
        mutations: {
            setData(state, data) {
                state.siteData = data;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('http://nj-admin.co.uk/wp-json/wp/v2/')
                .then( res => {
                    // console.log(res);
                    vuexContext.commit('setData', res.data.routes)
                })
                .catch(e => context.error(e))
                ;
            }
        }
    })
}

export default createStore
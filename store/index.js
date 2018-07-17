import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            categories: [],
            projects: [],
            workState: false
        },
        mutations: {
            setCategories(state, data) {
                state.categories = data;
            },
            setProjects(state, data) {
                state.projects = data;
            },
            toggleFullPage(state, value) {
                state.workState = value
            }            
        },  
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://nj-admin.co.uk/wp-json/wp/v2/categories')
                .then( res => {
                    vuexContext.commit('setCategories', res.data)
                    return axios.get('https://nj-admin.co.uk/wp-json/wp/v2/projects')
                    .then( res => {
                        vuexContext.commit('setProjects', res.data)
                    })
                    .catch(e => context.error(e));
                })
                .then(res => {
                    // console.log('dave');
                    
                })
                .catch(e => context.error(e))
                ;
            }
        }
    })
}

export default createStore
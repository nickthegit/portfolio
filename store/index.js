import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            categories: [],
            projects: [],
            pages: [],
            workState: false,
            slugPage: {
                current: '',
                prev: '',
                next: ''
            }
        },
        mutations: {
            setCategories(state, data) {
                state.categories = data;
            },
            setProjects(state, data) {
                state.projects = data;
            },
            setPages(state, data) {
                state.pages = data;
            },
            toggleFullPage(state, value) {
                state.workState = value
            },
            changeSlugState(state, value) {
                state.slugPage.current = value.current
                state.slugPage.prev = value.prev
                state.slugPage.next = value.next
            }             
        },  
        actions: {
            nuxtServerInit(vuexContext, context) {
                return axios.get('https://nj-admin.co.uk/wp-json/wp/v2/categories?per_page=100')
                .then( res => {
                    vuexContext.commit('setCategories', res.data)
                    return axios.get('https://nj-admin.co.uk/wp-json/wp/v2/projects?per_page=100')
                    .then( res => {
                        vuexContext.commit('setProjects', res.data)
                        return axios.get('https://nj-admin.co.uk/wp-json/wp/v2/pages')
                        .then( res => {
                            vuexContext.commit('setPages', res.data)
                        })
                        .catch(e => context.error(e));
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
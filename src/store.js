import Vue from 'vue';
import Vuex from 'vuex';
import GoalService from '@/services/GoalService';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        goals: [],
        categories: [
            'home',
            'hobby',
            'work'
        ]
    },
    mutations: {
        SET_GOALS(state, goals) {
            state.goals = goals;
            // state.goals.push(goals);
        },
        ADD_CATEGORY(state, category) {
            state.categories.push(category);
        }
    },
    actions: {
        fetchGoals({ commit }) {
            GoalService.getGoals()
                .then(response => {
                    commit('SET_GOALS', response.data);
                })
                .catch(error => {
                    console.log('There was an error:', error.response);
                })
        },
        addCategory({ commit }, category) {
            commit('ADD_CATEGORY', category);
        }
    },
    getters: {}
});

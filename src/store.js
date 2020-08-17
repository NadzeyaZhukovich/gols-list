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
        },
        ADD_CATEGORY(state, category) {
            state.categories.push(category);
        },
        ADD_GOAL(state, goal) {
            state.goals.push(goal);
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
        },
        createGoal({ commit }, goal) {
            return GoalService.postGoals(goal).then(() => {
                commit('ADD_GOAL', goal);
            })
        }
    },
    getters: {}
});

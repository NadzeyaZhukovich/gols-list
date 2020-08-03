import Vue from "vue";
import Router from "vue-router";
import CreateGoal from "./views/CreateGoal";
import GoalsList from "./views/GoalsList";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "create-goal",
            component: CreateGoal
        },
        {
            path: "/goals-list",
            name: "goals-list",
            component: GoalsList
        },
    ]
})
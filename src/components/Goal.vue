<template>
    <section class="goals">
        <div class="goal__item" v-for="goal in goals" :key="goal.id">
            <p>{{goal.title}}</p>
            <p>Numbers of tasks: {{goal.subGoal.length}}</p>
        </div>
    </section>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: 'Goal',
        created() {
            this.$store.dispatch('fetchGoals');
            console.log('fetchData => ', this.$store.dispatch('fetchGoals'))
        },
        computed: {
            ...mapState(['goals'])
        }
    }
</script>

<style lang="scss" scoped >
    .goal__item {
        width: 500px;
        margin: 0 auto;
        padding: 20px;
        margin-bottom: 24px;
        transition: all 0.2s linear;
        cursor: pointer;
        box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2), 0 0 0 0 rgba(0, 0, 0, 0.19);

        &:hover {
            transform: scale(1.01);
            box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
        }
    }

</style>
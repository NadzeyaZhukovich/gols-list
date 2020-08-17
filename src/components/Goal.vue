<template>
    <section class="goals">
        <div class="goal__item" v-for="goal in goals" :key="goal.id">
            <p class="goal-category">{{goal.title}}</p>
<!--            <p>Numbers of tasks: {{goal.subGoal.length}}</p>-->

          <div v-for="sub in goal.subGoal" :key="sub.title">
            <p class="sub-title"> {{sub.title}}: </p>
            <p class="sub-description"> {{sub.description}} </p>
          </div>

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

    .goal-category {
      text-transform: uppercase;
      font-weight: bold;
      color: red;

    }

    .sub-title {
      color: green;
      text-transform: capitalize;
      text-align: left;
    }

    .sub-description {
      text-align: left;
    }

</style>
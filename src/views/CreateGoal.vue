<template>
    <div class="goal">
        <h2 class="goal">Create Goal</h2>
        <div class="field">
            <label>Add New Category</label>
            <input v-model="newCategory" type="text" placeholder="Add new category"/>
            <button @click="addNewCategory" :disabled="!newCategory.length">Add category</button>
        </div>
        <div class="field">
            <label>Category</label>
            <select v-model="goal.title">
                <option v-for="cat in categories" :key="cat"> {{cat}} </option>
            </select>
        </div>
        <div class="field">
            <label>Title</label>
            <input v-model="goal.subGoal.title" type="text" placeholder="Add an goal title"/>
        </div>
        <div class="field">
            <label>Descriptions</label>
            <input v-model="goal.subGoal.description" type="text" placeholder="Add an goal title"/>
        </div>
<!--        <div class="field">-->
<!--            <label>Date</label>-->
<!--            <datepicker v-model="goals.startDate" placeholder="Select a start date"/>-->
<!--        </div>-->
<!--        <div class="field">-->
<!--            <label>Date</label>-->
<!--            <datepicker v-model="goals.endDate" placeholder="Select a end date"/>-->
<!--        </div>-->
        <button class="field" @click="createGoal">creat</button>
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker';
    export default {
        name: 'CreateGoal',
        compoinents: {
            Datepicker
        },
        data() {
            return {
                goal: this.createGoalObject(),
                newCategory: '',
                categories: this.$store.state.categories,
            }
        },
        methods: {
            createGoal() {
                console.log('result => ', this.goal);
                this.$store
                    .dispatch('createGoal', this.goal)
                    // .then(() => {
                    //   this.goal = this.createGoalObject()
                    // })
                    // .catch(() => {
                    //   console.log('Goul can not be created')
                    // })
            },
            addNewCategory() {
                if(this.newCategory.length) {
                    this.$store
                        .dispatch('addCategory', this.newCategory);
                    this.newCategory = '';
                }
            },
            createGoalObject() {
                const id = Math.round(Math.random() * 100);
                return {
                    id: id,
                    title: '',
                    startDate: '',
                    endDate: '',
                    subGoal: this.createSubGoalObject()
                }
            },
            createSubGoalObject() {
                return {
                    title: '',
                    description: ''
                }
            }
        }
    }
</script>

<style scoped>
    .field {
        margin-bottom: 24px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    input,
    select {
      margin: 10px 0;
      width: 200px;
      height: 40px;
    }

    button {
      padding: 10px;
      min-width: 70px;
    }
</style>


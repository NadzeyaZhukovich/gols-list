<template>
    <div class="to-do-list">
        <h2 class="to-do-list">Hello from To Do List</h2>
        <goal/>
    </div>
</template>

<script>
    import Goal from "@/components/Goal";

    export default {
        name: 'GoalsList',
        components: { Goal },
    }
</script>
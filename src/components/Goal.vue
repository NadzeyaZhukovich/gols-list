<template>
    <section class="goals">
        <div class="goal__item">
            <p>Work</p>
            <p>Goals: 2</p>
        </div>
        <div class="goal__item">
            <p>Hobby</p>
            <p>Goals: 5</p>
        </div>
        <div class="goal__item">
            <p>Home</p>
            <p>Goals: 6</p>
        </div>
        <div class="goal__item">
            <p>Sport</p>
            <p>Goals: 7</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Goal'
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
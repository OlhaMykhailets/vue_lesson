<template>
    <form @submit.prevent="addNewTask">
        <input type="text" name="" v-model="task">
        <button type="submit">Add</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            task: ''
        }
    },
    methods: {
        addNewTask() {
            const id = Math.random()
            this.$store.dispatch('addNewListItem', {text: this.task, id})
            this.task = ''
        }
    }

}
</script>

<style>

</style>

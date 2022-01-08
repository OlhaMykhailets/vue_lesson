<template>
    <ul>
        <Item v-for="item in list" :key="item.id" :task="item"/>
    </ul>
</template>

<script>
import Item from '@/components/TodoItem.vue';

export default {
    components: {
        Item
    },
    computed: {
        list () {
        getTodos: (s) => s.todos
            return this.$store.getters['getTodos']
        }
    }

}
</script>

<style>

</style>

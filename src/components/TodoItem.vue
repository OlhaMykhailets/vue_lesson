<template>
    <li>
        <p v-if="!isEdit">{{task.text}}</p>
        <input type="text" v-if="isEdit" v-model="newText">
        <button v-if="!isEdit" @click="toggleMode">Edit</button>
        <button v-if="isEdit" @click="save">Save</button>
         <button @click="remove">Remove</button>
    </li>
</template>

<script>
export default {
    props: {
        task: {
            type: Object,
            default: {
                text: '',
                id: 0
            }
        }
    },
    data() {
        return {
            isEdit: false,
            newText: ''
        }
    },
    methods: {
        remove() {
            this.$store.dispatch('removeListItemById', this.task.id)
        },
        toggleMode() {
            this.isEdit = !this.isEdit
        },
        save() {
            this.$store.dispatch('editListItemById', {
                text: this.newText,
                id: this.task.id
            })
            this.toggleMode()
        }
    }

}
</script>

<style>

</style>

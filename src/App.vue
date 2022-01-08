<template>
  <h1>Todo List</h1>
  <Form />
  <List />
</template>

<script>
import List from '@/components/List.vue';
import Form from '@/components/Form.vue';

export default {
  name: 'App',
  components: {
    List,
    Form
  }
}
</script>


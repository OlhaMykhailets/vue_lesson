<template>
    <div id="counter">

        <h2 v-bind:class="color">{{ title }}</h2>
        <span>{{ counter }}</span>
        <button @click = 'increment'> Increment </button>
        <button @click = 'decrement'> Decrement </button>

        <input type="text" v-model.number = "minCount" placeholder="MinValue">
        <input type="text" v-model.number = "maxCount" placeholder="MaxValue">

        <ul v-if = "counter">
            <li v-for = "click in counter" :key = "click">Click</li>
        </ul>
     </div>
</template>

<script>
    export default {
     name: "CounterApp",
     props: ['title', 'color'],
                data () {
                    return {
                        counter: 0,

                        minCount: '',
                        maxCount: '',
                    };
                },
                methods: {
                    increment() {
                        this.counter++

                        if (this.counter > this.maxCount) {
                            this.counter = this.maxCount
                        }
                    },
                    decrement() {
                        this.counter--

                        if (this.counter < this.minCount) {
                            this.counter = this.minCount
                        }
                    },
                },
                computed: {

                }
            }

</script>

<style lang="scss" scouped>
.yellow {
    color: yellow;
}

.red {
    color: red;
}

.green {
    color: green;
}

</style>

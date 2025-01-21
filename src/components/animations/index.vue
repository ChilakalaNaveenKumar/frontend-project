<template>
    <tspan v-for="(word, i) in words" :key="i" :class="cal(i)">
        {{ word }}
    </tspan>
</template>

<script>
export default {
    name: 'Animations',
    props: {
        className: {
            type: String,
            required: true
        },
        words: { 
            type: Array,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    methods: {
        cal(i) {
            return `${this.className} ${this.className}_${this.index + i}`;
        }
    },
    mounted() {
        
    }
}
</script>
<script setup>
defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    color: {
        type: String,
        default: 'primary'
    },
    size: {
        type: String,
        default: 'large'
    },
});
</script>

<template>
    <v-btn :color="color" :size="size" block flat :type="type">
    <slot/>
    </v-btn>
</template>

<script setup>
defineProps({
    value: String,
});
</script>

<template>
    <v-label class="font-weight-bold mb-1">
        <span v-if="value">{{ value }}</span>
        <span v-else><slot /></span>
    </v-label>
</template>

<script setup>
import { onMounted, ref } from 'vue';

defineProps({
    modelValue: String,
});

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.$el.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>

<template>
    <v-text-field variant="outlined" hide-details color="primary"
        :value="modelValue"
        @update:modelValue="$emit('update:modelValue', $event)"
        ref="input"
    />
</template>

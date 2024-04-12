<script setup>
import Icon from '../Icon.vue';
import {  router } from '@inertiajs/vue3';

const props = defineProps({ item: Object, level: Number });
</script>

<template>
    <!---Single Item-->
    <v-list-item
        v-if="item.route === 'teams.show'"
        @click="router.get(route(item.route, $page.props.auth.user.current_team))"
        rounded
        class="mb-1"
        :class="{'bg-primary' : route().current(item.route)}"
        :disabled="item.disabled"
        :target="item.type === 'external' ? '_blank' : ''"
    >
        <!---If icon-->
        <template v-slot:prepend>
            <Icon :item="item.icon" :level="level" />
        </template>
        <v-list-item-title>{{item.title }}</v-list-item-title>
        <!---If Caption-->
        <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
            {{ item.subCaption }}
        </v-list-item-subtitle>
        <!---If any chip or label-->
        <template v-slot:append v-if="item.chip">
            <v-chip
                :color="item.chipColor"
                class="sidebarchip hide-menu"
                :size="'small'"
                :variant="item.chipVariant"
                :prepend-icon="item.chipIcon"
            >
                {{ item.chip }}
            </v-chip>
        </template>
    </v-list-item>
    <v-list-item
        v-else
        @click="router.get(route(item.route))"
        rounded
        class="mb-1"
        :class="{'bg-primary' : route().current(item.route)}"
        :disabled="item.disabled"
        :target="item.type === 'external' ? '_blank' : ''"
    >
        <!---If icon-->
        <template v-slot:prepend>
            <Icon :item="item.icon" :level="level" />
        </template>
        <v-list-item-title>{{item.title }}</v-list-item-title>
        <!---If Caption-->
        <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
            {{ item.subCaption }}
        </v-list-item-subtitle>
        <!---If any chip or label-->
        <template v-slot:append v-if="item.chip">
            <v-chip
                :color="item.chipColor"
                class="sidebarchip hide-menu"
                :size="'small'"
                :variant="item.chipVariant"
                :prepend-icon="item.chipIcon"
            >
                {{ item.chip }}
            </v-chip>
        </template>
    </v-list-item>

</template>

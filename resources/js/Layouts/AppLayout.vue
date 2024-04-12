<script setup>
import { Head, Link, router } from '@inertiajs/vue3';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';

import { ref, shallowRef } from 'vue';
import sidebarItems from './vertical-sidebar/sidebarItem';
import NavGroup from './vertical-sidebar/NavGroup/index.vue';
import NavItem from './vertical-sidebar/NavItem/index.vue';
import ExtraBox from './vertical-sidebar/extrabox/ExtraBox.vue';
import NotificationDD from './vertical-header/NotificationDD.vue';
import ProfileDD from './vertical-header/ProfileDD.vue';
// Icon Imports
import { Menu2Icon, BellRingingIcon } from 'vue-tabler-icons';

const sidebarMenu = shallowRef(sidebarItems);
const sDrawer = ref(true);

defineProps({
    title: String,
});

const showingNavigationDropdown = ref(false);

const switchToTeam = (team) => {
    router.put(route('current-team.update'), {
        team_id: team.id,
    }, {
        preserveState: false,
    });
};

const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div>

        <Head :title="title" />

        <!-- <Banner /> -->

        <v-app>
            <v-layout>
                <v-navigation-drawer left elevation="0" app class="leftSidebar border-r" v-model="sDrawer">
                    <!---Logo part -->
                    <div class="pa-5">
                        <ApplicationLogo />
                    </div>
                    <!-- ---------------------------------------------- -->
                    <!---Navigation -->
                    <!-- ---------------------------------------------- -->
                    <div>
                        <perfect-scrollbar class="scrollnavbar">
                            <v-list class="pa-6">
                                <!---Menu Loop -->
                                <template v-for="(item, i) in sidebarMenu">
                                    <!---Item Sub Header -->
                                    <NavGroup :item="item" v-if="item.header" :key="item.title" />

                                    <!---Single Item-->
                                    <NavItem :item="item" v-else class="leftPadding" />
                                    <!---End Single Item-->
                                </template>
                            </v-list>
                            <div class="pa-4">
                                <ExtraBox />
                            </div>
                        </perfect-scrollbar>
                    </div>

                </v-navigation-drawer>

                <!------Header-------->
                <v-app-bar elevation="0" height="70">
                    <div class="d-flex align-center justify-space-between w-100">
                        <div>
                            <v-btn class="hidden-lg-and-up ms-md-3 ms-sm-5 ms-3 text-muted" @click="sDrawer = !sDrawer" icon
                                variant="flat" size="small">
                                <Menu2Icon size="20" stroke-width="1.5" />
                            </v-btn>
                            <!-- Notification -->
                            <NotificationDD />
                        </div>

                        <div class="d-flex items-center">
                            <template v-for="team in $page.props.auth.user.all_teams" :key="team.id">
                                <form @submit.prevent="switchToTeam(team)">
                                    <DropdownLink as="button">
                                        <div class="flex items-center">
                                            <svg v-if="team.id == $page.props.auth.user.current_team_id"
                                                class="me-2 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg"
                                                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>

                                            <div>{{ team.name }}</div>
                                        </div>
                                    </DropdownLink>
                                </form>
                            </template>
                            <!-- User Profile -->
                            <ProfileDD />

                        </div>
                    </div>
                </v-app-bar>
                <v-main class="bg-gray-50">
                <v-container fluid class="page-wrapper">
                    <!-- page content -->
                    <div class="maxWidth">
                        <slot />
                    </div>
                </v-container>
            </v-main>

        </v-layout>
    </v-app>
</div></template>

<template>
    <v-container fluid class="pa-3">
        <v-row class="h-screen d-flex justify-center align-center">
            <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
                <v-card rounded="md" elevation="10" class="px-sm-1 px-0 withbg mx-auto" max-width="500">
                    <v-card-item class="pa-sm-8">
                        <div class="d-flex justify-center py-4">
                            <slot name="logo" />
                        </div>
                        <slot />
                    </v-card-item>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

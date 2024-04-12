<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    canResetPassword: Boolean,
    status: String,
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <Head title="Log in" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit" class="h-full">
            <v-row class="d-flex mb-3">
                <v-col cols="12">
                    <InputLabel for="email" value="Email" />
                    <TextInput id="email" v-model="form.email" type="email" class="mt-1 block w-full" required autofocus
                        autocomplete="username" />
                    <InputError class="mt-2" :message="form.errors.email" />
                </v-col>

                <v-col cols="12">
                    <InputLabel for="password" value="Password" />
                    <TextInput id="password" v-model="form.password" type="password" class="mt-1 block w-full" required
                        autocomplete="current-password" />
                    <InputError class="mt-2" :message="form.errors.password" />
                </v-col>
                <v-col cols="12" class="pt-0">
                    <div class="d-flex flex-wrap align-center ml-n2">
                        <v-checkbox v-model:checked="form.remember" name="remember" color="primary" hide-details>
                            <template v-slot:label class="text-body-1">Remeber Me</template>
                        </v-checkbox>
                        <div class="ml-sm-auto">
                            <Link v-if="canResetPassword" :href="route('password.request')"
                                class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium">Forgot
                            Password ?</Link>
                        </div>
                    </div>
                </v-col>
                <v-col cols="12" class="pt-0">
                    <PrimaryButton type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing" color="primary"
                        size="large">
                        Log in
                    </PrimaryButton>

                </v-col>
            </v-row>
            <h6 class="text-body-1 text-muted font-weight-medium d-flex justify-center align-center mt-3">
                New User?
                <Link :href="route('register')"
                    class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium pl-2">
                Create an account</Link>
            </h6>
        </form>
    </AuthenticationCard>
</template>

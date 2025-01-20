<!-- eslint-disable no-unused-vars -->
<!--eslint-disable--> 
<template>
    <Header />
    <v-container>
        
        <v-form @submit.prevent="submitForm">
            
            <v-row justify="center">
                
                <v-col cols="12" md="3">
                    <h1 class="mb-6">Register an account</h1>
                    <v-row>
                        <v-text-field label="Email" v-model="formData.email"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-text-field label="Password" v-model="formData.password"></v-text-field>
                    </v-row>
                    <v-row>
                        <v-btn type="submit">Register</v-btn>
                    </v-row>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script setup>
    import {reactive, ref} from 'vue';
    import {AUTH} from '@/firebase/config';
    import {createUserWithEmailAndPassword} from 'firebase/auth';
    import {useRouter} from 'vue-router';

    const router = useRouter();
    const register = ref(true);
    const formData = reactive({
        email: '',
        password: ''
    });

    const submitForm = () => {
        if(register.value){
            registerUser();
        }else{
            //sign in
        }
    }

    const registerUser = async() => {
        try{
            //register user
            const response = await createUserWithEmailAndPassword(
                AUTH, formData.email, formData.password
            )
            if(!response){
                throw new Error("Registration was not possible.")
            }
            router.push('/');
        }catch(error){
            //catch error and print
            console.log(error);
        }
    }

</script>
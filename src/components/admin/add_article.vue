<!--eslint-disable--> 
<template>
    <Header/>
    <v-container>
        <v-alert
            v-if="showAlert"
            type="warning"
            variant="tonal"
            class="mb-4"
        >
        There was a problem submitting your message.
        </v-alert>
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="pa-6 custom-border">
                    <h1 class="text-red">Please add an article</h1>
                    <p class="pb-2">This information will be sent to the firestore database.</p>
                    <v-form @submit.prevent="submitForm">
                        <v-row>
                            <v-col cols="12">
                                <v-text-field label="Title" v-model="formData.title">

                                </v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <v-textarea label="Description" v-model="formData.description">

                                </v-textarea>
                            </v-col>
                        </v-row>
                        <v-row class="pl-3">
                            <v-btn  type="submit" color="primary">
                                Submit
                            </v-btn>
                        </v-row>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import {DB} from '@/firebase/config';
    import {collection, addDoc} from 'firebase/firestore';
    import {ref, reactive} from 'vue';

    const showAlert = ref(false);
    const formData = reactive({
        title: '',
        description: ''
    });

    const submitForm = async() => {
        try{
            const notesCollection = collection(DB, 'notes');

            await addDoc(notesCollection, {
                ...formData
            });
            //reset the variables after extracting the submission.
            formData.title = '';
            formData.description = '';
        } catch (error) {
            showAlert.value = true;
            console.log('Error submitting the article: ', error);
        }
    }

</script>
<style scoped>
.custom-border {
    border: 2px solid rgb(178, 2, 2) !important;
}
</style>

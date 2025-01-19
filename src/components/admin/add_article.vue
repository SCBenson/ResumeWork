<!--eslint-disable--> 
<template>
    <v-container>
        <h1>Add an article</h1>
        <v-row>
            <v-col col="12">
                <v-form @submit.prevent="submitForm">
                    <v-row>
                        <v-col col="12">
                            <v-text-field label="Title" v-model="title">

                            </v-text-field>
                        </v-col>
                        <v-col>
                            <v-textarea v-model="description">

                            </v-textarea>
                        </v-col>
                    </v-row>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import {DB} from '@/firebase/config';
    import {collection, addDoc} from 'firebase/firestore';
    import {reactive} from 'vue';

    const formData = reactive({
        title: '',
        description: ''
    });

    const submitForm = async() => {
        const notesCollection = collection(DB, 'notes');

        await addDoc(notesCollection, {
            ...formData
        });
        //reset the variables after extracting the submission.
        formData.title = '';
        formData.description = '';
    }

</script>
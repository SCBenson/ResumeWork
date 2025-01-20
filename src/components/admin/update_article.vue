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
        There was a problem updating your message.
        </v-alert>
        <v-row justify="center">
            <v-col cols="12" md="6">
                <v-card class="pa-6 custom-border">
                    <h1 class="text-red">Update article</h1>
                    <p class="pb-2">This information will update the article in the firestore database.</p>
                    <v-form @submit.prevent="updateForm">
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
                        <v-row class="pl-3 d-flex justify-space-between">
                            <v-btn  type="submit" color="primary">
                                Update
                            </v-btn>
                            <v-btn @click="deleteForm" variant="plain" class="text-red">Delete</v-btn>
                        </v-row>
                    </v-form>
                    
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
    import {DB} from '@/firebase/config';
    import {doc, getDoc, updateDoc, deleteDoc} from 'firebase/firestore';
    import {ref, reactive} from 'vue';
    import {useRoute, useRouter} from 'vue-router';

    const route = useRoute();
    const router = useRouter();
    console.log(route.params.id);
    const showAlert = ref(false);
    const formData = reactive({
        title: '',
        description: ''
    });

    const docRef = doc(DB, 'notes', route.params.id);
    getDoc(docRef)
    .then(snapshot => {
        if(!snapshot.exists()){
            throw new Error("Could not find note");
        }
        formData.title = snapshot.data().title;
        formData.description = snapshot.data().description;
    }).catch(error => {
        console.log(error);
    });
    const updateForm = async() => {
        try{
            const docRef = doc(DB, 'notes', route.params.id);
            await updateDoc(docRef, {...formData});
        }catch(error){
            console.log(error);
            showAlert.value = true;
        }
    }
    const deleteForm = async() => {
        try{
            const docRef = doc(DB, 'notes', route.params.id);
            await deleteDoc(docRef, {...formData});
            router.push('/');
        }catch(error){
            console.log(error);
        }
    }
    // const updateForm = async() => {
    //     try{
    //         const notesCollection = collection(DB, 'notes');

    //         await updateDoc(notesCollection, {
    //             ...formData
    //         });
    //         //reset the variables after extracting the submission.
    //         formData.title = '';
    //         formData.description = '';
    //     } catch (error) {
    //         showAlert.value = true;
    //         console.log('Error submitting the article: ', error);
    //     }
    // }

</script>
<style scoped>
.custom-border {
    border: 2px solid rgb(178, 2, 2) !important;
}
</style>

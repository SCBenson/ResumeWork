<!--eslint-disable--> 

<template>
  <Header />

  <v-parallax
    src="@/assets/hero-image.jpg"
    class="align-center justify-center custom-parallax"
    height="800"
  >
    <div class="text-center hero-content">
      <h1 class="text-h1 font-weight-bold text-blue-lighten-5 mb-4 hero-title">
        Resume Work
      </h1>
      <h2 class="text-h4 font-weight-bold text-red-darken-1">
        Your next chapter begins
      </h2>
    </div>
  </v-parallax>

  <ContactForm />
  <v-container>
    <h1 class="text-red pb-3">Firestore Database Collection</h1>
    <v-row>
      <v-col v-for="(notes) in notes" :key="notes.id" cols="12" md="6">
        <v-card>
          <v-card-text>
            <h5 class="text-h5 font-weight-bold">
              {{ notes.title }}
            </h5>
            <p>{{ notes.description }}</p>
          </v-card-text>
          <v-card-actions>
            <router-link :to="'/admin/update_article/' + notes.id" class="text-decoration-none font-weight-bold text-blue mx-2">
            Update Article
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Header from "@/components/header/index.vue";
import ContactForm from "@/components/contact-form/index.vue";
import { DB } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { ref } from "vue";

  const notes = ref([]);

//fetch the notes
const notesCollection = collection(DB, "notes");

getDocs(notesCollection).then((snapshot) => {
  let documents = [];
  snapshot.docs.forEach((doc) => {
    documents.push({ ...doc.data(), id: doc.id });
  });
  notes.value = documents;
  // console.log(documents);
});
</script>

<style scoped>
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4); /* Darker overlay */
}

.custom-parallax :deep(.v-img__img) {
  object-position: center 90% !important;
}

.hero-content {
  position: relative;
  z-index: 1; /* Place text above overlay */
  height: 100%;
}

.hero-title {
  font-size: 3.5rem !important;
  line-height: 1.2 !important;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Add shadow to text */
}

.hero-subtitle {
  font-size: 1.75rem !important;
  line-height: 1.4 !important;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}
</style>

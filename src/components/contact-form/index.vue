<!-- eslint-disable vue/multiline-html-element-content-newline -->
<!-- eslint-disable vue/html-closing-bracket-spacing -->
<!-- eslint-disable vue/mustache-interpolation-spacing -->
<!-- eslint-disable vue/html-closing-bracket-newline -->
<!-- eslint-disable vue/max-attributes-per-line -->
<!-- eslint-disable vue/html-self-closing -->
<template>
    <v-main 
    class="d-flex align-center justify-center" 
    style="min-height: 600px">
    <v-container v-if="show_contact">
      <h1>Have a problem? We'll get back to you.</h1>
      <v-alert
        v-if="contact_notice != ''"
        type="warning"
        variant="tonal"
        class="mb-4"
      >
        There was a problem submitting your message. {{contact_notice}}
      </v-alert>
      <v-row>
        <v-col cols="12">
          <v-form 
            v-model="valid"
            @submit.prevent="sendContactMessage()">
            <v-row>
              <v-col 
                cols="12" 
                md="4">
                <v-text-field
                  v-model="contact_firstName"
                  class="form-control"
                  :counter="10"
                  :rules="nameRules"
                  label="First name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="contact_lastName"
                  class="form-control"
                  :counter="10"
                  :rules="nameRules"
                  label="Last name"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="4">
                <v-text-field
                  v-model="contact_email"
                  class="form-control"
                  :rules="emailRules"
                  label="E-mail"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea 
                  v-model="contact_message"
                  class="form-control"
                  label="Describe your problem here..." 
                  variant="outlined"
                ></v-textarea>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn 
                  type="submit"
                  color="primary"
                >
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    <v-container v-else>
      <h3>Your email has been sent successfully!</h3>
      <p>Thank you for submitting your message to us!</p>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      title: 'ResumeWork',
      show_contact: true,
      contact_firstName: '',
      contact_lastName: '',
      contact_email: '',
      contact_message: '',
      contact_notice: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters.'
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => this.validEmail(v) || 'Email must be valid'
      ],
    }
  },
  methods: {
    sendContactMessage(){
      if(!this.validEmail(this.contact_email)){
        this.contact_notice = 'The email is not properly formatted.'
      } else if (this.contact_message.length < 10) {
        this.contact_notice = 'Your message must be longer than 10 characters.'
      } else {
        const url = `https://sendemail-yru3w7bgja-uc.a.run.app/sendEmail?email_from=${this.contact_email}&message=${this.contact_message}`
        const requestOptions = {
          method: "GET",
          headers: {"Content-Type" : "application/json"}
        }
        fetch(url, requestOptions);
        this.show_contact = false;
      }
    },
    validEmail(email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
}

</script>
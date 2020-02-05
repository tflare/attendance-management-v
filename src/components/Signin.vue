<template>
<v-app>
  <v-content>
  <v-card width="500" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">ログイン</h1>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="ユーザID" prepend-icon="mdi-account-circle" v-model="username" />
        <v-text-field
          label="パスワード"
          :type="showPassword ? 'text' : 'password'"
          prepend-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
           v-model="password"
          @click:append="showPassword = !showPassword"
        />
      </v-form>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
      <v-spacer />
       <v-btn color="primary" @click="signIn">Login</v-btn>
    </v-card-actions>
  </v-card>
  </v-content>
</v-app>
</template>



<script>
import firebase from 'firebase'

export default {
  name: 'Signin',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    signIn: function () {
      firebase.auth().signInWithEmailAndPassword(this.username, this.password).then(
        user => {
          alert('Success!', user.email)
          this.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>

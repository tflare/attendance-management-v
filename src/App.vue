<template>
<v-app>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title>勉強会出席管理システム</v-toolbar-title>
    <v-spacer/>
    <v-btn text rounded href="/">ホーム</v-btn>
    <div v-if="user.uid" key="login">
       <v-btn text rounded href="a" @click="signout">サインアウト</v-btn>
    </div>
    <div v-else key="logout">
      <v-btn text rounded :to="{path:'signin'}">サインイン</v-btn>
    </div>
  </v-app-bar>
  <v-content>
  <router-view />
  </v-content>
  <v-footer app color="primary" dark>
      Hiroyuki Abe
  </v-footer>

</v-app>
</template>

<script>
// firebase モジュール
import firebase from 'firebase';
export default {
  data() {
    return {
      user: {},  // ユーザー情報

    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {}
    })
  },
  methods: {
    // ログアウト処理
    signout() {
      firebase.auth().signOut()
    }
  }
}
</script>

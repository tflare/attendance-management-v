<template>
  <v-app>

      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <!-- ログイン時にはサインアウトのリンクを表示 -->
          <div v-if="user.uid" key="login">
            [{{ user.email }}]
            <a href="a" @click="signout">サインアウト</a>
          </div>
          <!-- 未ログイン時にはサインインのリンクを表示 -->
          <div v-else key="logout">
            <router-link to="/signin">signin</router-link>
          </div>
        </div>
        <router-view/>

      </div>


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

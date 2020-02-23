<template>
  <v-app id="inspire">
    <v-list three-line>
      <template v-for="(event, index) in events">
          <v-list-item
              :key="index"
          >
          <v-list-item-content>
            <v-list-item-title>{{event.title}}</v-list-item-title>
            <v-list-item-subtitle>{{formatListDate(event.startedAt.toDate(), event.endedAt.toDate())}}</v-list-item-subtitle>
            <v-list-item-subtitle>参加者：{{event.accepted}} 補欠者：{{event.waiting}}</v-list-item-subtitle>
            <v-list-item-subtitle><v-btn small color="success" rounded :to="{path:'eventuser/' + event.id}">詳細画面へ</v-btn></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider :key="event.id"></v-divider>
      </template>
    </v-list>

    <div v-if="authUser.uid" key="login">
      <v-container fluid>
        https://connpass.com/event/161217/の数字の部分をを入力してください。<br />
        URLが https://connpass.com/event/161217/ のイベントの場合、イベントIDは 161217 になります。
        <v-row>
          <v-col cols="2">
            <v-subheader>https://connpass.com/event/</v-subheader>
          </v-col>
          <v-col cols="1">
            <v-text-field id="inputEventID" type="number" label="イベントID"></v-text-field>
          </v-col>
          <v-col cols="1">
            <v-btn depressed small color="primary" @click="pageCreate()">ページ作成</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-app>
</template>

<script>
  import firebase from 'firebase';
  import {createEvent} from '../_helpers/createEvent';
  import {formatDate} from '../_helpers/formatDate';

  export default {
    name: 'EventList',
    data() {
      return {
        events: [],
        authUser: {}
      }
    },
    created() {
      firebase.auth().onAuthStateChanged(authUser => {
        this.authUser = authUser ? authUser : {}
      })
    },
    firestore() {
      return {
        events: firebase.firestore().collection('event')
      }
    },
    methods: {
      pageCreate(){
        const eventID = document.getElementById('inputEventID').value;
        createEvent(eventID);
        alert("イベント情報作成中です。少々お待ちください");
      },
      formatListDate(startDate, EndDate){
        return(formatDate(startDate, EndDate));
      }
    },
  }

</script>

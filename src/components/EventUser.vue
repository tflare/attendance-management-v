<template>
  <v-app id="inspire">
    <v-card app>
      <v-toolbar app dark class="indigo">
        <v-toolbar-title class="headline">{{ event.title }}  {{formatListDate(event.startedAt.toDate(), event.endedAt.toDate())}}</v-toolbar-title>
      </v-toolbar>
    </v-card>
    <v-container fluid>
      <v-row v-for="(row, key) in rowCount" :key="key">
        <div v-for="(user, key2) in itemCountInRow(row)" :key="key2">
          <v-col>{{user.displayName}}</v-col>
          <v-col>
            <v-btn small color="primary" @click="updateUser(user, false)" :disabled="!user.attendance">出席</v-btn>
            <v-btn small color="error" :disabled="user.attendance" @click="updateUser(user, true)">欠席</v-btn>
          </v-col>
          <v-divider/>
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
  import firebase from 'firebase';
  import {formatDate} from '../_helpers/formatDate';

  export default {
    name: 'EventUser',

    data () {
      return {
        event: "",
        users: []
      }
    },

    firestore() {
      const eventRef = firebase.firestore().collection('event').doc(this.$route.params.eventID);
      return {
        event: eventRef,
        users: eventRef.collection('users').where("presenter", "==", false)
      }
    },

    computed: {
      colNumber: function() {
        let number;
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': number = 2; break;
          case 'sm': number = 4; break;
          case 'md': number = 6; break;
          case 'lg': number = 8; break;
          case 'xl': number = 10; break;
        }
        return number;
      },

      rowCount:function(){
        return Math.ceil(this.users.length / this.colNumber);
      },
    },

    methods:{
      itemCountInRow:function(row){
        return this.users.slice((row - 1) * this.colNumber, row * this.colNumber)
      },

      updateUser:function(doc, attend){
        doc.attendance = attend;
        doc.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

        const eventRef = firebase.firestore().collection('event').doc(this.$route.params.eventID);
        eventRef.collection('users').doc(doc.id).set(doc)
        //.then(() => {
        //  console.log('attendance updated')
        //}, reason => {
        //  console.error('attendance update error', reason)
        //})
        this.$firestoreRefs.users.set(doc)
      },

      formatListDate(startDate, EndDate){
        return(formatDate(startDate, EndDate));
      }
    }
  }

</script>

<template>
  <v-list>
    <template v-for="(attendance, index) in attendances">
        <v-list-item
            :key="index"
        >
        <v-list-item-content>
          <v-list-item-subtitle class="text--primary subheading">{{attendance.userID}}</v-list-item-subtitle>
          <v-list-item-subtitle class="text--primary subheading"><v-btn small color="primary">出席</v-btn><v-btn small color="error">欠席</v-btn></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider :key="attendance.id"></v-divider>
    </template>
  </v-list>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'EventUser',
    data: () => ({
      attendances: [],
    }),

    firestore() {
      return {
        // firestoreのattendanceコレクションを参照
        attendances: firebase.firestore().collection('attendance').where("eventID", "==", 151286)

      }
    },

  }

</script>

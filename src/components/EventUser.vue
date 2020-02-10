<template>
  <v-container fluid>
    <v-row v-for="(idx, key) in Math.ceil(attendances.length / colNumber)" :key="key">
      <v-col v-for="(attendance, key2) in attendances.slice((idx - 1) * colNumber, idx * colNumber)" :key="key2">
        {{attendance.userID}} <v-btn small color="primary">出席</v-btn><v-btn small color="error">欠席</v-btn>
      </v-col>
    </v-row>
  </v-container>
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
        attendances: firebase.firestore().collection('attendance').where("eventID", "==", Number(this.$route.params.eventID))

      }
    },

    computed: {
      colNumber: function() {
        let number;
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': number = 1; break;
          case 'sm': number = 2; break;
          case 'md': number = 3; break;
          case 'lg': number = 4; break;
          case 'xl': number = 5; break;
        }
        return number;
      },
    },
  }

</script>

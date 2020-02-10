<template>
  <v-container fluid>
    <v-row v-for="(idx, key) in rowCount" :key="key">
      <span v-for="(attendance, key2) in itemCountInRow(idx)" :key="key2">
        <v-col>{{attendance.userID}}</v-col>
        <v-col><v-btn small color="primary">出席</v-btn><v-btn small color="error">欠席</v-btn></v-col>
        <v-divider/>
      </span>
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
          case 'xs': number = 2; break;
          case 'sm': number = 4; break;
          case 'md': number = 6; break;
          case 'lg': number = 8; break;
          case 'xl': number = 10; break;
        }
        return number;
      },

      rowCount:function(){
        return Math.ceil(this.attendances.length / this.colNumber);
      },
    },

    methods:{
      itemCountInRow:function(idx){
        return this.attendances.slice((idx - 1) * this.colNumber, idx * this.colNumber)
      }
    }
  }

</script>

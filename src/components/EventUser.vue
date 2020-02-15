<template>
  <v-container fluid>
    <v-row v-for="(row, key) in rowCount" :key="key">
      <div v-for="(attendance, key2) in itemCountInRow(row)" :key="key2">
        <v-col>{{attendance.displayName}}</v-col>
        <v-col><v-btn small color="primary" @click="updateAttendance(attendance, false)" :disabled="!attendance.attendance">出席</v-btn><v-btn small color="error" :disabled="attendance.attendance" @click="updateAttendance(attendance, true)">欠席</v-btn></v-col>
        <v-divider/>
      </div>
    </v-row>
  </v-container>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'EventUser',

    data () {
      return {
        attendances: []
      }
    },

    firestore() {
      return {
        // firestoreのattendanceコレクションを参照
        attendances: firebase.firestore().collection('attendance').where("eventID", "==", Number(this.$route.params.eventID)).where("presenter", "==", false)

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
      itemCountInRow:function(row){
        return this.attendances.slice((row - 1) * this.colNumber, row * this.colNumber)
      },

      updateAttendance:function(doc, attend){
        doc.attendance = attend;
        doc.updatedAt = firebase.firestore.FieldValue.serverTimestamp();

        firebase.firestore().collection('attendance').doc(doc.id).set(doc)
        //.then(() => {
        //  console.log('attendance updated')
        //}, reason => {
        //  console.error('attendance update error', reason)
        //})
        this.$firestoreRefs.attendances.set(doc)
      }
    }
  }

</script>

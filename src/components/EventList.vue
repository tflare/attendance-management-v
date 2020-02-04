<template>
  <v-list three-line>
    <template v-for="(event, index) in events">
        <v-list-item
            :key="index"
        >
        <v-list-item-content>
          <v-list-item-subtitle class="text--primary subheading">{{event.title}}</v-list-item-subtitle>
          <v-list-item-subtitle class="text--primary subheading">{{event.startedAt}}〜{{event.endedAt}}</v-list-item-subtitle>
          <v-list-item-subtitle class="text--primary subheading">参加者：{{event.accepted}}補欠者：{{event.waiting}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider :key="event.id"></v-divider>
    </template>
  </v-list>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'EventList',
    data: () => ({
      events: [],
    }),

    firestore() {
      return {
        // firestoreのeventコレクションを参照
        events: firebase.firestore().collection('event')

      }
    },
  }

</script>

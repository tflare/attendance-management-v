<template>
  <div class="eventList">



  </div>
</template>

<script>
import { getEventInfo } from '../_helpers/eventInfo.js';
export default {
  name: 'EventList',
  props: {
    msg: String
  },

  methods: {
    getEventList() {
      //書いている途中
      eventId, eventTitle  = getEventInfo()

    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

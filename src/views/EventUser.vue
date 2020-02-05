<template>
  <div class="home">

    <EventUser />
  </div>
</template>

<script>
// @ is an alias to /src
import EventUser from '@/components/EventUser.vue'

export default {
  name: 'home',
  components: {
    EventUser
  }
}
</script>

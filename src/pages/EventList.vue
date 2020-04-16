<template>
  <div>
    <h1>Event Listing</h1>
    <router-link :to="{ name: 'event-show', params: { id: 1 } }"
      >Show event #1</router-link
    >
    <EventCard />
  </div>
</template>
<script>
import EventCard from "@/components/EventCard.vue";

export default {
  components: {
    EventCard
  }
};
</script>

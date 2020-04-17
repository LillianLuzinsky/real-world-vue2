<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard />
    <BaseIcon />
    <BaseButton />
    <BaseInput />
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

<style lang="scss">
h1 {
  font-size: 50px;
}
</style>

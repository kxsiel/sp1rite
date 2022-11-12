<script setup lang="ts">
</script>

<template>
  <v-typical
    class="blink"
    :steps="['🕑s', 250, '🕑so', 250, '🕑soo', 250, '🕑soon', 250,, '🕑soon.', 250, '🕑soon..', 250, '🕑soon...', 250, '🕑soon...', 250, ]"
    :loop="Infinity"
    :wrapper="'h2'"
  ></v-typical>
</template>

<script lang="ts">
import VTypical from 'vue-typical';

export default {
  components: {
    VTypical,
  },
};
</script>


<style scoped>
header {
  line-height: 1.5;
}

.typicalWrapper::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% { opacity: 0; }
}

a {
  text-align: center;
  font-size: x-large;
  transition: 2s;
}
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 5rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  .text {
    text-align: center;
  }
}
</style>

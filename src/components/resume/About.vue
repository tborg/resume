<template>
  <div class="row about">
      <h6 class="twelve columns">About</h6>
      <p class="twelve columns">{{about}}</p>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: ['about'],
  data() {
    return {};
  },
};
</script>

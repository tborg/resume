<template>
  <section class="row header">
      <div class="eleven columns name">
        <h2><span class="first">{{name.first}}</span> <span class="last">{{name.last}}</span></h2>
      </div>
      <div class="one column links">
        <a :href="fork">fork</a>
        <a :href="print">print</a>
      </div>
  </section>
</template>

<script>
export default {
  name: 'header-nav',
  props: ['name', 'print', 'fork'],
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header h1 {
    margin-left: 0;
  }
  .header .name {
    flex: 2 0 auto;
    color: darkcyan;
  }
  .header .name .first {
    font-weight: 300;
  }
</style>

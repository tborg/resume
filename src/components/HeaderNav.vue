<template>
  <section>
      <div class="column name">
        <h1><span class="first">{{name.first}}</span> <span class="last">{{name.last}}</span></h1>
      </div>
  </section>
</template>

<script>
export default {
  name: 'header-nav',
  props: ['name', 'headshot', 'email'],
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .column.main {
    margin-left: 0;
  }
  .column.name {
    flex: 2 0 auto;
    color: darkcyan;
  }
  .column.name .first {
    font-weight: 300;
  }
  .column.email {
    flex: 1 1 auto;
    justify-content: flex-end;
    align-self: flex-end;
    font-size: 12px;
  }
  img {
    height: 60px;
    width: 60px;
    border-radius: 45px;
    margin-left: 3em;
    margin-right: 1em;
  }
  h1 {
    font-size: 34px;
    margin-bottom: 0;
  }
</style>

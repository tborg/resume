<template>
  <div class="column main">
    <div class="job" v-for="job in jobs">
      <div class="company">
        <h3><a :href="job.website" target="_blank"></a>{{job.company}} - {{job.title}}</h3>
        <p class="period">{{job.from}} - {{job.to}}</p>
      </div>
      <div class="sidebar" v-html="job.sidebar"></div>
      <div class="description" v-html="job.description"></div>
    </div>
  </div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'left-nav',
  props: ['experience'],
  data() {
    return {};
  },
  computed: {
    jobs() {
      return this.experience.map(job => Object.assign({}, job, {
        description: marked(job.description),
        sidebar: marked(job.sidebar),
      }));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .job {
    width: 100%;
  }
  .company {
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
    border-bottom: 2px solid purple;
  }
  .job .sidebar {
    display: inline-block;
    float: right;
    margin-left: 1em;
    margin-top: 0.5em;
  }
  .job .sidebar strong {
    color: darkcyan;
  }
  .job .sidebar ul ul {
    margin-left: 1em;
    margin-top: 0.5em;
  }
  .job .description strong {
    color: purple;
  }
  h3 {
    flex: 2 1 0;
    align-self: flex-start;
    margin: 0;
    color: darkcyan;
  }
  .period {
    flex: 1 1 0;
    align-self: flex-start;
    font-size: 1.1em;
    padding-top: 0.07em;
    margin: 0;
    color: darkcyan;
  }
</style>

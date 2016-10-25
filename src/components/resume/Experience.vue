<template>
  <div class="experience row">
    <div class="job" v-for="job in jobs">
      <div class="company row">
        <div class="eight columns">
          <h6><a :href="job.website" target="_blank"></a>{{job.company}} - {{job.title}}</h6>
        </div>
        <div class="four columns">
          <p class="period">{{job.from}} - {{job.to}}</p>
        </div>
      </div>
      <div class="sidebar four columns u-pull-right" v-html="job.sidebar"></div>
      <div class="description eight columns" v-html="job.description"></div>
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
    border-bottom: 2px solid purple;
  }
  .job .sidebar {
    display: inline-block;
    float: right;
    padding-top: 1.5em;
  }
  .job .sidebar strong {
    color: darkcyan;
  }
  .job .sidebar ul ul {
    margin-left: 1em;
    margin-top: 0.5em;
  }
  .job .description {
    margin-left: 0;
  }
  .job .description p:first-child {
    padding-top: 1em;
  }
  .job .description strong {
    color: purple;
  }
  h6 {
    margin: 0;
    color: darkcyan;
  }
  .period {
    font-size: 0.8em;
    padding-top: 0.3em;
    margin: 0;
    color: darkcyan;
  }
</style>

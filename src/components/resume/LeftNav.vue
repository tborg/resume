<template>
    <section class="sidebar">
      <About :about="about" />
      <Education :education="education" />
      <Tools :tools="tools" />
      <Languages :languages="languages" />
    </section>
</template>

<script>
import About from './About';
import Education from './Education';
import Tools from './Tools';
import Languages from './Languages';

export default {
  name: 'left-nav',
  props: ['education', 'tools', 'languages', 'about'],
  data() {
    return {};
  },
  components: {
    About,
    Education,
    Tools,
    Languages,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .sidebar {
    font-size: 12px;
    margin-top: 0.75em;
  }
  .sidebar h6 {
    font-size: 16px;
    font-weight: bolder;
    text-transform: capitalize;
    color: darkcyan;
    border-bottom: 1px solid purple;
  }
  .sidebar p {
    font-size: 12px;
    margin-bottom: 0.5em;
  }
  .school {
    font-weight: bolder;
    margin-bottom: 0;
    font-size: 14px;
  }
  .city {
    font-size: 14px;
    line-height: 12px;
    margin-top: 0;
  }
  .degree {
    font-weight: bold;
    min-width: 2.5em;
    text-align: right;
    display: inline-block;
  }
  .sidebar .tag {
    padding: 0.5em;
    margin: 0.3em;
    border: 1px solid lightblue;
    border-radius: 0.5em;
    color: purple;
  }
  .tag.leader {
    font-weight: bolder;
    border: none;
    color: black;
  }
</style>

<template>
  <div id="resume">
    <header-nav :name="name" :print="print" :fork="fork"></header-nav>
    <section class="row">
      <div class="three columns">
        <left-nav :education="education" :tools="tools" :languages="languages" :about="about"></left-nav>
      </div>
      <div class="nine columns">
        <experience :experience="experience"></experience>
      </div>
    </section>
  </div>
</template>

<script>
import resume from 'json!yaml!assets/resume.yaml';
import HeaderNav from './resume/HeaderNav';
import LeftNav from './resume/LeftNav';
import Experience from './resume/Experience';

export default {
  name: 'app',
  components: {
    HeaderNav,
    LeftNav,
    Experience,
  },
  data() {
    return resume;
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
}

#app ul {
  list-style: none;
  padding-left: 0;
  text-align: left;
  font-size: 12px;
}

#app p {
  margin-bottom: 1rem;
}

</style>

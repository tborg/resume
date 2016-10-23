<template>
  <div id="app">
    <header-nav :name="name" :email="email"></header-nav>
    <section>
      <left-nav :education="education" :tools="tools" :languages="languages" :about="about"></left-nav>
      <experience :experience="experience"></experience>
    </section>
  </div>
</template>

<script>
import resume from 'json!yaml!assets/resume.yaml';
import HeaderNav from './components/HeaderNav';
import LeftNav from './components/LeftNav';
import Experience from './components/Experience';

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

}

ul {
  list-style: none;
  padding-left: 0;
  text-align: left;
  font-size: 12px;
  max-width: 220px;
}

section {
  display: flex;
  flex-wrap: row wrap;
  justify-content: flex-start;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.column {
  display: flex;
  margin: 0.5em;
  align-self: flex-end;
}

.column.main {
  flex: 10 1 0;
  margin-bottom: 0;
  margin-left: 1em;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: flex-start;
  max-width: 545px;
}
.column.left {
  flex: 1 1 0;
}
</style>

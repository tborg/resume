<template>
  <div id="app" class="container">
    <section class="row top header">
        <div class="eleven columns">
          <h1
            v-bind:class="{muted: !this.home, pushed: !this.home}">
            Hi
          </h1>
        </div>
      <router-link to="/resume" class="one column">resume</router-link>
    </section>
    <section id="main">
      <transition name="slide-fade">
        <router-view></router-view>
      </transition>
    </section>
  </div>
</template>

<script>
import 'skeleton-css/css/normalize.css';
import 'skeleton-css/css/skeleton.css';

export default {
  name: 'app',
  data() {
    return {};
  },
  computed: {
    home() {
      return this.$route.path === '/';
    },
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

.header a {
  text-decoration: none;
  color: grey;
  font-size: 12px;
}

.header a:hover {
  text-decoration: underline;
}

h1 {
  transition: all .8s cubic-bezier(0, 0.8, 0.9, 1.0);
}

.top.header .muted {
  font-size: 1.5rem;
  color: lightblue;
}

.top.header .pushed {
  margin-left: 98%;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  opacity: 0;
}

</style>

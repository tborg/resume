<template>
  <div class="row education">
    <h6 class=" twelve columns">Education</h6>
    <div class="twelve columns">
      <div class="row school-group" v-for="item in education">
        <p class="twelve columns">
          <span class="school">{{item.school}}</span>
          <span class="city">{{item.city}}</span>
        </p>
        <p class="twelve columns" v-for="degree in item.degrees">
          <span class="degree">{{degree.degree}}</span>
          <span class="majors">{{degree.subjects.join(', ')}}, {{degree.year}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'education',
  props: ['education'],
  data() {
    return {};
  },
};
</script>

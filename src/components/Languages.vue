<template>
  <div class="row languages">
    <h6 class=" twelve columns">Languages</h6>
    <div class="twelve columns language" v-for="item in languages">
      <div class="tags row">
        <span class="tag u-pull-left leader">{{item.status}}</span>
        <span v-for="tag in item.tags" class="tag u-pull-left">{{tag}}</span>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'languages',
  props: ['languages'],
  data() {
    return {};
  },
};
</script>

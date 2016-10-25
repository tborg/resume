<template>
  <div class="row tools">
    <h6 class=" twelve columns">Tools</h6>
    <div class="twelve columns tool" v-for="item in tools">
      <div class="tags row">
        <span class="tag u-pull-left leader">{{item.subject}}</span>
        <span v-for="tag in item.tags" class="tag u-pull-left">{{tag}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tools',
  props: ['tools'],
  data() {
    return {};
  },
};
</script>

<template>
    <div class="wp">{{text}}</div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import _ from 'lodash';
  
export default defineComponent({
  setup(props) {
    console.log(_.get(props, 'a'));
    return {
      onAdd,
      option,
      size,
      text: 'hello world',
    };
  },
});
</script>

<style>
.wp {
    color: pink;
}
</style>
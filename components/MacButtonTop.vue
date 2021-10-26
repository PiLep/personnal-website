<template>
  <div
    class="mac-button-top"
    :style="'background-color:'+color"
  />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: false,
      default: '#eee'
    }
  },
  data: () => ({
  }),
  methods: {
  }
}
</script>

<style lang="postcss" scoped>
.mac-button-top {
  @apply rounded-full h-3 w-3 mx-1 my-2;
  @apply bg-gray-200;
}
</style>

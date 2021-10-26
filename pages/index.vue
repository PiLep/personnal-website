<template>
  <div>
    <div class="main p-1 py-2 pb-8 md:p-8 md:py-16 gap-1">
      <div class="hidden md:flex md:w-1/4 ">
        <file-tree />
      </div>
      <div class="flex w-full md:w-3/4">
        <editor />
      </div>
      <shell v-if="1===2" />
    </div>
    <footer-content libelle="Développé avec ❤️ en Normandie" />
    <babouche />
  </div>
</template>

<script>
import Babouche from '../components/Babouche.vue'
import Editor from '../components/Editor.vue'
import FileTree from '../components/FileTree.vue'
import FooterContent from '../components/FooterContent.vue'
import Shell from '../components/Shell.vue'

export default {
  components: { Editor, FileTree, Shell, Babouche, FooterContent },
  /*
   ** programmatically start the loader so we force the page to take x2seconds to load
   */
  mounted () {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
}
</script>

<style lang="postcss" scoped>
/* Common */

.main {
    @apply flex flex-row;
    @apply min-h-full h-screen;
    @apply bg-gradient-to-br from-gray-700 via-gray-800 to-gray-700;
    perspective: 1000px;
    @apply font-mono;
}
</style>

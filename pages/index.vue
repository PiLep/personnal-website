<template>
  <div class="main overflow-hidden">
    <div class="p-2 m-2 md:p-10 md:m-10 z-10">
      <h1 class="flex font-main bg-gradient-to-r from-orange-200 via-blue-400 to-purple-600 text-6xl font-bold text-transparent bg-clip-text animate-gradient">
        Pierre Lepetit
      </h1>
      <div class="flex items-center gap-2 -mt-6 font-secondary text-4xl font-normal bg-gradient-to-r from-red-200 via-orange-400 to-pink-600 text-transparent bg-clip-text animate-gradient">
        <span>CTO</span>
        <span class="">@</span>
        <a href="https://kanta.fr" target="_blank" class="hover:font-black">Kanta</a>
      </div>

      <div class="flex flex-row gap-4 p-4 items-center">
        <a href="https://github.com/pilep" target="_blank" class="w-8 opacity-75">
          <img src="~/assets/img/github-mark.svg" class="logo">
        </a>
      </div>
    </div>
    <babouche />
  </div>
</template>

<script>
import Babouche from '../components/Babouche.vue'

export default {
  components: { Babouche },
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
    @apply bg-gray-900;
    perspective: 1000px;
}

.animate-gradient {
  background-size: 300%;
  -webkit-animation: animatedgradient 60s ease infinite alternate;
  -moz-animation: animatedgradient 60s ease infinite alternate;
  animation: animatedgradient 60s ease infinite alternate;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.logo {
    filter: invert(1);
}
</style>

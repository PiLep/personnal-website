<template>
  <div class="fixed top-0 z-50 text-center text-xs w-full text-gray-600" style="background:#222325">
    <div class="flex flex-row items-center text-white font-bold text-normal">
      <img id="apple-logo" alt="apple-logo" class="h-4 m-1 mx-4 text-white" src="~/assets/img/apple.svg">
      <div>Code</div>

      <div class=" ml-auto flex flex-row gap-1 px-2">
        <div>{{ capitalize(now.toLocaleDateString('fr-FR', { weekday: 'short', month: 'short', day: 'numeric' })) }}</div>
        <div> à </div>
        <div>{{ now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    libelle: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      now: new Date(Date.now())
    }
  },

  computed: {
    // ttt: () => {
    //   return event ? event.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) : null
    // }
  },
  methods: {
    capitalize (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
}
</script>

<template>
  <div class="fixed bottom-0 text-center m-2 text-xs w-full text-gray-600">
    {{ libelle }}
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
  data: () => ({
  }),
  methods: {
  }
}
</script>

<template>
  <div id="" class="window shell">
    <div style="text-align: left;">
      <span style="color: rgb(139, 233, 253); background-color: rgba(68, 68, 68, 0.8);">></span> I am a
      guacamole lover 🥑
    </div>
    <div style="text-align: left;">
      <span style="color: rgb(139, 233, 253); background-color: rgba(68, 68, 68, 0.8);">></span> Vous pouvez
      le laisser un message par ici
    </div>
    <div id="message-stack" />
    <div style="text-align: left;">
      <span style="color: rgb(139, 233, 253); background-color: rgba(68, 68, 68, 0.8);">~/messages ></span>
      <input
        id="messager"
        class="command-input"
        type="text"
        placeholder="Ecrire et appuyer sur Entrée"
      >
      <div
        style="width: 1px; height: 1.2em; background-color: oldlace; display: inline-block;padding:2px;margin:2px; vertical-align: middle;"
        class="animated infinite flash"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
  }
}
</script>

<style lang="postcss" scoped>
/* Common */

.window {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    @apply rounded;
}

/* Command terminal right */

.shell {
    /* position: absolute; */
    /* height: 80%; */
    /* right: 5%; */
    /* max-width: 350px; */
    color: rgb(219, 219, 219);
    font-size: normal;
    background-color: #0d101edd;
    transform: translateZ(20px) rotateX(0deg);
    padding: 8px;
}

.command-input {
    background-color: transparent;
    border: none;
    width: 100%;
    color: rgb(219, 219, 219);
}

.command-input:focus {
    outline: none;
}

.command-error {
    color: rgb(170, 59, 59);
}

.command-input::placeholder {
    padding-left: 3px;
}
</style>

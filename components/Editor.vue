<template>
  <div class="window editor">
    <div class="editor-top-bar flex h-8 p-2 items-center">
      <mac-button-top color="#FF605C" />
      <mac-button-top color="#FFBD44" />
      <mac-button-top color="#00CA4E" />
    </div>
    <div class="editor-content">
      <p>
        <span class="var-verb-declaration-color">let</span>
        <span class="var-name-color">firstname</span>
        =
        <span class="string-color">'Pierre'</span>
        <br>
        <span class="var-verb-declaration-color">let</span>
        <span class="var-name-color">lastname</span>
        =
        <span class="string-color">'Lepetit'</span>
      </p>

      <p style="color: rgb(72, 129, 55);">
        <i>// Euh bonjour</i>
      </p>

      <p>
        <span class="var-verb-declaration-color">let</span>
        <span class="var-name-color">occupations</span>
        = <span class="array-color">[</span>
        <span class="string-color">'Co-founder @</span>
        <a
          href="https://kanta.fr"
          target="_blank"
          class="animated pulse"
          style="color: #F4971E; font-weight: 800; display: inline-block;"
        >
          <img id="kantalogo" alt="logo_Kanta" style="height:15px;" src="~/assets/img/logo.svg">
        </a><span class="string-color">'</span>,
        <span class="string-color">'CTO'</span>
        <span class="array-color">]</span>
      </p>

      <p /><div>
        <span class="var-verb-declaration-color">let </span>
        <span class="var-name-color">contact</span>
        = <span class="array-color">[</span>
      </div>
      <div class="multiline-array-content-padding">
        <span class="var-name-color">{ email: </span><a
          href="mailto:contact@pierrelepetit.com"
          target="_blank"
        ><span
          class="string-color editor-link"
          style="display:inline-block; font-weight: 800"
        >'contact@pierrelepetit.com'</span></a>
        <span class="brackets-color">}</span>,<br>
        <span class="var-name-color">{
          <img id="kantalogo" alt="logo_Kanta" style="height:18px; display:inline" src="~/assets/img/linkedin.svg">:</span> <a
          href="https://www.linkedin.com/in/pilep/"
          target="_blank"
        >
          <span
            style="font-weight: 800;"
            class="string-color editor-link"
          >'https://www.linkedin.com/in/pilep/'</span></a>
        <span class="brackets-color">}</span>
        <br>
        <span class="array-color multiline-array-close">]</span>
      </div>
    </div>
  </div>
</template>

<script>
import MacButtonTop from './MacButtonTop.vue'
export default {
  data: () => ({
  }),
  methods: {
    MacButtonTop
  }
}
</script>

<style lang="postcss" scoped>
/* Common */

.window {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    @apply rounded;
    @apply font-light;
}

/* Editor */

.editor {
    @apply w-full;
    z-index: 20;
    /* position: absolute; */
    /* max-width: 800px; */
    /* height: 90%; */
    background-color: #222325;
    transform: translateZ(20px) rotateX(0deg);
    /* left: 45%; */
}

::selection {
  background-color: #1e3a55;
}

.editor-top-bar {
    border-radius: 4px 4px 0px 0px;
    background-color: rgb(40, 40, 40);
}

.editor-content {
    @apply p-4;
    @apply text-white;
}

.editor-link:hover {
    text-decoration: underline;
}

.var-verb-declaration-color {
    color: rgb(48, 90, 146)
}

.var-name-color {
    color: rgb(79, 122, 178)
}

.array-color {
    color: rgb(151, 57, 168)
}

.multiline-array-content-padding {
    margin-left: 25px;
}

.multiline-array-close {
    margin-left: -25px;
}

.brackets-color {
    color: rgb(79, 122, 178)
}

.string-color {
    color: rgb(183, 107, 77)
}
</style>

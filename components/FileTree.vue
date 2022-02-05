<template>
  <div id="" class="w-full window filetree">
    <div>
      <div class="file-node active">
        <span style="color: rgba(255, 196, 79, 1); font-weight: 500;">
          JS
        </span>
        Vue.js
      </div>
      <div class="file-node">
        <span style="color: rgba(203, 153, 52, 0.4)">
          <img class="inline mr-2" src="~/assets/img/php.svg" style="width: 16px; text-align: center;">
        </span>Laravel.php
      </div>
      <div class="file-node">
        <span style="color: rgba(139, 233, 253,0.4);">#</span> Tailwind.css
      </div>
      <div class="folder-node">
        <span style="color: rgba(139, 233, 253,0.4);vertical-align: middle;">
          <font-awesome-icon icon="folder-open" class="" />
        </span> ressources

        <div style="margin-left:15px">
          <div class="file-node">
            <a target="_blank" class="visible curiculum-link" href="Pierre_Lepetit_CV.pdf">
              <span style="color: rgba(190, 49, 49, 0.629); vertical-align: middle;">
                <font-awesome-icon icon="file-alt" class="mr-2" />
              </span>Curiculum.pdf
            </a>
          </div>
        </div>
      </div>
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

/* Filetree left */

.filetree {
    transform-style: preserve-3d;
    transform: rotateX(0deg);
    @apply flex flex-col p-2 text-sm;
        background-color: #222325;

}

.folder-node {
    width: 100%;
    color: #90939c;
    padding: 6px;
    margin: 8px;
    margin-left: 0;
    border-radius: 4px;
}

.file-node {
    width: 100%;
    color: #90939c;
    background-color: #303134;
    padding: 6px;
    margin: 8px;
    margin-left: 0;
    border-radius: 4px;
    transition: all 0.5s ease-out;
    box-shadow: 0px 4px 0px #38393d, 0 4px 16px rgba(0, 0, 0, 0.2);
}

.file-node.active {
    background-color: #4c4e53;
    color: #e1e2e4;
    box-shadow: 0px 4px 0px #38393d, 0 4px 16px rgba(0, 0, 0, 0.2);
    font-weight: 500;
    /* transform: translateZ(15px); */

}

.file-node:hover {
    background-color: #4c4e53;
    color: #e1e2e4;
    box-shadow: 0px 4px 0px #38393d, 0 4px 16px rgba(0, 0, 0, 0.2);
    font-weight: 500;
    transform: translateZ(5px);
    transition: all 0.5s ease-out;
}

.curiculum-link {
    text-decoration: none;
    color:#90939c;
    transition: all 0.5s ease-out;
}
.curiculum-link:hover {
    text-decoration: none;
    color:#e1e2e4;
    transition: all 0.5s ease-out;
}
</style>

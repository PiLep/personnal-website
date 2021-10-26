<template>
  <div class="fixed bottom-0">
    <div class="babouche">
      <div class="babouche_eye" />
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

.babouche {
  width: 128px;
  height: 163px;
  animation-name: slidein, bab;
  animation-duration: 6s, 10s;
  animation-iteration-count: 1, infinite;
  transform: translate(-20px,20px);
  animation-delay: 0s, 6s;
  background: url('~assets/img/babouche_128.png');
}

.babouche:hover {
    animation-name: slideout;
    animation-duration: 2s;
}
@keyframes slideout {
  from {
    transform: translate(-20px,20px);
  }
  to {
    transform: translate(-200px,200px);
  }
}

@keyframes slidein {
  from {
    transform: translate(-200px,200px);
  }

  75% {
    transform: translate(0px,0px);
  }

  to {
      transform: translate(-20px,20px);
  }
}

  @keyframes bab {
  from {
      transform: translate(-20px,20px);
  }
  50% {
    transform: translate(0px,0px);
  }

  to {
      transform: translate(-20px,20px);
  }
}

.babouche_eye{
  position: relative;
  background: url('~assets/img/babouche_128_eye.png');
  width: 25px;
  height: 21px;
  opacity: 0;
  left: 25px;
  top:56px;
  transform: rotate(55deg);

  animation-name: blink;
  animation-iteration-count: infinite;
  animation-delay: 6s;
  animation-duration: 8s;

}
@keyframes blink {
  from {
      opacity: 0;
  }

  52% {
    opacity: 0;
  }

  55% {
    opacity: 100%;
  }

  58% {
    opacity: 0;
  }

  to {
      opacity: 0;
  }
}
</style>

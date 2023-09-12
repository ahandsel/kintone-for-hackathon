<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'
import { handleBackgroundImage } from '../utils/background-img'

const props = defineProps({
  image: {
    // random image from a curated Unsplash collection by Anthony
    default: 'https://source.unsplash.com/collection/94734566/1920x1080',
  },
  dim: {
    type: Number,
    default: 50,
  },
})

const style = computed(() => handleBackgroundImage(props.image, props.dim))

</script>

<template>
  <div
    class="slidev-layout cover text-center"
    :style="style"
  >
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
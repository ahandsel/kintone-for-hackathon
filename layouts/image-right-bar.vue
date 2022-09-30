<!-- my-image-right -->
<template>
  <div class="relative h-full intro grid grid-cols-12">
    <div class="absolute h-full w-full" style="z-index: -10">
      <BubbleFrame v-if="!hideFrame" />
    </div>

    <!-- Layout -->
    <div :class="[
      'slidev-layout my-auto',
      image ? 'col-span-6' : 'col-span-12',
      equal ? 'col-span-6' : 'col-span-8',
    ]">
      <slot /> <!-- Grab Markdown SliDev content -->
    </div>

    <!-- Image -->
    <div :class="[
      equal ? 'col-span-6' : 'col-span-4',
      'my-auto h-full',
    ]">
      <img :src="image" class="my-auto mx-auto w-auto" />
    </div>

  </div>
</template>

<script setup lang="ts">
// Dependencies
import { computed } from "vue";
// import { computed, defineProps } from "vue";

// Utils
import { handleBackground } from "../utils/index";

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  equal: {
    type: Boolean,
    default: false,
    required: false,
  },
  hideFrame: {
    type: Boolean,
    default: false,
  }
});

const style = computed(() =>
  handleBackground(props.image)
);
</script>
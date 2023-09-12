<!--
  Usage:

```md
---
layout: simple
---

# Title

Text

-->

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
});
</script>

<template>
  <div class="relative h-full intro grid grid-cols-12">
    <div class="absolute h-full w-full" style="z-index: -10">
      <BubbleFrame v-if="!hideFrame" />
    </div>
    <!-- Layout -->
    <div class="slidev-layout my-auto col-span-12">
      <slot /> <!-- Grab Markdown SliDev content -->
    </div>
  </div>
</template>
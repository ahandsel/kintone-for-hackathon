<!--
  Usage:

```md
---
layout: basic
---
```
-->

<script setup lang="ts">
const props = defineProps({
  class: {
    type: String,
  },
});
</script>

<template>
  <div class="relative h-full w-full intro grid grid-cols-12">
    <div class="absolute h-full w-full" style="z-index: -10">
      <BubbleFrame />
    </div>
    <div class="col-span-12 m-auto">
      <div class="text-center">
        <slot />
      </div>
    </div>
  </div>
</template>
<!--
  Usage:

```md
---
layout: two-cols
---

# Left

This shows on the left

::right::

# Right

This shows on the right
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
    <!-- https://github.com/lightvue/slidev-theme-light-icons/blob/master/components/BubbleFrame.vue -->
      <BubbleFrame />
    </div>
    <div class="col-span-12 m-auto">
      <div class="text-center">
        <slot />
      </div>
      <div class="slidev-layout two-columns w-full h-full grid grid-cols-2">
        <div class="col-left" :class="props.class">
          <slot name="left" />
        </div>
        <div class="col-right" :class="props.class">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>
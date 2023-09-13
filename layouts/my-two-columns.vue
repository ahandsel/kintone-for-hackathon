<!--
  Usage:

```md
---
layout: my-two-cols
---

# Center

::left::

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
  hideBubbles: {
    type: Boolean,
    default: false,
  }
});
</script>

<template>
  <div class="relative h-full w-full intro grid grid-cols-12">
    <div class="absolute h-full w-full" style="z-index: -10">
      <BubbleFrame v-if="!hideBubbles" />
    </div>
    <div class="col-span-12 m-auto">
      <div class="slidev-layout text-center" style="padding-bottom: 0">
        <slot />
      </div>
      <div class="slidev-layout two-columns w-full h-full grid grid-cols-2" style="padding-top: 0">
        <div class="col-left" :class="props.class" style="margin-left: 1px">
          <slot name="left" />
        </div>
        <div class="col-right" :class="props.class" style="margin-right: 1px">
          <slot name="right" />
        </div>
      </div>
    </div>
  </div>
</template>
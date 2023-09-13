<!--
  Usage:

```md
---
layout: simple-center
---

Things to be centered

::body::

Things to be left-aligned

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
      <div class="slidev-layout text-center" style="padding-bottom: 0">
        <slot />
      </div>
      <div class="slidev-layout two-columns w-full h-full grid grid-cols-2" style="padding-top: 0">
        <div class="col-left" :class="props.class" style="margin-left: 1px">
          <slot name="body" />
        </div>
      </div>
    </div>
  </div>
</template>
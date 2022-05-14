<template>
  <nuxt-link
    class="overflow-hidden pt-1 pb-2 px-3 relative rounded-b-lg -mt-2 group"
  >
    <span
      class="absolute bg-primary-700 inset-0 -translate-y-full group-hover:translate-y-0 transition-transform"
      aria-hidden="true"
    ></span>
    <span class="relative">
      <slot>Missing slot</slot>
    </span>
  </nuxt-link>
</template>

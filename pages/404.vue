<template>
  <main class="flex-1 bg-primary-50 flex justify-center flex-col items-stretch">
    <div class="max-w-screen-lg w-full mx-auto px-4 space-y-5">
      <h1 class="text-5xl font-display">Page Not Found</h1>
      <div>
        <nuxt-link :to="{ name: 'index' }"> &lt; Go Home </nuxt-link>
      </div>
    </div>
  </main>
</template>

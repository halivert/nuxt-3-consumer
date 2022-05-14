<template>
  <nav class="bg-primary-900">
    <div class="max-w-screen-lg mx-auto text-white py-2 px-4 flex gap-2">
      <nav-link :to="{ name: 'index' }"> Home </nav-link>
      <nav-link :to="{ name: 'authors' }"> Authors </nav-link>
    </div>
  </nav>
</template>

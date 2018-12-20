<template>
  <div 
    id="hamburger-menu"
    role="button"
    @click="$emit('toggle')"
  >
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>

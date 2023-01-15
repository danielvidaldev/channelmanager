<template>
  <button class="border text-md rounded-full px-5 py-1 hover:opacity-75" 
    :class="style === 'black' ? 'bg-black text-white border-black' : '' ||
    style === 'transparent' ? 'bg-transparent text-gray-400 border-0' : '' ||
    style === 'white' ? 'border-gray-300' : ''"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    style: {
      type: String,
      default: 'white'
    }
  }
}
</script>
<template>
    <div class="flex justify-between items-center cursor-grabbing">
        <div class="flex space-x-4 items-center">
            <font-awesome-icon icon="grip-vertical" />
            <div class="bg-gray-400 p-3 py-2 w-8 h-8 flex items-center justify-center">
                <font-awesome-icon :icon="[prefix, icon]" />
            </div>
            <p>{{ text }}</p>
        </div>
        <Button :style="'transparent'" @click.prevent="$store.commit('removeItem', id)">Remove</Button>
    </div>
</template>

<script>
import Button from './Button.vue'

export default {
  name: 'Item',
  components: {
    Button,
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    prefix: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: 0
    }
  },
}
</script>
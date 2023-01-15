<template>
  <div class="relative w-full grow flex flex-col p-5 space-y-3 shadow-xl border-2 border-gray-300 rounded-lg">
    <input type="text" class="bg-gray-300 border border-gray-300 rounded-full placeholder:text-black/80 py-2 pl-10 pr-5" 
      placeholder="Add channel" 
      v-model="$store.state.inputValue" 
      @keyup.enter="$store.commit('addItem')"
    >
    <div class="flex flex-col h-[280px] grow-0 py-2 px-4 overflow-y-auto">
      <draggable :list="$store.state.items" @end="$store.state.dragged=true" item-key="id" class="space-y-3">
        <template #item="{element}">
          <Item :text="element.name" :prefix="element.prefix" :icon="element.icon" :id="element.id"/>
        </template>
      </draggable>
    </div>
    <div v-if="$store.state.dragged" class="flex justify-end items-end sticky space-x-3 w-full">
      <Button :style="'white'" @click.prevent="$store.commit('cancelOrder')">Cancel</Button>
      <Button :style="'black'" @click.prevent="$store.commit('saveOrder')">Apply</Button>
    </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'

import Button from './Button.vue'
import Item from './Item.vue'

export default {
  name: 'ChannelManager',
  components: {
    Button,
    Item,
    draggable,
  },

  data() {
    return {

    }
  },
}
</script>

<style scoped>
input {
  background: url('@/assets/icon-search-input.svg') no-repeat 12px center;
  background-size: 17px;
}
</style>

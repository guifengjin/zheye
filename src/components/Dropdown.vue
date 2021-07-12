<template>
  <div class="dropdown" ref="dropdownRef">
    <a class="btn btn-primary dropdown-toggle" @click.prevent="toggleOpen">你好 {{title}}</a>
    <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>  

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useClickOutside from '@/hooks/useClickOutside'
export default defineComponent({
  name: 'Dropdown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropdownRef = ref<null | HTMLElement>(null)
    const isClickOutside = useClickOutside(dropdownRef)

    const toggleOpen = () => {
      console.log(isClickOutside.value, isOpen.value)
      isOpen.value = !isOpen.value
    }
    
    watch(isClickOutside, () => {
      if(isClickOutside && isOpen.value) {
        isOpen.value = false;
      }
      // if(!isClickOutside && !isOpen.value) {
      //   isOpen.value = true
      // }
    })
    // const handler = (e: MouseEvent) => {
    //   if(dropdownRef.value) {
    //     if(!dropdownRef.value.contains(e.target as HTMLElement) && isOpen.value) {
    //       isOpen.value = false
    //     }
    //   }
    // }
    // onMounted(() => {
    //   document.addEventListener('click', handler)
    // })
    // onUnmounted(() => {
    //   document.removeEventListener('click', handler)
    // })
    return {
      isOpen,
      dropdownRef,
      toggleOpen,
    }
  },
})
</script>

<style scoped>

</style>

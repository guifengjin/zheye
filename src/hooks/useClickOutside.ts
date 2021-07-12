import { ref, onMounted, onUnmounted, Ref } from 'vue'
const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
  const isClickoutside = ref(false);
  const handler = (e: MouseEvent) => {
    if(elementRef.value) {
      if(elementRef.value.contains(e.target as HTMLElement)) { // 包含点击的元素
        isClickoutside.value = false
      }else { 
        isClickoutside.value = true
      }
    }
  }
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })

  return isClickoutside;
}
export default  useClickOutside;
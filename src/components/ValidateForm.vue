<template>
  <form>
    <slot name="default"></slot>
    <div class="submit-area" @click.prevent="submitForm"> 
      <slot name="submit">
        <button class="btn btn-primary">提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter = mitt()
type Func = () => boolean
export default defineComponent({
  emits: ['form-submit'],
  setup(props, ctx) {
    let funcArr: Func[] = []
    const submitForm = () => {
      let result = funcArr.map(item => item()).every(item => item)
      ctx.emit('form-submit', result)
    }
    const callback = (fn: any) => {
      funcArr.push(fn)
    }
    emitter.on('form-item-create', callback)
    onUnmounted(() => {
      emitter.off('form-item-create', callback)
    })
    return {
      submitForm
    }
  },
})
</script>

<style scoped>
.submit-area {
  padding: 10px 0;
}
</style>

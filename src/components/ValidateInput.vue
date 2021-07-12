<template>
  <div>
    <input
      class="form-control"
      :class="{ 'is-invalid': error }"
      :value="val"
      @blur="validateVal"
      @input="updateValue"
      v-bind="$attrs"
    />
    <div class="invalid-feedback" v-if="error">{{ message }}</div>
  </div>
</template>  

<script lang="ts">
import { defineComponent, PropType, reactive, toRefs, onMounted } from "vue";
import { emitter } from './ValidateForm.vue'

interface RuleProp {
  type: "required" | "email";
  message: string;
}
export type RulesProp = RuleProp[];

const emailReg =
  /^([a-zA-Z0-9]+[_|_|\-|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
export default defineComponent({
  name: "ValidateInput",
  inheritAttrs: false, // 根元素继承 attribute
  props: {
    rules: Array as PropType<RulesProp>,
    value: String
  },
  setup(props, ctx) {
    const input = reactive({
      val: props.value || '',
      error: false,
      message: "",
    });

    const inputRef = toRefs(input);

    const validateVal = () => {
      if (props.rules) {
        const allPassed = props.rules.every((rule) => {
          let passed = true;
          input.message = rule.message;
          switch (rule.type) {
            case "required":
              passed = input.val.trim() !== "";
              break;
            case "email":
              passed = emailReg.test(input.val);
              break;
            default:
              break;
          }
          return passed;
        });
        input.error = !allPassed;
        return allPassed
      }
      return true
    };

    onMounted(() => {
      emitter.emit('form-item-create', validateVal)
    })

    const updateValue = (e: KeyboardEvent) => {
      const targetValue = (e.target as HTMLInputElement).value;
      input.val = targetValue;
      ctx.emit('update:value', targetValue)
    }
    return {
      ...inputRef,
      validateVal,
      updateValue
    };
  },
});
</script>

<style scoped>
</style>

<template>
  <div class="warp">
    <Header :user="user" />
    <!-- <ColumnList :list="list" /> -->
    <!-- 表单 -->
    <ValidateForm @form-submit="onSubmit" ref="formRef">
      <div>
        <label for="exampleFormControlInput1" class="form-label">邮箱</label>
        <ValidateInput type="text" :rules="emailRules" v-model:value="email"/>
      </div>
      <div>
        <label for="exampleFormControlInput1" class="form-label">密码</label>
        <ValidateInput type="text" :rules="passRules" v-model:value="password"/>
      </div>
      <!-- <template #submit>
        <span class="btn btn-danger">提交</span>
      </template> -->
    </ValidateForm>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Header, { UserProps } from "@/components/Header.vue";
import ColumnList, { ColumnProps } from "@/components/ColumnList.vue";
import ValidateInput, { RulesProp } from "@/components/ValidateInput.vue";
import ValidateForm from "@/components/ValidateForm.vue";
const testData: ColumnProps[] = [
  {
    id: 1,
    title: "你好",
    avatar: require("@/assets/logo.png"),
    description: "hello world",
  },
  {
    id: 2,
    title: "你好",
    avatar: require("@/assets/logo.png"),
    description: "hello world",
  },
];

const testUser: UserProps = {
  id: 1,
  name: "张分散",
  isLogin: true,
};


import "bootstrap/dist/css/bootstrap.min.css";
export default defineComponent({
  name: "App",
  components: {
    Header,
    // ColumnList,
    ValidateInput,
    ValidateForm
  },
  setup() {
    const list = ref(testData);
    const user = ref(testUser);
    const email = ref('');
    const password = ref('');
    const emailRules: RulesProp = [
      {type: 'required', message: '邮箱不能为空'},
      {type: 'email', message: '邮箱错误'}
    ]
    const passRules: RulesProp = [
      {type: 'required', message: '密码不能为空'}
    ]

    const onSubmit = (result: boolean) => {
      console.log('result', result)
    }
    return {
      list,
      user,
      emailRules,
      passRules,
      email,
      password,
      onSubmit
    };
  },
});
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}
.warp {
  width: 1200px;
}
</style>

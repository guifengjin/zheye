<template>
  <nav class="navbar navbar-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <a class="btn btn-outline-primary" href="#">登录</a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-primary" href="#">注册</a>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="user.name">
          <DropdownItem
            ><a class="dropdown-item" href="#">新建文章</a></DropdownItem
          >
          <DropdownItem disabled
            ><a class="dropdown-item" href="#">新建文章</a></DropdownItem
          >
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Dropdown from "./Dropdown.vue";
import DropdownItem from "./DropdownItem.vue";
export interface UserProps {
  id: number;
  name: string;
  isLogin: boolean;
}
export default defineComponent({
  name: "Header",
  components: {
    Dropdown,
    DropdownItem,
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  },
  setup() {
    return {};
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>

<template>
  <div class="row">
    <div class="col-4" v-for="item in list" :key="item.id">
      <div class="card h-100 shadow-sm" >
        <div class="card-body text-center">
          <img :src="item.avatar" :alt="item.title" class="rounded-circle border border-light my-3">
          <h5 class="card-title">{{item.title}}</h5>
          <p class="card-text text-left">{{item.description}}</p>
          <a href="#" class="btn btn-outline-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export interface ColumnProps {
  id: number,
  title: string,
  avatar: string,
  description: string
}
export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true,
    }
  },
  setup(props) {
    console.log(props.list)
    return {

    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body img {
  width: 50px;
  height: 50px;
}
</style>

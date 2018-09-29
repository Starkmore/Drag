<template>
  <div class="wrapper">
    <!-- <draggable v-model="dataArr" :move="getdata" @update="datadragEnd"> -->
    <transition-group>
      <componentOne :isShow='items.type' :data="items" :index='index' @handleDelete='handleDelete' @handleBg="handleBg" v-for="(items,index) in  dataArr" v-dragging="{ item: items, list: dataArr, group: 'item' }" :key="items.type"></componentOne>
    </transition-group>
    <!-- </draggable> -->
  </div>
</template>

<script>
// 引入要添加的所有组件
import componentOne from "./component1.vue";
// import draggable from "vuedraggable";
export default {
  components: {
    // 注册所有组件
    componentOne
    // draggable
  },
  data() {
    return {
      dataArr: [
        {
          type: 1,
          name: "姓名",
          isFalse: false
        },
        {
          type: 2,
          name: "单选",
          isFalse: false
        },
        {
          type: 3,
          name: "手机号码",
          isFalse: false
        }
      ]
      // tags: []
    };
  },
  mounted() {
    this.$dragging.$on("dragged", ({ value }) => {
      // console.log(value.item);
      // console.log(value.list);
      // console.log(value.group);
    });
  },
  methods: {
    handleDelete(index) {
      console.log("index", index);
      this.dataArr.splice(index, 1);
    },
    handleBg(val) {
      this.dataArr.map((items, index) => {
        index == val ? (this.dataArr[index].isFalse = true) : (this.dataArr[index].isFalse = false);
      });
    }
  }
};
</script>
<style scoped>
.wrapper {
  width: 600px;
  max-width: 750px;
  margin: 0 auto;
  padding: 30px 0;
  border-radius: 8px;
  border: 1px #f2f2f2 solid;
  -moz-box-shadow: 0px 0px 5px #f2f2f2;
  -webkit-box-shadow: 0px 0px 5px #f2f2f2;
  box-shadow: 0px 0px 5px #f2f2f2;
}
</style>


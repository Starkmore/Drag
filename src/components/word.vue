<template>
    <div class="color-list">
        <div class="color-item" v-for="item in colors" v-dragging="{ item: item, list: colors, group: 'item' }" :key="item.text">{{item.text}}</div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      colors: [
        {
          text: "Aquamarine"
        },
        {
          text: "Skyblue"
        },
        {
          text: "Burlywood"
        }
      ]
    };
  },
  //这里挺重要的，因为我们一般排序完要重新提交排序后的数据给后台保存，以便下一次安装我们所需要的顺序显示，这里的list就可以帮我们做到这一点，但是我们需要给数据添加一个uniqueId标志。然后在排序完后或者列表对应的顺序和uniqueId提交给后台，我也不知道我说的咋样。
  mounted() {
    this.$dragging.$on("dragged", ({ value }) => {
      console.log(value.item);
      console.log(value.list);
      console.log(value.group);
    });
  }
};
</script>
<style>
.color-item {
  border: 1px solid #f1f1f1;
  padding: 10px 5px;
  margin: 5px 0;
  border-radius: 4px;
}
</style>


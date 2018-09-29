<template>
  <div>
    <!-- 组件1-->
    <div v-if="isShow==1" :class="[dataObject.isFalse==true ?'d-wrapper d-choose-active':'d-wrapper' ]" @click.stop="handleBg(index)">
      <i :class="dataObject.isFalse==true ?'d-delete-icon d-delete-active':'d-delete-icon'" @click="handleDelete(index)"></i>
      <p>{{dataObject.name}}</p>
      <input type="text" disabled class="input">
        </div>
      <!-- 组件2 -->
      <div v-if="isShow==2" :class="[dataObject.isFalse==true ?'d-wrapper d-choose-active':'d-wrapper' ]" @click.stop="handleBg(index)">
        <i :class="dataObject.isFalse==true ?'d-delete-icon d-delete-active':'d-delete-icon'" @click="handleDelete(index)"></i>
        <p>{{dataObject.name}}</p>
        <input type="radio"   disabled>
            </div>
        <!-- 组件3 -->
        <div v-if="isShow==3" :class="[dataObject.isFalse==true ?'d-wrapper d-choose-active':'d-wrapper' ]" @click.stop="handleBg(index)">
          <i :class="dataObject.isFalse==true ?'d-delete-icon d-delete-active':'d-delete-icon'" @click="handleDelete(index)"></i>
          <p>{{dataObject.name}}</p>
          <input type="text"  class="input" disabled>
        </div>
        </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object || Array,
      default: function() {
        return {};
      }
    },
    isShow: {
      type: Number || String,
      default: 0
    },
    index: {
      type: Number,
      type: 0
    }
  },
  data() {
    return {
      dataObject: this.data,
      isFalse: false
    };
  },
  methods: {
    handleDelete(index) {
      this.$emit("handleDelete", index);
      // this.dataObject.splice(index, 1);
    },
    handleBg(index) {
      this.$emit("handleBg", index);
    }
  }
};
</script>

<style scoped>
.input {
  /* width: 200px; */
  border-radius: 8px;
  outline: none;
  /* line-height: 30px; */
  height: 25px;
  border: 1px solid #eee;
  background: #fff;
  text-indent: 5px;
}
.d-wrapper {
  position: relative;
  padding: 10px 5px;
  margin: 15px 0;
  cursor: pointer;
  border: 1px #fff solid;
}
.d-wrapper:hover {
  border: 1px #ccc dotted;
}

.d-delete-icon {
  display: none;
}
.d-wrapper:hover > .d-delete-icon {
  position: absolute;
  top: -10px;
  right: -10px;
  display: block;
}
.d-delete-icon:after {
  font-family: "iconfont";
  content: "\e7b7";
  color: #d24e46;
  font-size: 25px;
}
.d-delete-active {
  position: absolute;
  top: -10px;
  right: -10px;
  display: block;
}
.d-choose-active {
  background: #fff8dc;
  border: 1px #ccc dotted;
}
</style>

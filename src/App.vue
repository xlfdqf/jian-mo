<template>
  <div id="app">
    <!--登入动画-->
    <transition name="rotate-fall">
    <router-view  class="app-router-view"></router-view>
    </transition>
  </div>
</template>

<script>
import "vue-transition.css";
export default {
  name: "App",
  // 本地存储vuex里数据
  created() {
    //在页面加载时读取localStorage里的状态信息
    if (localStorage.getItem("store")) {
      this.$store.replaceState(
        Object.assign(
          {},
          this.$store.state,
          JSON.parse(localStorage.getItem("store"))
        )
      );
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      localStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  }
};
</script>
<style>
.app .app-router-view {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  visibility: visible;
}
.el-table td,
.el-table th {
  padding: 6px 0px !important;
}
.table {
  width: 98%;
  margin: 10px auto;
}
/*hover时 选中背景颜色不被覆盖 */
.el-table--striped .el-table__body tr.el-table__row--striped.current-row td,
.el-table__body tr.current-row > td,
.el-table__body tr.hover-row.current-row > td,
.el-table__body tr.hover-row.el-table__row--striped.current-row > td,
.el-table__body tr.hover-row.el-table__row--striped > td,
.el-table__body tr.hover-row > td {
  background-color: rgb(233, 248, 246) !important;
}
.el-date-editor .el-range-separator {
  width: 6%;
}
.el-collapse-item__header {
  font-weight: bold;
}
</style>

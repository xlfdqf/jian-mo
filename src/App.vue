<template>
  <div id="app">
    <!--登入动画-->
    <!-- <transition name="rotate-fall"> -->
    <router-view  class="app-router-view"></router-view>
    <!-- </transition> -->
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
#app {
  height: 100% !important;
  background-color: #080920;
}
/* #app .app-router-view {
  height: auto;
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
} */
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
  /* background-color: rgb(233, 248, 246) !important; */
  background-color: #112447 !important;
}
.el-date-editor .el-range-separator {
  width: 6%;
}

/* 解决出现滚动条浏览器抖动 */
/* html,
body {
  overflow-y: scroll;
} 
html,
body {
  overflow: scroll;
  min-height: 101%;
}
html {
  overflow: -moz-scrollbars-vertical;
} */
/* 分页颜色 */
.el-collapse-item__arrow {
  float: left;
}
.el-pager li.active {
  color: aqua;
}
.el-pager li:hover {
  color: aqua;
}
.el-pagination button:hover {
  color: aqua;
}
.el-pagination {
  color: #27a2c6;
}
.el-pagination .btn-next,
.el-pagination .btn-prev {
  background-color: #091938;
  color: #27a2c6;
}
.el-pagination button:disabled {
  background-color: #091938;
  color: #27a2c6;
}
.el-pager li {
  background-color: #091938;
}
/* 表格样式 */
.el-table {
  border: none;
  color: #7ecbe0;
}
.el-table::before {
  background-color: #091938;
}
.el-table--border::after,
.el-table--group::after {
  background-color: #091938;
}
.el-table td,
.el-table th.is-leaf {
  border: none !important;
}
.el-table th {
  border: none;
  color: #7ecbe0;
  background-color: #122345 !important;
}
.el-table td {
  border: none;
  /* background-color: #091938 !important; */

  background-color: #041432;
}
.el-input__inner {
  background-color: #061a41;
  border: 1px solid #165677;
  color: #41bde0;
}
.el-input.is-active .el-input__inner,
.el-input__inner:focus {
  border-color: #41bde0;
}
.el-input__inner:hover {
  border-color: #41bde0;
}
.el-form-item__label {
  color: #7ecbe0;
}
.el-pagination__total {
  color: #7ecbe0;
}
.el-table__empty-block {
  background-color: #091938;
}
.el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #102347 !important;
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #122345 !important;
}
/* tabs标签 */
.el-tabs--border-card {
  border: none;
}
.el-tabs--border-card > .el-tabs__header {
  background-color: #091938;
  color: #7ecbe0;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  background-color: #0c2a4d;
  color: #00ffff;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  color: #7ecbe0;
}
.el-tabs--border-card
  > .el-tabs__header
  .el-tabs__item:not(.is-disabled):hover {
  color: #00ffff;
}

.el-card__body {
  padding-bottom: 0px;
  padding: 20px 35px;
}
.el-menu-item.is-active {
  background-color: #0c2a4d !important;
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active,
.el-tabs--border-card > .el-tabs__header,
.el-tabs--border-card > .el-tabs__header .el-tabs__item {
  border: none;
}

.el-table,
.el-table__expanded-cell {
  background-color: #091938;
}
.el-submenu__title i {
  color: rgb(126, 203, 224) !important;
}
.el-button--text {
  color: rgb(126, 203, 224);
}
/* 对话框 */
.el-dialog {
  background: #091938;
}
.el-dialog__title {
  color: aqua;
  text-align: center;
}
.el-button--info {
  background: #0c2a4d;
  border: none;
  color: #eee;
}
.el-button--primary {
  background: #040510;
  border: none;
}

/* 多选框 */
.el-checkbox {
  color: #40b1f9 !important;
  margin-left: 30px;
}
.el-checkbox__inner::after {
  border: 1px solid #40b1f9;
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  content: "";
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  -webkit-transform: rotate(45deg) scaleY(0);
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  -webkit-transition: -webkit-transform 0.15s
    cubic-bezier(0.71, -0.46, 0.88, 0.6) 50ms;
  transition: -webkit-transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 50ms;
  transition: transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 50ms;
  transition: transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 50ms,
    -webkit-transform 0.15s cubic-bezier(0.71, -0.46, 0.88, 0.6) 50ms;
  -webkit-transform-origin: center;
  transform-origin: center;
}
.el-table,
.el-table__expanded-cell {
  margin-left: 10px;
}
div::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px;
  height: 8px;
}
div::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #7ecbe0; /* 滚动条颜色 */
}
div::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #041432;
}
.el-table--border th.gutter:last-of-type {
  border: none;
}
</style>

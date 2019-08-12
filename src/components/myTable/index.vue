<template>
 <div class="myTable">
   <!-- @selection-change="handleSelectionChange" -->
  <el-table ref="multipleTable" :data="dataSource"   stripe style="width: 100%">
    <!--选择-->
      <!-- <el-table-column  align="center" v-if="hasSelection" type="selection" width="55"></el-table-column> -->
    <!--序号-->
      <!-- <el-table-column  align="center" v-if="hasIndex" type="index" width="55"></el-table-column> -->
    <!--数据源-->
    <el-table-column v-for="column in columns"
                     v-if="column.isShow"
                     :sortable="column.isSort"
                     :key="column.prop"
                     :prop="column.prop"
                     :label="column.label"
                      align="center"
                      >
                    <template slot-scope="scope">
                       <my-render v-if="column.render" :row="scope.row" :render="column.render"></my-render>
                    <span v-else>
                       {{scope.row[column.prop]}}
                    </span>
                </template>
    </el-table-column>
    <!--操作栏-->
    <slot name="operate"></slot>
  </el-table>
 </div>
</template>

<script>
import MyRender from "./MyRender";
export default {
  name: "myTable",
  components: {
    MyRender
  },
  data() {
    return {};
    multipleSelection: [];
  },
  props: {
    dataSource: Array,
    columns: Array,
    //是否可以选择
    hasSelection: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    //是否有序列项
    hasIndex: {
      type: Boolean,
      default: function() {
        return false;
      }
    },
    methods: {
      //将选中的行发送到父组件
      // handleSelectionChange(val) {
      //   // this.multipleSelection = val;
      //   // const selectionArr = [];
      //   // val.forEach(function(el) {
      //   //   selectionArr.push(el);
      //   // });
      //   this.$emit("handleSelectionChange", val);
      // },
    }
  }
};
</script>

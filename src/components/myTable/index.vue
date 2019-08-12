<template>
 <div class="myTable">
  <el-table ref="multipleTable" :data="dataSource"  @selection-change="handleSelectionChange" stripe style="width: 100%">
    <!--多选框-->
      <el-table-column  align="center" v-if="hasSelection" type="selection" width="55"></el-table-column>
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
  <!-- 分页 -->
  <el-pagination
         @size-change="handleSizeChange"
         @current-change="handleCurrentChange"
          :currentPage="page.currentPage" 
          :pageSize="page.pageSize"
          :total="total"
          align="right"
           layout="total, prev, pager, next"  
        >
  </el-pagination>
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
    return {
      page: {
        currentPage: 1,
        pageSize: 10
      }
    };
  },
  props: {
    dataSource: Array,
    columns: Array,
    total: Number,
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
    }
  },
  methods: {
    //多选
    handleSelectionChange(val) {
      this.$emit("handleSelectionChange", val);
    },
    // 每页条数
    handleSizeChange(val) {
      this.page.pageSize = val;
      this.$emit("pageChange", this.page);
    },
    // 当前页码
    handleCurrentChange(val) {
      this.page.currentPage = val;
      this.$emit("pageChange", this.page);
    }
  }
};
</script>

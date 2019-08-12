<template>
    <div class="pagination">
         <el-pagination
             @size-change="handleSizeChange"
             @current-change="handleCurrentChange"
             :currentPage="page.currentPage" 
             :pageSize="page.pageSize"
             :total="total"
              layout="total, prev, pager, next"  
            >
          </el-pagination>
    </div>
</template>

<script>
export default {
  name: "pagination",
  props: {
    // 总条数
    total: {
      type: Number
    }
  },
  data() {
    return {
      page: {
        currentPage: 1,
        pageSize: 10
      }
    };
  },
  methods: {
    // 每页条数变更
    handleSizeChange(val) {
      this.page.pageSize = val;
      this.$emit("pageChange", this.page);
    },
    // 当前页码变更
    handleCurrentChange(val) {
      this.page.currentPage = val;
      this.$emit("pageChange", this.page);
    }
  }
};
</script>
<style>
.pagination {
  margin: 20px 0;
  float: right;
}
</style>
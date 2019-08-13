<!-- 反欺诈初次判断页面-->
<template>
 <div class="table fraudJudge">
   <el-card>
     <el-table
      v-loading="loading"
      :data="tableData"
      height="500">
      <el-table-column
        prop="id"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
    </el-table>
  </el-card>
 </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      tableData: []
    };
  },
  mounted() {
    this.loading = true;
    for (let i = 0; i < 3000; i++) {
      this.tableData.push({ id: i, date: i });
    }
    this.loading = false;
  }
};
</script>

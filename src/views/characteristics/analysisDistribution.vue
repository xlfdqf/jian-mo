<!--特征分布分析页面 -->
<template>
  <div class="table">
      <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card">
        <el-tab-pane label="报表" name="first">
             <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" 
              :hasSelection="false" :hasPagination="true" v-loading="loading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="second">
             <el-row>
                <el-col :span="8"><div> <ve-histogram :data="chartData"></ve-histogram></div></el-col>
            </el-row>
        </el-tab-pane>

        <!-- 柱状图表 end -->
      </el-tabs>

  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getNewsList } from "@/api/login.js";
import {} from "./util.js";

export default {
  components: { myTable },
  data() {
    return {
      loading: false,
      activeName: "second",
      columns: [
        {
          prop: "a",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "b",
          label: "特征分箱结果",
          isShow: true
        },
        {
          prop: "c",
          label: "每箱个数",
          isShow: true
        },
        {
          prop: "d",
          label: "每箱比例",
          isShow: true
        }
      ],
      columns2: [
        {
          prop: "a",
          label: "特征字段",
          isShow: true
        }
      ],
      dataSource2: [{ a: "1" }],
      dataSource: [],
      chartData: {
        columns: ["特征分箱结果", "每箱个数", "每箱比例"],
        rows: [
          { 特征分箱结果: "0-10岁", 每箱个数: 5, 每箱比例: 11.56 },
          { 特征分箱结果: "11-20岁", 每箱个数: 10, 每箱比例: 78.54 },
          { 特征分箱结果: "21-30岁", 每箱个数: 80, 每箱比例: 44.34 },
          { 特征分箱结果: "31-40岁", 每箱个数: 53, 每箱比例: 99.9 }
        ]
      }
    };
  },
  mounted() {
    // this.queryTable();
    // this.queryEcharts();
  },
  methods: {
    // 切换tab
    handleClick(tab, event) {
      // console.log(tab.name);
    },
    // 查询报表
    queryTable() {
      this.loading = true;
      let params = { pageIndex: 1, pageSize: 10 };
      // getNewsList(params)
      //   .then(res => {
      //     this.loading = false;
      //     this.total = res.total;
      //     this.dataSource = res.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    //查询图表
    queryEcharts() {},
    // 页码切换
    pageChange(page) {
      console.log(page);
      let params = { pageIndex: page.currentPage, pageSize: page.pageSize };
      // getNewsList(params)
      //   .then(res => {
      //     this.dataSource = res.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  }
};
</script>

<style scoped>
</style>

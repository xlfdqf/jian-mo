<!--特征离散分析页面 -->
<template>
    <div class="table">
     <!-- 表单 -->
      <el-card class="box-card" style="margin-bottom:20px">
          <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
            <el-form-item label="特征字段:" prop="featureField">
              <el-input v-model="testForm.featureField"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  icon="el-icon-search" @click="onSubmit(testForm)">搜索</el-button>
            </el-form-item>
          </el-form>
      </el-card>

      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="报表" name="1">
             <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" 
              :hasSelection="false" :hasPagination="true" :total="tableTotal" @pageChange="pageChange" :loading="tableLoading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="2">
        </el-tab-pane>
        <!-- 箱线图表 end -->
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
      activeName: "1",
      tableTotal: 100,
      tableLoading: false,
      chartLoading: false,
      testForm: {
        featureField: ""
      },
      columns: [
        {
          prop: "a",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "b",
          label: "特征样本个数",
          isShow: true
        },
        {
          prop: "c",
          label: "特征样本缺失个数",
          isShow: true
        },
        {
          prop: "d",
          label: "众数",
          isShow: true
        },
        {
          prop: "e",
          label: "平均数",
          isShow: true,
          render: function(v, param) {
            return param.row.e;
          }
        },
        {
          prop: "f",
          label: "中位数",
          isShow: true
        },
        {
          prop: "g",
          label: "最大值",
          isShow: true
        },
        {
          prop: "h",
          label: "最小值",
          isShow: true
        }
      ],
      dataSource: []
    };
  },
  mounted() {
    // this.query();
  },
  methods: {
    // 切换tab
    handleClick(tab, event) {
      // console.log(tab.name);
    },
    // 查询列表
    query() {
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
    },
    // 搜索
    onSubmit(testForm) {
      // console.log(testForm);
    }
  }
};
</script>

<style scoped>
</style>

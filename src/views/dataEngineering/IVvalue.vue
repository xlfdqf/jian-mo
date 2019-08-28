<!--特征iv值页面 -->
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

      <el-card class="box-card">
        <el-row>
          <el-col :span="12"><div>
              <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" 
              :hasSelection="false" :hasPagination="true"  @pageChange="pageChange" :total="total" :loading="tableLoading" > </myTable></div>
         </el-col>
         <!-- 报表 end -->
          <el-col :span="12"><div>
             <ve-bar :data="chartData" :settings="chartSettings" v-loading="chartLoading"></ve-bar> <!--排序条形图-->
          </div>
          </el-col>
          <!-- 图表 end -->
        </el-row>
           
      </el-card>

  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getIVvalue } from "@/api/login.js";
import {} from "../sampleManagement/util.js";

export default {
  components: { myTable },
  data() {
    this.chartSettings = {
      metrics: ["IV值"],
      dataOrder: {
        label: "IV值",
        order: "desc"
      }
    };
    return {
      tableLoading: false,
      chartLoading: false,
      total: 100,
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
          label: "字段名称",
          isShow: true
        },
        {
          prop: "c",
          label: "IV值",
          isShow: true
        }
      ],
      dataSource: [],
      chartData: {
        columns: ["特征字段", "IV值"],
        rows: [
          { 特征字段: "年龄", IV值: 0.3 },
          { 特征字段: "籍贯", IV值: 0.2 },
          { 特征字段: "芝麻分", IV值: 0.5 },
          { 特征字段: "星座", IV值: 0.3 }
        ]
      }
    };
  },
  created() {
    // this.queryTable();
    this.queryEcharts();
  },
  methods: {
    // 查询列表
    queryTable() {
      this.tableLoading = true;
      let params = { pageIndex: 1, pageSize: 10 };
      // getIVvalue(params)
      //   .then(res => {
      //     this.tableLoading = false;
      //     this.total = res.total;
      //     this.dataSource = res.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    //查询图表
    queryEcharts() {
      // this.chartLoading = true;
      // getIVvalueChart(params)
      //   .then(res => {
      //     this.chartLoading=false;
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
      // getIVvalue(params)
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

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
              :hasSelection="false" :hasPagination="true"> </myTable></div>
         </el-col>
         <!-- 报表 end -->
          <el-col :span="12"><div>
             <ve-bar :data="chartData" :settings="chartSettings"></ve-bar> <!--排序条形图-->
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
import {} from "./util.js";

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
      loading: false,
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
          { 特征字段: "年龄", IV值: 0.3, 下单用户: 1093, 下单率: 0.32 },
          { 特征字段: "籍贯", IV值: 0.2, 下单用户: 3230, 下单率: 0.26 },
          { 特征字段: "芝麻分", IV值: 0.5, 下单用户: 2623, 下单率: 0.76 },
          { 特征字段: "星座", IV值: 0.3, 下单用户: 1423, 下单率: 0.49 }
        ]
      }
    };
  },
  mounted() {
    // this.queryTable();
    // this.queryEcharts();
  },
  methods: {
    // 查询报表
    queryTable() {
      this.loading = true;
      let params = { pageIndex: 1, pageSize: 10 };
      // getIVvalue(params)
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

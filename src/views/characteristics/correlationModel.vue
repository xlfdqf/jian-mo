<!--特征关联模型页面 -->
<template>
  <div class="table">
     <!-- 表单 -->
      <el-card class="box-card" style="margin-bottom:20px">
          <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
            <el-form-item label="转移因子:" prop="transferFactor">
              <el-input v-model="testForm.transferFactor"></el-input>
            </el-form-item>
             <el-form-item label="初次判断:" prop="initialJudgment">
              <el-input v-model="testForm.initialJudgment"></el-input>
            </el-form-item>
             <el-form-item label="最终评分:" prop="finalScore">
              <el-input v-model="testForm.finalScore"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  icon="el-icon-search" @click="onSubmit(testForm)">搜索</el-button>
              <el-button type="default" @click="reset('testForm')">重置</el-button>
            </el-form-item>
          </el-form>
      </el-card>

      <el-card class="box-card">
           <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" 
              :hasSelection="false" :hasPagination="true" :total="total" @pageChange="pageChange" :loading="loading"> </myTable>
      </el-card>

  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getCorrelationModel } from "@/api/login.js";
import {} from "./util.js";

export default {
  components: { myTable },
  data() {
    return {
      loading: false,
      total: 100,
      testForm: {
        transferFactor: "",
        initialJudgment: "",
        finalScore: ""
      },
      columns: [
        {
          prop: "a",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "b",
          label: "关联转移因子",
          isShow: true
        },
        {
          prop: "c",
          label: "关联相似度对比",
          isShow: true
        },
        {
          prop: "d",
          label: "关联最终评分",
          isShow: true
        },
        {
          prop: "e",
          label: "是否进入决策模型",
          isShow: true,
          render: function(v, param) {
            let html = "";
            if (param.row.e === 1) {
              html = "是";
            } else {
              html = "否";
            }
            return html;
          }
        }
      ],
      dataSource: []
    };
  },
  created() {
    // this.query();
  },
  methods: {
    // 查询列表
    query() {
      // this.loading = true;
      // let params = { pageIndex: 1, pageSize: 10 };
      // getCorrelationModel(params)
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
      // getCorrelationModel(params)
      //   .then(res => {
      //     this.dataSource = res.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    onSubmit(testForm) {
      // console.log(testForm);
    },
    reset(formName) {
      this.$refs[formName].resetFields();
      // this.query();
    }
  }
};
</script>

<style scoped>
</style>

<!--模型管理评分卡页面 -->
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
              <div class="search" @click="onSubmit(testForm)"><img src="@/assets/images/home/sbtn.png"/><span class="searchBtn">搜索</span> </div>
            </el-form-item>
          </el-form>
      </el-card>

      <el-card class="box-card2">
           <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false"
              :hasSelection="false" :hasPagination="true" :total="total" @pageChange="pageChange" :loading="loading"> </myTable>
      </el-card>

  </div>
</template>

<script>
import myTable from "@/components/myTable";
import {} from "@/api/login.js";

export default {
  components: { myTable },
  data() {
    return {
      height: 600,
      loading: false,
      total: 0,
      testForm: {
        transferFactor: "",
        initialJudgment: "",
        finalScore: ""
      },
      columns: [
        {
          prop: "featureName",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "iv",
          label: "IV值",
          isShow: true
        },
        {
          prop: "bucket",
          label: "分箱结果",
          isShow: true
        },
        {
          prop: "",
          label: "关联转移因子",
          isShow: true
        },
        {
          prop: "",
          label: "关联初次判断",
          isShow: true
        },
        {
          prop: "",
          label: "关联最终评分",
          isShow: true
        }
      ],
      dataSource: []
    };
  },
  created() {
    this.query();
  },
  methods: {
    // 查询列表
    query() {
      //   this.loading = true;
      let params = { current: 1, size: 10 };
      //   getFeatureSource(params)
      //     .then(res => {
      //       this.loading = false;
      //       this.total = res.data.total;
      //       this.dataSource = res.data.records;
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     });
    },
    // 页码切换
    pageChange(page) {
      //   this.loading = true;
      let params = {};
      //   getFeatureSource(params)
      //     .then(res => {})
      //     .catch(error => {
      //       console.log(error);
      //     });
    },
    //搜索
    onSubmit(testForm) {}
  }
};
</script>

<style scoped>
.box-card {
  background-image: url("../../assets/images/home/topBg.png");
  background-size: cover;
}
.table >>> .box-card2 {
  background-color: #091938 !important;
}
.table >>> .el-card {
  background-color: #080920;
  border: none;
}
.search {
  position: relative;
  padding-top: 5px;
}
.search:hover {
  cursor: pointer;
}
.searchBtn {
  position: absolute;
  top: 0px;
  left: 20px;
  color: #7ecbe0;
}
</style>

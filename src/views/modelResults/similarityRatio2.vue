<!--模型结果展示相似度比对页面 -->
<template>
  <div class="table">
     <!-- 表单 -->
 <el-card class="box-card" style="margin-bottom:20px">
          <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
            <el-form-item label="初次判断:" prop="judge">
              <el-input v-model="testForm.judge"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="search" @click="onSubmit(testForm)" style="float:left"><img src="@/assets/images/home/sbtn.png"/></div>
            </el-form-item>
          </el-form>
      </el-card>
 <el-card class="box-card2">
    <myTable :columns="columns" :dataSource="dataSource"  :hasPagination="false" :height="height"
      :total="total" @pageChange="pageChange" v-loading="loading">
     </myTable>
 </el-card>
  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getSimilarityRatio2 } from "@/api/login.js";

export default {
  components: { myTable },
  data() {
    return {
      height: 650,
      loading: false,
      total: 0,
      testForm: {
        judge: ""
      },
      columns: [
        {
          prop: "name",
          label: "姓名",
          isShow: true
        },
        {
          prop: "judgment",
          label: "初级判断",
          isShow: true
        },
        {
          prop: "nonAccessCount",
          label: "撞库非准入规则次数",
          isShow: true
        },
        {
          prop: "accessCount",
          label: "撞库准入规则次数",
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
      this.loading = true;
      let params = {};
      getSimilarityRatio2(params)
        .then(res => {
          this.loading = false;
          // this.total = res.data.total;
          this.dataSource = res.data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 页码切换
    pageChange(page) {
      //   this.loading = true;
      let params = {};
      //   getSimilarityRatio2(params)
      //     .then(res => {})
      //     .catch(error => {
      //       console.log(error);
      //     });
    },
    //搜索
    onSubmit(testForm) {
      console.log(testForm);
    }
  }
};
</script>

<style scoped>
.box-card {
  background-image: url("../../assets/images/home/topBg2.png");
  background-size: cover;
}
.table >>> .box-card2 {
  background-image: url("../../assets/images/home/btmBg.png");
  background-size: cover;
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

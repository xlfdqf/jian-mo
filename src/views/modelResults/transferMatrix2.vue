<!--模型结果展示转移矩阵页面 -->
<template>
  <div class="table">
     <!-- 表单 -->
 <el-card class="box-card" style="margin-bottom:20px">
          <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
            <el-form-item label="初次判断:" prop="judge">
              <el-input v-model="testForm.judge"></el-input>
            </el-form-item>
            <el-form-item>
              <div class="search" @click="onSubmit(testForm)" style="float:left"><img src="@/assets/images/home/sbtn.png"/><span class="searchBtn">搜索</span> </div>
            </el-form-item>
          </el-form>
      </el-card>

    <myTable :columns="columns" :dataSource="dataSource"  :hasPagination="true"
      :total="total" @pageChange="pageChange">
     </myTable>
     
  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getSimilarityRatio } from "@/api/login.js";

export default {
  components: { myTable },
  data() {
    return {
      height: 600,
      loading: false,
      total: 0,
      testForm: {
        judge: ""
      },
      columns: [
        {
          prop: "a",
          label: "姓名",
          isShow: true
        },
        {
          prop: "b",
          label: "初级判断",
          isShow: true
        },
        {
          prop: "c",
          label: "转移优质用户",
          isShow: true
        },
        {
          prop: "d",
          label: "转移可疑用户",
          isShow: true
        },
        {
          prop: "e",
          label: "转移劣质用户",
          isShow: true
        }
      ],
      dataSource: [
        {
          a: "张三",
          b: "122",
          c: "0.5",
          d: "0.2",
          e: "0.1"
        }
      ]
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
      //   getSimilarityRatio(params)
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
    onSubmit(testForm) {
      console.log(testForm);
    }
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

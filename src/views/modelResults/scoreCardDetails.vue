<!--模型结果展示评分卡详情页面 -->
<template>
  <div class="table">
     <!-- 表单 -->
     <el-card class="box-card" style="margin-bottom:20px">
      <h4 style="text-align:center;color:#7ECBE0"><span style="margin-right:30px">用户姓名：</span> <span style="margin-right:30px">身份证号:</span><span>最终得分:</span></h4>
    </el-card>

 <el-card class="box-card2">
    <myTable :columns="columns" :dataSource="dataSource"  :hasPagination="true"
      :total="total" @pageChange="pageChange">
     </myTable>
 </el-card> 
  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getScoreCard2Details } from "@/api/login.js";

export default {
  components: { myTable },
  data() {
    return {
      loading: false,
      total: 0,
      columns: [
        {
          prop: "a",
          label: "特征名称",
          isShow: true
        },
        {
          prop: "b",
          label: "特征iv值",
          isShow: true
        },
        {
          prop: "c",
          label: "特征值",
          isShow: true
        },
        {
          prop: "d",
          label: "获得分数",
          isShow: true
        }
      ],
      dataSource: [
        {
          a: "年龄",
          b: "125",
          c: "0.5",
          d: "109"
        }
      ]
    };
  },
  created() {
    // this.query();
    let row = JSON.parse(localStorage.getItem("row"));
  },
  methods: {
    // 查询列表
    query() {
      //   this.loading = true;
      let params = { current: 1, size: 10 };
      //   getScoreCard2Details(params)
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
      //   getScoreCard2Details(params)
      //     .then(res => {})
      //     .catch(error => {
      //       console.log(error);
      //     });
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

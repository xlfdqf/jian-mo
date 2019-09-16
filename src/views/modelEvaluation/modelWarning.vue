<!--模型预警页面-->
<template>
 <div class="table">
   <el-card class="box-card" style="margin-bottom:20px">
     <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
        <el-form-item label="日期:" prop="date">
          <el-input v-model="testForm.date"></el-input>
        </el-form-item>
         <el-form-item>
          <div class="search" @click="onSubmit(testForm)"><img src="@/assets/images/home/sbtn.png"/><span class="searchBtn">搜索</span> </div>
        </el-form-item>
      </el-form>
   </el-card>
   <el-card class="box-card2">
     <myTable :columns="columns" :dataSource="dataSource" :hasIndex="true" :hasSelection="false" :hasPagination="false"
      :total="total" @pageChange="pageChange" :loading="loading">
     </myTable>
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
      loading: false,
      total: 0,
      testForm: {
        date: ""
      },
      columns: [
        {
          prop: "date",
          label: "日期",
          isShow: true
        },
        {
          prop: "area",
          label: "roc曲线面积",
          isShow: true
        },
        {
          prop: "a",
          label: "预警强度",
          isShow: true
          //   render: function(v, param) {
          //     return formatIdcard(param.row.idcard);
          //   }
        }
      ],
      dataSource: [{ date: "2019-12-10", area: 0.345, a: "严重预警" }]
    };
  },
  mounted() {
    this.query();
  },
  methods: {
    query() {
      //   this.loading = true;
      let params = { pageIndex: 1, pageSize: 10 };
      //   getNewsList(params)
      //     .then(res => {
      //       this.loading = false;
      //       this.total = res.data.total.total;
      //       this.dataSource = res.data.data;
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     });
    },
    pageChange(page) {
      let params = { pageIndex: page.currentPage, pageSize: page.pageSize };
    },
    onSubmit(formName) {
      //   console.log(formName.date);
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
.el-button--text {
  color: #7ecbe0;
}
</style>

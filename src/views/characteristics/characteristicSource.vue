<!--特征来源页面 -->
<template>
  <div class="table">
     <!-- 表单 -->
      <el-card class="box-card" style="margin-bottom:20px">
          <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
            <el-form-item label="数据来源:" prop="datasource">
              <el-input v-model="testForm.datasource"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  icon="el-icon-search" @click="onSubmit(testForm)">搜索</el-button>
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
import { getNewsList } from "@/api/login.js";
import {} from "./util.js";

export default {
  components: { myTable },
  data() {
    return {
      loading: false,
      total: 100,
      activeName: "first",
      testForm: {
        datasource: ""
      },
      columns: [
        {
          prop: "a",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "b",
          label: "接口名称",
          isShow: true
        },
        {
          prop: "c",
          label: "数据来源",
          isShow: true
        }
      ],
      dataSource: []
      //所需格式
      // dataSource: [
      //   { a: "年龄", b: "四要素", c: "同盾" },
      //   { a: "芝麻分", b: "四要素", c: "同盾" },
      //   { a: "星座", b: "四要素", c: "同盾" }
      // ]
    };
  },
  mounted() {
    // this.query();
  },
  methods: {
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
    //搜索
    onSubmit(testForm) {
      // console.log(testForm);
    }
  }
};
</script>

<style scoped>
</style>

<!-- 手机号管理页面-->
<template>
 <div class="table">
     <el-card class="box-card"  style="margin-bottom:20px">
          <!-- 表单 -->
     <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
        <el-form-item label="用户手机号:" prop="phone">
          <el-input v-model="testForm.phone" placeholder="手机号"></el-input>
        </el-form-item>
         <el-form-item>
          <el-button type="primary"  icon="el-icon-search" @click="onSubmit(testForm)">搜索</el-button>
          <el-button type="default" @click="reset('testForm')">重置</el-button>
        </el-form-item>
      </el-form>
     </el-card>
   <el-card class="box-card">
     <!-- 表格 -->
     <myTable :columns="columns" :dataSource="dataSource" :hasIndex="true" :hasSelection="false" :hasPagination="true"
       @handleSelectionChange="handleSelectionChange"
      :total="total" @pageChange="pageChange">
       <el-table-column slot="operate" label="操作"  align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="detail(scope.row)">详情</el-button>
          </template>
        </el-table-column>
     </myTable>
</el-card>
 </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getNewsList } from "@/api/login.js";

export default {
  components: { myTable },
  data() {
    return {
      total: 100,
      testForm: {
        phone: ""
      },
      columns: [
        {
          prop: "username",
          label: "姓名",
          isShow: true //是否显示
        },
        {
          prop: "phone",
          label: "手机号",
          isShow: true
        }
      ],
      dataSource: [
        {
          username: "王小虎",
          phone: "17755533101"
        },
        {
          username: "辛巴",
          phone: "1869493000"
        },
        {
          username: "马云",
          phone: "17755533101"
        }
      ]
    };
  },
  methods: {
    detail(row) {
      this.$router.push({
        name: "telManagementDetail",
        params: { username: row.username }
      });
    },
    // 页码切换
    pageChange(page) {
      console.log("页码切换:", page);
    },
    handleSelectionChange(val) {
      console.log("多选:", val);
    },
    onSubmit(formName) {},
    reset(formName) {
      this.$refs[formName].resetFields();
      this.query();
    },
    // 测试访问接口
    query() {
      let params = { cp: 1, ps: 5 };
      getNewsList(params)
        .then(res => {
          console.log("返回数据：", res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
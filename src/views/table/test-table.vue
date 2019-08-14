<template>
 <div class="table">
   <el-card class="box-card">
     <!-- 表单 -->
     <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
        <el-form-item label="审批人:" prop="user">
          <el-input v-model="testForm.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="栏目:" prop="region">
          <el-select v-model="testForm.region" placeholder="栏目">
            <el-option label="栏目一" value="栏目一"></el-option>
            <el-option label="栏目二" value="栏目二"></el-option>
          </el-select>
        </el-form-item>
         <el-form-item label="样本完整度%:" prop="sample1">
          <el-input v-model="testForm.sample1"></el-input>
        </el-form-item>
         <el-form-item>--</el-form-item>
         <el-form-item prop="sample2">
           <el-input v-model="testForm.sample2"></el-input>
        </el-form-item>
        <el-form-item label="日期:" prop="date">
           <el-date-picker
              v-model="testForm.date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  icon="el-icon-search" @click="onSubmit(testForm)">搜索</el-button>
          <el-button type="default" @click="reset('testForm')">重置</el-button>
        </el-form-item>
      </el-form>
        <el-alert style="width:50%;margin-bottom:5px"
          title="警告内容"
          type="warning"
          show-icon>
        </el-alert>
     <!-- 表格 -->
     <myTable :columns="columns" :dataSource="dataSource" :hasIndex="true" :hasSelection="true" :hasPagination="true"
       @handleSelectionChange="handleSelectionChange"
      :total="total" @pageChange="pageChange">
       <el-table-column slot="operate" label="操作"  align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">查看</el-button>
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" @click="deleteUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
     </myTable>
</el-card>
 </div>
</template>

<script>
import myTable from "@/components/myTable";
import moment from "moment";
import _ from "lodash";
import { getNewsList } from "@/api/login.js";

export default {
  components: { myTable },
  data() {
    return {
      total: 100,
      testForm: {
        user: "",
        region: "",
        date: "",
        sample1: "",
        sample2: ""
      },
      columns: [
        {
          prop: "title",
          label: "标题",
          isShow: true, //是否显示
          isSort: true //是否排序
        },
        {
          prop: "create_name",
          label: "发布人",
          isShow: true
        },
        {
          prop: "item_name",
          label: "栏目",
          isShow: true
        },
        {
          prop: "create_time",
          label: "创建时间",
          isShow: true,
          isSort: true
        },
        {
          prop: "weight",
          label: "权重",
          isShow: true
        },
        {
          prop: "isoriginal",
          label: "原创",
          isShow: true,
          index: 6,
          render: function(v, param) {
            let html = "";
            if (param.row.isoriginal == "201") {
              html = "原创";
            } else {
              html = "非原创";
            }
            return html;
          }
        }
      ],
      dataSource: [
        {
          title: "标题1",
          create_name: "王小虎",
          item_name: "栏目1",
          create_time: "2019-8-12",
          weight: "重要",
          isoriginal: 201
        },
        {
          title: "标题2",
          create_name: "王小虎",
          item_name: "栏目3",
          create_time: "2019-9-23",
          // weight: ["第一次", "第二次", "第三次"],
          weight: "紧急",
          isoriginal: 201
        },
        {
          title: "标题3",
          create_name: "王小虎",
          item_name: "栏目3",
          create_time: "2019-1-1",
          weight: "重要且紧急",
          isoriginal: 200
        }
      ]
    };
  },
  methods: {
    // 编辑
    edit(row) {
      console.log(row);
    },
    // 删除
    deleteUser(row) {
      console.log(row);
    },
    // 页码切换
    pageChange(page) {
      console.log("页码切换:", page);
    },
    handleSelectionChange(val) {
      console.log("多选:", val);
    },
    onSubmit(formName) {
      this.$message.error("这是一条错误消息！");
      let startDate = formName.date[0];
      let endDate = formName.date[1];
      console.log(
        formName,
        moment(startDate).format("YYYY-MM-DD"),
        moment(endDate).format("YYYY-MM-DD")
      );
    },
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
<!--模型管理相似度比对页面 -->
<template>
  <div class="table">
     <!-- 表单 -->
 <el-card class="box-card" style="margin-bottom:20px">
          <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
            <el-form-item label="准入规则:" prop="status">
              <el-input v-model="testForm.status"></el-input>
            </el-form-item>
             <!-- <el-form-item label="非准入规则:" prop="status">
              <el-input v-model="testForm.status"></el-input>
            </el-form-item> -->
            <el-form-item>
              <div class="search" @click="onSubmit(testForm)" style="float:left"><img src="@/assets/images/home/sbtn.png"/><span class="searchBtn">搜索</span> </div>
               <div class="search" @click="add" style="float:left;margin-left:20px;"><img src="@/assets/images/home/sbtn.png" style="width:130px;height:35px;object-fit:fill;"/><span class="searchBtn">添加非准入规则</span> </div>
            </el-form-item>
          </el-form>
      </el-card>

    <myTable :columns="columns" :dataSource="dataSource"  :hasPagination="true"
      :total="total" @pageChange="pageChange">
       <el-table-column slot="operate" label="操作"  align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="deletes(scope.row)">删除</el-button>
          </template>
        </el-table-column>
     </myTable>
     
     <!-- 对话框 -->
     <el-dialog title="添加非准入规则" :visible.sync="dialogFormVisible" center>
        <el-form :model="form">
            <el-form-item>
                <el-checkbox :indeterminate="form.isIndeterminate" v-model="form.checkAll" @change="handleCheckAllChange(form.checkAll)">全选</el-checkbox>
                <div style="margin: 15px 0;"></div>
                <el-checkbox-group v-model="form.checkedCities" @change="handleCheckedCitiesChange(form.checkedCities)">
                    <el-checkbox v-for="city in form.cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="cancel">取 消</el-button>
            <el-button type="primary" @click="confirm(form)">确 定</el-button>
        </div>
     </el-dialog>

  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getSimilarityRatio } from "@/api/login.js";

const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  components: { myTable },
  data() {
    return {
      dialogFormVisible: false,
      height: 600,
      loading: false,
      total: 0,
      testForm: {
        status: ""
      },
      form: {
        checkAll: false,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true
      },
      formLabelWidth: "120px",
      columns: [
        {
          prop: "featureName",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "status",
          label: "准入特征",
          isShow: true,
          render: function(v, param) {
            if (param.row.status === 1) {
              return "是";
            } else if (param.row.status === 2) {
              return "否";
            }
          }
        },
        {
          prop: "",
          label: "非准入特征",
          isShow: true,
          render: function(v, param) {
            if (param.row.status === 1) {
              return "否";
            } else if (param.row.status === 2) {
              return "是";
            }
          }
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
      // let params = { current: 1, size: 10 };
      getSimilarityRatio()
        .then(res => {
          this.loading = true;
          this.total = res.data.total;
          this.dataSource = res.data.records;
          const data = this.dataSource;
          //过滤数据，status===0则删除数据
          Array.from(data).forEach((item, index) => {
            if (item.status === 0) {
              console.log(item, index);
              data.splice(data[index], 1);
            }
          });
          console.log(this.dataSource);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 页码切换
    pageChange(page) {
      this.loading = true;
      let params = { current: page.currentPage, size: page.pageSize };
      getSimilarityRatio(params)
        .then(res => {
          this.loading = true;
          this.total = res.data.total;
          this.dataSource = res.data.records;
          const data = this.dataSource;
          //过滤数据，status===0则删除数据
          Array.from(data).forEach((item, index) => {
            if (item.status === 0) {
              console.log(item, index);
              data.splice(data[index], 1);
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    //查询非准入规则
    queryNonAccessRules() {},
    //添加非准入规则
    add() {
      this.dialogFormVisible = true;
      //   this.queryNonAccessRules();
    },
    //删除
    deletes(row) {
      console.log(row);
    },
    //全选
    handleCheckAllChange(val) {
      this.form.checkedCities = val ? cityOptions : [];
      console.log(this.form.checkedCities);
      this.form.isIndeterminate = false;
    },
    //多选
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.form.checkAll = checkedCount === this.form.cities.length;
      this.form.isIndeterminate =
        checkedCount > 0 && checkedCount < this.form.cities.length;
      console.log(value);
    },
    // 提交对话框
    confirm(form) {
      //  this.dialogFormVisible = false;
      console.log(form);
    },
    cancel() {
      this.dialogFormVisible = false;
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

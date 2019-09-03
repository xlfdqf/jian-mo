<!--特征iv值页面 -->
<template>
  <div class="table">
     <!-- 表单 -->
      <el-card class="box-card" style="margin-bottom:20px">
          <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
            <el-form-item label="特征字段:" prop="featureField">
              <el-input v-model="testForm.featureField"></el-input>
            </el-form-item>
            <el-form-item>
              <!-- <el-button type="primary"  icon="el-icon-search" @click="onSubmit(testForm)">搜索</el-button> -->
               <div class="search" @click="onSubmit(testForm)"><img src="@/assets/images/home/sbtn.png"/><span class="searchBtn">搜索</span> </div>
            </el-form-item>
          </el-form>
      </el-card>

      <el-card class="box-card2">
        <el-row>
          <el-col :span="12"><div>
              <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" 
              :hasSelection="false" :hasPagination="true"  @pageChange="pageChange" :total="total" :loading="tableLoading" > </myTable></div>
         </el-col>
         <!-- 报表 end -->
          <el-col :span="12"><div>
             <ve-bar :data="chartData" :settings="chartSettings" :extend="chartExtend" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" 
         element-loading-background="rgba(9, 25, 56, 0.8)" v-loading="chartLoading"></ve-bar> <!--排序条形图-->
          </div>
          </el-col>
          <!-- 图表 end -->
        </el-row>
      </el-card>
  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getIVvalue } from "@/api/login.js";
import { tabType } from "../characteristics/util.js";

export default {
  components: { myTable },
  data() {
    this.chartExtend = {
      series: {
        color: "rgb(126, 203, 224)" //柱子背景颜色
      },
      xAxis: {
        axisLabel: {
          textStyle: {
            color: "rgb(126, 203, 224)"
          }
        }
      },
      yAxis: {
        axisLabel: {
          textStyle: {
            color: "rgb(126, 203, 224)"
          }
        }
      },
      legend: {
        textStyle: {
          color: "rgb(126, 203, 224)" //图例字体颜色
        }
      }
    };
    this.chartSettings = {
      labelMap: {
        sum_of_iv: "每箱iv值"
      },
      metrics: ["sum_of_iv"],
      dataOrder: {
        label: "sum_of_iv",
        order: "desc"
      }
    };
    this.extend = {
      series: {
        label: { show: true, position: "right" }
      }
    };
    return {
      tableLoading: false,
      chartLoading: false,
      total: 0,
      testForm: {
        featureField: ""
      },
      columns: [
        {
          prop: "feature_name",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "feature_field",
          label: "字段名称",
          isShow: true
        },
        {
          prop: "sum_of_iv",
          label: "IV值",
          isShow: true
        }
      ],
      dataSource: [],
      chartData: {
        columns: ["feature_name", "sum_of_iv"],
        rows: []
      }
    };
  },
  created() {
    this.queryTable();
    this.queryEcharts();
  },
  methods: {
    // 查询列表
    queryTable() {
      this.tableLoading = true;
      let params = { current: 1, size: 10 };
      getIVvalue(params)
        .then(res => {
          this.tableLoading = false;
          this.total = res.data.total;
          this.dataSource = res.data.records;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //查询图表
    queryEcharts() {
      this.chartLoading = true;
      let params = { current: 1, size: 10 };
      getIVvalue(params)
        .then(res => {
          this.chartLoading = false;
          const data = res.data.records;
          data.forEach(item => {
            this.chartData.rows.push({
              feature_name: item.feature_name,
              sum_of_iv: item.sum_of_iv
            });
          });
          this.chartTotal = res.data.total;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 表格页码切换
    pageChange(page) {
      this.tableLoading = true;
      this.chartLoading = true;
      let params = { current: page.currentPage, size: page.pageSize };
      getIVvalue(params)
        .then(res => {
          //报表数据
          this.tableLoading = false;
          this.chartLoading = false;
          this.chartTotal = res.data.total;
          this.dataSource = res.data.records;
          //图表数据
          this.chartLoading = false;
          const data = res.data.records;
          this.chartData.rows = [];
          data.forEach(item => {
            this.chartData.rows.push({
              feature_name: item.feature_name,
              sum_of_iv: item.sum_of_iv
            });
          });
        })
        .catch(error => {
          console.log(error);
        });
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

<!-- 模型评价页面-->
<template>
  <div class="table">
         <!-- 表单 -->
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

      <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card" class="box-card2">
        <el-tab-pane label="报表" name="1" ref="tab1">
             <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" :height="height"
              :hasSelection="false" :hasPagination="false" :total="tableTotal" @pageChange="pageChange" :loading="tableLoading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="2" ref="tab2"> 
           <div v-loading="chartLoading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" element-loading-background="rgba(9, 25, 56, 0.8)" style="height:750px;">
              <!-- 按月、年统计tab -->
               <el-tabs v-model="activeName2" @tab-click="handleClick2"  type="border-card" class="box-card2">
                   <el-tab-pane label="按月统计" name="1">
                       <div class="title">上个月样本反馈<div class="areaName">曲线面积</div></div>
                        <ve-line :data="chartData" :settings="chartSettings" :extend="chartExtend" ref="chart1"></ve-line>
                   </el-tab-pane>
                   <el-tab-pane label="按年统计" name="2">
                      <div class="title">全年数据统计<div class="areaName">曲线面积</div></div>
                      <ve-line :data="chartData2" :settings="chartSettings" :extend="chartExtend" ref="chart2"></ve-line>
                   </el-tab-pane>
               </el-tabs>
              <!-- 按月、年统计tab -->
           </div>
        </el-tab-pane>
        <!-- 柱状图表 end -->
      </el-tabs>
    <el-tooltip placement="top" content="回到顶部">
      <nx-back-to-top transitionName="fade" :customStyle="myBackToTopStyle" :visibilityHeight="300" :backPosition="50"></nx-back-to-top>
    </el-tooltip>
  </div>
</template>

<script>
import myTable from "@/components/myTable";
import nxBackToTop from "@/components/nx-back-to-top";
import { getMxpjTable, getMxpjChart } from "@/api/login.js";
import { tabType, tabType2 } from "../characteristics/util.js";
import moment from "moment";

export default {
  components: { myTable, nxBackToTop },
  data() {
    this.chartSettings = {
      area: true,
      axisSite: { right: ["number"] },
      xAxisName: ["日期"],
      //   xAxisNameTextStyle: "white",
      yAxisName: ["曲线面积", "个数"],
      labelMap: {
        area: "曲线面积",
        number: "个数"
      }
    };
    this.chartExtend = {
      xAxis: {
        nameTextStyle: {
          color: "rgb(126, 203, 224)"
        },
        axisLabel: {
          textStyle: {
            color: "rgb(126, 203, 224)"
          }
        }
      },
      yAxis: {
        nameTextStyle: {
          color: "rgb(126, 203, 224)"
        },
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
    return {
      myBackToTopStyle: {
        right: "50px",
        bottom: "50px",
        width: "40px",
        height: "40px",
        "border-radius": "4px",
        "line-height": "45px", // 请保持与高度一致以垂直居中
        background: "#e7eaf1" // 按钮的背景颜色
      },
      height: 650,
      tableLoading: false,
      chartLoading: false,
      activeName: "1",
      activeName2: "1",
      tableTotal: 0,
      chartTotal: 100,
      currentPage: 1,
      tab: "",
      testForm: { date: "" },
      columns: [
        {
          prop: "dt",
          label: "日期",
          isShow: true,
          render: function(v, param) {
            return moment(param.row.dt).format("YYYY-MM-DD");
          }
        },
        {
          prop: "areaUnderCurve",
          label: "roc曲线面积",
          isShow: true
        },
        {
          prop: "a",
          label: "是否属于正常范围",
          isShow: true,
          render: function(v, param) {
            if (param.row.areaUnderCurve > 0.5) {
              return "是";
            } else {
              return "否";
            }
          }
        }
      ],
      // 表格所需数据格式
      dataSource: [],
      // echart所需数据格式
      chartData: {
        columns: ["date", "area", "number"],
        rows: [
          { date: "1", area: 0.23, number: 1093 },
          { date: "2", area: 0.14, number: 3230 },
          { date: "3", area: 0.34, number: 2623 },
          { date: "4", area: 0.65, number: 1423 },
          { date: "5", area: 0.89, number: 3492 },
          { date: "6", area: 0.5, number: 4293 }
        ]
      },
      chartData2: {
        columns: ["date", "area", "number"],
        rows: [
          { date: "1月", area: 1, number: 1093 },
          { date: "2月", area: 3530, number: 3230 },
          { date: "3月", area: 2923, number: 2623 },
          { date: "4月", area: 1723, number: 1423 },
          { date: "5月", area: 3792, number: 3492 },
          { date: "6月", area: 4593, number: 4293 }
        ]
      }
    };
  },
  mounted() {
    this.queryTable();
  },
  methods: {
    // 查询table报表
    queryTable() {
      this.tableLoading = true;
      getMxpjTable()
        .then(res => {
          this.tableLoading = false;
          this.dataSource = res.data.records;
          this.tableTotal = res.data.total;
        })
        .catch(error => {
          console.log(error);
        });
    },
    //查询曲线图表
    queryEcharts() {
      //   this.chartLoading = true;
      //   getMxpjChart()
      //     .then(res => {
      //       this.chartLoading = false;
      //     })
      //     .catch(error => {
      //       console.log(error);
      //     });
    },
    // 切换tab
    handleClick(tab) {
      this.tab = tabType(tab.name);
      //   if (this.tab === "chart") {
      //     this.queryEcharts();
      //   } else {
      //     this.queryTable();
      //   }
    },
    handleClick2(tab) {
      this.tab = tabType2(tab.name);
      if (this.tab === "month") {
      } else {
      }
    },
    // 表格页码切换
    pageChange(page) {},
    // 图表分页
    handleCurrentChange(e) {},
    onSubmit(testForm) {
      console.log(testForm);
    }
  },
  // 解决初次点击tab charts不显示问题
  watch: {
    activeName(v) {
      this.$nextTick(_ => {
        this.$refs.chart1.echarts.resize();
      });
    },
    activeName2(v) {
      this.$nextTick(_ => {
        this.$refs[`chart${v}`].echarts.resize();
      });
    }
  }
};
</script>

<style scoped>
.tit {
  text-align: center;
  font-size: 14px;
  margin-top: -40px;
  color: rgb(126, 203, 224);
}
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
.title {
  width: 100%;
  height: auto;
  padding: 10px;
  border: 10px solid #0c2a4d;
  color: rgb(126, 203, 224);
}
.areaName {
  float: right;
}
.areaName:after {
  content: "";
  display: table;
  width: 15px;
  height: 15px;
  background: #159c8b;
  border-radius: 50%;
  position: relative;
  left: -20px;
  top: -15px;
}
</style>

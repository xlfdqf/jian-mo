<!--特征离散分析页面 -->
<template>
    <div class="table">
     <!-- 表单 -->
      <el-card class="box-card" style="margin-bottom:20px">
          <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
            <el-form-item label="特征字段:" prop="featureField">
              <el-input v-model="testForm.featureField"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  icon="el-icon-search" @click="onSubmit(testForm)">搜索</el-button>
            </el-form-item>
          </el-form>
      </el-card>

      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="报表" name="1">
             <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" 
              :hasSelection="false" :hasPagination="true" :total="tableTotal" @pageChange="pageChange" :loading="tableLoading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="2">
          <div ref="chart2" style="width:1700px;height: 500px"></div>
        </el-tab-pane>
        <!-- 箱线图表 end -->
      </el-tabs>

  </div>
</template>

<script>
import echarts from "echarts";
import myTable from "@/components/myTable";
import { getDiscreteAnalysis } from "@/api/login.js";
import {} from "./util.js";

export default {
  components: { myTable },
  data() {
    return {
      activeName: "1",
      tableTotal: 100,
      tableLoading: false,
      chartLoading: false,
      testForm: {
        featureField: ""
      },
      columns: [
        {
          prop: "a",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "b",
          label: "特征样本个数",
          isShow: true
        },
        {
          prop: "c",
          label: "特征样本缺失个数",
          isShow: true
        },
        {
          prop: "d",
          label: "众数",
          isShow: true
        },
        {
          prop: "e",
          label: "平均数",
          isShow: true,
          render: function(v, param) {
            return param.row.e;
          }
        },
        {
          prop: "f",
          label: "中位数",
          isShow: true
        },
        {
          prop: "g",
          label: "最大值",
          isShow: true
        },
        {
          prop: "h",
          label: "最小值",
          isShow: true
        }
      ],
      dataSource: [],
      chartDataOne: [
        [655, 850, 940, 980, 1070], //[655, 850, 940, 980, 1070]分别是表示下边缘,下四分位数，中位数，上四位数，上边缘
        [760, 800, 845, 885, 960],
        [780, 840, 855, 880, 940],
        [720, 767.5, 815, 865, 920],
        [740, 807.5, 810, 870, 950]
      ],
      //异常值数据
      outliers: [
        [0, 650], // 0代表第几个字段
        [1, 620],
        [2, 720],
        [3, 720],
        [4, 950],
        [5, 970]
      ],
      xAxisData: []
      // xAxisData: ["年龄", "籍贯", "星座", "芝麻分", "婚姻状况"]
    };
  },
  created() {
    // this.query();
    this.initEchart();
  },
  methods: {
    // 切换tab
    handleClick(tab, event) {
      // console.log(tab.name);
    },
    // 查询列表
    query() {
      this.loading = true;
      let params = { pageIndex: 1, pageSize: 10 };
      // getDiscreteAnalysis(params)
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
      // getDiscreteAnalysis(params)
      //   .then(res => {
      //     this.dataSource = res.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    // 搜索
    onSubmit(testForm) {
      // console.log(testForm);
    },
    // 初始化相信图
    initEchart() {
      let xAxisData = this.getXAxisData(this.chartDataOne.length);

      let chart2 = this.$refs.chart2;
      let echart = echarts.init(chart2);
      echart.setOption({
        title: [
          {
            text: "箱线图",
            left: "center"
          }
        ],
        tooltip: {
          trigger: "item",
          axisPointer: {
            type: "shadow"
          }
        },
        grid: {
          left: "10%",
          right: "10%",
          bottom: "15%"
        },
        xAxis: {
          type: "category",
          data: xAxisData,
          boundaryGap: true,
          nameGap: 30,
          splitArea: {
            show: false
          },
          axisLabel: {
            formatter: "{value}"
          },
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          name: "Y轴值",
          splitArea: {
            show: true
          }
        },
        series: [
          {
            name: "boxplot",
            type: "boxplot",
            data: this.chartDataOne,
            tooltip: {
              formatter: function(param) {
                return [
                  "特征字段 :" + param.name,
                  "上边缘: " + param.data[5],
                  "上四分位数: " + param.data[4],
                  "中位数: " + param.data[3],
                  "下四分位数: " + param.data[2],
                  "下边缘: " + param.data[1]
                ].join("<br/>");
              }
            }
          },
          {
            name: "outlier",
            type: "scatter",
            data: this.outliers // 异常值数据
          }
        ]
      });
    },
    // 获取x轴标题
    getXAxisData(length) {
      let xAxisData = [];
      for (let i = 0; i < length; i++) {
        xAxisData.push("名称" + i);
      }
      return xAxisData;
    }
  }
};
</script>

<style scoped>
</style>

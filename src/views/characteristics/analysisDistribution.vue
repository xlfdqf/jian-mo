<!--特征分布分析页面 -->
<template>
  <div class="table">
      <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card" class="box-card2">
        <el-tab-pane label="报表" name="1">
             <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" 
              :hasSelection="false" :hasPagination="true" :total="tableTotal" @pageChange="pageChange" :loading="tableLoading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="2">
             <el-row >
                <div v-for="item in chartData" :key="item.id">
                  <el-col :span="8"><div> <ve-histogram :data-zoom="dataZoom" :settings="chartSettings" :extend="chartExtend" v-loading="chartLoading" :data-empty="dataEmpty" :data="item" ref="chart2"></ve-histogram><p class="tit">{{item.name}}</p></div></el-col>
                </div>
              </el-row>
              <el-pagination
                @current-change="handleCurrentChange"
                :currentPage="currentPage"
                layout="prev, pager, next"
                :total="chartTotal"
                align="right">
              </el-pagination>
        </el-tab-pane>
        <!-- 柱状图表 end -->

      </el-tabs>
  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getAnalysisDistribution } from "@/api/login.js";
import { tabType } from "./util.js";
import "echarts/lib/component/dataZoom"; //区域缩放组件

export default {
  components: { myTable },
  data() {
    this.chartExtend = {
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
    // 区域缩放
    this.dataZoom = [
      {
        type: "slider",
        start: 0,
        end: 20
      }
    ];
    return {
      tableLoading: false,
      chartLoading: false,
      dataEmpty: false, //暂无数据
      activeName: "1",
      tableTotal: 100,
      chartTotal: 100,
      currentPage: 1,
      tab: "",
      columns: [
        {
          prop: "a",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "b",
          label: "特征分箱结果",
          isShow: true,
          render: function(v, param) {
            return param.row.b.map(item => {
              return <div>{item}</div>;
            });
          }
        },
        {
          prop: "c",
          label: "每箱个数",
          isShow: true,
          render: function(v, param) {
            return param.row.c.map(item => {
              return <div>{item}</div>;
            });
          }
        },
        {
          prop: "d",
          label: "每箱比例",
          isShow: true,
          render: function(v, param) {
            return param.row.d.map(item => {
              return <div>{item}</div>;
            });
          }
        }
      ],
      dataSource: [
        {
          a: "年龄",
          b: ["0-10", "10-19", "20-29"],
          c: [50, 33, 78],
          d: [0.5, 0.32, 0.4]
        },
        {
          a: "籍贯",
          b: ["北京", "上海", "浙江"],
          c: [50, 33, 78],
          d: [0.5, 0.32, 0.4]
        },
        {
          a: "星座",
          b: ["巨蟹", "双子", "天蝎"],
          c: [50, 33, 78],
          d: [0.5, 0.32, 0.4]
        }
      ],
      // 循环所需数据格式
      chartData: [
        {
          id: 1,
          name: "年龄",
          columns: ["特征分箱结果", "每箱个数", "每箱比例"],
          rows: [
            { 特征分箱结果: "0-10岁", 每箱个数: 5, 每箱比例: 11.56 },
            { 特征分箱结果: "11-20岁", 每箱个数: 10, 每箱比例: 78.54 },
            { 特征分箱结果: "21-30岁", 每箱个数: 80, 每箱比例: 44.34 },
            { 特征分箱结果: "31-40岁", 每箱个数: 53, 每箱比例: 99.9 }
          ]
        },
        {
          id: 2,
          name: "籍贯",
          columns: ["特征分箱结果", "每箱个数", "每箱比例"],
          rows: [
            { 特征分箱结果: "上海", 每箱个数: 12, 每箱比例: 11.56 },
            { 特征分箱结果: "北京", 每箱个数: 65, 每箱比例: 78.54 },
            { 特征分箱结果: "重庆", 每箱个数: 88, 每箱比例: 44.34 },
            { 特征分箱结果: "安庆", 每箱个数: 33, 每箱比例: 99.9 }
          ]
        },
        {
          id: 3,
          name: "星座",
          columns: ["特征分箱结果", "每箱个数", "每箱比例"],
          rows: [
            { 特征分箱结果: "巨蟹", 每箱个数: 56, 每箱比例: 11.56 },
            { 特征分箱结果: "天蝎", 每箱个数: 66, 每箱比例: 78.54 },
            { 特征分箱结果: "双子", 每箱个数: 22, 每箱比例: 44.34 },
            { 特征分箱结果: "处女", 每箱个数: 9, 每箱比例: 99.9 }
          ]
        }
      ]
    };
  },
  created() {
    // this.queryTable();
    // this.queryEcharts();
  },
  methods: {
    // 切换tab
    handleClick(tab) {
      this.tab = tabType(tab.name);
      console.log(this.tab);
    },
    // 查询报表
    queryTable() {
      this.tableLoading = true;
      let params = { pageIndex: 1, pageSize: 10 };
      // getAnalysisDistribution(params)
      //   .then(res => {
      //     this.tableLoading = false;
      //     this.total = res.total;
      //     this.dataSource = res.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    //查询图表
    queryEcharts() {
      // this.chartLoading = true;
      // getAnalysisDistributionChart(params)
      //   .then(res => {
      //     this.chartLoading = false;
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
    // 图表分页
    handleCurrentChange(e) {
      // console.log(e);
      let params = { pageSize: 9, pageIndex: e };
    }
  },
  // 解决初次点击tab charts不显示问题
  watch: {
    activeName(v) {
      this.$nextTick(_ => {
        let ref = this.$refs[`chart${v}`];
        if (ref) {
          ref.forEach(item => {
            item.echarts.resize();
          });
        } else {
        }
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

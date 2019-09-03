<!--特征分布分析页面 -->
<template>
  <div class="table">
      <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card" class="box-card2">
        <el-tab-pane label="报表" name="1">
             <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" :height="height"
              :hasSelection="false" :hasPagination="false" :total="tableTotal" @pageChange="pageChange" :loading="tableLoading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="2">
          <div v-loading="chartLoading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" 
         element-loading-background="rgba(9, 25, 56, 0.8)">
             <el-row >
                <div v-for="item in chartData" :key="item.id">
                  <el-col :span="12"><div> <ve-histogram :extend="chartExtend" :settings="chartSettings" v-loading="chartLoading"  :data="item" ref="chart2"></ve-histogram><p class="tit">{{item.name}}</p></div></el-col>
                </div>
              </el-row>
              <!-- <el-pagination
                @current-change="handleCurrentChange"
                :currentPage="currentPage"
                layout="prev, pager, next"
                :total="chartTotal"
                align="right">
              </el-pagination> -->
               </div>
        </el-tab-pane>
        <!-- 柱状图表 end -->

      </el-tabs>
  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getAnalysisDistribution } from "@/api/login.js";
import { tabType, dataType } from "./util.js";
import "echarts/lib/component/dataZoom"; //区域缩放组件

export default {
  components: { myTable },
  data() {
    this.chartExtend = {
      series: {
        label: {
          show: true,
          position: "top"
        }
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
    // 区域缩放
    this.dataZoom = [
      {
        type: "slider",
        start: 0,
        end: 20
      }
    ];
    this.chartSettings = {
      labelMap: {
        total: "每箱个数",
        proportion: "每箱比例"
      }
    };
    return {
      height: 750,
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
          prop: "featureName",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "bucket",
          label: "特征分箱结果",
          isShow: true,
          render: function(v, param) {
            return param.row.bucket.map(item => {
              return <div>{item}</div>;
            });
          }
        },
        {
          prop: "total",
          label: "每箱个数",
          isShow: true,
          render: function(v, param) {
            return param.row.total.map(item => {
              return <div>{item}</div>;
            });
          }
        },
        {
          prop: "proportion",
          label: "每箱比例",
          isShow: true,
          render: function(v, param) {
            return param.row.proportion.map(item => {
              return <div>{item}</div>;
            });
          }
        }
      ],
      dataSource: [],
      // 循环所需数据格式
      chartData: [
        // {
        //   id: 1,
        //   name: "年龄",
        //   columns: ["特征分箱结果", "每箱个数", "每箱比例"],
        //   rows: [
        //     { 特征分箱结果: "0-10岁", 每箱个数: 5, 每箱比例: 11.56 },
        //     { 特征分箱结果: "11-20岁", 每箱个数: 10, 每箱比例: 78.54 },
        //     { 特征分箱结果: "21-30岁", 每箱个数: 80, 每箱比例: 44.34 },
        //     { 特征分箱结果: "31-40岁", 每箱个数: 53, 每箱比例: 99.9 }
        //   ]
        // },
      ]
    };
  },
  created() {
    this.queryTable();
    // this.queryEcharts();
  },
  methods: {
    //过滤table报表数据
    filterTable(data, dataType) {
      console.log;
      const types = dataType.map(({ featurename, value }) => {
        return {
          featureName: value,
          bucket: [],
          total: [],
          proportion: []
        };
      });
      data.map(item => {
        types.forEach(t => {
          if (item["featureName"] == t["featureName"]) {
            t.bucket.push(item.bucket);
            t.total.push(item.total);
            t.proportion.push(item.proportion);
          }
        });
      });
      return types;
    },
    // 过滤charts图表数据
    filterData(data, dataType) {
      const types = dataType.map(({ featurename, value }) => {
        return {
          name: value,
          columns: ["bucket", "total", "proportion"],
          rows: []
        };
      });
      data.forEach(item => {
        types.forEach(t => {
          if (item["featureName"] === t["name"]) {
            t.rows.push({
              bucket: item.bucket,
              total: item.total,
              proportion: item.proportion
            });
          }
        });
      });

      return types;
    },
    // 切换tab
    handleClick(tab) {
      this.tab = tabType(tab.name);
      if (this.tab === "chart") {
        this.queryEcharts();
      } else {
        this.queryTable();
      }
    },
    // 查询报表
    queryTable() {
      this.tableLoading = true;
      getAnalysisDistribution()
        .then(res => {
          this.tableLoading = false;
          this.dataSource = this.filterTable(res.data, dataType);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //查询图表
    queryEcharts() {
      this.chartLoading = true;
      getAnalysisDistribution()
        .then(res => {
          this.chartLoading = false;
          this.chartData = this.filterData(res.data, dataType);
        })
        .catch(error => {
          console.log(error);
        });
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
  color: rgb(126, 203, 224);
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

<!--特征分箱页面 -->
<template>
  <div class="table">
         <!-- 表单 -->
      <el-card class="box-card" style="margin-bottom:20px">
          <el-form :inline="true" :model="testForm" ref="testForm" class="demo-form-inline">
            <el-form-item label="特征字段:" prop="featureField">
              <el-input v-model="testForm.featureField"></el-input>
            </el-form-item>
            <el-form-item>
             <div class="search" @click="onSubmit(testForm)"><img src="@/assets/images/home/sbtn.png"/><span class="searchBtn">搜索</span> </div>
            </el-form-item>
          </el-form>
      </el-card>

      <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card" class="box-card2">
        <el-tab-pane label="报表" name="1">
          <!-- :height="height" -->
             <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" :height="height"
              :hasSelection="false" :hasPagination="true" :total="tableTotal" @pageChange="pageChange" :loading="tableLoading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="2">  <!-- 需分页 -->
           <div v-loading="chartLoading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" 
         element-loading-background="rgba(9, 25, 56, 0.8)">
             <el-row>
                <div v-for="item in chartData" :key='item.name'>
                  <el-col :span="8"><div>
                    <!-- <keep-alive> -->
                       <ve-histogram :settings="chartSettings" :extend="chartExtend" :data="item" ref="chart2"></ve-histogram>
                    <!-- </keep-alive> -->
                    <p class="tit">{{item.name}}</p></div></el-col>
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
import { getFeatureBox, getFeatureBoxChart } from "@/api/login.js";
import { tabType, dataType } from "./util.js";
import "echarts/lib/component/dataZoom"; //区域缩放组件

export default {
  components: { myTable },
  data() {
    this.dataZoom = [
      {
        type: "slider",
        start: 0,
        end: 50
      }
    ];
    this.chartExtend = {
      series: {
        color: "rgb(126, 203, 224)", //柱子背景颜色
        label: {
          show: true,
          position: "top",
          textStyle: {
            color: "rgb(126, 203, 224)"
          }
        }
      },
      xAxis: {
        axisLabel: {
          interval: 0,
          rotate: 40, //x轴标题倾斜
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
        iv: "每箱iv值"
      }
    };
    return {
      orgOptions: {},
      height: 650,
      tableLoading: false,
      chartLoading: false,
      dataEmpty: false, //暂无数据
      activeName: "1",
      tableTotal: 0,
      chartTotal: 100,
      currentPage: 1,
      tab: "",
      testForm: { featureField: "" },
      columns: [
        {
          prop: "featureField",
          label: "特征字段",
          isShow: true
        },
        {
          prop: "group_concat_bucket",
          label: "特征分箱结果",
          isShow: true,
          render: function(v, param) {
            return param.row.group_concat_bucket.map(item => {
              return <div>{item}</div>;
            });
          }
        },
        {
          prop: "group_concat_iv",
          label: "每箱iv值",
          isShow: true,
          render: function(v, param) {
            return param.row.group_concat_iv.map(item => {
              return <div>{item}</div>;
            });
          }
        }
      ],
      // 表格所需数据格式
      dataSource: [],
      // echart所需数据格式
      chartData: []
    };
  },
  mounted() {
    this.queryTable();
  },
  methods: {
    //过滤报表数据
    filterTable(data) {
      const result = data.map(item => {
        return {
          featureField: item["featureField"],
          group_concat_bucket: item.group_concat_bucket.split(","),
          group_concat_iv: item.group_concat_iv.split(",")
        };
      });
      return result;
    },
    // 过滤图表数据
    filterData(data, dataType) {
      const types = dataType.map(({ featurename, value }) => {
        return {
          name: value,
          columns: ["bucket", "iv"],
          rows: []
        };
      });
      data.forEach(item => {
        // console.log(item);
        types.forEach(t => {
          // if (item["featureField"] === t["name"]) {
          //   t.rows.push({ bucket: item.bucket, iv: item.iv });
          // }
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
      let params = {
        current: 1,
        size: 10
      };
      getFeatureBox(params)
        .then(res => {
          console.log(res);
          this.tableLoading = false;
          this.tableTotal = res.total;
          this.dataSource = this.filterTable(res.records);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //查询分箱图表
    queryEcharts() {
      this.chartLoading = true;
      getFeatureBoxChart()
        .then(res => {
          this.chartLoading = false;
          this.chartData = this.filterData(res.records, dataType);
          // console.log(this.chartData);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 表格页码切换
    pageChange(page) {
      let params = { current: page.currentPage, size: page.pageSize };
      getFeatureBox(params)
        .then(res => {
          this.tableLoading = false;
          this.tableTotal = res.total;
          this.dataSource = this.filterTable(res.records);
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 图表分页
    handleCurrentChange(e) {
      console.log("当前页：", e);
      let params = { pageSize: 9, pageIndex: e };
    },
    onSubmit(testForm) {
      console.log(testForm);
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

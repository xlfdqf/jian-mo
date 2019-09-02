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
              :hasSelection="false" :hasPagination="false" :total="tableTotal" @pageChange="pageChange" :loading="tableLoading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="2">  <!-- 需分页 -->
           <div v-loading="chartLoading" element-loading-text="拼命加载中" element-loading-spinner="el-icon-loading" 
         element-loading-background="rgba(9, 25, 56, 0.8)">
             <el-row>
                <div v-for="item in chartData" :key='item.name'>
                  <el-col :span="12"><div>
                    <!-- <keep-alive> -->
                       <ve-histogram :settings="chartSettings" :extend="chartExtend" :data="item" ref="chart2" :data-empty="dataEmpty"></ve-histogram>
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
          // interval: 0,
          // rotate: 40, //x轴标题倾斜
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
      height: 630,
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
          prop: "iv",
          label: "每箱iv值",
          isShow: true,
          render: function(v, param) {
            return param.row.iv.map(item => {
              return <div>{item}</div>;
            });
          }
        }
      ],
      // 表格所需数据格式
      dataSource: [
        // {
        //   featureField: "年龄",
        //   group_concat_bucket: ["0-10", "20-30", "30-40"],
        //   group_concat_iv: [0.3, 0.2, 0.55]
        // },
      ],
      // echart所需数据格式
      chartData: [
        // {
        //   name: "年龄",
        //   columns: ["bucket", "iv"],
        //   rows: [
        //     {
        //       bucket: "0-10",
        //       iv: 0.3
        //     },
        //     {
        //       bucket: "20-30",
        //       iv: 0.5
        //     }
        //   ]
        // }
      ]
    };
  },
  mounted() {
    this.queryTable();
  },
  methods: {
    //字段排序
    // const getNumber = (val) => {
    // 		const lists = val.split('-');
    // 		let num = 0;
    // 		for(let i = 0; i < lists.length; i++) {
    // 			num += lists[i]
    // 		}
    // 		return num;
    // 	},
    // sortData(data) {
    //   const sortData = [];
    //   const otherData = [];
    //   data.forEach((item, index) => {
    //     if (item.featurename === "age") {
    //       sortData.push(item);
    //     } else {
    //       otherData.push(item);
    //     }
    //   });
    //   sortData.sort((a, b) => {
    //     return getNumber(a.variate) - getNumber(b.variate);
    //   });
    //   return sortData.concat(otherData);
    // },
    //过滤table报表数据
    filterTable(data, dataType) {
      const types = dataType.map(({ featurename, value }) => {
        return {
          featureField: value,
          bucket: [],
          iv: []
        };
      });
      data.map(item => {
        types.forEach(t => {
          if (item["feature_name"] === t["featureField"]) {
            t.bucket.push(item.bucket);
            t.iv.push(item.iv);
          }
        });
      });
      console.log(types);
      return types;
    },
    // 过滤charts图表数据
    filterData(data, dataType) {
      const types = dataType.map(({ featurename, value }) => {
        return {
          name: value,
          columns: ["bucket", "iv"],
          rows: []
        };
      });
      data.forEach(item => {
        types.forEach(t => {
          if (item["feature_name"] === t["name"]) {
            t.rows.push({ bucket: item.bucket, iv: item.iv });
          }
        });
      });
      //过滤数据，后端未返回的则不显示
      // Array.from(types).forEach((item, index) => {
      //   if (item.rows.length === 0) {
      //     types.splice(types[index], 1);
      //   }
      // });
      return types;
    },
    // 查询table报表
    queryTable() {
      this.tableLoading = true;
      let params = {
        current: 1,
        size: 2000
      };
      getFeatureBox(params)
        .then(res => {
          this.tableLoading = false;
          this.tableTotal = res.data.total;
          this.dataSource = this.filterTable(res.data.records, dataType);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //查询分箱图表
    queryEcharts() {
      this.chartLoading = true;
      let params = {
        current: 1,
        size: 2000
      };
      getFeatureBoxChart(params)
        .then(res => {
          this.chartLoading = false;
          this.chartData = this.filterData(res.data.records, dataType);
          // console.log(this.chartData);
        })
        .catch(error => {
          console.log(error);
        });
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
    // 表格页码切换
    pageChange(page) {
      let params = { current: page.currentPage, size: 20 };
      getFeatureBox(params)
        .then(res => {
          this.tableLoading = false;
          this.tableTotal = res.data.total;
          this.dataSource = this.filterTable(res.data.records, dataType);
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

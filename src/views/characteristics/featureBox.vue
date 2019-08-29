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
             <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" 
              :hasSelection="false" :hasPagination="false" :total="tableTotal" @pageChange="pageChange" :loading="tableLoading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="2">  <!-- 需分页 -->
           <div v-loading="chartLoading">
             <el-row>
                <div v-for="item in chartData" :key='item.name'>
                  <el-col :span="8"><div>
                    <!-- <keep-alive> -->
                       <ve-histogram :settings="chartSettings" :extend="chartExtend" :data="item" ref="chart2"></ve-histogram>
                    <!-- </keep-alive> -->
                    <p class="tit">{{item.name}}</p></div></el-col>
                </div>
              </el-row>
              <el-pagination
                @current-change="handleCurrentChange"
                :currentPage="currentPage"
                layout="prev, pager, next"
                :total="chartTotal"
                align="right">
              </el-pagination>
           </div>
        </el-tab-pane>
        <!-- 柱状图表 end -->

      </el-tabs>
  </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getFeatureBox } from "@/api/login.js";
import { tabType, dataType, featureType } from "./util.js";
import "echarts/lib/component/dataZoom"; //区域缩放组件

export default {
  components: { myTable },
  data() {
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
        c: "每箱iv值"
      }
    };
    return {
      orgOptions: {},
      // height: 200,
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
          label: "每箱iv值",
          isShow: true,
          render: function(v, param) {
            return param.row.c.map(item => {
              return <div>{item}</div>;
            });
          }
        }
      ],
      // 表格所需数据格式
      dataSource: [],
      // echart所需数据格式
      chartData: [
        // {
        //   name: "年龄",
        //   columns: ["b", "c"],
        //   rows: [{ b: "0-10岁", c: 10 }, { b: "11-20岁", c: 10 }]
        // },
        // {
        //   name: "籍贯省",
        //   columns: ["b", "c"],
        //   rows: [{ b: "上海", c: 5 }, { b: "安徽", c: 10 }]
        // },
        // {
        //   name: "星座",
        //   columns: ["b", "c"],
        //   rows: [{ b: "巨蟹", c: 5 }, { b: "天蝎", c: 10 }]
        // }
      ]
    };
  },
  mounted() {
    this.queryTable();
    // const data = [
    //   {
    //     featureField: "年龄",
    //     group_concat_bin_split: "0-18,20-31",
    //     group_concat_iv: "0.333,0.65"
    //   },
    //   {
    //     featureField: "芝麻分",
    //     binSplit: "0-100",
    //     iv: "0.3"
    //   },
    //   {
    //     featureField: "星座",
    //     binSplit: "巨蟹,天蝎",
    //     iv: "0.3,0.5"
    //   }
    // ];
    // this.dataSource = this.filterTable(data);
  },

  methods: {
    //过滤报表数据
    filterTable(data) {
      const result = data.map(item => {
        return {
          a: item["featureField"],
          b: item.group_concat_bin_split.split(","),
          c: item.group_concat_iv.split(",")
        };
      });
      return result;
    },
    // 过滤图表数据
    filterData(data, dataType) {
      let types = dataType.map(({ featurename, value }) => {
        return {
          name: value,
          columns: ["b", "c"],
          rows: []
        };
      });
      data.forEach(item => {
        types.forEach(t => {
          if (item["name"] === t["name"]) {
            t.rows.push({ b: item.b, c: item.c });
          }
        });
      });
      return types;
    },
    // 切换tab
    handleClick(tab) {
      this.tab = tabType(tab.name);
      if (this.tab === "chart") {
        let data = [
          { name: "年龄", b: "0-10岁", c: 12 },
          { name: "年龄", b: "11-20岁", c: 23 },
          { name: "星座", b: "巨蟹", c: 54 },
          { name: "星座", b: "天蝎", c: 26 },
          { name: "籍贯省", b: "北京", c: 54 },
          { name: "籍贯省", b: "安徽", c: 26 }
        ];
        this.chartData = this.filterData(data, dataType);
        // console.log(this.chartData);
      } else {
        this.queryTable();
      }
    },
    // 查询报表
    queryTable() {
      this.tableLoading = true;
      getFeatureBox()
        .then(res => {
          this.tableLoading = false;
          // this.tableTotal = res.total;
          this.dataSource = this.filterTable(res.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    //查询分箱图表
    queryEcharts() {
      // this.chartLoading = true;
      // getFeatureBoxChart(params)
      //   .then(res => {
      // this.chartLoading = false;
      //     this.dataSource = res.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    },
    // 表格页码切换
    pageChange(page) {
      console.log(page);
      let params = { pageIndex: page.currentPage, pageSize: page.pageSize };
      // getFeatureBox(params)
      //   .then(res => {
      //     this.dataSource = res.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
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
}
.search:hover {
  cursor: pointer;
}
.searchBtn {
  position: absolute;
  top: -4px;
  left: 20px;
  color: #7ecbe0;
}
</style>

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
              <el-button type="primary"  icon="el-icon-search" @click="onSubmit(testForm)">搜索</el-button>
            </el-form-item>
          </el-form>
      </el-card>

      <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card">
        <el-tab-pane label="报表" name="1">
             <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" :height="height"
              :hasSelection="false" :hasPagination="true" :total="tableTotal" @pageChange="pageChange" :loading="tableLoading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="2" class="bg">  <!-- 需分页 -->
           <div v-loading="chartLoading">
             <el-row>
                <div v-for="item in ddd" :key='item.name'>
                  <el-col :span="8"><div>
                    <!-- <keep-alive> -->
                       <ve-histogram :settings="chartSettings" :data="item" ref="chart2"></ve-histogram>
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
import { tabType, dataType } from "./util.js";
import "echarts/lib/component/dataZoom"; //区域缩放组件

export default {
  components: { myTable },
  data() {
    this.chartSettings = {
      labelMap: {
        c: "每箱iv值"
      }
    };
    return {
      height: 600,
      tableLoading: false,
      chartLoading: false,
      dataEmpty: false, //暂无数据
      activeName: "1",
      tableTotal: 100,
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
      dataSource: [
        { a: "年龄", b: ["0-10", "10-19", "20-29"], c: [0.5, 0.32, 0.4] },
        { a: "籍贯", b: ["北京", "上海", "浙江"], c: [0.5, 0.32, 0.4] },
        { a: "星座", b: ["巨蟹", "双子", "天蝎"], c: [0.5, 0.32, 0.4] },
        { a: "籍贯", b: ["北京", "上海", "浙江"], c: [0.5, 0.32, 0.4] },
        { a: "星座", b: ["巨蟹", "双子", "天蝎"], c: [0.5, 0.32, 0.4] },
        { a: "籍贯", b: ["北京", "上海", "浙江"], c: [0.5, 0.32, 0.4] },
        { a: "星座", b: ["巨蟹", "双子", "天蝎"], c: [0.5, 0.32, 0.4] }
      ],
      // echart所需数据格式
      chartData: [],
      ddd: []
    };
  },
  mounted() {},
  methods: {
    filterData(data, dataType) {
      const newDataType = dataType.map(({ featurename, value, key }) => {
        return {
          name: value,
          row: []
        };
      });
      data.forEach(item => {
        newDataType.forEach(t => {
          if (item["name"] === t["name"]) {
            t.row.push({ b: item.b, c: item.c });
            Object.assign(t, { columns: ["b", "c"] });
          }
        });
      });
      return newDataType;
    },
    // 切换tab
    handleClick(tab) {
      this.tab = tabType(tab.name);
      if (this.tab === "chart") {
        const tb = [
          {
            name: "年龄",
            columns: ["b", "c"],
            rows: [{ b: "0-10岁", c: 10 }, { b: "11-20岁", c: 10 }]
          },
          {
            name: "籍贯省",
            columns: ["b", "c"],
            rows: [{ b: "上海", c: 5 }, { b: "安徽", c: 10 }]
          },
          {
            name: "星座",
            columns: ["b", "c"],
            rows: [{ b: "巨蟹", c: 5 }, { b: "天蝎", c: 10 }]
          }
        ];
        this.chartData = tb;
        console.log("tb:", this.chartData);

        let data = [
          { b: "0-10岁", c: 0, name: "年龄" },
          { b: "12-30岁", c: 23, name: "年龄" },
          { b: "北京", c: 87, name: "籍贯省" },
          { b: "安徽", c: 44, name: "籍贯省" },
          { b: "巨蟹", c: 66, name: "星座" },
          { b: "天蝎", c: 88, name: "星座" }
        ];
        const tb2 = this.filterData(data, dataType);
        this.ddd = tb2;
        console.log("tb2:", this.ddd);
      }
    },
    // 查询报表
    queryTable() {
      this.tableLoading = true;
      let params = { pageIndex: 1, pageSize: 10 };
      // getFeatureBox(params)
      //   .then(res => {
      //     this.tableLoading = false;
      //     this.total = res.total;
      //     this.dataSource = res.data;
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
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
}
/* .table >>> .bg {
  background-color: #344b58 !important;
  color: #888;
} */
</style>

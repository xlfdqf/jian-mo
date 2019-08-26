<!--特征分箱页面 -->
<template>
  <div class="table">
      <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card">
        <el-tab-pane label="报表" name="1">
             <myTable :columns="columns" :dataSource="dataSource" :hasIndex="false" 
              :hasSelection="false" :hasPagination="true" :total="tableTotal" @pageChange="pageChange" :loading="tableLoading"> </myTable>
        </el-tab-pane>
        <!-- 报表 end -->

        <el-tab-pane label="图表" name="2" class="bg">  <!-- 需分页 -->
           <div v-loading="chartLoading">
             <el-row>
                <div v-for="item in chartData" :key="item.id">
                  <el-col :span="8"><div> <ve-histogram :data-zoom="dataZoom" :grid="grid" :data-empty="dataEmpty" :data="item" ref="chart2"></ve-histogram><p class="tit">{{item.name}}</p></div></el-col>
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
import {} from "./util.js";
import "echarts/lib/component/dataZoom"; //区域缩放组件

export default {
  components: { myTable },
  data() {
    // 图表背景颜色
    this.grid = {
      // show: true,
      // top: 50,
      // left: 10,
      // backgroundColor: "#344B58",
      // borderColor: "#000"
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
        { a: "星座", b: ["巨蟹", "双子", "天蝎"], c: [0.5, 0.32, 0.4] }
      ],
      // echart所需数据格式
      chartData: [
        {
          id: 1,
          name: "年龄",
          columns: ["特征分箱结果", "每箱iv值"],
          rows: [
            { 特征分箱结果: "0-10岁", 每箱iv值: 5 },
            { 特征分箱结果: "11-20岁", 每箱iv值: 10 },
            { 特征分箱结果: "21-30岁", 每箱iv值: 80 },
            { 特征分箱结果: "31-40岁", 每箱iv值: 53 }
          ]
        },
        {
          id: 2,
          name: "籍贯",
          columns: ["特征分箱结果", "每箱iv值"],
          rows: [
            { 特征分箱结果: "上海", 每箱iv值: 5 },
            { 特征分箱结果: "安徽", 每箱iv值: 10 },
            { 特征分箱结果: "江苏", 每箱iv值: 80 },
            { 特征分箱结果: "北京", 每箱iv值: 53 }
          ]
        },
        {
          id: 3,
          name: "星座",
          columns: ["特征分箱结果", "每箱iv值"],
          rows: [
            { 特征分箱结果: "巨蟹", 每箱iv值: 5 },
            { 特征分箱结果: "天蝎", 每箱iv值: 10 },
            { 特征分箱结果: "双子", 每箱iv值: 80 },
            { 特征分箱结果: "白羊", 每箱iv值: 53 }
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
    handleClick(tab, event) {
      console.log(tab.name);
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

<!--评分卡页面-->
<template>
 <div class="table scoreCard">
    <el-card class="box-card">
        <myTable ref="mychild" :columns="columns" :dataSource="dataSource"  :loading="loading" 
        :hasSelection="false" :hasPagination="false" :height="height">
           <el-table-column slot="operate" label="操作"  align="center">
              <template slot-scope="scope">
                <el-button type="text" @click="selected(scope.row)">选中</el-button>
                <el-button type="text" @click.stop="cancel()">取消</el-button>
              </template>
          </el-table-column>
        </myTable>
    </el-card>
 </div>
</template>

<script>
import myTable from "@/components/myTable";
import { dataTypes, bgRender } from "./util.js";
export default {
  components: { myTable },
  data() {
    return {
      loading: false,
      height: 800, //表格高度，固定表头
      columns: [
        {
          label: "特征分类",
          prop: "classification",
          isShow: true,
          render: function(v, param) {
            if (param.row.transferFactor === "无") {
              return <span style="color:red">{param.row.classification}</span>;
            } else {
              return <span>{param.row.classification}</span>;
            }
          }
        },
        {
          label: "特征名称",
          prop: "featureName",
          isShow: true,
          render: function(v, param) {
            if (param.row.transferFactor === "无") {
              return <span style="color:red">{param.row.featureName}</span>;
            } else {
              return <span>{param.row.featureName}</span>;
            }
          }
        },
        {
          label: "特征分箱",
          prop: "featureBox",
          isShow: true,
          render: function(v, param) {
            let featureBox = param.row.featureBox;
            if (featureBox && Array.isArray(featureBox)) {
              if (param.row.transferFactor === "无") {
                return featureBox.map((v, i) => {
                  return <div style="color:red">{v}</div>;
                });
              } else {
                return featureBox.map((v, i) => {
                  return <div>{v}</div>;
                });
              }
            } else {
              return <div>{featureBox}</div>;
            }
          }
        },
        {
          label: "分箱历史逾期率",
          prop: "overdueBoxRate",
          isShow: true,
          render: function(v, param) {
            let overdueBoxRate = param.row.overdueBoxRate;
            if (overdueBoxRate && Array.isArray(overdueBoxRate)) {
              if (param.row.transferFactor === "无") {
                return overdueBoxRate.map((v, i) => {
                  return <div style="color:red">{v}</div>;
                });
              } else {
                return overdueBoxRate.map((v, i) => {
                  return <div>{v}</div>;
                });
              }
            } else {
              return <div>{overdueBoxRate}</div>;
            }
          }
        },
        {
          label: "特征iv值",
          prop: "featureIV",
          isShow: true,
          render: function(v, param) {
            let featureIV = param.row.featureIV;
            if (featureIV && Array.isArray(featureIV)) {
              if (param.row.transferFactor === "无") {
                return featureIV.map((v, i) => {
                  return <div style="color:red">{v}</div>;
                });
              } else {
                return featureIV.map((v, i) => {
                  return <div>{v}</div>;
                });
              }
            } else {
              return <div>{featureIV}</div>;
            }
          }
        },
        {
          label: "分箱iv值",
          prop: "boxIV",
          isShow: true,
          render: function(v, param) {
            let boxIV = param.row.boxIV;
            if (boxIV && Array.isArray(boxIV)) {
              if (param.row.transferFactor === "无") {
                return boxIV.map((v, i) => {
                  return <div style="color:red">{v}</div>;
                });
              } else {
                return boxIV.map((v, i) => {
                  return <div>{v}</div>;
                });
              }
            } else {
              return <div>{boxIV}</div>;
            }
          }
        },
        {
          label: "转移因子",
          prop: "transferFactor",
          isShow: true,
          render: function(v, param) {
            if (param.row.transferFactor === "无") {
              return <span style="color:red">{param.row.transferFactor}</span>;
            } else {
              return <span>{param.row.transferFactor}</span>;
            }
          }
        },
        {
          label: "基础参数",
          prop: "basicParams",
          isShow: true,
          render: function(v, param) {
            let basicParams = param.row.basicParams;
            if (basicParams && Array.isArray(basicParams)) {
              if (param.row.transferFactor === "无") {
                return basicParams.map((v, i) => {
                  return <div style="color:red">{v}</div>;
                });
              } else {
                return basicParams.map((v, i) => {
                  return <div>{v}</div>;
                });
              }
            } else {
              return <div>{basicParams}</div>;
            }
          }
        },
        {
          label: "灰名单数量",
          prop: "greyNum",
          isShow: true,
          render: function(v, param) {
            let greyNum = param.row.greyNum;
            if (greyNum && Array.isArray(greyNum)) {
              if (param.row.transferFactor === "无") {
                return greyNum.map((v, i) => {
                  return <div style="color:red">{v}</div>;
                });
              } else {
                return greyNum.map((v, i) => {
                  return <div>{v}</div>;
                });
              }
            } else {
              return <div>{greyNum}</div>;
            }
          }
        }
      ],
      dataSource: [
        {
          classification: "基本信息",
          featureName: "年龄",
          featureBox: ["0--18", "18--36", "36--60", "60--80"],
          overdueBoxRate: [0.11, 0.23, 0.98, 1.23],
          featureIV: [0.11, 0.23, 0.98, 1.23],
          boxIV: [0.11, 0.23, 0.98, 1.23],
          transferFactor: "无",
          basicParams: [0.11, 0.23, 0.98, 1.23],
          greyNum: [0.11, 0.23, 0.98, 1.23]
        },
        {
          classification: "基本信息",
          featureName: "年龄",
          featureBox: ["0--18", "18--36", "36--60", "60--80"],
          overdueBoxRate: [0.11, 0.23, 0.98, 1.23],
          featureIV: [0.11, 0.23, 0.98, 1.23],
          boxIV: [0.11, 0.23, 0.98, 1.23],
          transferFactor: "有",
          basicParams: [0.11, 0.23, 0.98, 1.23],
          greyNum: [0.11, 0.23, 0.98, 1.23]
        },
        {
          classification: "基本信息",
          featureName: "年龄",
          featureBox: ["0--18", "18--36", "36--60", "60--80"],
          overdueBoxRate: [0.11, 0.23, 0.98, 1.23],
          featureIV: [0.11, 0.23, 0.98, 1.23],
          boxIV: [0.11, 0.23, 0.98, 1.23],
          transferFactor: "有",
          basicParams: [0.11, 0.23, 0.98, 1.23],
          greyNum: [0.11, 0.23, 0.98, 1.23]
        },
        {
          classification: "基本信息",
          featureName: "年龄",
          featureBox: ["0--18", "18--36", "36--60", "60--80"],
          overdueBoxRate: [0.11, 0.23, 0.98, 1.23],
          featureIV: [0.11, 0.23, 0.98, 1.23],
          boxIV: [0.11, 0.23, 0.98, 1.23],
          transferFactor: "有",
          basicParams: [0.11, 0.23, 0.98, 1.23],
          greyNum: [0.11, 0.23, 0.98, 1.23]
        },
        {
          classification: "基本信息",
          featureName: "年龄",
          featureBox: ["0--18", "18--36", "36--60", "60--80"],
          overdueBoxRate: [0.11, 0.23, 0.98, 1.23],
          featureIV: [0.11, 0.23, 0.98, 1.23],
          boxIV: [0.11, 0.23, 0.98, 1.23],
          transferFactor: "有",
          basicParams: [0.11, 0.23, 0.98, 1.23],
          greyNum: [0.11, 0.23, 0.98, 1.23]
        },
        {
          classification: "基本信息",
          featureName: "年龄",
          featureBox: ["0--18", "18--36", "36--60", "60--80"],
          overdueBoxRate: [0.11, 0.23, 0.98, 1.23],
          featureIV: [0.11, 0.23, 0.98, 1.23],
          boxIV: [0.11, 0.23, 0.98, 1.23],
          transferFactor: "有",
          basicParams: [0.11, 0.23, 0.98, 1.23],
          greyNum: [0.11, 0.23, 0.98, 1.23]
        },
        {
          classification: "基本信息",
          featureName: "年龄",
          featureBox: ["0--18", "18--36", "36--60", "60--80"],
          overdueBoxRate: [0.11, 0.23, 0.98, 1.23],
          featureIV: [0.11, 0.23, 0.98, 1.23],
          boxIV: [0.11, 0.23, 0.98, 1.23],
          transferFactor: "有",
          basicParams: [0.11, 0.23, 0.98, 1.23],
          greyNum: [0.11, 0.23, 0.98, 1.23]
        },
        {
          classification: "基本信息",
          featureName: "年龄",
          featureBox: ["0--18", "18--36", "36--60", "60--80"],
          overdueBoxRate: [0.11, 0.23, 0.98, 1.23],
          featureIV: [0.11, 0.23, 0.98, 1.23],
          boxIV: [0.11, 0.23, 0.98, 1.23],
          transferFactor: "有",
          basicParams: [0.11, 0.23, 0.98, 1.23],
          greyNum: [0.11, 0.23, 0.98, 1.23]
        }
      ]
    };
  },
  methods: {
    selected(row) {
      this.$refs.mychild.selectedSon(row);
    },
    cancel() {
      this.$refs.mychild.selectedSon();
    }
  }
};
</script>

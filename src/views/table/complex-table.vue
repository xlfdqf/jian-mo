<template>
 <div class="table">
   <el-card class="box-card">
   <div class="text item">
      <!-- height="800" 固定表头 -->
       <el-table
    :data="tableData"
    style="width: 100%"
    :row-class-name="tableRowClassName"
    :header-cell-style="{background:'#eef1f6'}" border>
   <el-table-column
      prop="type"
      align="center"
      width="120"
    >
    </el-table-column>
    <el-table-column
      prop="good"
      label="好人"
      align="center"
      :formatter="formatGood">
    </el-table-column>
      <el-table-column
        prop="bad"
        label="坏人"
        align="center"
        :formatter="formatBad">
      </el-table-column>
       <el-table-column
          prop="overdue"
          label="逾期"
          align="center"
          >
        </el-table-column>
        <el-table-column
          prop="suspicious"
          label="可疑"
          align="center"
          >
        </el-table-column>
  </el-table>
  </div>
</el-card>
 </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        //好人
        {
          type: "好人",
          good: "好人到好人",
          bad: "好人到坏人",
          overdue: "好人到逾期",
          suspicious: "好人到可疑"
        },
        {
          // type: "好人",
          good: "2016-05-03",
          bad: "王小虎",
          overdue: ["第一次", "第二次", "第三次"],
          suspicious: "上海"
        },
        {
          // type: "好人",
          good: "2016-05-02",
          bad: "王小虎",
          overdue: ["第一次", "第二次", "第三次"],
          suspicious: "上海"
        },
        //坏人
        {
          type: "坏人",
          good: "坏人到好人",
          bad: "坏人到坏人",
          overdue: "坏人到逾期",
          suspicious: "坏人到可疑"
        },
        {
          // type: "坏人",
          good: "2016-05-02",
          bad: "王小虎",
          overdue: ["第一次", "第二次", "第三次"],
          suspicious: "上海"
        },
        //逾期
        {
          type: "逾期",
          good: "逾期到好人",
          bad: "逾期到坏人",
          overdue: "逾期到逾期",
          suspicious: "逾期到可疑"
        },
        {
          //  type: "逾期",
          good: "2016-05-02",
          bad: "王小虎",
          overdue: ["第一次", "第二次", "第三次"],
          suspicious: "上海"
        },
        //可疑
        {
          type: "可疑",
          good: "可疑到好人",
          bad: "可疑到坏人",
          overdue: "可疑到逾期",
          suspicious: "可疑到可疑"
        },
        {
          good: "2016-05-02",
          bad: "王小虎",
          overdue: ["第一次", "第二次", "第三次"],
          suspicious: "上海"
        }
      ]
    };
  },
  mounted() {},
  methods: {
    // 好人格式化
    formatGood(row) {
      if (row.good) {
        return <div style="color:red">{row.good}</div>;
      }
    },
    // 坏人格式化
    formatBad(row) {
      if (row.bad) {
        return <div style="color:red">{row.bad}</div>;
      }
    },
    // 逾期格式化
    formatOverdue(row) {
      if (row.overdue) {
        if (Array.isArray(row.overdue)) {
          return row.overdue.map((v, i) => {
            return <div style="color:red">{v}</div>;
          });
        } else {
          return <div style="color:red">{row.overdue}</div>;
        }
      }
    },
    //可疑格式化
    formatSuspicious(row) {
      if (row.suspicious) {
        return <div style="color:red">{row.suspicious}</div>;
      }
    },
    // 添加单元格整行背景颜色
    tableRowClassName(row) {
      // console.log(row);
      if (
        row.row.type === "好人" ||
        row.row.type === "坏人" ||
        row.row.type === "逾期" ||
        row.row.type === "可疑"
      ) {
        return "bg";
      } else {
        return "";
      }
    }
  }
};
</script>

<style scoped>
.table {
  width: 98%;
  margin: 20px auto;
}
.table >>> .bg {
  background-color: #eef1f6;
}
.colr {
  color: red;
}
</style>
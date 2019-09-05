<!-- 模型管理转移矩阵页面 -->
<template>
 <div class="table">
   <el-card class="box-card">
   <div class="text item">
       <el-table
    :data="tableData"
    style="width: 100%"
    stripe
   border>
   <el-table-column
      prop="type"
      align="center"
      width="120"
     :formatter="formatType"
    >
    </el-table-column>
    <el-table-column
      prop="good"
      label="好人"
      align="center"
      :formatter="formatGood">
    </el-table-column>
     <el-table-column
          prop="grey"
          label="灰名单"
          align="center"
          :formatter="formatGrey"
          >
        </el-table-column>
      <el-table-column
        prop="bad"
        label="坏人"
        align="center"
        :formatter="formatBad">
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
          good: "好人保持不变的个数比",
          grey: "从好人到灰名单的个数比",
          bad: "从好人到坏人的个数比"
        },
        {
          type: "计算说明",
          good: 0.5,
          grey: 0.5,
          bad: 0.5
        },
        //灰名单
        {
          type: "灰名单",
          good: "从灰名单到好人的个数比",
          grey: "保持灰名单不变的个数比",
          bad: "从灰名单到坏人的个数比"
        },
        {
          type: "计算说明",
          good: 0.5,
          grey: 0.5,
          bad: 0.5
        },
        //坏人
        {
          type: "坏人",
          good: "从坏人到好人的个数比",
          grey: "从坏人到的个数比",
          bad: "保持坏人不变的个数比"
        },
        {
          type: "计算说明",
          good: 0.5,
          grey: 0.5,
          bad: [0.1, 0.2, 0.3]
        }
      ]
    };
  },
  created() {},
  methods: {
    //类型格式化
    formatType(row) {
      if (row.type === "计算说明") {
        return <div style="color:red">{row.type}</div>;
      } else {
        return <div>{row.type}</div>;
      }
    },
    // 好人格式化
    formatGood(row) {
      if (row.good === 0.5) {
        return <div style="color:red">{row.good}</div>;
      } else {
        return <div>{row.good}</div>;
      }
    },
    //灰名单格式化
    formatGrey(row) {
      if (row.grey === 0.5) {
        return <div style="color:red">{row.bad}</div>;
      } else {
        return <div>{row.grey}</div>;
      }
    },
    // 坏人格式化
    formatBad(row) {
      console.log(row);
      //   row.bad.map(item => {
      //     if (row.bad === 0.5) {
      //       return <div style="color:red">{row.bad}</div>;
      //     } else {
      //       return <div>{row.bad}</div>;
      //     }
      //   });
    }
  }
};
</script>

<style scoped>
.table {
  width: 98%;
  margin: 20px auto;
}
.table >>> .el-card {
  background-color: #080920;
  border: none;
}
</style>
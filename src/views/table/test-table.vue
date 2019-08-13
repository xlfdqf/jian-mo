<template>
 <div class="table">
   <el-card class="box-card">
     <myTable :columns="columns" :dataSource="dataSource" :hasIndex="true" :hasSelection="true" :hasPagination="true"
       @handleSelectionChange="handleSelectionChange"
      :total="total" @pageChange="pageChange">
       <el-table-column slot="operate" label="操作"  align="center">
          <template slot-scope="scope">
            <el-button type="text" @click="edit(scope.row)">查看</el-button>
            <el-button type="text" @click="edit(scope.row)">编辑</el-button>
            <el-button type="text" @click="deleteUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
     </myTable>
</el-card>
 </div>
</template>

<script>
import myTable from "@/components/myTable";
export default {
  components: { myTable },
  data() {
    return {
      total: 100,
      columns: [
        {
          prop: "title",
          label: "标题",
          isShow: true, //是否显示
          isSort: true //是否排序
        },
        {
          prop: "create_name",
          label: "发布人",
          isShow: true
        },
        {
          prop: "item_name",
          label: "栏目",
          isShow: true
        },
        {
          prop: "create_time",
          label: "创建时间",
          isShow: true,
          isSort: true
        },
        {
          prop: "weight",
          label: "权重",
          isShow: true
        },
        // {
        //   prop: "weight",
        //   label: "权重",
        //   isShow: true,
        //   render: function(v, param) {
        //     let weight = param.row.weight;
        //     if (weight) {
        //       if (Array.isArray(weight)) {
        //         return weight.map((v, i) => {
        //           return <div style="color:#F56C6C">{v}</div>;
        //         });
        //       } else {
        //         return <div style="color:#F56C6C">{weight}</div>;
        //       }
        //     }
        //   }
        // },
        {
          prop: "isoriginal",
          label: "原创",
          isShow: true,
          index: 6,
          render: function(v, param) {
            let html = "";
            if (param.row.isoriginal == "201") {
              html = "原创";
            } else {
              html = "非原创";
            }
            return html;
          }
        }
      ],
      dataSource: [
        {
          title: "标题1",
          create_name: "王小虎",
          item_name: "栏目1",
          create_time: "2019-8-7",
          weight: "重要",
          isoriginal: 201
        },
        {
          title: "标题2",
          create_name: "王小虎",
          item_name: "栏目3",
          create_time: "2019-8-7",
          // weight: ["第一次", "第二次", "第三次"],
          weight: "紧急",
          isoriginal: 201
        },
        {
          title: "标题3",
          create_name: "王小虎",
          item_name: "栏目3",
          create_time: "2019-8-7",
          weight: "重要且紧急",
          isoriginal: 200
        }
      ]
    };
  },
  methods: {
    // 编辑
    edit(row) {
      console.log(row);
    },
    // 删除
    deleteUser(row) {
      console.log(row);
    },
    // 页码切换
    pageChange(page) {
      console.log("页码切换:", page);
    },
    handleSelectionChange(val) {
      console.log("多选:", val);
    }
  }
};
</script>
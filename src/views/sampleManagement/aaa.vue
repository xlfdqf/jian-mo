<!--转移矩阵页面-->
<template>
 <div class="table transferMatrix" v-loading="loading">
    转移矩阵页面
   <ul v-for="item in data" :key="item.date">
	   <li>{{item.name}}</li>
   </ul>
 </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      loading: false,
      table: [],
      data: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {}
};
</script>

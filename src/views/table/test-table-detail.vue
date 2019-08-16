<template>
 <div class="table">
   <el-card class="box-card">
     封装表格详情页面 
   </el-card>
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // 获取传递的参数
    console.log(this.$route.params.title);
  }
};
</script>
<!-- 手身份证详情页面-->
<template>
 <div class="table">
   <el-card class="box-card">
     <h4 style="text-align:center"><span style="margin-right:30px">用户姓名：马云</span> <span>身份证号:340824199608021234</span></h4>
     <div class="box" v-for="item in list" :key="item.index">
       <p class="blod" style="text-align:center"><span style="margin-right:30px">用户行为检测</span>   <span>来源：{{item.title}}</span></p>
       <el-row>
        <el-col :span="8"><div class="blod">查询该企业相关数量：{{item.num1}}</div></el-col>
        <el-col :span="8"><div class="blod">查询该企业相关数量：{{item.num2}}</div></el-col>
        <el-col :span="8"><div class="blod">查询该企业相关数量：{{item.num3}}</div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="blod">号码注册过的公开网站：{{item.website1}}</div></el-col>
        <el-col :span="8"><div class="blod">号码注册过的公开网站：{{item.website2}}</div></el-col>
        <el-col :span="8"><div class="blod">号码注册过的公开网站：{{item.website3}}</div></el-col>
      </el-row>
     </div>
   </el-card>
 </div>
</template>

<script>
import myTable from "@/components/myTable";
import { getNewsList } from "@/api/login.js";

export default {
  components: { myTable },
  data() {
    return {
      list: [
        {
          title: "金盾",
          num1: 1,
          num2: 2,
          num3: 3,
          website1: 11,
          website2: 22,
          website3: 33
        },
        {
          title: "金盾2",
          num1: 1,
          num2: 2,
          num3: 3,
          website1: 11,
          website2: 22,
          website3: 33
        },
        {
          title: "金盾3",
          num1: 1,
          num2: 2,
          num3: 3,
          website1: 11,
          website2: 22,
          website3: 33
        }
      ]
    };
  },
  mounted() {
    console.log(this.$route.params.idcard);
  },
  methods: {
    // 测试访问接口
    query() {
      let params = { cp: 1, ps: 5 };
      getNewsList(params)
        .then(res => {
          console.log("返回数据：", res);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.box {
  width: 50%;
  height: auto;
  border: 1px solid #dddddd;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.blod {
  font-weight: bold;
  padding-bottom: 20px;
}
</style>

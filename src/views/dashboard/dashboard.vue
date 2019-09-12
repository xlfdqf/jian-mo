<template>
  <div class="table">
    <el-card>
      <el-row>
        <el-col :span="9" style="height:400px">
          <div class="item">
            <p>历史用户统计</p>
            <el-col :span="8" class="item-content">
              <div class="circle">
                <div class="big"></div>
                <div class="small"></div>
                   <p>好人样本</p>
                   <p style="top:65px;">23500</p>
              </div>
            </el-col>
            <el-col :span="8" class="item-content">
              <div class="circle">
                <div class="big"></div>
                <div class="small" style=" border: 10px solid #FF9745; border-bottom-color: transparent;"></div>
                <p style="color:#FF9745;">灰名单样本</p>
                <p style="color:#FF9745;top:65px;">2350</p>
              </div>
            </el-col>
            <el-col :span="8" class="item-content">
              <div class="circle">
                <div class="big"></div>
                <div class="small" style=" border: 10px solid #A859FF; border-bottom-color: transparent;"></div>
                <p style="color:#A859FF;">黑户样本</p>
                 <p style="color:#A859FF;top:65px;">235</p>
              </div>
            </el-col>
          </div>
          </el-col>
        <el-col :span="6">
          <div class="item">
            <p>当前最重要特征iv值</p>
             <el-col :span="24"><p>缴纳保险月份数：<span>0.58</span></p></el-col>
             <el-col :span="24"><p>缴纳保险月份数：<span>0.58</span></p></el-col>
            <el-col :span="24"><p>缴纳保险月份数：<span>0.58</span></p></el-col>
            <el-col :span="24"><p>缴纳保险月份数：<span>0.58</span></p></el-col>
            <el-col :span="24"><p>缴纳保险月份数：<span>0.58</span></p></el-col>
          </div>
          </el-col>
        <el-col :span="9">
            <div class="item">
             <p>昨日样本分布 </p>
              <el-col :span="8" class="water">
               <p style="color:#40B1F9">好用户</p>
                <div class="container">
                  <div class="wave">
                    <span>50%</span>
                    </div>
                </div>
              </el-col>
              <el-col :span="8" class="water">
                <p style="color:#FF9745">灰名单</p>
                <div class="container" style="border: 5px solid #FF9745;">
                  <div class="wave" style="background-color: #F8CFAF;">
                    <span style="color:#FF9745">50%</span>
                    </div>
                </div>
              </el-col>
              <el-col :span="8" class="water">
                <p style="color:#A859FF">黑名单</p>
                <div class="container" style="border: 5px solid #A859FF;">
                  <div class="wave" style="background-color: #DCBFFC;">
                    <span style="color:#A859FF">50%</span>
                    </div>
                </div>
              </el-col>
            </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "report",
  data() {
    return {};
  },
  created() {},
  computed: {}
};
</script>

<style scoped>
.table >>> .el-card {
  background-color: #091938;
  border: none;
}

.item {
  height: 400px;
  margin-bottom: 16px;
  border: 1px solid #091938;
  background-color: #080920;
  margin-right: 20px;
}
.item p {
  text-align: center;
  color: #3fbde0;
  font-weight: bold;
}
.item::after {
  content: "";
  display: block;
  clear: both;
}
.item-content {
  /* border: 1px solid red; */
}
/* 镂空圆环效果 */
.circle {
  position: relative;
  box-sizing: border-box;
  width: 10rem;
  height: 10rem;
  margin: 0 auto;
}
.big {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  position: absolute;
  margin: auto;
  /*以下五个属性为水平垂直居中的方法*/
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
}
.small {
  width: 8rem;
  height: 8rem;
  border: 10px solid #40b1f9;
  border-radius: 50%;
  position: absolute;
  margin: auto;
  /*以下五个属性为水平垂直居中的方法*/
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  border-bottom-color: transparent;
}
.circle p {
  width: 90px;
  height: auto;
  position: absolute;
  top: 45px;
  left: 37px;
  color: #40b1f9;
  font-weight: bold;
  text-align: center;
}
/* 水波纹效果 */
.water {
  position: relative;
}
/* .water p {
  position: absolute;
  left: 15px;
} */
.container {
  position: absolute;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 5px solid #34abff;
  top: 100px;
  left: 100px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
}
.wave {
  position: relative;
  left: -10px;
  width: 100px;
  height: 100px;
  background-color: #9dd0f0;
  border-radius: 50%;
  /* opacity: 0.7; */
}
.wave::before,
.wave::after {
  content: "";
  position: absolute;
  width: 210px;
  height: 210px;
  top: -15px;
  left: 50%;
  background-color: #080920;
  border-radius: 45%;
  transform: translate(-50%, -70%) rotate(0);
  animation: rotate 4s linear infinite;
  z-index: 10;
}
.wave::after {
  border-radius: 47%;
  background-color: #080920;
  transform: translate(-50%, -70%) rotate(0);
  animation: rotate 10s linear -5s infinite;
  z-index: 20;
}
@keyframes rotate {
  50% {
    transform: translate(-50%, -73%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -70%) rotate(360deg);
  }
}
.wave span {
  color: #40b1f9;
  font-weight: bold;
  font-size: 25px;
  z-index: 999;
  position: absolute;
  left: 25px;
  top: 25px;
}
</style>
<style lang ="scss">
@import "../../styles/data-card.scss";
@import "../../styles/data-display.scss";
@import "../../styles/data-icons.scss";
@import "../../styles/data-tabs.scss";
</style>

<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username" style="position:relative">
      <!-- <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="请输入用户名">
        <i slot="prefix" class="icon-yonghu"></i>
      </el-input> -->
       <!-- <img class="pwdimg" src="../../assets/images/toux.png"/> -->
        <el-select size="small" v-model="loginForm.username" placeholder="请选择用户" auto-complete="off">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
    </el-form-item>
    <el-form-item prop="password" style="position:relative">
       <!-- <img class="pwdimg" src="../../assets/images/suo.png"/> -->
      <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
         <!-- <i slot="prefix" class="icon-mima"></i>  -->
      </el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="record" @change="recordOpen">录制片头</el-checkbox> -->
    <el-checkbox v-model="checked" @change="remenberPwd">记住密码</el-checkbox>
    <el-form-item>
      <el-button type="primary" size="small" @click.native.prevent="handleLogin" class="login-submit">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { isvalidUsername } from "@/utils/validate";
export default {
  name: "userlogin",
  data() {
    const validateCode = (rule, value, callback) => {
      if (this.code.value !== value) {
        this.loginForm.code = "";
        this.refreshCode();
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    return {
      options: [
        {
          value: "admin",
          label: "admin"
        },
        {
          value: "editor",
          label: "editor"
        },
        {
          value: "xlf",
          label: "xlf"
        }
      ],
      loginForm: {
        username: localStorage.getItem("username"),
        password: localStorage.getItem("password"),
        code: ""
      },
      checked: JSON.parse(localStorage.getItem("checked")),
      record: false,
      code: {
        src: "",
        value: "",
        len: 4,
        type: "text"
      },
      loginRules: {
        username: [
          { required: true, message: "请选择用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码长度最少为6位", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度为4位", trigger: "blur" },
          { required: true, trigger: "blur", validator: validateCode }
        ]
      },
      passwordType: "password"
    };
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    showPassword() {
      this.passwordType === ""
        ? (this.passwordType = "password")
        : (this.passwordType = "");
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store
            .dispatch("Login", this.loginForm)
            .then(res => {
              this.$router.push({ path: "/dashboard/dashboard" });
            })
            .catch(err => {
              alert("登录失败！");
              this.$message.error(err); //登录失败提示错误
            });
        }
      });
    },
    remenberPwd() {
      let username = this.loginForm.username;
      let password = this.loginForm.password;
      if (this.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        localStorage.setItem("checked", this.checked);
      } else {
        localStorage.setItem("username", "");
        localStorage.setItem("password", "");
        localStorage.setItem("checked", false);
      }
    },
    recordOpen() {
      console.log(this.record);
    }
  }
};
</script>
<style scoped>
/* 自定义图标 */
/* select {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  width: 100%;
  height: 30px;
  line-height: 30px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
  padding: 0 30px 0 30px;
  background: url("../../assets/images/select.png") no-repeat scroll right
    center transparent;
} */
.pwdimg {
  border-style: none;
  position: absolute;
  z-index: 1000;
  top: 100;
  top: 12px;
  left: 4px;
}
.login-form >>> .el-input input {
  /* border-color: #00eeff !important; */
}
.login-form >>> .el-input--suffix .el-input__inner {
  padding-right: 100px !important;
}
</style>

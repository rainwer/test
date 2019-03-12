<template>
  <div>
    <Row>
      <Col span="8">
        <Menu :theme="theme2">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"/>内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"/>用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"/>统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </Col>
      <Col span="8">
        <Menu :theme="theme2" active-name="1-2" :open-names="['1']">
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"/>内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"/>用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"/>统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </Col>
      <Col span="8">
        <Menu :theme="theme2" :open-names="['1']" accordion>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"/>内容管理
            </template>
            <MenuItem name="1-1">文章管理</MenuItem>
            <MenuItem name="1-2">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people"/>用户管理
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats"/>统计分析
            </template>
            <MenuGroup title="使用">
              <MenuItem name="3-1">新增和启动</MenuItem>
              <MenuItem name="3-2">活跃分析</MenuItem>
              <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
              <MenuItem name="3-4">用户留存</MenuItem>
              <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
          </Submenu>
        </Menu>
      </Col>
    </Row>
    <br>
    <p>Change theme</p>
    <RadioGroup v-model="theme2">
      <Radio label="light"></Radio>
      <Radio label="dark"></Radio>
    </RadioGroup>
    <el-button class="ml10" type="text" size="medium"
        v-clipboard:copy="sysAppIds"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">点击复制</el-button>
    <Alert type="success">An info prompt+{{res}}</Alert>
    <Button type="primary" v-clipboard:copy="sysAppIds"
        v-clipboard:success="onCopy"
        v-clipboard:error="onError">666666666</Button>
    <Button type="primary" @click="click">Primary</Button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "home",
  data() {
    return {
      theme2: "light",
      res: '',
      sysAppIds: window.location.href

    };
  },
  created() {
    debugger;
    // http://127.0.0.1:8080
    axios
      .get("/api/user")
      .then(res => {
        debugger;
        console.log(res.data);
        alert(res.data)
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
      click () {
          axios
      .get("/api/user")
      .then(res => {
        debugger;
        console.log(res.data);
        this.res =res.data
      })
      .catch(function(error) {
        console.log(error);
      });
      },
      onCopy(e){
      console.log(e);
    },
    // 复制失败
    onError(e){
      alert("失败");
    },
  }
};
</script>

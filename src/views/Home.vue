<template>
  <el-row class="container">
    <el-col :span="24" class="main">
      <aside>
        <nav-menu></nav-menu>
      </aside>
      <section class="content-container">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" class="breadcrumb-container">
            <strong class="title">{{$route.name}}</strong>
            <el-breadcrumb separator="/" class="breadcrumb-inner">
              <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" class="content-wrapper">
            <transition>
              <router-view></router-view>
            </transition>
          </el-col>
        </div>
      </section>
    </el-col>
  </el-row>
</template>

<script>
  import NavMenu from 'views/NavMenu'

  export default {
    name: 'home',
    components: {
      NavMenu
    },
    data () {
      return {}
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel="stylesheet/scss">
  .container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;

    .main {
      background: #324057;
      overflow: hidden;
      aside {
        width: 230px;
      }
      .content-container {
        background: #f1f2f7;
        position: absolute;
        right: 0px;
        top: 0px;
        bottom: 0px;
        left: 230px;
        overflow-y: scroll;
        padding: 20px;
        .breadcrumb-container {
          margin-bottom: 15px;
          .title {
            width: 200px;
            float: left;
            color: #475669;
          }
          .breadcrumb-inner {
            float: right;
          }
        }
        .content-wrapper {
          background-color: #fff;
          box-sizing: border-box;
        }
      }
    }
  }
</style>

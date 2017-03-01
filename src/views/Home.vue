<template>
  <el-row>
    <el-col :span="4">
      <nav-menu></nav-menu>
    </el-col>
    <el-col :span="20">
      <div>
        <router-view></router-view>
      </div>
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
<style scoped>
</style>

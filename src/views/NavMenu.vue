<template>
  <el-menu :default-active="$route.path" @open="handleOpen" @close="handleClose" unique-opened
           router>
    <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
      <div :key="index">
        <el-submenu :index="index+''" v-if="!item.leaf">
          <template slot="title">{{item.name}}</template>
          <el-menu-item v-for="(child, childIndex) in item.children" :key="childIndex" :index="child.path" v-if="!child.hidden">{{child.name}}
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i
          :class="item.iconCls"></i>{{item.children[0].name}}
        </el-menu-item>
      </div>
    </template>
  </el-menu>
</template>

<script>
  export default {
    name: 'navMenu',
    data () {
      return {}
    },
    methods: {
      handleOpen (key, keyPath) {
      },
      handleClose (key, keyPath) {
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

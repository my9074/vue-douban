<template>
  <div class="form-box">
    <el-form label-width="80px" :model="formLabelAlign">
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="formLabelAlign.delivery"></el-switch>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'form',
    data () {
      return {
        formLabelAlign: {
          name: '',
          region: '',
          type: '',
          delivery: ''
        }
      }
    },
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .form-box {
    width: 50%;
    margin: 0 auto;
    margin-top: 60px;
  }
</style>

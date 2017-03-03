<template>
  <div class="form-box">
    <el-form label-width="80px" :model="formLabelAlign" ref="formLabelAlign">
      <el-form-item label="名称" prop="name">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式" prop="type">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="formLabelAlign.delivery"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit('formLabelAlign')">提交</el-button>
        <el-button @click="resetForm('formLabelAlign')">重置</el-button>
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
          delivery: false
        }
      }
    },
    methods: {
      submit (formName) {
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

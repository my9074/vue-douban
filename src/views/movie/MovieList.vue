<template>
  <el-row>
    <el-col :span="8" v-for="(subject, index) in subjects" :offset="2">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="subject.images.large" alt="默认" class="image">
        <div style="padding: 14px;">
          <span>{{subject.title}}</span>
          <div class="bottom clearfix">
            <el-rate
              v-model="subject.rating.average"
              :max="subject.rating.max"
              disabled
              show-text
              text-color="#ff9900"
              text-template="{value}">
            </el-rate>
            <el-button type="text" class="button">
              <router-link :to="{ path: `/movie/subject/${subject.id}`}" tag="span">查看详情</router-link>
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
  import {mapState} from 'vuex'
  import * as type from './../../store/movies/type'

  export default {
    name: 'movieList',
    data () {
      return {}
    },
    computed: {
      ...mapState({
        subjects (state) {
          return state.movie.movies[this.$route.meta.type].subjects
        }
      })
    },
    watch: {
      $route (to) {
        this.fetchData()
      }
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.$store.dispatch(type.FETCH_MOVIES, {type: this.$route.meta.type})
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>

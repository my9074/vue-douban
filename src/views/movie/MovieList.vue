<template>
  <el-row>
    <el-col :span="8" v-for="(subject, index) in subjects" :offset="3" :key="subject.id">
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
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
    <span slot="no-more">
      There is no more Movies :(
    </span>
    </infinite-loading>
  </el-row>
</template>

<script>
  import {mapState} from 'vuex'
  import * as type from './../../store/movies/type'
  import InfiniteLoading from 'vue-infinite-loading'

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
        this.clearMovies()
        this.fetchData()
      }
    },
    mounted () {
      this.fetchData()
    },
    methods: {
      fetchData (start) {
        this.$store.dispatch(type.FETCH_MOVIES, {type: this.$route.meta.type, start: start})
          .then(data => {
            if (!data.subjects.length) {
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
            } else {
              this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
            }
          })
      },
      onInfinite () {
        if (this.subjects.length) {
          this.fetchData(this.subjects.length)
        }
      },
      clearMovies () {
        this.$store.dispatch(type.CLEAR_MOVIES, {type: this.$route.meta.type})
      }
    },
    components: {
      InfiniteLoading
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
    height: 450px;
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

  .el-col {
    margin-top: 20px;
    margin-bottom: 20px;
  }
</style>

<template>
  <div>
    <div class="info">
      <p class="info-content"><span class="info-title">原名</span><span class="info-text">{{movie.original_title}}</span>
      </p>
      <p class="info-content"><span class="info-title">类型</span><span
        class="info-text">{{movie.genres | arr2string}}</span></p>
      <p class="info-content"><span class="info-title">年代</span><span class="info-text">{{movie.year}}</span></p>
      <p class="info-content"><span class="info-title">地区</span><span
        class="info-text">{{movie.countries | arr2string}}</span></p>
      <p class="info-content"><span class="info-title">又名</span><span
        class="info-text">{{movie.aka | arr2string}}</span></p>
      <p class="info-content"><span class="info-title">想看人数</span><span class="info-text">{{movie.wish_count}}</span>
      </p>
      <p class="info-content"><span class="info-title">看过人数</span><span class="info-text">{{movie.collect_count}}</span>
      </p>
      <p class="info-content"><span class="info-title">评分人数</span><span class="info-text">{{movie.ratings_count}}</span>
      </p>
      <p class="info-content"><span class="info-title">短评数量</span><span
        class="info-text">{{movie.comments_count}}</span></p>
      <p class="info-content"><span class="info-title">影评数量</span><span class="info-text">{{movie.reviews_count}}</span>
      </p>
    </div>
    <div class="summary">{{movie.summary}}</div>
    <div class="author">
      <p class="author-type">导演</p>
      <el-row>
        <el-col :span="3" v-for="director in movie.directors" :offset="2" :key="director.id">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="director.avatars && director.avatars.medium || ''" class="image">
            <div style="padding: 14px;">
              <span>{{director.name}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div class="author">
      <p class="author-type">主演</p>
      <el-row>
        <el-col :span="3" v-for="cast in movie.casts" :offset="2" :key="cast.id">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="cast.avatars && cast.avatars.medium || ''" class="image">
            <div style="padding: 14px;">
              <span>{{cast.name}}</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import {fetchMovieSubject} from '../../api/movie'

  export default {
    name: 'movieDetail',
    data () {
      return {
        movie: {
          rating: {},
          images: {},
          countries: [],
          genres: [],
          casts: [],
          directors: [],
          aka: []
        }
      }
    },
    watch: {
      $route (to) {
        this.getSubject(to.params.id)
      }
    },
    created () {
      this.getSubject(this.$route.params.id)
    },
    methods: {
      getSubject (id) {
        this.$Progress.start()
        fetchMovieSubject(id)
          .then(subject => {
            this.$Progress.finish()
            this.movie = subject
          }, res => {
            this.$Progress.fail()
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .info {
    margin: 30px;
  }

  .info-content > span {
    display: block;
  }

  .info-text {
    color: #888;
  }

  .summary {
    padding: 30px 20px;
    background: #eee;
  }

  .author {
    margin: 25px;
  }

  .author-type {
    padding: 0px 5px;
    margin: 0;
  }
</style>

<template>
  <div class="home">
    <img src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" prop-message="prop-message" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { detail as movieDetail, theaters as movieTheaters } from "@/api/movie"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  async created() {
    const res = await movieDetail("26925317");
    const res2 = await movieTheaters({ start: 1, count: 10 });
  }
}
</script>

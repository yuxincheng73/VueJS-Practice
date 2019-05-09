<!-- 1) extract video code from router -->
<!-- 2) apply code to youtube embeded iframe -->
<!-- 3) extract the params and display them -->
<!-- 4) beautify using vue-bootstrap -->
<template>
  <div id="video-show">
    <div>
      <iframe width="560" height="315" v-bind:src="videoURL" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      <h2> {{ videoTitle }} </h2>
      <p class="vdescription"> {{ videoDescription }} </p>
    </div>

    <video-index />
  </div>
</template>

<script>
import VideoIndex from './index.vue';

export default {
  name: "videoShow",
  data: function data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    'video-index': VideoIndex,
  },
  computed: {
    videoURL: function videoURL() {
      return `https://www.youtube.com/embed/${this.$route.params.id}`;
    },
    videoTitle: function videoTitle() {
      return this.$route.params.title;
    },
    videoDescription: function videoDescription() {
      return this.$route.params.description;
    },
  },
};
</script>

<style scoped>
  #video-show {
    background-color: #563d3d;
  }
  .mainHeader {
    text-align: center;
  }
  .vdescription {
    text-align: center;
    padding: 10px;
  }
  h2 {
    color: #f9f7f7;
    text-shadow: 5px 5px 5px #2d2c2c;
  }
  p {
    color: #f9f7f7;
    text-shadow: 5px 5px 5px #2d2c2c;
  }
  iframe {
    margin-top: 35px;
  }

</style>
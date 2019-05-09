<template>
  <div id="forum-index">
    <h1 class="communityForum">Community Forum</h1>
    <router-link to="/forums/new" class="newPost"> New Post </router-link>
    <table class="table tableForum">
      <tbody>
        <tr v-for="(post, i) in posts" v-bind:key="i">
          <td>
            <div>
              <router-link :to="'/forums/' + post.id">{{ post.title }}</router-link>
            </div>
            <div>
              <router-link class="btn btn-default pull-right" :to="`/forums/${post.id}/editPost`"> Edit </router-link>
              <div>{{ post.author }}</div>
              <div>{{ post.content }}</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "ForumIndex",
  data: function data() {
    return {
      posts: [],
    };
  },
  mounted: function mounted() {
    this.getPosts();
  },
  methods: {
    getPosts: function getPosts() {
      axios({
        method: "GET",
        url: `http://localhost:3000/posts`,
      }).then((response) => {
        this.posts = response.data;
      });
    },
  },
};
</script>

<style>
.communityForum {
  text-align: center;
}
.tableForum {
  text-align: left;
}
.newPost {
  float: right;
  margin-right: 50px;
}
.pull-right {
  float: right;
}
</style>
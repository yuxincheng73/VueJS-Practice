<template>
  <div class="forum-show-wrapper">
    <router-view
      :post="post"
      @createComment="onCreateComment"
      @updateComment="onUpdateComment"
    />
  </div>
</template>

<script>
import axios from 'axios';
import { mergeData } from '../../services/utils';

export default {
  name: 'ForumShowWrapper',
  data: function data() {
    return {
      post: {},
    };
  },
  mounted: function mounted() {
    this.getPost();
  },
  methods: {
    onCreateComment: function onCreateComment(data) {
      this.post.comments.push(data);
    },
    onUpdateComment: function onUpdateComment(data) {
      this.$set(this.post, 'comments', mergeData(this.post.comments, [data]));
    },
    getPost: function getPost() {
      axios({
        method: "GET",
        url: `http://localhost:3000/posts/${this.$route.params.id}?_embed=comments`,
      }).then((response) => {
        this.post = response.data;
      });
    },

  },
};
</script>
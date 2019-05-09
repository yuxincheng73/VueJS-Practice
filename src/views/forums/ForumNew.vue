<template>
  <div class="forum-edit container">
    New Post
    <hr>
    <forum-form :post="post" :onSubmit="createPost" :action="'Create'" />
  </div>

</template>

<script>
import axios from 'axios';
import ForumForm from './ForumForm.vue';

export default {
  name: 'ForumNew',
  components: {
    'forum-form': ForumForm,
  },
  data: function data() {
    return {
      post: {},
    };
  },
  methods: {
    createPost: function createPost() {
      axios({
        method: "POST",
        data: this.post,
        url: `http://localhost:3000/posts`,
      }).then(() => {
        this.$router.push('/forums');
      });
    },
  },
};
</script>
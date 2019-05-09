<template>
  <div class="forum-edit container">
    Edit Post
    <hr>
    <forum-form :post="post" :onSubmit="editPost" :action="'Edit'" />
  </div>
</template>

<script>
import axios from 'axios';
import ForumForm from './ForumForm.vue';

export default {
  name: 'ForumEdit',
  props: ["post"],
  components: {
    'forum-form': ForumForm,
  },
  methods: {
    editPost: function editPost() {
      axios({
        method: "PUT",
        data: this.post,
        url: `http://localhost:3000/posts/${this.$route.params.id}`,
      }).then(() => {
        this.$router.push(`/forums/${this.$route.params.id}`);
      });
    },
  },
};
</script>


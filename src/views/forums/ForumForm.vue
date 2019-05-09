<template>
  <form @submit="onSubmit">
    <div class="form-group">
      <label for="title">Title</label>
      <input class="form-control" type="text" v-model="post.title" />
    </div>
    <div class="form-group">
      <label for="title">Author</label>
      <input class="form-control" type="text" v-model="post.author" />
    </div>
    <div class="form-group">
      <label for="content">Content</label>
      <textarea class="form-control" v-model="post.content" />
    </div>
    <button type="submit"> {{ action }} Post </button>
  </form>
</template>

<script>
export default {
  props: ["post", "onSubmit", "action"],
};
</script>

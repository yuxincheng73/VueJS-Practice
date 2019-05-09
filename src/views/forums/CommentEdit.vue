<template>
  <b-modal
    title="Bootstrap-Vue"
    :visible="showModal"
    @hidden="onHidden"
    @ok="onOk"
  >
    <form>
      <div class="form-group">
        <label for="author">Author</label>
        <b-form-input v-model="comment.author" type="text" placeholder="Enter your name"></b-form-input>
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <b-form-textarea v-model="comment.content" id="textarea1" placeholder="Enter something" :rows="3" :max-rows="6"></b-form-textarea>
      </div>
    </form>
  </b-modal>
</template>

<script>
import axios from 'axios';

export default {
  name: 'commentEdit',
  props: ["comment", "showModal"],
  methods: {
    onHidden: function onHidden() {
      this.$emit("close");
    },
    onOk: function onOk(e) {
      e.preventDefault();

      this.editComment();
    },
    editComment: function editComment() {
      axios({
        method: "PUT",
        data: this.comment,
        url: `http://localhost:3000/comments/${this.comment.id}`,
      }).then((response) => {
        this.$emit("close");
        this.$parent.$emit("updateComment", response.data);
        this.$router.push(`/forums/${this.comment.postId}`);
      });
    },
  },
};
</script>


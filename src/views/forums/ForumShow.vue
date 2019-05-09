<template>
  <div class="forum-show">
    <div class="postShow">
      <h1 class="showTitle">{{ post.title }}</h1>
      <div>{{ post.author }}</div>
      <div>{{ post.content }}</div>
    </div>
    <hr>
    <div class="commentShow">
      <h1 class="commentTitle"> Write a comment </h1>

      <forum-form :post="newComment" :onSubmit="createComment" :action="'Comment'" />

      <div class="commentSection"> Comments </div>
      <table class="table">
        <tbody>
          <tr v-for="(comment, i) in post.comments" v-bind:key="i">
            <td>
              <div class="shiftLeft">
                <b-btn @click="openModal(comment)">Edit</b-btn>
                <span class="commentAuthor">{{ comment.author }}</span> <br>
                <span>{{ comment.content }}</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <comment-edit
      :showModal="showModal"
      :comment="editComment"
      @close="closeModal"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ForumForm from './ForumForm.vue';
import CommentEdit from './CommentEdit.vue';

export default {
  name: "ForumShow",
  components: {
    'forum-form': ForumForm,
    'comment-edit': CommentEdit,
  },
  props: ["post"],
  data: function data() {
    return {
      newComment: {},
      editComment: {},
      showModal: false,
    };
  },
  methods: {
    createComment: function createComment() {
      axios({
        method: "POST",
        data: {
          postId: this.post.id,
          ...this.newComment,
        },
        url: `http://localhost:3000/comments`,
      }).then((response) => {
        this.$emit("createComment", response.data);
      });
    },
    openModal: function openModal(comment) {
      this.showModal = true;
      this.editComment = { ...comment };
    },
    closeModal: function closeModal() {
      this.showModal = false;
      this.editComment = {};
    },
  },
};
</script>

<style>
  .postShow {
    text-align: left;
    margin-left: 50px;
  }
  .showTitle {
    font-size: 20px;
    padding: 0px;
  }.commentTitle {
    font-size: 20px;
    padding: 0px;
    margin: 25px;
    margin-left: 0px;
  }
  .commentSection {
    float: left;
    margin-top: 25px;
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
  }
  .commentShow {
    margin-left: 50px;
  }
  .commentAuthor {
    font-style: italic;
  }
  .shiftLeft {
    text-align: left;
  }
</style>
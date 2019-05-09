<template>
  <div class="profile-wrapper">
    <router-view :profile="profile" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProfileWrapper',
  data: function data() {
    return {
      profile: {},
    };
  },
  mounted: function mounted() {
    this.getProfile();
  },
  methods: {
    getProfile: function getProfile() {
      axios({
        method: "GET",
        url: `http://localhost:3000/posts/${this.$route.params.id}`,
      }).then((response) => {
        this.profile = response.data;
      });
    },
  },
};
</script>
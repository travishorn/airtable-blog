<template>
  <div>
    <PostTeaser class="postListing-post" v-for="post in posts" :key="post.fields.id" :post="post" />
  </div>
</template>

<script>
import PostTeaser from "@/components/PostTeaser.vue";

export default {
  name: "RecentPostsListing",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    fetch("/.netlify/functions/posts")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.posts = data;
      });
  },
  components: {
    PostTeaser
  }
};
</script>

<style scoped>
  .postListing-post {
    border-bottom: solid 1px gainsboro;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
</style>
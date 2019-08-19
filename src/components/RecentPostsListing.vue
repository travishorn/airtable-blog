<template>
  <div>
    <PostTeaser v-for="post in posts" :key="post.fields.id" :post="post" />
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

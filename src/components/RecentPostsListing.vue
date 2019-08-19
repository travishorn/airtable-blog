<template>
  <div>
    {{ posts }}
  </div>
</template>

<script>
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
  }
};
</script>

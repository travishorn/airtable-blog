<template>
  <div>
    <p>Title: {{ post.fields.title }}</p>
    <p>Published at: {{ post.fields.publishedAt }}</p>
    <p>Content: {{ post.fields.content }}</p>
  </div>
</template>

<script>
export default {
  name: "PostTeaser",
  props: ["post"]
};
</script>

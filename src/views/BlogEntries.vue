<template>
  <ul>
    <li v-for="entry in entries" :key="entry.id">
      <h3 :key="entry.id + '-header'">{{ entry.title }}</h3>
      <p :key="entry.id + '-content'">{{ entry.content }}</p>
    </li>
  </ul>
</template>
<script>
export default {
  name: "BlogEntries",
  props: ["newPost"],
  computed: {
    entries() {
      return this.$store.state.posts;
    }
  }
};
</script>

<template>
  <div>
    <div style="text-align: left">
      <BlogEntries :newPost="newPost" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import BlogEntries from "./BlogEntries";

export default {
  name: "home",
  props: ["newPost"],
  components: { BlogEntries }
};
</script>

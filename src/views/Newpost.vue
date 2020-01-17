<template>
  <div>
    <div style="text-align: left">
      <div class="input-group">
        <label
          >Title:
          <input
            v-model="newTitle"
            placeholder="Title"
            class="form-control"
          /> </label
        ><br />

        <label
          >Content:
          <textarea
            v-model="newContent"
            placeholder="Post content..."
            type="text"
            class="form-control"
          />
        </label>
        <span class="input-group-btn">
          <button type="submit" @click="addPost">Post</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      pressed: "NOT PRESSED",
      newTitle: "",
      newContent: ""
    };
  },
  methods: {
    addPost() {
      window.console.log(this.newTitle + this.newContent);
      const newPost = {
        title: this.newTitle,
        content: this.newContent
      };
      this.$store.commit("addPost", newPost);
    }
  }
};
</script>

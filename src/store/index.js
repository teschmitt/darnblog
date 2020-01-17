import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        title: "Is this thing on?",
        content:
          "Er hörte leise Schritte hinter sich. Das bedeutete nichts Gutes. Wer würde ihm …"
      },
      {
        id: 0,
        title: "Wow!",
        content:
          "Er konnte die Aufforderung stehen zu bleiben schon hören. Gehetzt sah er sich um. Plötzlich erblickte er den schmalen Durchgang. Blitzartig drehte"
      }
    ]
  },
  mutations: {
    addPost(state, payload) {
      let maxId = 0;
      const title = payload.title;
      const content = payload.content;
      this.state.posts.forEach(post => {
        if (post.id > maxId) {
          maxId = post.id;
        }
      });
      this.state.posts.unshift({
        id: maxId + 1,
        title: title,
        content: content
      });
    }
  },
  actions: {},
  modules: {}
});

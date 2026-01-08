// DOM interaction (Dark mode toggle)
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Vue Gallery App
Vue.createApp({
  data() {
    return {
      images: [
        { name: "Me 1", url: "images/me1.jpg" },
        { name: "Me 2", url: "images/me2.jpg" },
        { name: "Me 3", url: "images/me3.jpg" }
      ]
    }
  }
}).mount("#galleryApp");

// Vue Guestbook App
Vue.createApp({
  data() {
    return {
      name: "",
      message: "",
      comments: []
    }
  },
  methods: {
    addComment() {
      this.comments.push({
        name: this.name,
        message: this.message
      });
      this.name = "";
      this.message = "";
    }
  }
}).mount("#guestbookApp");

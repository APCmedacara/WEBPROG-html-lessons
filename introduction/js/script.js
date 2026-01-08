// Dark mode toggle
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Vue Gallery App
Vue.createApp({
  data() {
    return {
      images: [
        { name: "1", url: "images/img1.jpg" },
        { name: "2", url: "images/img2.jpg" },
        { name: "3", url: "images/img3.jpg" }
      ]
    };
  }
}).mount("#galleryApp");

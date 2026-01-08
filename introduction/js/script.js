// Dark mode toggle
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Vue Gallery
Vue.createApp({
  data() {
    return {
      images: [
        { name: "Profile", url: "images/profile.jpg" },
        { name: "Project 1", url: "images/img1.jpg" },
        { name: "Project 2", url: "images/img2.jpg" },
        { name: "Project 3", url: "images/img3.jpg" },
        { name: "Project 4", url: "images/img4.jpg" }
      ]
    };
  }
}).mount("#galleryApp");

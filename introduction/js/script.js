// Dark mode toggle
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Vue Gallery App
Vue.createApp({
  data() {
    return {
      images: [
        { name: "Profile Pic", url: "images/profile.jpg" },
        { name: "Project 1", url: "images/img1.jpg" },
        { name: "Project 2", url: "images/img2.jpg" },
        { name: "Project 3", url: "images/img3.jpg" }
      ]
    };
  }
}).mount("#galleryApp");

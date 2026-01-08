document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


Vue.createApp({
  data() {
    return {
      pictures: [
        { name: "Project 1", url: "images/kokushibo.png" },
        { name: "Project 2", url: "images/project2.png" },
        { name: "Project 3", url: "images/project3.png" },
        { name: "Project 4", url: "images/project4.png" }
      ]
    }
  }
}).mount("#galleryApp");

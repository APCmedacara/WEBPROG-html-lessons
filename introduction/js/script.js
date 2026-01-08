// Dark mode toggle
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Vue Gallery
Vue.createApp({
  data() {
    return {
      images: [
        { name: "Project 1", url: "images/img1.jpg", link: "gallery1.html" },
        { name: "Project 2", url: "images/img2.jpg", link: "gallery2.html" },
        { name: "Project 3", url: "images/img3.jpg", link: "gallery3.html" }
      ]
    };
  },
  mounted() {
    // Make gallery images clickable
    this.$nextTick(() => {
      document.querySelectorAll('.clickable').forEach(el => {
        el.addEventListener('click', () => {
          const link = el.dataset.link;
          if (link) window.location.href = link;
        });
      });
    });
  }
}).mount("#galleryApp");

// Make About Cards clickable
document.querySelectorAll('.card.clickable').forEach(card => {
  card.addEventListener('click', () => {
    const link = card.dataset.link;
    if (link) window.location.href = link;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("autoplayVideo");

  function checkIfVideoInView() {
    const rect = video.getBoundingClientRect();
    const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

    if (isInViewport) {
      video.play();
    } else {
      video.pause();
    }
  }

  window.addEventListener("scroll", checkIfVideoInView);
  window.addEventListener("resize", checkIfVideoInView);

  // Initial check
  checkIfVideoInView();
});

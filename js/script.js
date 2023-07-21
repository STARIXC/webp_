window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add("scrolled"); // Add the 'scrolled' class when scrolling starts
    } else {
      header.classList.remove("scrolled"); // Remove the 'scrolled' class when scrolling back to the top
    }
  });
  
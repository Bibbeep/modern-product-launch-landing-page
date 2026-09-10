const hamburgerMenuButton = document.getElementById("hamburgerMenuButton");
const navDropdown = document.getElementById("navDropdown");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".header-nav__link a");

function toggleOnTopClass() {
  if (navDropdown.classList.contains("hidden")) {
    if (window.scrollY !== 0 && header.classList.contains("on-top")) {
      header.classList.remove("on-top");
    } else if (window.scrollY === 0 && !header.classList.contains("on-top")) {
      header.classList.add("on-top");
    }
  }
}

window.addEventListener("resize", () => {
  if (
    window.matchMedia("(min-width: 800px)").matches &&
    navDropdown.classList.contains("hidden")
  ) {
    navDropdown.classList.remove("hidden");
  } else if (
    window.matchMedia("(max-width: 799px)").matches &&
    !navDropdown.classList.contains("hidden")
  ) {
    navDropdown.classList.toggle("hidden");
  }
});

window.addEventListener("scroll", () => {
  if (window.matchMedia("(max-width: 799px)").matches) {
    toggleOnTopClass();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.matchMedia("(max-width: 799px)").matches) {
    if (!navDropdown.classList.contains("hidden")) {
      navDropdown.classList.toggle("hidden");
    }

    toggleOnTopClass();
  }
});

hamburgerMenuButton.addEventListener("click", () => {
  navDropdown.classList.toggle("hidden");

  if (navDropdown.classList.contains("hidden")) {
    if (window.scrollY === 0 && !header.classList.contains("on-top")) {
      header.classList.add("on-top");
    }
  } else {
    if (header.classList.contains("on-top")) {
      header.classList.remove("on-top");
    }
  }
});

navLinks.forEach((a) => {
  a.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 799px)").matches) {
      if (!navDropdown.classList.contains("hidden")) {
        navDropdown.classList.toggle("hidden");
      }
    }
  });
});

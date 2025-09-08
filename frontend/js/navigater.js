document.addEventListener("DOMContentLoaded", () => {
  displayNavBarMenu();
  postContainerDisplay();
  mobileDisplayNavMenu();
});


// Mobile Screen Navigater
const mobileNavItem = [
  {
    icon: document.querySelector("#mobile-home-icon"),
    activeIcon: "./assets/icons/home-filled-icon.png",
    inactiveIcon: "./assets/icons/home-outline-icon.png",
  },
  {
    icon: document.querySelector("#mobile-search-icon"),
    activeIcon: "./assets/icons/search-filled-icon.png",
    inactiveIcon: "./assets/icons/search-outline-icon.png",
  },
  {
    icon: document.querySelector("#mobile-addPost-icon"),
    activeIcon: "./assets/icons/mobile-post-outlined.png",
    inactiveIcon: "./assets/icons/mobile-post-outlined.png",
  },
  {
    icon: document.querySelector("#mobile-post-icon"),
    activeIcon: "./assets/icons/post-filled-icon.png",
    inactiveIcon: "./assets/icons/post-outlined-icon.png",
  },
  {
    icon: document.querySelector("#mobile-save-icon"),
     activeIcon: "./assets/icons/save-filled-icon.png",
    inactiveIcon: "./assets/icons/save-outlined-icon.png",
  },
];

// Large Screens Navigater

const navItems = [
  {
    el: document.querySelector("#nav-home"),
    icon: document.querySelector("#home-icon"),
    text: document.querySelector("#home-nav-text"),
    activeIcon: "./assets/icons/home-filled-icon.png",
    inactiveIcon: "./assets/icons/home-outline-icon.png",
  },
  {
    el: document.querySelector("#nav-post"),
    icon: document.querySelector("#post-icon"),
    text: document.querySelector("#post-nav-text"),
    activeIcon: "./assets/icons/post-filled-icon.png",
    inactiveIcon: "./assets/icons/post-outlined-icon.png",
  },
  {
    el: document.querySelector("#nav-saved"),
    icon: document.querySelector("#saved-icon"),
    text: document.querySelector("#saved-nav-text"),
    activeIcon: "./assets/icons/save-filled-icon.png",
    inactiveIcon: "./assets/icons/save-outlined-icon.png",
  },
  {
    el: document.querySelector("#nav-profile"),
    icon: document.querySelector("#profile-icon"),
    text: document.querySelector("#profile-nav-text"),
    activeIcon: "./assets/icons/profile-filled-icon.png",
    inactiveIcon: "./assets/icons/profile-outline-icon.png",
  },
  {
    el: document.querySelector("#nav-logout"),
    icon: document.querySelector("#logout-icon"),
    text: document.querySelector("#logout-nav-text"),
    activeIcon: "./assets/icons/logout-filled-icon.png",
    inactiveIcon: "./assets/icons/logout-outline-icon.png",
  },
];

// Larger Screen NavMenu
function displayNavBarMenu() {
  navItems.forEach((item) => {
    item.el.addEventListener("click", () => {
      navItems.forEach((i) => {
        i.icon.src = i.inactiveIcon;
        i.text.style.color = "gray";
      });

      item.icon.src = item.activeIcon;
      item.text.style.color = "black";
    });
  });
}

// Mobile Screen Menu
function mobileDisplayNavMenu() {
  mobileNavItem.forEach((item) => {
    item.icon.addEventListener("click", () => {
      mobileNavItem.forEach((i) => {
        i.icon.src = i.inactiveIcon;
      });
      item.icon.src = item.activeIcon;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayNavBarMenu();
  postContainerDisplay();
  mobileDisplayNavMenu();
});

const addPostBtn = document.querySelector("#post-btn");
const mobileAddPostBtn = document.querySelector("#mobile-addPost-label");
const overlay = document.querySelector(".overlay");
const postContainers = document.querySelectorAll(".post-container"); // all post modals

function showPostContainers() {
  postContainers.forEach(pc => pc.style.display = "flex");
  overlay.style.display = "block";
}

function hidePostContainers() {
  postContainers.forEach(pc => pc.style.display = "none");
  overlay.style.display = "none";
}

function postContainerDisplay() {
  addPostBtn.addEventListener("click", showPostContainers);
  mobileAddPostBtn.addEventListener("click", showPostContainers);

  postContainers.forEach(pc => {
    const uploadBtn = pc.querySelector(".upload-post-btn");
    const cancelBtn = pc.querySelector(".upload-postcancel-btn");
    const textArea = pc.querySelector(".uploadPost-text-container");
    const fileInput = pc.querySelector("#fileInput");

    uploadBtn.addEventListener("click", async () => {
      hidePostContainers();

      const postDescription = textArea.value;
      const formData = new FormData();

      if (fileInput.files.length > 0) {
        formData.append("image", fileInput.files[0]);
      }
      formData.append("description", postDescription);

      console.log([...formData.entries()]);

      console.log("upload completed");
      
      fileText.textContent = "No files";

      await fetch("http://localhost:8080/api/posts", {
        method: "POST",
        body: formData,
      });
    });


    cancelBtn.addEventListener("click", hidePostContainers);
  });
}

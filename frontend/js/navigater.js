const nav_Element = document.querySelector(".nav");

nav_Element.addEventListener("click", function (event) {
  const img = this.querySelector("img");
  const a = this .querySelector("a");
  if (img.src.includes("home-outline-icon.png")) {
    img.src = "./assets/icons/home-filled-icon.png"
    a.style.color = "black";
  }

  // if (img.src.includes("post-outlined-icon.png")) {
  //   img.src = "./assets/icons/post-filled-icon.png"
  //   nav_Element.style.backgroundColor="black"
  // } else {
  //   img.src = "./assets/icons/post-outlined-icon.png"
  // }
  
});

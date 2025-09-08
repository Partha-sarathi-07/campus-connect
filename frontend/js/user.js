
const top_bar = document.querySelector("#top-bar");
const hero_section_profile = document.querySelector("#hero-post-profile");

// user icon
async function userProfile() {
  const image = await fetch("http://localhost:8080/api/posts")
    .then(response => response.blob())
    .then(blob => {
      const imageUrl = URL.createObjectURL(blob)
      const img = document.createElement("img");
      img.className = "user-icon";
      img.src = imageUrl;
      hero_section_profile.appendChild(img)
      top_bar.appendChild(img.cloneNode(true));
      console.log(imageUrl);
    })

}
// userProfile()
const post_container = document.querySelector(".post-container");
const post_cancel = document.querySelector(".cancel-btn");
const upload_post = document.querySelector(".post-upload-btn");
const post = document.querySelector(".post-btn");
const mobile_user_icon = document.querySelector(".user-icon");
const search = document.querySelector(".search-events");

// post button
post.addEventListener("click", function () {
  console.log("post");
  post_container.style.display = "flex"
})

// post cancel
post_cancel.addEventListener("click", function () {
  console.log("cencel post");
  post_container.style.display = "none"

})

//post upload
upload_post.addEventListener("click", function () {
  const textvalue = document.querySelector(".text-area").value.trim();
  console.log(textvalue);
  if (textvalue === "") {
    console.log("post Empty ");
  } else {
    console.log("post uploated");
    post_container.style.display = "none"

  }
})

// mobile user icon
mobile_user_icon.addEventListener("click", function () {
  console.log("user");

})

// search icon
search.addEventListener("keydown", function (event) {
  console.log(event.key);

}) 


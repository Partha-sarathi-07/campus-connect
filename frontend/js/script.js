
const add_post = document.querySelectorAll("#post-btn");
const post_container = document.querySelectorAll("#post-container");
const post_cancel = document.querySelectorAll("#cancel-btn");
const upload_post = document.querySelectorAll("#post-upload-btn");
const mobile_user_icon = document.querySelectorAll("#user-icon");
const search = document.querySelector("#search-events");

const readme = document.querySelector(".readme");
const textareafix = document.querySelectorAll("#text");
const post_content = document.querySelectorAll("#hero-section-content-box");

const post_text_area = document.querySelectorAll("#text-area");

const upload_textarea = document.querySelectorAll(".post-text-area");

const hero_option_icon = document.querySelector(".hero-option-icon");

const hero_section_media = document.querySelectorAll("#hero-section-media");

// search icon
search.addEventListener("keydown", function (event) {
  console.log(event.key);
});

const desc =
  "lorem commodi rem quae, maiores optio voluptas natus assumenda soluta nostrum nulla repellat ipsam distinctio perspiciatis";
const sub = desc.split(20);
console.log(sub);
const tub = sub.slice(0, 20);
upload_textarea.textContent = sub;
// readme
readme.addEventListener("click", function () {
  upload_textarea.textContent += desc;
  readme.textContent = " 	";
});

// post-section-option-element
hero_option_icon.addEventListener("click", function () {
  console.log("option-icon");
});

// chose file
const fileInput = document.querySelector("#fileInput");
const fileText = document.querySelectorAll(".fileText");

let selectedFile = null;
fileInput.addEventListener("change", function (event) {
  console.log("file");

  const file = this.files[0];


  if (this.files.length > 0) {
    selectedFile = file
    const fileName = this.files[0].name;

    const changeUpper = fileName.toUpperCase();

    console.log(changeUpper);
    fileText.textContent = changeUpper;
  } else {
    fileText.textContent = "No files";
  }

});



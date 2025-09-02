const add_post = document.querySelector("#post-btn");
const post_container = document.querySelector("#post-container");
const post_cancel = document.querySelector("#cancel-btn");
const upload_post = document.querySelector("#post-upload-btn");
const mobile_user_icon = document.querySelector("#user-icon");
const search = document.querySelector("#search-events");

const readme = document.querySelector("#readme");
const textareafix = document.querySelector("#text");
const post_content = document.querySelector("#hero-section-content-box");

const post_text_area = document.querySelector("#text-area")

const upload_textarea = document.querySelector("#post-text-area");

const hero_option_icon = document.querySelector("#hero-option-icon");

const hero_section_media = document.querySelector("#hero-section-media");





// search icon
search.addEventListener("keydown", function (event) {
	console.log(event.key);

})

const desc = "lorem commodi rem quae, maiores optio voluptas natus assumenda soluta nostrum nulla repellat ipsam distinctio perspiciatis";
const sub = desc.split(20);
console.log(sub);
const tub = sub.slice(0, 20);
upload_textarea.textContent = sub;
// readme
readme.addEventListener("click", function () {
	upload_textarea.textContent += desc;
	readme.textContent = " 	"
})



// post-section-option-element
hero_option_icon.addEventListener("click", function () {
	console.log("option-icon");

})


// chose file 
const fileInput = document.querySelector("#fileInput");
const fileText = document.querySelector("#fileText");

fileInput.addEventListener("change", function () {
	console.log("file");

	if (this.files.length > 0) {
		const fileName = this.files[0].name
		const changeUpper = fileName.toUpperCase()
		changeUpper.toUpperCase
		fileText.textContent = changeUpper;
	} else {
		fileText.textContent = "No files"
	}
})



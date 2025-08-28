const addPost = document.querySelector("#post-btn");
const overlay = document.querySelector(".overlay")
const like = document.querySelector("#like-btn")
const comment = document.querySelector("#comment-btn")
const save = document.querySelector("#save-btn")
const user_details = document.querySelector("#hero-post-user-details")
const description = document.querySelector("#post-text-area")
const hero_section_post_container = document.querySelector("#hero-section-media")

addPost.addEventListener("click",()=>{
	overlay.style.display = "block"
})

// Like btn 
like.addEventListener("click", function () {
	if (like.src.includes("heart-outlined-icon.png")) {
		like.src = "./assets/icons/heart-filled-icon.png"
	} else {
		like.src = "./assets/icons/heart-outlined-icon.png"
	}
})

// Comment button
comment.addEventListener("click", function () {
	if (comment.src.includes("message-outlined-icon.png")) {
		comment.src = "./assets/icons/message-filled-icon.png"
	} else {
		comment.src = "./assets/icons/message-outlined-icon.png"
	}
})

// Save Button
save.addEventListener("click", function () {
	if (save.src.includes("save-outlined-icon.png")) {
		save.src = "./assets/icons/save-filled-icon.png"
	} else {
		save.src = "./assets/icons/save-outlined-icon.png"
	}
})

// Add Post button 
add_post.addEventListener("click", function () {
	console.log("post");

})

// post content container
async function postShow() {
	const post = await fetch("http://192.168.1.40:8080/api/posts")
		.then(response => response.json())
		.then(data => {
			console.log(data[0]);
			const post_image = `data:image/jpeg;base64,${data[0].postImage}`
			const img = document.createElement("img");
			const fullName = document.createElement("h6")
			const userName = document.createElement("p")
			const userDescription = document.createElement("p")
			console.log(data[0].fullname);
			fullName.textContent = data[0].fullname;
			userName.textContent = data[0].username;
			userDescription.textContent = data[0].postDescription
			console.log(fullName);
			img.src = post_image
			img.alt = "post"

			const sub = data[0].postDescription.split(20);
			console.log(sub);
			const tub = sub.slice(0, 20);
			description.textContent = sub;

			readme.addEventListener("click", function () {
				description.textContent += desc;
				readme.textContent = " 	"
			})

			user_details.appendChild(fullName)
			user_details.appendChild(userName)
			description.appendChild(userDescription)
			hero_section_post_container.appendChild(img);
		})
		.catch(error => console.log("Api failure")
		);

}

// postShow()
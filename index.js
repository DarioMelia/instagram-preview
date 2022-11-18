/// Post counter
const posts = document.querySelector(".posts")

const setPostsNum = () => {
    const postsNum = document.querySelectorAll(".gallery-item").length
    posts.innerHTML = postsNum
}

setPostsNum()
console.log(window.innerWidth)

/// New post
const gallery = document.querySelector(".gallery")
const addInput = document.getElementById("new-post")
addInput.addEventListener("change", newPost)

function newPost() {
    const file = addInput.files[0]
    const galleryItem = document.createElement("div")
    let postsNum = gallery.children.length
    galleryItem.classList.add("gallery-item")
    galleryItem.tabIndex = "0"
    
    galleryItem.innerHTML = `<img src="${URL.createObjectURL(file)}" class="gallery-image" alt="">

    <div class="gallery-item-type">

        <span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

    </div>

    <div class="gallery-item-info">

        <ul>
             <li class="gallery-item__change">
                                <label for="change-post${postsNum + 1}">cambiar imagen</label>
                                <input class="change-post" type="file" id="change-post${postsNum + 1}" accept="image/*"></input>
                            </li>
        </ul>

    </div>`
    galleryItem.querySelector(".change-post").addEventListener("change",changeImage)
    gallery.insertBefore(galleryItem,gallery.childNodes[0])
    setPostsNum()
}


///CHange post

const changePostInputs= document.querySelectorAll(".change-post")
changePostInputs.forEach(input => input.addEventListener("change",changeImage))

function changeImage(e){
    const img = this.parentElement.parentElement.parentElement.parentElement.querySelector("img")
    const file = this.files[0]
    img.src = URL.createObjectURL(file)
}



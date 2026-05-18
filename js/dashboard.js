let postContainer = document.querySelector(".postContainer");


let description = document.getElementById("description")

let image = document.getElementById("file")

let currentUser = {
  fullName: "Hassan Rizwan",
  email: "hassan@gmail.com",
  password: "5678"
}

function postHandler() {

  const file = image.files[0]

  if (file) {

    var imageUrl = URL.createObjectURL(file)

  }


  postContainer.innerHTML += `<!-- single post -->
    <div class="post mb-4">
    
      <!-- post header -->
      <div class="postHeader  d-flex justify-content-between align-items-center px-4">
        <div class="d-flex align-items-center gap-3 margin">
          <img src="https://avatars.githubusercontent.com/u/224948898?v=4" alt=""
            width="50" height="50" id="postLogo">
          <div class="d-flex flex-column align-items-center">
            <h5>Sufiyan Shahid</h5>
            <span>Sponsored</span>
          </div>
        </div>
    
        <div>
          <i class="fa-solid fa-x"></i>
        </div>
      </div>
    
    
      <!-- post Description -->
      <div class="postDescription text-start  px-4">
        <p class="mb-2 mt-4">${description.value}</p>

      </div>
    
      <!-- postImage -->
      <div class= ${imageUrl ? 'postImage' : "hidden"} >
        <img
          src=${imageUrl}
          alt="">
      </div>
    
    
      <!-- post like area -->
      <div class="postLike d-flex  justify-content-between px-4 mt-3">
        <div>
          <i class="fa-solid fa-thumbs-up text-primary"></i>
          <i class="fa-solid fa-heart text-danger"></i>
          <span>12K</span>
        </div>
        <div>
          <span>2.5K comments</span> · <span>1.2K shares</span>
        </div>
      </div>
    
    
      <hr>
    
      <div class="postBtnLikeShareComment d-flex justify-content-around">
        <button class="like"><i class="fa-regular fa-thumbs-up"></i> Like</button>
        <button><i class="fa-regular fa-comment"></i> Comment</button>
        <button><i class="fa-solid fa-share"></i> Share</button>
      </div>
    
    </div>`

  description.value = ""
  image.value = ''

  let likeIcon = document.getElementsByClassName("like")

  for (let i = 0; i < likeIcon.length; i++) {

    likeIcon[i].addEventListener("click", function () {

      likeIcon[i].classList.add("text-primary");
    });
  }

}

function logoutHandler() {
  currentUser = null;

  if (!currentUser) {
    window.location.href = "../Pages/login.html"
  }

}

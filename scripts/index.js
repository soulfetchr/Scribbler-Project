let signUpModal = document.getElementById("signupModel");
let signInModel = document.getElementById("signinModel");
let createPostModel = document.getElementById("creatPostModel");
let signUpButton = document.getElementById("signupbutton");
let signInButton = document.getElementById("signinbutton");
let createPostButton = document.getElementById("CreatePostButton");
let closebutton = document.getElementsByClassName("close");
let openSignUPLink = document.getElementById("OpenSignUp");
let allPosts = document.getElementById("postsLists");

allPosts.onclick = () => {
    window.location.href = "/Scribbler-Project/html/postslist.html";
}

signUpButton.onclick = () => {
    signUpModal.style.display = "block";
}

signInButton.onclick = () => {
    signInModel.style.display = "block";
}

createPostButton.onclick = () => {
    createPostModel.style.display = "block";
}

openSignUPLink.onclick = function() {
    signUpModal.style.display = "block";
    signInModel.style.display = "none";
}

for(let i=0; i <closebutton.length; i++){
    closebutton[i].onclick = ()=>{
    signUpModal.style.display = "none";
    signInModel.style.display = "none";
    createPostModel.style.display = "none";
}
}

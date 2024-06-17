const invalidLink = document.getElementById("invalid-link")
const errorLine = document.querySelector(".error-line")

invalidLink.addEventListener("click", function(){
    errorLine.textContent = "My apologies, will update soon.. Please refresh the page."
})
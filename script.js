document.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-outline-secondary")) {
        let parentNode = e.target.parentElement;
        let imageText =  parentNode.children[0].innerText
        let imgSrc = parentNode.parentElement.children[0].getAttribute("src");

        document.getElementById("modalImg").setAttribute("src", imgSrc);
        document.getElementById("imageModalLabel").innerText = imageText;
    }
});
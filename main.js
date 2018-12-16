document.addEventListener("DOMContentLoaded", function () {

    let readMore = document.querySelectorAll('.readMore');
    readMore.forEach(el => {
        el.addEventListener("click", (event) => {
            let paragraph = document.createElement("p");
            let node = document.createTextNode("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint cum fugit recusandae? Voluptas aliquam eos consequuntur nam repudiandae. Officiis, deserunt nemo libero voluptatem id excepturi voluptatum ad totam cumque possimus!");
            
            paragraph.classList.add("added" ,"fade");
            paragraph.appendChild(node);
            event.preventDefault();
            event.target.previousElementSibling.append(paragraph);
            event.target.classList.add("hidden");
        })
    })

});
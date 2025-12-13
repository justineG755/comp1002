

document.addEventListener("DOMContentLoaded", function () {


    const productGallery = document.getElementById("productGallery");


    const productLinks = document.querySelectorAll("#productGallery a");

    for (let i = 0; i < productLinks.length; i++) {

        productLinks[i].addEventListener("click", function (event) {


            let productHref = productLinks[i].getAttribute("href");
            console.log(productHref);


            const productImage = document.getElementById("productImage");

            productImage.setAttribute("src", productHref);


            let productDescription = this.getAttribute("title");
            console.log(productDescription);


            const productDescriptionParagraph = document.querySelector("#productDescription");

            productDescriptionParagraph.textContent = productDescription;


            event.preventDefault();
        });
    }
});
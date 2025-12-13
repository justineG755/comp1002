

// Wait until the DOM is ready to be manipulated
document.addEventListener("DOMContentLoaded", function () {

    // gets the ul list with the product links 
    const productGallery = document.getElementById("productGallery");

    // contain all the A elements 
    const productLinks = document.querySelectorAll("#productGallery a");

    // loop through each product link in the gallery
    for (let i = 0; i < productLinks.length; i++) {

        // add click event listener
        productLinks[i].addEventListener("click", function (event) {

            // get the value of the href attribute
            let productHref = productLinks[i].getAttribute("href");

            // main image element that displays the product
            const productImage = document.getElementById("productImage");

            // update the image source to show the selected product
            productImage.setAttribute("src", productHref);

            // get the product description
            let productDescription = this.getAttribute("title");

            // select the paragrpah when the product description is displayed
            const productDescriptionParagraph = document.querySelector("#productDescription");

            // update the paragraph text with the selected product 
            productDescriptionParagraph.textContent = productDescription;

            // cancels the default behaviour of each hyperlink
            event.preventDefault();
        });
    }
});
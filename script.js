
const imageGallery = document.querySelector(".image-gallery");
const bgImage = document.getElementById("bg-image")

const productDetails = [
    {
        title: "Unisex Hoodies",
        price: "$46.99",
        oldPrice:"$69.99",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.",
        sizes: ["S", "M", "L", "XL"],
        images: [
            { image: "images/1.png"},
            { image: "images/2.png"},
            { image: "images/3.png"},
            { image: "images/4.png"}
        ],
        colors: [
            { color: "red"},
            { color: "black"},
            { color: "lightblue"},
            { color: "pink"}
        ]
    } 
];





addProductDetails();
createImagegallery()



function addProductDetails() {
    const productName = document.querySelector(".product-name")
    const price = document.querySelector(".price")
    const oldPrice = document.querySelector(".old-price")
    const description = document.querySelector(".description")

    const sizes = document.querySelectorAll(".sizes label span")
    const colors = document.querySelectorAll(".colors label span")

    //Add Prodct Detailes 

    productDetails.forEach((details)=>{
    productName.innerHTML = details.title;
    price.innerHTML = details.price;
    oldPrice.innerHTML = details.oldPrice
    description.innerHTML = details.description 

    //Add Different Sizes
    sizes.forEach((size, index)=>{
        size.innerHTML = productDetails[0].sizes[index]
    })
    //Add Different Colors
    colors.forEach((color, index)=>{
        color.style.backgroundColor = productDetails[0].colors[index].color
    })
    
});   
}

function createImagegallery(){
    var i =0;
    productDetails[i].images.forEach((img)=>{
    const imageBtnElement = document.createElement("div");
    imageBtnElement.className = "image-btn"

    const imageElement = document.createElement("img");
    imageElement.setAttribute("src", "")
    imageElement.src = img.image;

    imageGallery.appendChild(imageBtnElement).appendChild(imageElement);

    imageBtnElement.addEventListener("click", ()=>{
        bgImage.src = imageElement.src
    })

})
}




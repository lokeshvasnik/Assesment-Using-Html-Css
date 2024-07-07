// Display category data
import products from "../data/data.js";

const searchBtn = document.getElementById("search");

const inputDiv = document.querySelector(".inputSearch");

searchBtn.addEventListener("click", () => {
    inputDiv.classList.toggle("show");
});

document.getElementById("scrollToTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hamburger men

function inputHandlerFn() {
    document.querySelector(".inputSearch").classList.toggle("show");
}

function hamBurgerHandler() {
    document.getElementById("mobileMenu").classList.toggle("show");
}

// Function to get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(location.search);
    return results === null
        ? ""
        : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Redirect To Single Page

function redirectToSingleProductPage(productId, category) {
    window.location.href = `singleProduct.html?id=${productId}&category=${category}`;
}

// Display Category

function displayCateData() {
    const category = getUrlParameter("category");

    const data = products[0][category];

    if (data) {
        const container = document.getElementById("product-data-container");

        container.innerHTML = data
            .map(
                (item) => `
            <a  class="md:flex md:flex-col product-item" data-id=${item.id}>
                <div>
                    <div class="category-container cursor-pointer">
                        <img src="${item.thumbnail}" alt="${item.name}" class="image rounded-lg md:w-72" />
                    </div>
                    <div class="my-5 flex justify-between mx-9 md:mx-auto">
                        <p class="font-bold text-md">${item.title}</p>
                        <p>${item.price}</p>
                    </div>
                </div>
            </a>
        `
            )
            .join("");

        document.querySelectorAll(".product-item").forEach((item) => {
            item.addEventListener("click", function () {
                const productId = this.getAttribute("data-id");
                redirectToSingleProductPage(productId, category);
            });
        });
    } else {
        document.getElementById(
            "product-data-container"
        ).innerHTML = `<p>No Product Found </p>`;
    }
}

window.onload = () => {
    displayCateData();
};

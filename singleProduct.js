let count = 0;

function countIncrement() {
    count += 1;
    document.getElementById("quantityCount").innerText = count;
}

function countDecrement() {
    count -= 1;
    if (count < 1) {
        count = 0;
    }
    document.getElementById("quantityCount").innerText = count;
}

function updateThumbnail(newSrc) {
    document.getElementById("thumbnailImage").src = newSrc;
}

function displaySingleProduct() {
    const category = getUrlParameter("category");
    const productId = getUrlParameter("id");

    const data = products[0][category];

    const matchedProduct = products[0].mens.find(
        (product) => product.id == productId
    );

    console.log(matchedProduct);

    if (matchedProduct) {
        const container = document.getElementById(
            "single-product-id-container"
        );

        container.innerHTML = `   <div class="grid grid-cols-1 md:grid-cols-8 gap-4 px-4 md:px-24 mt-10">
                <div
                    class="md:col-span-3 flex flex-row space-x-4 md:space-y-3  justify-center md:justify-start  md:flex-col  items-center md:items-end">

                       ${matchedProduct.images.map(
                           (item) =>
                               `<div key={index}>
                                    <img class="rounded-lg w-16 cursor-pointer active:border-4" src=${item} alt="smallDisplayImage" onclick="updateThumbnail('${item}')" />
                                </div>`
                       )}
                </div>

                <div class="md:col-span-2 md:col-start-4 flex justify-center">
                    <img id="thumbnailImage" src=${
                        matchedProduct.thumbnail
                    } class="rounded-lg w-64" alt="displayImage" />
                </div>

                <div class="md:col-span-3 md:col-start-6 space-y-5">
                    <span
                        class="bg-[#5ba857] rounded-lg text-black text-xs font-semibold me-2 px-3.5 py-1 dark:bg-green-900 dark:text-green-300">
                        LAYER
                    </span>
                    <h3 class="text-3xl my-2 font-bold">
                        ${matchedProduct.title}
                    </h3>
                    <div class="flex space-x-2 mt-10">

                        <button key={size} class="border-black text-black border-2 p-2 px-4 rounded-full">
                            S
                        </button>
                        <button key={size} class="border-black text-black border-2 p-2 px-4 rounded-full">
                            M
                        </button>
                        <button key={size} class="border-black text-black border-2 p-2 px-4 rounded-full">
                            L
                        </button>
                        <button key={size} class="border-black text-black border-2 p-2 px-4 rounded-full">
                            2xl
                        </button>
                        <button key={size} class="border-black text-black border-2 p-2 px-4 rounded-full">
                            S
                        </button>

                    </div>
                    <div class="mt-2 space-x-3 flex items-center">
                        <button class="border-black text-black border-2 p-2 px-4 rounded-full" onclick="countDecrement()">
                            -
                        </button>
                        <span id="quantityCount">${count}</span>
                        <button class="border-black text-black border-2 p-2 px-4 rounded-full" onclick="countIncrement()">
                        +
                        </button>


                    </div>
                    <div>
                        <button class="border-black w-full mt-5 border-2 rounded-full font-bold bg-black-700">BUY
                            NOW</button>
                        <p class="mt-4 font-semibold">
                            In case you missed it (how could you have missed
                            it?) the shapes spell Figma.
                        </p>
                    </div>
                </div>
            </div>
        `;

        document.querySelectorAll(".product-item").forEach((item) => {
            item.addEventListener("click", function () {
                const productId = this.getAttribute("data-id");
                redirectToSingleProductPage(productId);
            });
        });
    } else {
        document.getElementById(
            "product-data-container"
        ).innerHTML = `<p>No Product Found </p>`;
    }
}

window.onload = () => {
    displaySingleProduct();
};

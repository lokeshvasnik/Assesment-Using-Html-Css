const products = [
    {
        mens: [
            {
                id: 1,
                title: "Rainbow logo tee",
                description:
                    "If your entire wardrobe is black and at least one person in your life has told you to wear more color, this shirt is the compromise you've been waiting for.",
                price: 549,
                discountPercentage: 12.96,
                rating: 4.69,
                stock: 94,
                quantity: 2,
                brand: "Figma",
                category: "apparels",
                thumbnail:
                    "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                images: [
                    "https://store.figma.com/cdn/shop/products/Figma-Store-1039_1000x.jpg?v=1636599836",
                    "https://store.figma.com/cdn/shop/products/Figma-Store-1108_1000x.jpg?v=1636599836",
                    "https://store.figma.com/cdn/shop/products/Figma-Store---Product4381_1000x.jpg?v=1636323317",
                ],
            },
            {
                id: 2,
                title: "Tidy up tee",
                description:
                    "If only there was a Tidy Up button for our lives…sigh.",
                price: 899,
                discountPercentage: 17.94,
                rating: 4.44,
                stock: 34,
                quantity: 1,
                brand: "Figma",
                category: "apparels",
                thumbnail:
                    "https://store.figma.com/cdn/shop/products/IMG_9221_1000x.jpg?v=1651178100",
                images: [
                    "https://store.figma.com/cdn/shop/products/figma-store_tidy-uptee_01_1000x.jpg?v=1670516715",
                    "https://store.figma.com/cdn/shop/products/figma-store_tidy-uptee_01_1000x.jpg?v=1670516715",
                    "https://store.figma.com/cdn/shop/products/figma-store_tidy-uptee_01_1000x.jpg?v=1670516715",
                ],
            },
            {
                id: 3,
                title: "Pixel perfect dark mode tee",
                description:
                    "This tee is in dark mode, just like your design soul. Bask in the darkness and blend into your UI—if only for a moment—before the reflective logo picks up the light of a computer screen.",
                price: 1499,
                discountPercentage: 4.15,
                rating: 4.25,
                stock: 50,
                quantity: 4,
                brand: "Figma",
                category: "apparels",
                thumbnail:
                    "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                images: [
                    "https://store.figma.com/cdn/shop/products/IMG_9221_1000x.jpg?v=1651178100",
                    "https://store.figma.com/cdn/shop/products/IMG_9221_1000x.jpg?v=1651178100",
                    "https://store.figma.com/cdn/shop/products/IMG_9221_1000x.jpg?v=1651178100",
                    "https://store.figma.com/cdn/shop/products/IMG_0060_1000x.jpg?v=1652132420",
                ],
            },
        ],
        womens: [
            {
                id: 4,
                title: "Framework tee",
                description:
                    "Work that frame of yours in a tee that screams “I’ve got pixels and I know how to use ‘em.”",
                price: 1249,
                discountPercentage: 15.46,
                rating: 4.09,
                stock: 36,
                quantity: 5,
                brand: "Figma",
                category: "apparels",
                thumbnail:
                    "https://images.unsplash.com/photo-1668191164074-9666f9720ced?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                images: [
                    "https://store.figma.com/cdn/shop/products/figma-store_frameworktee_01_1000x.jpg?v=1670515454",
                    "https://store.figma.com/cdn/shop/products/figma-store_frameworktee_03_1000x.jpg?v=1670597451",
                    "https://store.figma.com/cdn/shop/products/figma-store_frameworktee_04_1000x.jpg?v=1670597451",
                    "https://store.figma.com/cdn/shop/products/figma-store_frameworktee_05_1000x.jpg?v=1670597451",
                ],
            },
            {
                id: 5,
                title: "Dress code hat",
                description:
                    "Are you casting a spell or is that just hex code? Yes.",
                price: 280,
                discountPercentage: 17.91,
                rating: 4.3,
                stock: 123,
                quantity: 5,
                brand: "Figma",
                category: "apparels",
                thumbnail:
                    "https://images.unsplash.com/photo-1668191164074-9666f9720ced?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                images: [
                    "https://store.figma.com/cdn/shop/products/figma-store_dress-codehat_01_1000x.png?v=1677707527",
                    "https://store.figma.com/cdn/shop/products/figma-store_dress-codehat_01_1000x.png?v=1677707527",
                    "https://store.figma.com/cdn/shop/products/figma-store_dress-codehat_01_1000x.png?v=1677707527",
                    "https://store.figma.com/cdn/shop/products/figma-store_dress-codehat_01_1000x.png?v=1677707527",
                    "https://store.figma.com/cdn/shop/products/figma-store_dress-codehat_01_1000x.png?v=1677707527",
                ],
            },
            {
                id: 6,
                title: "Figma wordmark tee",
                description:
                    "We’ve heard that a plain tee says something by saying nothing. We like to think that this one says… Figma.",
                price: 1499,
                discountPercentage: 10.23,
                rating: 4.43,
                stock: 68,
                quantity: 1,
                brand: "",
                category: "apparels",
                thumbnail:
                    "https://images.unsplash.com/photo-1516831085064-93e36f0b4ff1?q=80&w=1485&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                images: [
                    "https://store.figma.com/cdn/shop/products/Figma-Store-3804_1000x.jpg?v=1636599369",
                    "https://store.figma.com/cdn/shop/products/Figma-Store-3917_1000x.jpg?v=1636599369",
                    "https://store.figma.com/cdn/shop/products/Figma-Store-3917_1000x.jpg?v=1636599369",
                ],
            },
            {
                id: 7,
                title: "Infinix INBOOK",
                description:
                    "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
                price: 1099,
                discountPercentage: 11.83,
                rating: 4.54,
                stock: 96,
                quantity: 2,
                brand: "Figma",
                category: "apparels",
                thumbnail:
                    "https://images.unsplash.com/photo-1668191164074-9666f9720ced?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                images: [
                    "https://store.figma.com/cdn/shop/products/Figma-Store-2327_600x.jpg?v=1636599425",
                    "https://store.figma.com/cdn/shop/products/Figma-Store-2327_600x.jpg?v=1636599425",
                    "https://store.figma.com/cdn/shop/products/Figma-Store-2327_600x.jpg?v=1636599425",
                    "https://store.figma.com/cdn/shop/products/Figma-Store-2327_600x.jpg?v=1636599425",
                ],
            },
        ],
        accessories: [
            {
                id: 8,
                title: "Toolkit mug",
                description:
                    "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                price: 499,
                discountPercentage: 10.58,
                rating: 4.09,
                stock: 32,
                quantity: 3,
                brand: "Figma",
                category: "apparels",
                thumbnail:
                    "https://images.unsplash.com/photo-1620787039767-fb5ea285fe98?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                images: [
                    "https://store.figma.com/cdn/shop/products/figma-store_tool-kitmug_02_1000x.jpg?v=1670520015",
                    "https://store.figma.com/cdn/shop/products/figma-store_tool-kitmug_02_1000x.jpg?v=1670520015",
                    "https://store.figma.com/cdn/shop/products/figma-store_tool-kitmug_02_1000x.jpg?v=1670520015",
                    "https://store.figma.com/cdn/shop/products/figma-store_tool-kitmug_02_1000x.jpg?v=1670520015",
                ],
            },
            {
                id: 9,
                title: "Smiley Face Pin",
                description:
                    "What we imagine you look like every time you open a Figma file.",
                price: 1749,
                discountPercentage: 11.02,
                rating: 4.57,
                stock: 83,
                quantity: 5,
                brand: "Apple",
                category: "laptops",
                thumbnail:
                    "https://images.unsplash.com/photo-1710552520473-f78f26d95708?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                images: [
                    "https://store.figma.com/cdn/shop/products/Figma-Store-3550_1000x.jpg?v=1636599916",
                    "https://store.figma.com/cdn/shop/products/Figma-Store-3579_1000x.jpg?v=1636599916",
                    "https://store.figma.com/cdn/shop/products/Figma-Store-3579_1000x.jpg?v=1636599916",
                ],
            },
            {
                id: 10,
                title: "Cursor tote bag",
                description:
                    "Totes are just a mobile version of that one really full drawer of random stuff we all have at home. We celebrate that with this canvas of possibilities.",
                price: 1099,
                discountPercentage: 6.18,
                rating: 4.43,
                stock: 89,
                quantity: 5,
                brand: "HP Pavilion",
                category: "laptops",
                thumbnail:
                    "https://images.unsplash.com/photo-1716860836982-608d61f39be1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                images: [
                    "https://store.figma.com/cdn/shop/products/FigmaStore_Tote-25_1000x.jpg?v=1657055226",
                    "https://store.figma.com/cdn/shop/products/FigmaStore_Tote-25_1000x.jpg?v=1657055226",
                    "https://store.figma.com/cdn/shop/products/FigmaStore_Tote-25_1000x.jpg?v=1657055226",
                ],
            },
        ],
    },
];

export default products;

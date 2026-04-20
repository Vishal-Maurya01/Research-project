const Items = [
  {
    "name": "Poco x6 pro 5g",
    "description": "High-quality electronics product from Mi, designed for durability and performance.",
    "brand": "Mi",
    "price": 21999,
    "stock": 17,
    "rating": 4.8,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1760655680261-914bcb4424d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9jbyUyMHg0JTIwcHJvJTIwNWclMjBwaG9uZSUyMGltYWdlJTIwd2l0aCUyMHdoaXRlJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "OnePlus ",
    "description": "High-quality electronics product from OnePlus, designed for durability and performance.",
    "brand": "OnePlus",
    "price": 32499,
    "stock": 57,
    "rating": 4.9,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1649515530664-7a3150983c7e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Samsung Galaxy S23 Ultra",
    "description": "High-quality electronics product from Samsung, designed for durability and performance.",
    "brand": "Samsung",
    "price": 12501,
    "stock": 52,
    "rating": 4.3,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Sony Camera",
    "description": "High-quality electronics product from Sony, designed for durability and performance.",
    "brand": "Sony",
    "price": 79000,
    "stock": 22,
    "rating": 4.5,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1606986628470-26a67fa4730c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Samsung S21 5g",
    "description": "High-quality electronics product from Samsung, designed for durability and performance.",
    "brand": "Samsung",
    "price": 29000,
    "stock": 18,
    "rating": 3.7,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1610945264803-c22b62d2a7b3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "BoAt headphone",
    "description": "High-quality electronics product from boAt, designed for durability and performance.",
    "brand": "boAt",
    "price": 1299,
    "stock": 69,
    "rating": 5.0,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1612016603255-185f1f8eaa2a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Samsung Phone",
    "description": "High-quality electronics product from Samsung, designed for durability and performance.",
    "brand": "Samsung",
    "price": 4999,
    "stock": 33,
    "rating": 3.8,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1587749090881-1ea18126ab3a?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Apple phone",
    "description": "High-quality electronics product from Samsung, designed for durability and performance.",
    "brand": "Samsung",
    "price": 49999,
    "stock": 56,
    "rating": 4.6,
    "category": "Electronics",
    "image": "https://images.unsplash.com/photo-1652721367098-0ecad4cc0370?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Sports T-Shirt",
    "description": "High-quality fashion product from Sports, designed for durability and performance.",
    "brand": "Nike",
    "price": 899,
    "stock": 58,
    "rating": 4.4,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1758214873619-32d1674ffd3b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {

    "name": "Stylish Lehanga",
    "description": "High-quality fashion product from Zara, designed for durability and performance.",
    "brand": "Zara",
    "price": 3010,
    "stock": 95,
    "rating": 4.2,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1746372283841-dbb3838f9935?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {

    "name": "Makeup Products",
    "description": "High-quality fashion product from Adidas, designed for durability and performance.",
    "brand": "Adidas",
    "price": 4999,
    "stock": 85,
    "rating": 4.2,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {

    "name": "Kids wear",
    "description": "High-quality fashion product from H&M, designed for durability and performance.",
    "brand": "H&M",
    "price": 499,
    "stock": 96,
    "rating": 4.0,
    "category": "Fashion",
    "image": "https://plus.unsplash.com/premium_photo-1697612943610-fc079bab10cf?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {

    "name": "Zara Fashion ",
    "description": "High-quality fashion product from Zara, designed for durability and performance.",
    "brand": "Zara",
    "price": 10611,
    "stock": 23,
    "rating": 4.3,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1678705730064-a7ecbab4b3fb?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {

    "name": "Nike Fashion ",
    "description": "High-quality fashion product from Nike, designed for durability and performance.",
    "brand": "Nike",
    "price": 7772,
    "stock": 30,
    "rating": 4.1,
    "category": "Fashion",
    "image": "https://plus.unsplash.com/premium_photo-1677358496823-ada283ed798d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {

    "name": "Top for Girls",
    "description": "High-quality fashion product from Nike, designed for durability and performance.",
    "brand": "Nike",
    "price": 5089,
    "stock": 97,
    "rating": 4.9,
    "category": "Fashion",
    "image": "https://plus.unsplash.com/premium_photo-1661313663237-25f6642c49c7?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {

    "name": "Shoes for men",
    "description": "High-quality fashion product from Nike, designed for durability and performance.",
    "brand": "Nike",
    "price": 2999,
    "stock": 88,
    "rating": 4.0,
    "category": "Fashion",
    "image": "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {

    "name": "Philips Home Appliances",
    "description": "High-quality home appliances product from Philips, designed for durability and performance.",
    "brand": "Philips",
    "price": 8580,
    "stock": 33,
    "rating": 4.3,
    "category": "Home Appliances",
    "image": "https://media.istockphoto.com/id/1211554164/photo/3d-render-of-home-appliances-collection-set.webp?a=1&b=1&s=612x612&w=0&k=20&c=eAClUK1d_8Qp8NkdaK4SYg8l0u1aByjOhl-nE-3cA_4="
  },
  {
    "name": "Philips bulb",
    "description": "High-quality home appliances product from Philips, designed for durability and performance.",
    "brand": "Philips",
    "price": 7595,
    "stock": 17,
    "rating": 4.2,
    "category": "Home Appliances",
    "image": "https://media.istockphoto.com/id/2030324767/photo/warm-light-of-a-luminous-energy-saving-lamp-philips.webp?a=1&b=1&s=612x612&w=0&k=20&c=pSoh-t7ZSfKTZEJzod5bS208V3smnxuURf_fTBsIT8Q="
  },
  {
    "name": "Whirlpool Home Appliances",
    "description": "High-quality home appliances product from Whirlpool, designed for durability and performance.",
    "brand": "Whirlpool",
    "price": 12243,
    "stock": 16,
    "rating": 3.9,
    "category": "Home Appliances",
    "image": "https://images.unsplash.com/photo-1719642357460-d0f611ebc108?q=80&w=407&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "LG Home Appliances",
    "description": "High-quality home appliances product from LG, designed for durability and performance.",
    "brand": "LG",
    "price": 13736,
    "stock": 17,
    "rating": 4.0,
    "category": "Home Appliances",
    "image": "https://images.unsplash.com/photo-1760901627502-4969155b3330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGclMjB0dnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "LG Home Appliances",
    "description": "High-quality home appliances product from LG, designed for durability and performance.",
    "brand": "LG",
    "price": 10224,
    "stock": 11,
    "rating": 4.3,
    "category": "Home Appliances",
    "image": "https://images.unsplash.com/photo-1759772238012-9d5ad59ae637?q=80&w=823&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Philips Home Appliances",
    "description": "High-quality home appliances product from Philips, designed for durability and performance.",
    "brand": "Philips",
    "price": 8042,
    "stock": 32,
    "rating": 4.1,
    "category": "Home Appliances",
    "image": "https://images.unsplash.com/photo-1576503963299-fcd31822b523?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZhbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Whirlpool Home Appliances",
    "description": "High-quality home appliances product from Whirlpool, designed for durability and performance.",
    "brand": "Whirlpool",
    "price": 2427,
    "stock": 28,
    "rating": 3.8,
    "category": "Home Appliances",
    "image": "https://media.istockphoto.com/id/936496268/photo/retro-armchair-in-bright-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=eGEVqIP0uVCgi55jTLGO2NqjfF4HYrp5WCXMlmHzh64="
  },
  {
    "name": "LG Home Appliances",
    "description": "High-quality home appliances product from LG, designed for durability and performance.",
    "brand": "LG",
    "price": 5199,
    "stock": 58,
    "rating": 4.5,
    "category": "Home Appliances",
    "image": "https://images.unsplash.com/photo-1634571799202-619a5d4c086e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TEclMjBsY2R8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Nivea Beauty Item",
    "description": "High-quality beauty product from Nivea, designed for durability and performance.",
    "brand": "Nivea",
    "price": 13343,
    "stock": 25,
    "rating": 4.7,
    "category": "Beauty",
    "image": "https://images.unsplash.com/photo-1727364438136-6edc10ef0a52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpciUyMGRyeWVyfGVufDB8fDB8fHww"
  },
  {
    "name": "Lakme Beauty Item",
    "description": "High-quality beauty product from Lakme, designed for durability and performance.",
    "brand": "Lakme",
    "price": 4886,
    "stock": 24,
    "rating": 5.0,
    "category": "Beauty",
    "image": "https://images.unsplash.com/photo-1597225260787-3912b312d065?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGxhY21lJTIwa2FqYWx8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Lakme Beauty Item",
    "description": "High-quality beauty product from Lakme, designed for durability and performance.",
    "brand": "Lakme",
    "price": 228,
    "stock": 13,
    "rating": 4.5,
    "category": "Beauty",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Maybelline Beauty",
    "description": "High-quality beauty product from Maybelline, designed for durability and performance.",
    "brand": "Maybelline",
    "price": 8447,
    "stock": 37,
    "rating": 4.6,
    "category": "Beauty",
    "image": "https://images.unsplash.com/photo-1745141063798-7fa04698ea80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXdhc2h8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Nivea Beauty",
    "description": "High-quality beauty product from Nivea, designed for durability and performance.",
    "brand": "Nivea",
    "price": 2577,
    "stock": 71,
    "rating": 3.9,
    "category": "Beauty",
    "image": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFrZXVwJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Facewash",
    "description": "High-quality beauty product from Mamaearth, designed for durability and performance.",
    "brand": "Mamaearth",
    "price": 352,
    "stock": 58,
    "rating": 3.6,
    "category": "Beauty",
    "image": "https://images.unsplash.com/photo-1773000129212-3546d5e083cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhY2V3YXNoJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Lakme Beauty Item",
    "description": "High-quality beauty product from Lakme, designed for durability and performance.",
    "brand": "Lakme",
    "price": 11194,
    "stock": 36,
    "rating": 4.2,
    "category": "Beauty",
    "image": "https://images.unsplash.com/photo-1571875294104-483ad281c8eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFjbWUlMjBrYWphbHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Nivea Beauty Item",
    "description": "High-quality beauty product from Nivea, designed for durability and performance.",
    "brand": "Nivea",
    "price": 4718,
    "stock": 30,
    "rating": 4.6,
    "category": "Beauty",
    "image": "https://images.unsplash.com/photo-1608979048467-6194dabc6a3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhdXR5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Amul Product",
    "description": "High-quality groceries product from Amul, designed for durability and performance.",
    "brand": "Amul",
    "price": 1766,
    "stock": 40,
    "rating": 3.7,
    "category": "Grocery",
    "image": "https://images.unsplash.com/photo-1646168932800-e48f378d37bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW11bHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Patanjali Groceries",
    "description": "High-quality groceries product from Patanjali, designed for durability and performance.",
    "brand": "Patanjali",
    "price": 5570,
    "stock": 81,
    "rating": 4.3,
    "category": "Grocery",
    "image": "https://images.unsplash.com/photo-1723140796154-7597be5363d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JvY2VyeSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Tata Groceries",
    "description": "High-quality groceries product from Tata, designed for durability and performance.",
    "brand": "Tata",
    "price": 14740,
    "stock": 74,
    "rating": 3.7,
    "category": "Grocery",
    "image": "https://media.istockphoto.com/id/1320617333/photo/shopping-cart-full-of-food-isolated-on-white-grocery-and-food-store-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=lfs8I5ehGxi24CO8mxzu-QPYNTqDuBgM1BwHPlmVqek="
  },
  {
    "name": "Amul Groceries",
    "description": "High-quality groceries product from Amul, designed for durability and performance.",
    "brand": "Amul",
    "price": 3437,
    "stock": 25,
    "rating": 4.5,
    "category": "Grocery",
    "image": "https://images.unsplash.com/photo-1601599967100-f16100982063?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyb2NlcnklMjBwcm9kdWN0fGVufDB8fDB8fHww"
  },
  {
    "name": "Groceries Item",
    "description": "High-quality groceries product from Fortune, designed for durability and performance.",
    "brand": "Fortune",
    "price": 1821,
    "stock": 32,
    "rating": 4.4,
    "category": "Grocery",
    "image": "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Fortune Groceries",
    "description": "High-quality groceries product from Fortune, designed for durability and performance.",
    "brand": "Fortune",
    "price": 8751,
    "stock": 36,
    "rating": 4.6,
    "category": "Grocery",
    "image": "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z3JvY2VyeXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Fortune Groceries Item",
    "description": "High-quality groceries product from Fortune, designed for durability and performance.",
    "brand": "Fortune",
    "price": 10364,
    "stock": 30,
    "rating": 4.3,
    "category": "Grocery",
    "image": "https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Amul Groceries Item",
    "description": "High-quality groceries product from Amul, designed for durability and performance.",
    "brand": "Amul",
    "price": 3801,
    "stock": 54,
    "rating": 3.9,
    "category": "Grocery",
    "image": "https://images.unsplash.com/photo-1601599967100-f16100982063?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGdyb2NlcnklMjBwcm9kdWN0fGVufDB8fDB8fHww"
  },
  {
    "name": "Hot Wheels Toys Item",
    "description": "High-quality toys product from Hot Wheels, designed for durability and performance.",
    "brand": "Hot Wheels",
    "price": 5046,
    "stock": 81,
    "rating": 4.1,
    "category": "Toys",
    "image": "https://images.unsplash.com/photo-1583531681157-1b227e61b3bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hlZWwlMjB0b3l8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Toys Item",
    "description": "High-quality toys product from Lego, designed for durability and performance.",
    "brand": "Lego",
    "price": 14790,
    "stock": 12,
    "rating": 4.7,
    "category": "Toys",
    "image": "https://images.unsplash.com/photo-1684545499490-4e8d3945a73e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2hlZWwlMjB0b3l8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Toys Item ",
    "description": "High-quality toys product from Lego, designed for durability and performance.",
    "brand": "Lego",
    "price": 11406,
    "stock": 24,
    "rating": 4.7,
    "category": "Toys",
    "image": "https://images.unsplash.com/photo-1633966099760-a585e346df20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdoZWVsJTIwdG95fGVufDB8fDB8fHww"
  },
  {
    "name": "Barbie Toys",
    "description": "High-quality toys product from Barbie, designed for durability and performance.",
    "brand": "Barbie",
    "price": 9713,
    "stock": 100,
    "rating": 3.6,
    "category": "Toys",
    "image": "https://plus.unsplash.com/premium_photo-1661274044376-d372f897757a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFyYmllJTIwdG95fGVufDB8fDB8fHww"
  },
  {
    "name": "Toys",
    "description": "High-quality toys product from Lego, designed for durability and performance.",
    "brand": "Lego",
    "price": 13163,
    "stock": 96,
    "rating": 4.2,
    "category": "Toys",
    "image": "https://images.unsplash.com/photo-1713641797626-51012074842e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhcmJpZSUyMHRveXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Badminton",
    "description": "High-quality toys product from Fisher-Price, designed for durability and performance.",
    "brand": "Nike",
    "price": 13559,
    "stock": 46,
    "rating": 4.5,
    "category": "Toys",
    "image": "https://images.unsplash.com/photo-1559310487-491546e37f17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFkbWludG9uJTIwdG95fGVufDB8fDB8fHww"
  },
  {
    "name": "Nerf Toys Item",
    "description": "High-quality toys product from Nerf, designed for durability and performance.",
    "brand": "Nerf",
    "price": 9733,
    "stock": 36,
    "rating": 4.7,
    "category": "Toys",
    "image": "https://plus.unsplash.com/premium_photo-1720433273055-356397a4f7fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhZG1pbnRvbiUyMHRveXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Hot Wheels Toys",
    "description": "High-quality toys product from Hot Wheels, designed for durability and performance.",
    "brand": "Hot Wheels",
    "price": 1929,
    "stock": 20,
    "rating": 3.8,
    "category": "Toys",
    "image": "https://images.unsplash.com/photo-1583531681157-1b227e61b3bf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hlZWwlMjB0b3l8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Rupa Books Item",
    "description": "High-quality books product from Rupa, designed for durability and performance.",
    "brand": "Rupa",
    "price": 1317,
    "stock": 82,
    "rating": 4.7,
    "category": "Books",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJvb2tzfGVufDB8fDB8fHww"
  },
  {
    "name": "HarperCollins Books Item",
    "description": "High-quality books product from HarperCollins, designed for durability and performance.",
    "brand": "HarperCollins",
    "price": 6182,
    "stock": 75,
    "rating": 4.0,
    "category": "Books",
    "image": "https://images.unsplash.com/photo-1526243741027-444d633d7365?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Scholastic Books Item",
    "description": "High-quality books product from Scholastic, designed for durability and performance.",
    "brand": "Scholastic",
    "price": 4639,
    "stock": 72,
    "rating": 4.3,
    "category": "Books",
    "image": "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2tzfGVufDB8fDB8fHww"
  },
  {
    "name": "Scholastic Books Item",
    "description": "High-quality books product from Scholastic, designed for durability and performance.",
    "brand": "Scholastic",
    "price": 8058,
    "stock": 42,
    "rating": 4.5,
    "category": "Books",
    "image": "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzfGVufDB8fDB8fHww"
  },
  {
    "name": "Oxford Books Item",
    "description": "High-quality books product from Oxford, designed for durability and performance.",
    "brand": "Oxford",
    "price": 4960,
    "stock": 23,
    "rating": 4.1,
    "category": "Books",
    "image": "https://images.unsplash.com/photo-1588912914017-923900a34710?q=80&w=919&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Scholastic Books Item",
    "description": "High-quality books product from Scholastic, designed for durability and performance.",
    "brand": "Scholastic",
    "price": 7210,
    "stock": 49,
    "rating": 3.7,
    "category": "Books",
    "image": "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzfGVufDB8fDB8fHww"
  },
  {
    "name": "Scholastic Books Item 7",
    "description": "High-quality books product from Scholastic, designed for durability and performance.",
    "brand": "Scholastic",
    "price": 4788,
    "stock": 30,
    "rating": 4.9,
    "category": "Books",
    "image": "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJvb2tzfGVufDB8fDB8fHww"
  },
  {
    "name": "Penguin Books Item",
    "description": "High-quality books product from Penguin, designed for durability and performance.",
    "brand": "Penguin",
    "price": 6164,
    "stock": 34,
    "rating": 4.8,
    "category": "Books",
    "image": "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Faber-Castell Stationery Item",
    "description": "High-quality stationery product from Faber-Castell, designed for durability and performance.",
    "brand": "Faber-Castell",
    "price": 12306,
    "stock": 77,
    "rating": 3.6,
    "category": "Stationery",
    "image": "https://plus.unsplash.com/premium_photo-1663956148012-52c4b284dbca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhdGlvbmFyeSUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
  },
  {
    "name": "Cello Stationery Item",
    "description": "High-quality stationery product from Cello, designed for durability and performance.",
    "brand": "Cello",
    "price": 9239,
    "stock": 47,
    "rating": 4.8,
    "category": "Stationery",
    "image": "https://images.unsplash.com/photo-1589412336918-bcae3dd7df0e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RhdGlvbmFyeSUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
  },
  {
    "name": "Luxor Stationery Item",
    "description": "High-quality stationery product from Luxor, designed for durability and performance.",
    "brand": "Luxor",
    "price": 12143,
    "stock": 97,
    "rating": 4.3,
    "category": "Stationery",
    "image": "https://images.unsplash.com/photo-1629652487043-fb2825838f8c?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    "name": "Luxor Stationery Item",
    "description": "High-quality stationery product from Luxor, designed for durability and performance.",
    "brand": "Luxor",
    "price": 4132,
    "stock": 48,
    "rating": 4.0,
    "category": "Stationery",
    "image": "https://images.unsplash.com/photo-1717078279011-b0e9ae2a3a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RhdGlvbmFyeSUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
  },
  {
    "name": "Luxor Stationery Item 5",
    "description": "High-quality stationery product from Luxor, designed for durability and performance.",
    "brand": "Luxor",
    "price": 4097,
    "stock": 99,
    "rating": 4.5,
    "category": "Stationery",
    "image": "https://images.unsplash.com/photo-1615988938302-bd2a5a7023bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RhdGlvbmFyeSUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
  },
  {
    "name": "Luxor Stationery Item ",
    "description": "High-quality stationery product from Luxor, designed for durability and performance.",
    "brand": "Luxor",
    "price": 9399,
    "stock": 13,
    "rating": 4.8,
    "category": "Stationery",
    "image": "https://plus.unsplash.com/premium_photo-1770394076474-56462b843763?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3RhdGlvbmFyeSUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
  },
  {
    "name": "Cello Stationery Item ",
    "description": "High-quality stationery product from Cello, designed for durability and performance.",
    "brand": "Cello",
    "price": 10430,
    "stock": 20,
    "rating": 3.9,
    "category": "Stationery",
    "image": "https://images.unsplash.com/photo-1568871391149-449702439177?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXRpb25hcnklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Camlin Stationery Item ",
    "description": "High-quality stationery product from Camlin, designed for durability and performance.",
    "brand": "Camlin",
    "price": 829,
    "stock": 48,
    "rating": 4.1,
    "category": "Stationery",
    "image": "https://images.unsplash.com/photo-1588982857824-f7efabfff726?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN0YXRpb25hcnklMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    "name": "Nivia Sports Item ",
    "description": "High-quality sports product from Nivia, designed for durability and performance.",
    "brand": "Nivia",
    "price": 10217,
    "stock": 10,
    "rating": 4.8,
    "category": "Sports",
    "image": "https://plus.unsplash.com/premium_photo-1678444760880-95b334f09e2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Decathlon Sports Item ",
    "description": "High-quality sports product from Decathlon, designed for durability and performance.",
    "brand": "Decathlon",
    "price": 12010,
    "stock": 73,
    "rating": 4.7,
    "category": "Sports",
    "image": "https://plus.unsplash.com/premium_photo-1709932755399-b61bb0a3aa2a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3BvcnRzJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Yonex Sports Item",
    "description": "High-quality sports product from Yonex, designed for durability and performance.",
    "brand": "Yonex",
    "price": 14471,
    "stock": 69,
    "rating": 4.2,
    "category": "Sports",
    "image": "https://plus.unsplash.com/premium_photo-1682435566673-cedb75cd7459?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNwb3J0cyUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
  },
  {
    "name": "Yonex Sports Item ",
    "description": "High-quality sports product from Yonex, designed for durability and performance.",
    "brand": "Yonex",
    "price": 12685,
    "stock": 63,
    "rating": 4.5,
    "category": "Sports",
    "image": "https://plus.unsplash.com/premium_photo-1707486076005-7633aa756a0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNwb3J0cyUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
  },
  {
    "name": "Adidas Sports Item ",
    "description": "High-quality sports product from Adidas, designed for durability and performance.",
    "brand": "Adidas",
    "price": 704,
    "stock": 37,
    "rating": 3.8,
    "category": "Sports",
    "image": "https://plus.unsplash.com/premium_photo-1663133611323-69d98d17de90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnRzJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Adidas Sports Item ",
    "description": "High-quality sports product from Adidas, designed for durability and performance.",
    "brand": "Adidas",
    "price": 4861,
    "stock": 12,
    "rating": 4.8,
    "category": "Sports",
    "image": "https://images.unsplash.com/photo-1772909849803-e1c298df3fd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwb3J0cyUyMHByb2R1Y3RzfGVufDB8fDB8fHww"
  },
  {
    "name": "Yonex Sports Item ",
    "description": "High-quality sports product from Yonex, designed for durability and performance.",
    "brand": "Yonex",
    "price": 4208,
    "stock": 20,
    "rating": 3.6,
    "category": "Sports",
    "image": "https://media.istockphoto.com/id/873550872/photo/colorful-cap-on-blue-shelf-background-fashion-baseball-or-hiphop-hat.webp?a=1&b=1&s=612x612&w=0&k=20&c=8hY3Q0WzF0g2MC8ycz3lhJbvTnxLHL8emPjlrTe5vG8="
  },
  {
    "name": "Nivia Sports Item ",
    "description": "High-quality sports product from Nivia, designed for durability and performance.",
    "brand": "Nivia",
    "price": 12715,
    "stock": 61,
    "rating": 4.5,
    "category": "Sports",
    "image": "https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BvcnRzfGVufDB8fDB8fHww"
  },
  {
    "name": "Nilkamal Furniture Item",
    "description": "High-quality furniture product from Nilkamal, designed for durability and performance.",
    "brand": "Nilkamal",
    "price": 5195,
    "stock": 99,
    "rating": 3.7,
    "category": "Furniture",
    "image": "https://images.unsplash.com/photo-1624870701221-e61f079aad5d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnVybml0dXJlJTIwaXRtZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "IKEA Furniture Item ",
    "description": "High-quality furniture product from IKEA, designed for durability and performance.",
    "brand": "IKEA",
    "price": 10975,
    "stock": 65,
    "rating": 4.5,
    "category": "Furniture",
    "image": "https://images.unsplash.com/photo-1766802981874-349c26e4d99b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnVybml0dXJlJTIwaXRtZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Godrej Furniture Item",
    "description": "High-quality furniture product from Godrej, designed for durability and performance.",
    "brand": "Godrej",
    "price": 607,
    "stock": 92,
    "rating": 4.4,
    "category": "Furniture",
    "image": "https://plus.unsplash.com/premium_photo-1739350938222-39805f594fd5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlJTIwaXRtZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Nilkamal Furniture Item",
    "description": "High-quality furniture product from Nilkamal, designed for durability and performance.",
    "brand": "Nilkamal",
    "price": 4109,
    "stock": 15,
    "rating": 4.9,
    "category": "Furniture",
    "image": "https://plus.unsplash.com/premium_photo-1739350938199-89ac8ecacb26?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZ1cm5pdHVyZSUyMGl0bWVzfGVufDB8fDB8fHww"
  },
  {
    "name": "IKEA Furniture Item",
    "description": "High-quality furniture product from IKEA, designed for durability and performance.",
    "brand": "IKEA",
    "price": 1519,
    "stock": 13,
    "rating": 5.0,
    "category": "Furniture",
    "image": "https://images.unsplash.com/photo-1549194456-8dc62d481b47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZ1cm5pdHVyZSUyMGl0bWVzfGVufDB8fDB8fHww"
  },
  {
    "name": "Nilkamal Furniture Item",
    "description": "High-quality furniture product from Nilkamal, designed for durability and performance.",
    "brand": "Nilkamal",
    "price": 5702,
    "stock": 79,
    "rating": 4.5,
    "category": "Furniture",
    "image": "https://media.istockphoto.com/id/1329937916/photo/scandinavian-domestic-dining-room-interior.webp?a=1&b=1&s=612x612&w=0&k=20&c=pgPp8y_7c4VfW7QPSUOKSbH0xuySskbEC2nZf7TdzSc="
  },
  {
    "name": "Urban Ladder Furniture Item",
    "description": "High-quality furniture product from Urban Ladder, designed for durability and performance.",
    "brand": "Urban Ladder",
    "price": 9865,
    "stock": 33,
    "rating": 4.0,
    "category": "Furniture",
    "image": "https://media.istockphoto.com/id/2186359107/photo/modern-furniture-living-room-decorate-set-cutout-white-backgrounds-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=QrZAkhTFtc01Am3GUlvK8DLkyJckHUjk18eyNdgfVpE="
  },
  {
    "name": "Urban Ladder Furniture Item",
    "description": "High-quality furniture product from Urban Ladder, designed for durability and performance.",
    "brand": "Urban Ladder",
    "price": 10266,
    "stock": 81,
    "rating": 4.6,
    "category": "Furniture",
    "image": "https://images.unsplash.com/photo-1731917668002-3350dfae3464?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnVybml0dXJlJTIwaXRtZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Tanishq Jewellery Item",
    "description": "High-quality jewellery product from Tanishq, designed for durability and performance.",
    "brand": "Tanishq",
    "price": 3881,
    "stock": 81,
    "rating": 4.1,
    "category": "Jewellery",
    "image": "https://images.unsplash.com/photo-1631560230221-faff391fd241?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amV3ZWxsZXJ5JTIwaXRtZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Malabar Jewellery Item",
    "description": "High-quality jewellery product from Malabar, designed for durability and performance.",
    "brand": "Malabar",
    "price": 7545,
    "stock": 79,
    "rating": 4.7,
    "category": "Jewellery",
    "image": "https://images.unsplash.com/photo-1600862754152-80a263dd564f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8amV3ZWxsZXJ5JTIwaXRtZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "CaratLane Jewellery Item",
    "description": "High-quality jewellery product from CaratLane, designed for durability and performance.",
    "brand": "CaratLane",
    "price": 1034,
    "stock": 67,
    "rating": 4.1,
    "category": "Jewellery",
    "image": "https://images.unsplash.com/photo-1707222609380-fe23be31c883?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGpld2VsbGVyeSUyMGl0bWVzfGVufDB8fDB8fHww"
  },
  {
    "name": "Bluestone Jewellery Item",
    "description": "High-quality jewellery product from Bluestone, designed for durability and performance.",
    "brand": "Bluestone",
    "price": 7530,
    "stock": 60,
    "rating": 4.8,
    "category": "Jewellery",
    "image": "https://plus.unsplash.com/premium_photo-1681276170683-706111cf496e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amV3ZWxsZXJ5JTIwaXRtZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Tanishq Jewellery Item",
    "description": "High-quality jewellery product from Tanishq, designed for durability and performance.",
    "brand": "Tanishq",
    "price": 11273,
    "stock": 71,
    "rating": 4.7,
    "category": "Jewellery",
    "image": "https://images.unsplash.com/photo-1685489807405-fdffb06aef2c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGpld2VsbGVyeSUyMGl0bWVzfGVufDB8fDB8fHww"
  },
  {
    "name": "Bluestone Jewellery Item ",
    "description": "High-quality jewellery product from Bluestone, designed for durability and performance.",
    "brand": "Bluestone",
    "price": 10755,
    "stock": 74,
    "rating": 4.3,
    "category": "Jewellery",
    "image": "https://images.unsplash.com/photo-1698793915840-05e1a0e703d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amV3ZWxsZXJ5JTIwaXRtZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Kalyan Jewellery Item ",
    "description": "High-quality jewellery product from Kalyan, designed for durability and performance.",
    "brand": "Kalyan",
    "price": 13297,
    "stock": 21,
    "rating": 4.9,
    "category": "Jewellery",
    "image": "https://images.unsplash.com/photo-1631560230221-faff391fd241?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8amV3ZWxsZXJ5JTIwaXRtZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Bluestone Jewellery Item",
    "description": "High-quality jewellery product from Bluestone, designed for durability and performance.",
    "brand": "Bluestone",
    "price": 8789,
    "stock": 77,
    "rating": 4.6,
    "category": "Jewellery",
    "image": "https://plus.unsplash.com/premium_photo-1661645561785-a858d6475286?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8amV3ZWxsZXJ5JTIwaXRtZXN8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Adidas Footwear Item",
    "description": "High-quality footwear product from Adidas, designed for durability and performance.",
    "brand": "Adidas",
    "price": 6681,
    "stock": 79,
    "rating": 4.9,
    "category": "Footwear",
    "image": "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Adidas Footwear Item",
    "description": "High-quality footwear product from Adidas, designed for durability and performance.",
    "brand": "Adidas",
    "price": 8775,
    "stock": 14,
    "rating": 3.6,
    "category": "Footwear",
    "image": "https://images.unsplash.com/photo-1620794341491-76be6eeb6946?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb3R3ZWFyfGVufDB8fDB8fHww"
  },
  {
    "name": "Sparx Footwear Item ",
    "description": "High-quality footwear product from Sparx, designed for durability and performance.",
    "brand": "Sparx",
    "price": 13930,
    "stock": 82,
    "rating": 3.9,
    "category": "Footwear",
    "image": "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb3R3ZWFyfGVufDB8fDB8fHww"
  },
  {
    "name": "Adidas Footwear Item",
    "description": "High-quality footwear product from Adidas, designed for durability and performance.",
    "brand": "Adidas",
    "price": 13712,
    "stock": 40,
    "rating": 4.2,
    "category": "Footwear",
    "image": "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb3R3ZWFyfGVufDB8fDB8fHww"
  },
  {
    "name": "Sparx Footwear Item",
    "description": "High-quality footwear product from Sparx, designed for durability and performance.",
    "brand": "Sparx",
    "price": 2712,
    "stock": 60,
    "rating": 3.8,
    "category": "Footwear",
    "image": "https://images.unsplash.com/photo-1465453869711-7e174808ace9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb3R3ZWFyfGVufDB8fDB8fHww"
  },
  {
    "name": "Sparx Footwear Item",
    "description": "High-quality footwear product from Sparx, designed for durability and performance.",
    "brand": "Sparx",
    "price": 5513,
    "stock": 88,
    "rating": 3.8,
    "category": "Footwear",
    "image": "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Reebok Footwear Item ",
    "description": "High-quality footwear product from Reebok, designed for durability and performance.",
    "brand": "Reebok",
    "price": 4373,
    "stock": 33,
    "rating": 4.4,
    "category": "Footwear",
    "image": "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    "name": "Reebok Footwear Item ",
    "description": "High-quality footwear product from Reebok, designed for durability and performance.",
    "brand": "Reebok",
    "price": 6148,
    "stock": 82,
    "rating": 4.7,
    "category": "Footwear",
    "image": "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vdHdlYXJ8ZW58MHx8MHx8fDA%3D"
  }
]

module.exports = { data : Items};
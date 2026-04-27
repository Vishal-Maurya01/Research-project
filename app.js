const express = require("express");
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const ejs = require('ejs');
const ejsMate = require("ejs-mate");
const items = require('./models/items.js');
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const session = require("express-session");
const flash = require("connect-flash");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { isLoggedIn, saveRedirectUrl, isAdmin } = require("./middleware.js");


app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);

const sessionOptions = {
    secret: "mysupersecretcode",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());



app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({ usernameField: 'email' }, User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    res.locals.req = req;
    next();
});

const MONGO_URL ='mongodb+srv://mauryavanshyvishalmaurya_db_user:Vishalmaurya1234@cluster0.hnrqjfv.mongodb.net/quickbuy?retryWrites=true&w=majority';

main().then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log(err);
})

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.get('/', (req, res) => {
    res.render('home');
});

// app.get('/shop', (req, res) => {
//     res.render("login");
// })

app.get('/shop', async (req, res) => {
    const allItems = await items.find({});

    // Random 15 products for trending
    const trendingItems = await items.aggregate([
        { $sample: { size: 15 } }
    ]);

    res.render("index.ejs", { allItems, trendingItems });
})

// searchbar

app.get("/search", async (req, res) => {
    const query = req.query.q;
    if (!query) {
        return res.redirect("/shop");
    }
    const results = await items.find({
        $or: [
            { name: { $regex: query, $options: "i" } },
            { category: { $regex: query, $options: "i" } },
            { brand: { $regex: query, $options: "i" } }
        ]
    });
    // const results = await items.find({
    //     name: { $regex: query, $options: "i" }   // case-insensitive
    // });

    res.render("search.ejs", { results, query });
});

// category 

app.get("/category/:name", async (req, res) => {
    const categoryName = req.params.name;

    const categoryItems = await items.find({
        category: categoryName
    });

    // Optional: random trending for that category
    const trendingItems = await items.aggregate([
        { $match: { category: categoryName } },
        { $sample: { size: 10 } }
    ]);

    res.render("category.ejs", { categoryItems, categoryName, trendingItems });
});

// Admin Dashboard
app.get("/admin", isAdmin, async (req, res) => {
    const allProducts = await items.find({});
    res.render("admin/dashboard.ejs", { allProducts });
});

// Add Product Page
app.get("/admin/add", isAdmin, (req, res) => {
    res.render("admin/add.ejs");
});

// Add Product POST
app.post("/admin/add", isAdmin, async (req, res) => {
    const newProduct = new items(req.body);
    await newProduct.save();
    req.flash("success", "Product added!");
    res.redirect("/admin");
});

// Delete Product
app.get("/admin/delete/:id", isAdmin, async (req, res) => {
    await items.findByIdAndDelete(req.params.id);
    req.flash("success", "Product deleted!");
    res.redirect("/admin");
});

// Edit page
app.get("/admin/edit/:id", isAdmin, async (req, res) => {
    const product = await items.findById(req.params.id);
    res.render("admin/edit.ejs", { product });
});

// Update product
app.post("/admin/edit/:id", isAdmin, async (req, res) => {
    await items.findByIdAndUpdate(req.params.id, req.body, { new: true });
    req.flash("success", "Product updated!");
    res.redirect("/admin");
});

app.get('/login', async (req, res) => {
    res.render("users/login.ejs");
})

app.post("/login",
    saveRedirectUrl,
    passport.authenticate("local", {
        failureRedirect: "/login",
        failureFlash: true
    }),
    (req, res) => {
        req.flash("success", "Login successful!");
        if (req.user.email === "mauryavanshyvishalmaurya@gmail.com") {
            return res.redirect("/admin");
        }
        let redirectUrl = res.locals.redirectUrl || "/";
        res.redirect(redirectUrl);
    }
);


app.get('/signup', async (req, res) => {
    res.render("users/signup.ejs");
})

app.post('/signup', async (req, res) => {
    let { name, email, password, confirmPassword } = req.body;

    // Password match check
    if (password !== confirmPassword) {
        req.flash("error", "Passwords do not match!");
        return res.redirect("/signup");
    }

    try {
        const newUser = new User({
            name: name,
            email: email,
        });

        const registeredUser = await User.register(newUser, password);

        // Auto login after signup
        req.login(registeredUser, function (err) {
            if (err) {
                req.flash("error", "Login failed after signup.");
                return res.redirect("/signup");
            }

            req.flash("success", "Account created successfully!");
            res.redirect("/");
        });

    } catch (err) {

        if (err.name === "UserExistsError") {
            req.flash("error", "Email already registered!");
            return res.redirect("/signup");
        }

        req.flash("error", "Something went wrong. Please try again.");
        res.redirect("/signup");
    }
});


app.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) {
            next(err);
        }
        req.flash("success", "You are Logged out!");
        res.redirect("/")
    })
})

// cart 

// View cart
app.get("/cart", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);

    res.render("cart.ejs", {
        cart: user.cart,
        saved: user.saved
    });
});

app.get("/add-to-cart/:id", isLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;

        //  Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            req.flash("error", "Invalid product");
            return res.redirect("/shop");
        }

        const product = await items.findById(id);

        if (!product) {
            req.flash("error", "Product not found");
            return res.redirect("/shop");
        }

        const user = await User.findById(req.user._id);

        //  Check if already in cart
        let existing = user.cart.find(item => item.productId === id);

        if (existing) {
            existing.quantity++;
        } else {
            user.cart.push({
                productId: id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: 1
            });
        }

        await user.save();

        req.flash("success", "Added to cart!");
        res.redirect(req.get("Referrer") || "/shop");

    } catch (err) {
        console.log(err);
        req.flash("error", "Something went wrong");
        res.redirect("/shop");
    }
});

app.get("/cart/increase/:index", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);
    const index = parseInt(req.params.index);

    if (isNaN(index) || index < 0 || index >= user.cart.length) {
        return res.redirect("/cart");
    }

    user.cart[req.params.index].quantity++;

    await user.save();

    res.redirect("/cart");
});

app.get("/cart/decrease/:index", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user.cart[req.params.index].quantity > 1) {
        user.cart[req.params.index].quantity--;
    }

    await user.save();

    res.redirect("/cart");
});

app.post("/cart/remove/:index", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);

    user.cart.splice(req.params.index, 1);

    await user.save();

    res.redirect("/cart");
});

app.get("/move-to-cart/:index", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);

    const index = parseInt(req.params.index);

    if (isNaN(index) || index < 0 || index >= user.saved.length) {
        return res.redirect("/saved");
    }

    const item = user.saved[index];

    let existing = user.cart.find(c => c.productId === item.productId);

    if (existing) {
        existing.quantity++;
    } else {
        user.cart.push({
            productId: item.productId,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }

    user.saved.splice(index, 1);

    await user.save();

    res.redirect("/cart");
});

app.get("/wishlist", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);

    res.render("wishlist.ejs", {
        saved: user.saved || []
    });
});

app.get("/wishlist/:id", isLoggedIn, async (req, res) => {
    try {
        const { id } = req.params;

        //  Check valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            req.flash("error", "Invalid product");
            return res.redirect("/shop");
        }

        const product = await items.findById(id);

        if (!product) {
            req.flash("error", "Product not found");
            return res.redirect("/shop");
        }

        const user = await User.findById(req.user._id);

        //  Check already exists
        let exists = user.saved.find(item => item.productId === id);

        if (!exists) {
            user.saved.push({
                productId: id,
                name: product.name,
                price: product.price,
                image: product.image
            });
        }

        await user.save();

        req.flash("success", "Added to wishlist ❤️");

        //  IMPORTANT FIX (NO "back")
        res.redirect("/product/" + id);

    } catch (err) {
        console.log(err);
        req.flash("error", "Something went wrong");
        res.redirect("/shop");
    }
});

// show routes

app.get("/product/:id", async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        req.flash("error", "Invalid product!");
        return res.redirect("/shop");
    }

    const product = await items.findById(id);

    if (!product) {
        req.flash("error", "Product not found!");
        return res.redirect("/shop");
    }

    const relatedProducts = await items.find({
        category: product.category,
        _id: { $ne: product._id }
    }).limit(10);

    const avgRating = product.reviews.length
        ? (product.reviews.reduce((acc, r) => acc + r.rating, 0) / product.reviews.length).toFixed(1)
        : product.rating;

    res.render("show.ejs", { product, relatedProducts, avgRating });
});

// product

app.get("/buy-now/:id", isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const product = await items.findById(req.params.id);
    const user = await User.findById(req.user._id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.redirect("/shop");
    }
    if (!product) {
        req.flash("error", "Product not found!");
        return res.redirect("/shop");
    }

    // Random delivery date (4–5 days)
    const days = Math.floor(Math.random() * 2) + 4;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + days);

    const statuses = ["Processing", "Shipped", "Out for Delivery"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    // SAVE IN DATABASE
    user.orders.push({
        productId: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        status: randomStatus,
        deliveryDate: deliveryDate.toDateString()
    });
    user.wallet.balance -= product.price;
    if (!user.wallet.history) {
        user.wallet.history = [];
    }
    user.wallet.history.push({
        action: "Purchase",
        amount: product.price,
        date: new Date().toDateString()
    });

    await user.save();

    req.flash("success", "Order placed successfully!");
    res.redirect("/orders");
});

app.get("/place-order/:productId/:addressIndex", isLoggedIn, async (req, res) => {

    const { productId, addressIndex } = req.params;

    //  Validate ID
    if (!mongoose.Types.ObjectId.isValid(productId)) {
        req.flash("error", "Invalid product!");
        return res.redirect("/shop");
    }

    const product = await items.findById(productId);
    const user = await User.findById(req.user._id);

    //  Safe index check
    const index = parseInt(addressIndex);
    if (isNaN(index) || index < 0 || index >= user.addresses.length) {
        req.flash("error", "Invalid address!");
        return res.redirect("/address");
    }

    const selectedAddress = user.addresses[index];

    if (!product) {
        req.flash("error", "Product not found!");
        return res.redirect("/shop");
    }

    //  Random delivery date (4–5 days)
    const days = Math.floor(Math.random() * 2) + 4;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + days);

    //  Random status
    const statuses = ["Processing", "Shipped", "Out for Delivery"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    //  SAVE IN DATABASE (IMPORTANT)
    user.orders.push({
        productId: product._id.toString(),
        name: product.name,
        price: product.price,
        image: product.image,
        status: randomStatus,
        deliveryDate: deliveryDate.toDateString(),
        address: selectedAddress
    });
    user.wallet.balance -= product.price;
    if (!user.wallet.history) {
        user.wallet.history = [];
    }
    user.wallet.history.push({
        action: "Purchase",
        amount: product.price,
        date: new Date().toDateString()
    });
    user.cart = user.cart.filter(item => item.productId !== product._id.toString());
    await user.save();

    req.flash("success", "Order placed successfully!");
    res.redirect("/orders");
});

app.get("/orders", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);
    res.render("orders.ejs", { orders: user.orders });
});

app.get("/cancel-order/:index", isLoggedIn, async (req, res) => {

    const user = await User.findById(req.user._id);

    if (user.orders[req.params.index]) {
        user.orders[req.params.index].status = "Cancelled";
    }

    await user.save();

    req.flash("success", "Order cancelled!");
    res.redirect("/orders");
});

app.get("/checkout/:id", isLoggedIn, async (req, res) => {
    const product = await items.findById(req.params.id);
    const user = await User.findById(req.user._id);

    res.render("checkout.ejs", {
        product,
        addresses: user.addresses,
        wallet: user.wallet,
        cards: user.cards
    });
});

// review 

app.post("/product/:id/review", isLoggedIn, async (req, res) => {
    const { rating, comment } = req.body;
    const product = await items.findById(req.params.id);
    const alreadyReviewed = product.reviews.find(r => r.user === req.user.email);
    if (alreadyReviewed) {
        req.flash("error", "You already reviewed this product");
        return res.redirect(`/product/${req.params.id}`);
    }
    if (!rating || !comment) {
        req.flash("error", "All fields required");
        return res.redirect(`/product/${req.params.id}`);
    }

    product.reviews.push({
        user: req.user.email,
        rating: Number(rating),
        comment: comment
    });
    await product.save();
    res.redirect(`/product/${req.params.id}`);
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/service", (req, res) => {
    res.render("service.ejs");
});

// Show page
app.get("/contact", (req, res) => {
    res.render("contact.ejs");
});

// Handle form
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;

    console.log("Contact Form:", name, email, message);

    req.flash("success", "Message sent successfully!");
    res.redirect("/contact");
});

app.get("/profile", isLoggedIn, (req, res) => {
    res.render("profile.ejs");
});

// SAVE FOR LATER
app.get("/save-for-later/:index", isLoggedIn, async (req, res) => {

    const user = await User.findById(req.user._id);

    const index = parseInt(req.params.index);

    // Safety check
    if (isNaN(index) || index < 0 || index >= user.cart.length) {
        return res.redirect("/cart");
    }

    const item = user.cart[index];

    // Check if already saved
    let exists = user.saved.find(s => s.productId === item.productId);

    if (!exists) {
        user.saved.push({
            productId: item.productId,
            name: item.name,
            price: item.price,
            image: item.image
        });
    }

    // Remove from cart
    user.cart.splice(index, 1);

    await user.save();

    res.redirect("/saved");
});

// VIEW SAVED
app.get("/saved", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);
    res.render("saved.ejs", {
        saved: user.saved || []
    });
});

// MOVE TO CART
app.get("/move-to-cart/:index", isLoggedIn, (req, res) => {
    let saved = req.session.saved || [];
    let cart = req.session.cart || [];

    const item = saved.splice(req.params.index, 1)[0];
    cart.push(item);

    req.session.cart = cart;
    res.redirect("/saved");
});

// Wallet Page
app.get("/wallet", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);

    //  Safety (IMPORTANT)
    if (!user.wallet) {
        user.wallet = { balance: 0, history: [] };
        await user.save();
    }

    if (!user.wallet.history) {
        user.wallet.history = [];
        await user.save();
    }

    res.render("wallet.ejs", {
        wallet: user.wallet
    });
});

// Add Money
app.post("/wallet/add", isLoggedIn, async (req, res) => {
    const { amount } = req.body;

    const user = await User.findById(req.user._id);

    if (!user.wallet.history) {
        user.wallet.history = [];
    }

    user.wallet.balance += Number(amount);

    user.wallet.history.push({
        action: "Added",
        amount: Number(amount),
        date: new Date().toDateString()
    });

    await user.save();

    req.flash("success", "Money added!");
    res.redirect("/wallet");
});

app.get("/remove-saved/:index", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);

    user.saved.splice(req.params.index, 1);

    await user.save();

    res.redirect("/saved");
});

app.get("/address", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);
    res.render("address.ejs", { addresses: user.addresses });
});

app.post("/address/add", isLoggedIn, async (req, res) => {
    const { name, phone, city, pincode, address } = req.body;

    const user = await User.findById(req.user._id);

    user.addresses.push({ name, phone, city, pincode, address });

    await user.save();

    res.redirect("/address");
});

app.get("/address/delete/:index", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);

    user.addresses.splice(req.params.index, 1);

    await user.save();

    res.redirect("/address");
});

app.get("/address/edit/:index", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);
    const address = user.addresses[req.params.index];

    res.render("editAddress.ejs", {
        address,
        index: req.params.index
    });
});

app.post("/address/edit/:index", isLoggedIn, async (req, res) => {
    const { name, phone, city, pincode, address } = req.body;

    const user = await User.findById(req.user._id);

    user.addresses[req.params.index] = {
        name,
        phone,
        city,
        pincode,
        address
    };

    await user.save();

    res.redirect("/address");
});

app.use((req, res, next) => {
    if (req.params.id && !mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.redirect("/shop");
    }
    next();
});

app.use((req, res, next) => {
    next(new ExpressError(404, "page not found!"))
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(statusCode).render("error.ejs", { statusCode, message });
})

// app.listen(8080, '0.0.0.0', () => {
//     console.log(`app is listening on port 8080`);
// })

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
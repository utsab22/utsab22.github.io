const express = require('express');
const path = require('path');
const app = express();

let productList = [
  { name: "Apple", price: 20, description: "Fresh appples", id: 1,quantity: 10 },
  { name: "Orange", price: 15, description: "Fresh oranges", id: 2,quantity: 10  },
  { name: "Banana", price: 40, description: "Raw bananas", id: 3,quantity: 10  },
  { name: "Pear", price: 50, description: "Just Pears", id: 4 ,quantity: 10 }];

//middleware
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));

app.get('/', (req, res) => {
    res.render('main', {productList});
});

app.get('/product', (req, res) => {
    const id = parseInt(req.query.id);
    const item =productList.filter(e => e.id === id)[0];

    res.render('product', {item});
});

let userCart = new Map();
app.post('/addToCart', (req, res) => {
    const {name, price} = req.body;
    let item = productList.find(e => e.name === name && e.quantity > 0);

    if(item){
        if(userCart.has(name)){
            let item = userCart.get(name);
            item.quantity ++;
            item.price += parseInt(price);
        } else {
            let item = {name, quantity: 1, price: parseInt(price)};
            userCart.set(name, item);
        }

        item.quantity --;

        res.redirect(303, "/cart");
    } else
        console.log('Item out of stock!');
});

app.get("/cart", (req, res) => {
    res.render('shoppingcart', {items: [...userCart.values()]});
});

app.listen(3000, () => {
    console.log('App running on port 3000');
})

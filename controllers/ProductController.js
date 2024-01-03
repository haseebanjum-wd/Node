const fs = require('fs');
const path = require('path');

exports.getProductView =  (req,res,next)=>{
    return fs.readFile(path.join(__dirname, '..', "data", "product.json"), (err,data)=> { 
        let parseData = JSON.parse(data);
        return res.render('products', {
            title: "Products",
            products: parseData.product
        })
    })
}

exports.getAddProductView = (req,res,next)=>{
    return res.render('addProduct');
}

exports.createNewProduct = (req,res,next)=>{
    
    return fs.readFile(path.join(__dirname, '..', "data", "product.json"), (err, data)=> {
        
        let parseData = JSON.parse(data);

        parseData.product['object-'] = {
            title:  req.body.productTitle,
            Description: req.body.productDescription,
            price: req.body.productPrice
        }

        return fs.writeFile(path.join(__dirname, "data", "product.json"), JSON.stringify(parseData), function (err) {
            res.redirect('/products');
        })
    });

}
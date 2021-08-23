import express from "express";
import shops from "../src/shops";


const routes = express.Router();

routes.get("/api/shops", (req, res) => {
    if (req.query.minRating) {
        res.json(shops.filter(shop => shop.rating >= Number(req.query.minRating)));
    } else {
        res.json(shops);
    }
});

routes.get("/api/shops/:id", (req, res) => {
    let id: number = Number(req.params.id);
    let foundId = shops.find(item => item.id === id);
     
    if (foundId) {
         res.json(foundId);
     } else {
        res.status(404);
        res.json({"error": `Shop not found: ${id}`});
     };
});

routes.get("/", (req, res) => {
    res.render("homepage");
});

  

routes.get("/shop-list", (req, res) => {
    let minRating: number = Number(req.query.minRating);
    let filteredShops = shops;
    console.log(minRating);

    if (minRating) {
        filteredShops = shops.filter(item => item.rating >= minRating);
        // res.render("shops-list", {filteredShops});
    }
    res.render("shops", {filteredShops});

});

routes.get("/shop-details/:id", (req, res) => {
    let id: number = Number(req.params.id);
    let foundId: any = shops.find(item => item.id === id);

    res.render("shop-details", {shops, id, foundId});
});

routes.get("/shop-search-form", (req, res) => {
    

    res.render("shop-search")
});


export default routes;
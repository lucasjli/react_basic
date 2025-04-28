const itemsController = require("../controllers/items.controller");
const express = require('express');
const router = express.Router();

module.exports = app => {
    // TODO: complete the code as per the instructions given README.md
    // create Item
    router.post('/createItem', itemsController.createItem);
    // retrieveAllItems
    router.get('/retrieveAllItems', itemsController.retrieveAllItems);
    // retrieveItemsByID
    router.get('/retrieveItemsByID', itemsController.retrieveItemsByID);
    // retrieveItemsByItemName
    router.get('/retrieveItemsByItemName', itemsController.retrieveItemsByItemName);
    // updateItemsByID
    router.put('/updateItemsByID', itemsController.updateItemsByID);
    // deleteItemsByID
    router.delete('/deleteItemsByID', itemsController.deleteItemsByID);
    // deleteAllItems
    router.delete('/deleteAllItems', itemsController.deleteAllItems);

    app.use('/', router);
}

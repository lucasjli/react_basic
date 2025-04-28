// const Project = require("../models/items.model");
const Item = require('../models/items.model');

// TODO: complete the code as per the instructions given README.md
class ItemsController {
    static createItem = (req, res) => {
        const {itemname, category, price, quantity} = req.body;

        if (!itemname || !category || !price || !quantity) {
            return res.status(400).send({message: 'Please fill all fields'});
        }

        const newItem = new Item(itemname, category, price, quantity);

        Item.createItems(newItem, (err, result) => {
            if (err) {
                return res.status(500).send({message: 'Error', error: err});
            }
            res.status(201).send({
                message: 'Successfully inserted item',
                itemId: result.insertId,
            });
        });
    };

    // retrieveAllItems
    static retrieveAllItems = (req, res) => {
        Item.retrieveAllItems((err, items) => {
            if (err) {
                return res.status(500).send({message: 'Error', error: err});
            }
            if (items.length === 0) {
                return res.status(404).send({message: 'No items found.'});
            }
            res.status(200).json(items);
        });
    };

    // retrieveItemsByID
    static retrieveItemsByID = (req, res) => {
        const id = req.query.id;

        Item.retrieveItemsByID(id, (err, item) => {
            if (err) {
                return res.status(500).send({message: 'Error', error: err});
            }
            if (item.length === 0) {
                return res.status(404).send({message: 'No items found.'});
            }
            res.status(200).json(item);
        });
    };

    // retrieveItemsByItemName
    static retrieveItemsByItemName = (req, res) => {
        const itemname = req.query.itemname;

        if (!itemname) {
            return res.status(400).send({message: 'Please fill all fields'});
        }

        Item.retrieveItemsByItemName(itemname, (err, items) => {
            if (err) {
                return res.status(500).send({message: 'Error', error: err});
            }
            if (items.length === 0) {
                return res.status(404).send({message: 'No items found.'});
            }
            res.status(200).json(items);
        });
    };

    // updateItemsByID
    static updateItemsByID = (req, res) => {
        const { id, itemname, category, price, quantity } = req.body;

        if (!id || !itemname || !category || !price || !quantity) {
            return res.status(400).send({ message: 'Please fill all fields' });
        }

        const updatedItem = { itemname, category, price, quantity };

        Item.updateItemsByID(id, updatedItem, (err, result) => {
            if (err) {
                return res.status(500).send({ message: 'Error', error: err });
            }
            if (result.affectedRows === 0) {
                return res.status(404).send({ message: 'No item found with the given ID.' });
            }
            res.status(200).send({ message: 'Item updated successfully' });
        });
    };

    // deleteItemsByID
    static deleteItemsByID = (req, res) => {
        const { id } = req.body;

        if (!id) {
            return res.status(400).send({ message: 'Please provide an ID' });
        }

        Item.deleteItemsByID(id, (err, result) => {
            if (err) {
                return res.status(500).send({ message: 'Error', error: err });
            }
            if (result.affectedRows === 0) {
                return res.status(404).send({ message: 'No item found with the given ID' });
            }
            res.status(200).send({ message: 'Item deleted successfully' });
        });
    };

    static deleteAllItems = (req, res) => {
        Item.deleteAllItems((err, result) => {
            if (err) {
                return res.status(500).send({ message: 'Error', error: err });
            }
            res.status(200).send({
                message: 'All items deleted successfully',
                affectedRows: result.affectedRows
            });
        });
    };
}

module.exports = ItemsController;
